import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const paradiseKey = Deno.env.get("PARADISE_SECRET_KEY");
    if (!paradiseKey) {
      return new Response(
        JSON.stringify({ error: "Chave da Paradise não configurada." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body = await req.json();
    const { amount, description, reference, customer, orderBump } = body;

    // Validate required fields
    if (!amount || !description || !reference || !customer) {
      return new Response(
        JSON.stringify({ error: "Campos obrigatórios faltando." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!customer.name || !customer.email || !customer.phone || !customer.document) {
      return new Response(
        JSON.stringify({ error: "Dados do cliente incompletos (nome, email, telefone e CPF são obrigatórios)." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const paradisePayload: Record<string, unknown> = {
      amount,
      description,
      reference,
      source: "api_externa",
      customer: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone.replace(/\D/g, ""),
        document: customer.document.replace(/\D/g, ""),
      },
    };

    const paradiseResponse = await fetch(
      "https://multi.paradisepags.com/api/v1/transaction.php",
      {
        method: "POST",
        headers: {
          "X-API-Key": paradiseKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paradisePayload),
      }
    );

    const paradiseData = await paradiseResponse.json();

    if (!paradiseResponse.ok || paradiseData.status !== "success") {
      console.error("Paradise API error:", paradiseData);
      return new Response(
        JSON.stringify({ error: paradiseData.message || "Erro ao criar pagamento PIX.", details: paradiseData }),
        { status: paradiseResponse.status || 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        status: "success",
        transaction_id: paradiseData.transaction_id,
        qr_code: paradiseData.qr_code,
        qr_code_base64: paradiseData.qr_code_base64,
        amount: paradiseData.amount,
        expires_at: paradiseData.expires_at,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Edge function error:", error);
    return new Response(
      JSON.stringify({ error: "Erro interno do servidor." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
