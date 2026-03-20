import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShieldCheck, Lock, ArrowLeft, Copy, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import logoOvoLucrativo from "@/assets/logo-ovo-lucrativo.png";
import grupoExclusivo from "@/assets/grupo-exclusivo.jpg";

const PRECO_CURSO = 24.9;
const PRECO_GRUPO = 19.9;

const inclusoCurso = [
  "5 módulos completos passo a passo",
  "6 receitas de sabores exclusivos",
  "Planilha de precificação automática",
  "Estratégia de vendas para 5K+",
  "Acesso vitalício + atualizações",
];

const formatCPF = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
};

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

type PaymentData = {
  qr_code: string;
  qr_code_base64: string;
  expires_at: string;
  transaction_id: number;
};

const Checkout = () => {
  const [orderBump, setOrderBump] = useState(false);
  const navigate = useNavigate();
  const total = PRECO_CURSO + (orderBump ? PRECO_GRUPO : 0);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [loading, setLoading] = useState(false);
  const [payment, setPayment] = useState<PaymentData | null>(null);

  const handleSubmit = async () => {
    if (!nome.trim() || !email.trim() || !telefone.trim() || !cpf.trim()) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }

    if (cpf.replace(/\D/g, "").length < 11) {
      toast.error("CPF inválido. Verifique e tente novamente.");
      return;
    }

    setLoading(true);
    try {
      const amountInCents = Math.round(total * 100);
      const reference = `OVO-${Date.now()}`;

      const { data, error } = await supabase.functions.invoke("create-pix-payment", {
        body: {
          amount: amountInCents,
          description: orderBump
            ? "Mini Curso Ovo Lucrativo + Grupo Exclusivo"
            : "Mini Curso Ovo Lucrativo",
          reference,
          customer: {
            name: nome.trim(),
            email: email.trim(),
            phone: telefone.trim(),
            document: cpf.trim(),
          },
        },
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setPayment(data);
      toast.success("PIX gerado com sucesso!");
    } catch (err: any) {
      console.error("Payment error:", err);
      toast.error(err.message || "Erro ao gerar pagamento. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const copyPixCode = () => {
    if (payment?.qr_code) {
      navigator.clipboard.writeText(payment.qr_code);
      toast.success("Código PIX copiado!");
    }
  };

  // ══════════ PIX PAYMENT SCREEN ══════════
  if (payment) {
    return (
      <div className="min-h-screen font-body" style={{ background: "linear-gradient(165deg, hsl(15 60% 14%) 0%, hsl(20 50% 20%) 40%, hsl(25 45% 28%) 100%)" }}>
        <div className="w-full py-2 text-center" style={{ background: "linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 42%))" }}>
          <p className="font-heading font-bold text-[10px] md:text-xs tracking-widest" style={{ color: "hsl(15 60% 14%)" }}>
            🔒 PAGAMENTO VIA PIX — AMBIENTE PROTEGIDO
          </p>
        </div>

        <div className="max-w-lg mx-auto px-4 py-8 flex flex-col items-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full rounded-2xl overflow-hidden" style={{ background: "hsl(20 50% 20% / 0.6)", border: "1px solid hsl(38 85% 55% / 0.25)", backdropFilter: "blur(10px)" }}>
            <div className="px-4 py-3 text-center" style={{ background: "linear-gradient(135deg, hsl(38 85% 55% / 0.12), transparent)", borderBottom: "1px solid hsl(38 85% 55% / 0.15)" }}>
              <p className="font-heading font-bold text-[12px] tracking-widest text-gold uppercase">Escaneie o QR Code</p>
              <p className="text-[10px] mt-0.5" style={{ color: "hsl(35 30% 65%)" }}>Abra o app do seu banco e escaneie o código abaixo</p>
            </div>

            <div className="p-6 flex flex-col items-center gap-4">
              {payment.qr_code_base64 && (
                <div className="bg-white rounded-2xl p-3">
                  <img src={payment.qr_code_base64} alt="QR Code PIX" className="w-52 h-52" />
                </div>
              )}

              <div className="w-full">
                <p className="text-[10px] font-bold font-heading tracking-wide mb-1.5 text-center" style={{ color: "hsl(35 30% 70%)" }}>OU COPIE O CÓDIGO PIX</p>
                <div className="flex gap-2">
                  <input
                    readOnly
                    value={payment.qr_code}
                    className="flex-1 rounded-xl px-3 py-2.5 text-[10px] font-mono truncate"
                    style={{ background: "hsl(15 60% 14% / 0.5)", border: "1px solid hsl(38 85% 55% / 0.2)", color: "hsl(35 50% 96%)" }}
                  />
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={copyPixCode}
                    className="px-3 rounded-xl flex items-center gap-1 text-[10px] font-bold"
                    style={{ background: "linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 42%))", color: "hsl(15 60% 14%)" }}
                  >
                    <Copy className="w-3.5 h-3.5" />
                    Copiar
                  </motion.button>
                </div>
              </div>

              <div className="text-center">
                <p className="font-heading font-black text-[28px] text-gold">
                  R$ {total.toFixed(2).replace(".", ",")}
                </p>
                {payment.expires_at && (
                  <p className="text-[9px] mt-1" style={{ color: "hsl(35 30% 55%)" }}>
                    Expira em: {payment.expires_at}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setPayment(null)}
            className="mt-4 flex items-center gap-1 text-[11px] font-medium"
            style={{ color: "hsl(35 30% 65%)" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar ao checkout
          </motion.button>
        </div>
      </div>
    );
  }

  // ══════════ CHECKOUT FORM ══════════
  return (
    <div className="min-h-screen font-body" style={{ background: "linear-gradient(165deg, hsl(15 60% 14%) 0%, hsl(20 50% 20%) 40%, hsl(25 45% 28%) 100%)" }}>
      {/* Top bar */}
      <div className="w-full py-2 text-center" style={{ background: "linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 42%))" }}>
        <p className="font-heading font-bold text-[10px] md:text-xs tracking-widest" style={{ color: "hsl(15 60% 14%)" }}>
          🔒 CHECKOUT SEGURO — AMBIENTE PROTEGIDO
        </p>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6 md:py-10">
        {/* Back + Logo */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-6">
          <button onClick={() => navigate("/")} className="flex items-center gap-1 text-[11px] font-medium transition-colors" style={{ color: "hsl(35 30% 65%)" }}>
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar
          </button>
          <img src={logoOvoLucrativo} alt="Ovo Lucrativo" className="w-14 h-auto drop-shadow-md" />
        </motion.div>

        {/* Resumo do pedido */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
          <div className="rounded-2xl overflow-hidden" style={{ background: "hsl(20 50% 20% / 0.6)", border: "1px solid hsl(38 85% 55% / 0.25)", backdropFilter: "blur(10px)" }}>
            <div className="px-4 py-2.5" style={{ background: "linear-gradient(135deg, hsl(38 85% 55% / 0.12), transparent)", borderBottom: "1px solid hsl(38 85% 55% / 0.15)" }}>
              <p className="font-heading font-bold text-[10px] tracking-widest text-gold uppercase">Seu pedido</p>
            </div>

            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(25 80% 38%), hsl(20 50% 25%))", border: "1px solid hsl(38 85% 55% / 0.3)" }}>
                  <img src={logoOvoLucrativo} alt="" className="w-full h-full object-contain p-1.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-[13px] text-cream">Mini Curso Ovo Lucrativo</h3>
                  <p className="text-[10px] mt-0.5" style={{ color: "hsl(35 30% 65%)" }}>Aprenda do zero e fature na Páscoa</p>
                </div>
                <span className="font-heading font-bold text-[14px] text-gold flex-shrink-0">
                  R$ {PRECO_CURSO.toFixed(2).replace(".", ",")}
                </span>
              </div>

              <div className="mt-3 pl-[60px]">
                <div className="space-y-1">
                  {inclusoCurso.map((item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <div className="w-[14px] h-[14px] rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(145 60% 42%), hsl(145 55% 35%))" }}>
                        <Check className="w-2 h-2 text-white" />
                      </div>
                      <span className="text-[10px] font-medium" style={{ color: "hsl(35 30% 75%)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ═══════ ORDER BUMP ═══════ */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <div
            className="mt-4 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
            onClick={() => setOrderBump(!orderBump)}
            style={{
              background: orderBump
                ? "linear-gradient(135deg, hsl(38 85% 55% / 0.12), hsl(20 50% 20% / 0.8))"
                : "hsl(20 50% 20% / 0.4)",
              border: orderBump
                ? "2px solid hsl(38 85% 55% / 0.6)"
                : "2px dashed hsl(38 85% 55% / 0.25)",
            }}
          >
            <div className="px-4 py-2 flex items-center gap-2" style={{ background: orderBump ? "linear-gradient(135deg, hsl(38 85% 55% / 0.2), transparent)" : "hsl(38 85% 55% / 0.06)", borderBottom: "1px solid hsl(38 85% 55% / 0.15)" }}>
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                  background: orderBump
                    ? "linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 42%))"
                    : "transparent",
                  border: orderBump ? "none" : "2px solid hsl(38 85% 55% / 0.4)",
                }}
              >
                <AnimatePresence>
                  {orderBump && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <Check className="w-3 h-3" style={{ color: "hsl(15 60% 14%)" }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="flex-1">
                <p className="font-heading font-bold text-[11px] tracking-wide" style={{ color: orderBump ? "hsl(38 85% 60%)" : "hsl(35 30% 70%)" }}>
                  SIM! Quero adicionar na minha compra
                </p>
              </div>
              <span className="font-heading font-bold text-[12px] text-gold flex-shrink-0">
                +R$ {PRECO_GRUPO.toFixed(2).replace(".", ",")}
              </span>
            </div>

            <div className="p-4 flex gap-3">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0" style={{ border: "1px solid hsl(38 85% 55% / 0.3)" }}>
                <img src={grupoExclusivo} alt="Grupo Exclusivo de Vendedoras" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-heading font-bold text-[13px] text-cream leading-snug">
                  Grupo Exclusivo de Vendedoras
                </h4>
                <p className="text-[10px] mt-1 leading-relaxed" style={{ color: "hsl(35 30% 65%)" }}>
                  Acesse o grupo de WhatsApp com vendedoras experientes que já faturam alto na Páscoa. Tire dúvidas, troque experiências e receba dicas exclusivas.
                </p>
                <div className="mt-1.5 flex items-center gap-1">
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ background: "hsl(38 85% 55% / 0.15)", color: "hsl(38 85% 60%)" }}>
                    OFERTA ÚNICA
                  </span>
                  <span className="text-[9px]" style={{ color: "hsl(35 30% 55%)" }}>
                    — só disponível agora
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ═══════ DADOS DO COMPRADOR ═══════ */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <div className="mt-4 rounded-2xl overflow-hidden" style={{ background: "hsl(20 50% 20% / 0.6)", border: "1px solid hsl(38 85% 55% / 0.15)" }}>
            <div className="px-4 py-2.5" style={{ background: "linear-gradient(135deg, hsl(38 85% 55% / 0.12), transparent)", borderBottom: "1px solid hsl(38 85% 55% / 0.15)" }}>
              <p className="font-heading font-bold text-[10px] tracking-widest text-gold uppercase">Seus dados</p>
            </div>

            <div className="p-4 space-y-3">
              {[
                { label: "NOME COMPLETO", value: nome, setter: setNome, type: "text", placeholder: "Seu nome completo" },
                { label: "E-MAIL", value: email, setter: setEmail, type: "email", placeholder: "seu@email.com" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-[10px] font-bold font-heading tracking-wide mb-1" style={{ color: "hsl(35 30% 70%)" }}>{field.label}</label>
                  <input
                    type={field.type}
                    value={field.value}
                    onChange={(e) => field.setter(e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl px-3.5 py-2.5 text-[12px] font-medium outline-none transition-all duration-300 placeholder:text-[11px]"
                    style={{ background: "hsl(15 60% 14% / 0.5)", border: "1px solid hsl(38 85% 55% / 0.2)", color: "hsl(35 50% 96%)" }}
                    onFocus={(e) => e.target.style.borderColor = "hsl(38 85% 55% / 0.5)"}
                    onBlur={(e) => e.target.style.borderColor = "hsl(38 85% 55% / 0.2)"}
                  />
                </div>
              ))}

              <div>
                <label className="block text-[10px] font-bold font-heading tracking-wide mb-1" style={{ color: "hsl(35 30% 70%)" }}>CPF</label>
                <input
                  type="text"
                  value={cpf}
                  onChange={(e) => setCpf(formatCPF(e.target.value))}
                  placeholder="000.000.000-00"
                  className="w-full rounded-xl px-3.5 py-2.5 text-[12px] font-medium outline-none transition-all duration-300 placeholder:text-[11px]"
                  style={{ background: "hsl(15 60% 14% / 0.5)", border: "1px solid hsl(38 85% 55% / 0.2)", color: "hsl(35 50% 96%)" }}
                  onFocus={(e) => e.target.style.borderColor = "hsl(38 85% 55% / 0.5)"}
                  onBlur={(e) => e.target.style.borderColor = "hsl(38 85% 55% / 0.2)"}
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold font-heading tracking-wide mb-1" style={{ color: "hsl(35 30% 70%)" }}>TELEFONE / WHATSAPP</label>
                <input
                  type="tel"
                  value={telefone}
                  onChange={(e) => setTelefone(formatPhone(e.target.value))}
                  placeholder="(00) 00000-0000"
                  className="w-full rounded-xl px-3.5 py-2.5 text-[12px] font-medium outline-none transition-all duration-300 placeholder:text-[11px]"
                  style={{ background: "hsl(15 60% 14% / 0.5)", border: "1px solid hsl(38 85% 55% / 0.2)", color: "hsl(35 50% 96%)" }}
                  onFocus={(e) => e.target.style.borderColor = "hsl(38 85% 55% / 0.5)"}
                  onBlur={(e) => e.target.style.borderColor = "hsl(38 85% 55% / 0.2)"}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ═══════ TOTAL + BOTÃO ═══════ */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <div className="mt-4 rounded-2xl overflow-hidden" style={{ background: "hsl(20 50% 20% / 0.6)", border: "1px solid hsl(38 85% 55% / 0.25)" }}>
            <div className="px-4 py-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium" style={{ color: "hsl(35 30% 70%)" }}>Mini Curso Ovo Lucrativo</span>
                <span className="text-[11px] font-medium" style={{ color: "hsl(35 30% 70%)" }}>R$ {PRECO_CURSO.toFixed(2).replace(".", ",")}</span>
              </div>
              <AnimatePresence>
                {orderBump && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex items-center justify-between mt-1">
                    <span className="text-[11px] font-medium" style={{ color: "hsl(38 85% 60%)" }}>Grupo Exclusivo de Vendedoras</span>
                    <span className="text-[11px] font-medium" style={{ color: "hsl(38 85% 60%)" }}>R$ {PRECO_GRUPO.toFixed(2).replace(".", ",")}</span>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="h-px mt-2.5 mb-2" style={{ background: "linear-gradient(90deg, transparent, hsl(38 85% 55% / 0.3), transparent)" }} />
              <div className="flex items-baseline justify-between">
                <span className="font-heading font-bold text-[12px] text-cream">Total</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-[10px] font-medium" style={{ color: "hsl(35 30% 65%)" }}>R$</span>
                  <motion.span key={total} initial={{ scale: 1.2, color: "hsl(38 85% 60%)" }} animate={{ scale: 1, color: "hsl(38 85% 55%)" }} className="font-heading font-black text-[28px] leading-none">
                    {total.toFixed(2).replace(".", ",")}
                  </motion.span>
                </div>
              </div>
              <p className="text-right text-[9px] font-medium" style={{ color: "hsl(35 30% 55%)" }}>
                ou {orderBump ? "4" : "3"}x de R$ {(total / (orderBump ? 4 : 3)).toFixed(2).replace(".", ",")}
              </p>
            </div>

            <div className="px-4 pb-4 pt-1">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 12px 40px hsl(38 85% 55% / 0.45)" }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-heading font-extrabold text-[13px] tracking-wider uppercase cursor-pointer transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(180deg, hsl(40 70% 75%), hsl(38 85% 55%) 45%, hsl(38 90% 43%))",
                  color: "hsl(15 60% 14%)",
                  border: "1px solid hsl(40 70% 75% / 0.5)",
                  boxShadow: "0 10px 28px hsl(38 85% 55% / 0.3), inset 0 1px 0 hsl(35 50% 96% / 0.35), inset 0 -2px 0 hsl(25 80% 38% / 0.2)",
                }}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    GERANDO PIX...
                  </>
                ) : (
                  "PAGAR COM PIX"
                )}
              </motion.button>
            </div>

            <div className="px-4 pb-3 flex items-center justify-center gap-3 text-[8px]" style={{ color: "hsl(35 30% 60%)" }}>
              <span className="flex items-center gap-1">
                <Lock className="w-2.5 h-2.5 text-gold" />
                Pagamento seguro
              </span>
              <span className="w-px h-3" style={{ background: "hsl(38 85% 55% / 0.2)" }} />
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-2.5 h-2.5 text-gold" />
                7 dias de garantia
              </span>
            </div>
          </div>
        </motion.div>

        {/* Garantia final */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
          <div className="mt-4 rounded-xl p-3 flex items-center gap-2.5" style={{ background: "hsl(38 85% 55% / 0.06)", border: "1px solid hsl(38 85% 55% / 0.15)" }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 42%))" }}>
              <ShieldCheck className="w-4 h-4" style={{ color: "hsl(15 60% 14%)" }} />
            </div>
            <div>
              <p className="font-heading font-bold text-[10px] text-cream tracking-wide">GARANTIA INCONDICIONAL DE 7 DIAS</p>
              <p className="text-[9px] mt-0.5 leading-relaxed" style={{ color: "hsl(35 30% 65%)" }}>
                Não gostou? Devolvemos <strong className="text-gold">100% do valor</strong>. Sem perguntas.
              </p>
            </div>
          </div>

          <p className="mt-3 text-center text-[8px]" style={{ color: "hsl(35 30% 50%)" }}>
            © 2026 — Todos os direitos reservados
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
