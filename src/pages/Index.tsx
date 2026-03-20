import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import { Check, Gift, ShieldCheck, ChefHat, DollarSign, Rocket, BookOpen, Award, Users, Play, Clock, TrendingUp, Flame, Crown, Star, Lock, Zap, Heart, Eye, Sparkles, ArrowRight, Package, Video, FileText, MessageCircle } from "lucide-react";

import eggBrigadeiro from "@/assets/egg-brigadeiro.jpg";
import eggNinho from "@/assets/egg-ninho.jpg";
import eggOreo from "@/assets/egg-oreo.jpg";
import eggPrestigio from "@/assets/egg-prestigio.jpg";
import eggMaracuja from "@/assets/egg-maracuja.jpg";
import eggKinder from "@/assets/egg-kinder.jpg";
import heroEggs from "@/assets/hero-eggs.jpg";
import logoOvoLucrativo from "@/assets/logo-ovo-lucrativo.png";
import moduloReceitas from "@/assets/modulo-receitas.jpg";
import moduloTecnicas from "@/assets/modulo-tecnicas.jpg";
import moduloMontagem from "@/assets/modulo-montagem.jpg";
import moduloPrecificacao from "@/assets/modulo-precificacao.jpg";
import moduloVendas from "@/assets/modulo-vendas.jpg";

const eggs = [
  { name: "Brigadeiro", img: eggBrigadeiro },
  { name: "Ninho com Nutella", img: eggNinho },
  { name: "Oreo", img: eggOreo },
  { name: "Prestígio", img: eggPrestigio },
  { name: "Maracujá", img: eggMaracuja },
  { name: "Kinder", img: eggKinder },
];

const paraQuem = [
  { text: "Quer uma renda extra urgente", icon: Zap },
  { text: "Está começando do zero na confeitaria", icon: Heart },
  { text: "Quer faturar alto nessa Páscoa", icon: TrendingUp },
  { text: "Quer trabalhar de casa com liberdade", icon: Star },
  { text: "Quer criar um negócio lucrativo", icon: DollarSign },
];

const modulos = [
  { num: "01", title: "Receitas Exclusivas", desc: "6 sabores irresistíveis com medidas exatas e acabamento profissional", img: moduloReceitas, icon: BookOpen },
  { num: "02", title: "Técnicas de Preparo", desc: "Recheio cremoso, estruturado e com aparência de vitrine", img: moduloTecnicas, icon: ChefHat },
  { num: "03", title: "Montagem Premium", desc: "Monte ovos que impressionam e vendem por preço premium", img: moduloMontagem, icon: Award },
  { num: "04", title: "Precificação Inteligente", desc: "Saiba quanto cobrar para maximizar seu lucro", img: moduloPrecificacao, icon: DollarSign },
  { num: "05", title: "Estratégias de Venda", desc: "Venda rápido e aproveite a sazonalidade da Páscoa", img: moduloVendas, icon: Rocket },
];

const bonus = [
  { title: "Planilha de Precificação", desc: "Calcule seu lucro automaticamente em cada venda", icon: FileText, tag: "BÔNUS 1" },
  { title: "Estratégia para 5K+", desc: "Plano prático para escalar seu faturamento", icon: TrendingUp, tag: "BÔNUS 2" },
  { title: "Grupo Exclusivo", desc: "Comunidade com alunas que já estão faturando", icon: MessageCircle, tag: "BÔNUS 3" },
];

const checklistOferta = [
  "5 módulos completos passo a passo",
  "6 receitas de sabores exclusivos",
  "Planilha de precificação automática",
  "Estratégia de vendas para 5K+",
  "Grupo exclusivo de alunas",
  "Todos os 3 bônus incluídos",
  "Acesso vitalício + atualizações",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(165deg, hsl(15 60% 14%) 0%, hsl(20 50% 20%) 40%, hsl(25 45% 28%) 100%)" }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, hsl(38 85% 55%), transparent 70%)", transform: "translate(30%, -30%)" }} />

        <div className="max-w-5xl mx-auto px-4 pt-4 pb-8 md:pt-10 md:pb-14 relative z-10">
          {/* Logo pequena + badge juntos */}
          <AnimatedSection animation="fadeInUp">
            <div className="flex flex-col items-center gap-2 mb-3">
              <img src={logoOvoLucrativo} alt="Ovo Lucrativo" className="w-20 md:w-40 h-auto drop-shadow-lg" />
              <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[9px] md:text-xs font-bold font-heading tracking-wide" style={{ background: "linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 48%))", color: "hsl(15 60% 14%)" }}>
                <Flame className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" />
                PÁSCOA 2026 — VAGAS LIMITADAS
                <Flame className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.1}>
            <h1 className="font-heading font-extrabold text-center text-[20px] md:text-[42px] leading-[1.18] tracking-tight" style={{ color: "hsl(35 50% 96%)" }}>
              Aprenda a Fazer Ovos de Colher{" "}
              <span className="text-gold">Irresistíveis</span> e Fature de{" "}
              <span className="inline-block px-2 py-0.5 rounded-lg text-[18px] md:text-[38px]" style={{ background: "linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 48%))", color: "hsl(15 60% 14%)" }}>
                R$3.000 a R$10.000
              </span>{" "}
              Nessa Páscoa
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.15}>
            <p className="text-center text-[11px] md:text-lg mt-2 max-w-xl mx-auto font-light" style={{ color: "hsl(35 30% 80%)" }}>
              Mesmo que você <strong className="font-semibold text-cream">nunca tenha feito um ovo</strong> na vida
            </p>
          </AnimatedSection>

          <AnimatedSection animation="zoomIn" delay={0.2}>
            <div className="mt-4 max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-2" style={{ borderColor: "hsl(38 85% 55% / 0.3)" }}>
              <video
                src="/videos/hero-video.mp4"
                autoPlay
                loop
                playsInline
                controls
                className="w-full h-auto"
                poster={heroEggs}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="bounceIn" delay={0.3}>
            <div className="mt-4 flex flex-col items-center gap-1.5">
              <CTAButton text="QUERO GANHAR DINHEIRO NA PÁSCOA" variant="dark" className="text-[11px] md:text-base" href="https://pay.lowify.com.br/checkout.php?product_id=G0sC2i" />
              <p className="text-[9px] md:text-[11px] font-medium flex items-center gap-1" style={{ color: "hsl(38 85% 65%)" }}>
                <ShieldCheck className="w-2.5 h-2.5" />
                Acesso imediato · 7 dias de garantia
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.35}>
            <div className="mt-3 flex items-center justify-center gap-5">
              {[
                { num: "+2.500", label: "alunas" },
                { num: "4.9★", label: "avaliação" },
                { num: "+R$50K", label: "faturados" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <span className="font-heading font-extrabold text-xs md:text-lg text-gold block">{s.num}</span>
                  <span className="text-[8px] md:text-[10px] uppercase tracking-wider block" style={{ color: "hsl(35 30% 65%)" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════ GALERIA ═══════ */}
      <section className="py-10 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center">
              <span className="highlight-text mb-3">🍫 Galeria de Sabores</span>
              <h2 className="font-heading font-bold text-lg md:text-[34px] leading-tight text-foreground mt-3">
                Veja o que você vai aprender a <span className="text-primary">fazer e vender</span>
              </h2>
              <div className="gold-divider" />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mt-6">
            {eggs.map((egg, i) => (
              <AnimatedSection key={egg.name} animation="zoomIn" delay={i * 0.06}>
                <div className="rounded-2xl overflow-hidden group card-shadow bg-card relative">
                  <div className="overflow-hidden">
                    <img src={egg.img} alt={`Ovo de ${egg.name}`} className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 py-2.5 px-2 text-center" style={{ background: "linear-gradient(to top, hsl(15 60% 14% / 0.9), transparent)" }}>
                    <p className="font-heading font-bold text-xs md:text-sm text-cream">{egg.name}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PRA QUEM É ═══════ */}
      <section className="py-10 px-4 section-alt">
        <div className="max-w-lg mx-auto">
          <AnimatedSection>
            <div className="text-center mb-5">
              <span className="highlight-text">✨ Pra quem é</span>
              <h2 className="font-heading font-bold text-lg md:text-[32px] leading-tight text-foreground mt-3">
                Esse curso é <span className="text-primary">pra você</span> que:
              </h2>
              <div className="gold-divider" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp">
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "hsl(var(--gold) / 0.2)", background: "hsl(var(--card))" }}>
              {paraQuem.map((item, i) => (
                <div key={item.text} className={`flex items-center gap-3 px-4 py-3 ${i !== paraQuem.length - 1 ? 'border-b' : ''}`} style={{ borderColor: "hsl(var(--gold) / 0.1)" }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(var(--gold)), hsl(38 90% 48%))" }}>
                    <item.icon className="w-3.5 h-3.5" style={{ color: "hsl(15 60% 14%)" }} />
                  </div>
                  <span className="text-foreground text-[13px] font-medium leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════ MÓDULOS ═══════ */}
      <section className="py-10 px-4 bg-background">
        <div className="max-w-lg mx-auto">
          <AnimatedSection>
            <div className="text-center mb-6">
              <span className="highlight-text">📚 Conteúdo Completo</span>
              <h2 className="font-heading font-bold text-lg md:text-[32px] leading-tight text-foreground mt-3">
                O que você vai <span className="text-primary">dominar</span>
              </h2>
              <p className="text-muted-foreground text-[11px] mt-1">5 módulos diretos, práticos e lucrativos</p>
              <div className="gold-divider" />
            </div>
          </AnimatedSection>

          <div className="space-y-3">
            {modulos.map((m, i) => (
              <AnimatedSection key={m.title} animation="fadeInUp" delay={i * 0.06}>
                <div className="rounded-2xl overflow-hidden border flex" style={{ borderColor: "hsl(var(--gold) / 0.18)", background: "hsl(var(--card))" }}>
                  <div className="w-24 md:w-32 flex-shrink-0 relative overflow-hidden">
                    <img src={m.img} alt={m.title} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(38 85% 55% / 0.3), transparent)" }} />
                    <div className="absolute top-2 left-2 w-7 h-7 rounded-lg flex items-center justify-center font-heading font-black text-[10px]" style={{ background: "linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 48%))", color: "hsl(15 60% 14%)" }}>
                      {m.num}
                    </div>
                  </div>
                  <div className="flex-1 p-3 md:p-4 flex flex-col justify-center">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <m.icon className="w-3 h-3 text-primary flex-shrink-0" />
                      <span className="text-[9px] font-bold font-heading tracking-widest text-primary uppercase">Módulo {m.num}</span>
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-[13px] leading-snug">{m.title}</h3>
                    <p className="text-muted-foreground mt-0.5 text-[11px] leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BÔNUS ═══════ */}
      <section className="py-10 px-4 section-chocolate">
        <div className="max-w-lg mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold font-heading" style={{ background: "hsl(38 85% 55% / 0.15)", color: "hsl(38 85% 65%)", border: "1px solid hsl(38 85% 55% / 0.3)" }}>
                <Gift className="w-3 h-3" />
                BÔNUS EXCLUSIVOS
              </span>
              <h2 className="font-heading font-bold text-lg md:text-[32px] leading-tight text-cream mt-3">
                Quem garantir hoje leva <span className="text-gold">3 bônus</span>
              </h2>
              <div className="gold-divider" />
            </div>
          </AnimatedSection>

          <div className="space-y-2.5">
            {bonus.map((b, i) => (
              <AnimatedSection key={b.title} animation="fadeInUp" delay={i * 0.08}>
                <div className="rounded-xl p-3.5 flex items-start gap-3" style={{ background: "hsl(20 50% 20% / 0.6)", border: "1px solid hsl(38 85% 55% / 0.2)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 48%))" }}>
                    <b.icon className="w-4 h-4" style={{ color: "hsl(15 60% 14%)" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[8px] font-bold font-heading tracking-widest rounded px-1.5 py-0.5" style={{ background: "hsl(38 85% 55%)", color: "hsl(15 60% 14%)" }}>
                      {b.tag}
                    </span>
                    <h3 className="font-heading font-bold text-cream text-[13px] leading-snug mt-0.5">{b.title}</h3>
                    <p className="text-[11px] leading-relaxed" style={{ color: "hsl(35 30% 70%)" }}>{b.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ HISTÓRIA ═══════ */}
      <section className="py-10 px-4 bg-background">
        <div className="max-w-lg mx-auto">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "hsl(var(--gold) / 0.2)", background: "hsl(var(--card))" }}>
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, hsl(var(--gold)), hsl(38 90% 48%), hsl(var(--gold)))" }} />
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.15), hsl(var(--gold) / 0.05))" }}>
                    <Heart className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-[13px]">Eu sei como é difícil...</h3>
                    <p className="text-[10px] text-muted-foreground">A história por trás do método</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-[12px] leading-relaxed">
                  Eu sei como é <strong className="text-primary">precisar de dinheiro</strong> e não saber por onde começar. Foi com os ovos de colher que mudei minha realidade — comecei na minha cozinha, sem experiência, e em poucas semanas já faturava mais que no meu emprego.
                </p>
                <p className="text-foreground mt-1.5 text-[12px] font-medium">
                  Hoje quero te ensinar <strong className="text-primary">exatamente</strong> o que fiz — passo a passo.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════ OFERTA ═══════ */}
      <section id="oferta" className="py-12 px-4 section-chocolate">
        <div className="max-w-sm mx-auto relative z-10">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-4">
              <p className="text-[9px] font-bold font-heading tracking-widest text-gold uppercase">⚡ Oferta por tempo limitado</p>
              <h2 className="font-heading font-bold text-base md:text-2xl text-cream mt-0.5">
                Garanta seu acesso agora
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="bounceIn">
            <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(30 30% 99%), hsl(35 40% 95%))", border: "2px solid hsl(38 85% 55% / 0.5)", boxShadow: "0 20px 50px hsl(15 60% 14% / 0.45)" }}>
              {/* Header */}
              <div className="py-2 text-center font-heading font-bold text-[10px] tracking-widest" style={{ background: "linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 42%))", color: "hsl(15 60% 14%)" }}>
                🔥 OFERTA ESPECIAL DE PÁSCOA 🔥
              </div>

              {/* Logo */}
              <div className="pt-3 pb-1 text-center px-5">
                <img src={logoOvoLucrativo} alt="Ovo Lucrativo" className="w-16 h-auto mx-auto mb-1 drop-shadow-md" />
                <p className="font-heading font-bold text-[9px] text-muted-foreground tracking-widest uppercase">Mini Curso Completo</p>
              </div>

              {/* Preço */}
              <div className="px-5 py-2 text-center">
                <p className="text-muted-foreground line-through text-[10px]">De R$ 97,00</p>
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-muted-foreground text-[11px] font-medium">R$</span>
                  <span className="font-heading font-black text-[44px] leading-none text-primary">24</span>
                  <span className="font-heading font-bold text-sm text-primary">,90</span>
                </div>
                <div className="inline-flex items-center gap-1 mt-0.5 rounded-full px-2.5 py-0.5 text-[9px] font-bold" style={{ background: "hsl(var(--gold) / 0.1)", color: "hsl(var(--primary))" }}>
                  <Zap className="w-2.5 h-2.5" />
                  ou 3x de R$ 8,96
                </div>
              </div>

              {/* Divider */}
              <div className="mx-5 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.3), transparent)" }} />

              {/* Checklist */}
              <div className="px-5 py-2.5">
                <p className="font-heading font-bold text-[8px] text-muted-foreground tracking-widest uppercase mb-1.5">O QUE ESTÁ INCLUSO:</p>
                <div className="space-y-1">
                  {checklistOferta.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-[16px] h-[16px] rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(145 60% 42%), hsl(145 55% 35%))" }}>
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-foreground text-[11px] font-medium leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="px-5 pt-1 pb-2">
                <CTAButton text="GARANTIR MINHA VAGA AGORA" className="w-full text-[11px]" href="https://pay.lowify.com.br/checkout.php?product_id=G0sC2i" />
              </div>

              {/* Trust */}
              <div className="px-5 pb-3 flex items-center justify-center gap-2.5 text-[8px] text-muted-foreground">
                <span className="flex items-center gap-0.5">
                  <Lock className="w-2.5 h-2.5 text-primary" />
                  Compra segura
                </span>
                <span className="w-px h-2.5 bg-border" />
                <span className="flex items-center gap-0.5">
                  <ShieldCheck className="w-2.5 h-2.5 text-primary" />
                  Garantia 7 dias
                </span>
                <span className="w-px h-2.5 bg-border" />
                <span className="flex items-center gap-0.5">
                  <Eye className="w-2.5 h-2.5 text-primary" />
                  Acesso vitalício
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Garantia */}
          <AnimatedSection animation="fadeInUp" delay={0.1}>
            <div className="mt-3 rounded-xl p-3 flex items-center gap-2.5" style={{ background: "hsl(38 85% 55% / 0.08)", border: "1px solid hsl(38 85% 55% / 0.2)" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 42%))" }}>
                <ShieldCheck className="w-5 h-5" style={{ color: "hsl(15 60% 14%)" }} />
              </div>
              <div>
                <p className="font-heading font-bold text-[10px] text-cream tracking-wide">GARANTIA DE 7 DIAS</p>
                <p className="text-[9px] mt-0.5 leading-relaxed" style={{ color: "hsl(35 30% 70%)" }}>
                  Não gostou? Devolvemos <strong className="text-gold">100% do valor</strong>. Sem burocracia.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.18}>
            <p className="mt-2.5 text-center text-[10px] font-bold font-heading text-gold flex items-center justify-center gap-1">
              <Flame className="w-3 h-3" />
              Oferta válida apenas até a Páscoa
              <Flame className="w-3 h-3" />
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════ CTA FINAL ═══════ */}
      <section className="py-10 px-4 bg-background">
        <div className="max-w-sm mx-auto text-center">
          <AnimatedSection>
            <Crown className="w-6 h-6 text-primary mx-auto mb-1.5" />
            <h2 className="font-heading font-bold text-base md:text-xl text-foreground">Não deixe essa oportunidade passar!</h2>
            <p className="mt-1.5 text-[11px] text-muted-foreground">
              A Páscoa está chegando. Comece hoje e fature alto.
            </p>
            <div className="mt-4">
              <CTAButton text="QUERO COMEÇAR AGORA" className="text-[11px]" href="https://pay.lowify.com.br/checkout.php?product_id=G0sC2i" />
            </div>
            <p className="text-[8px] mt-1.5 flex items-center justify-center gap-1 text-muted-foreground">
              <ShieldCheck className="w-2.5 h-2.5 text-primary" />
              Compra segura · Acesso imediato · 7 dias de garantia
            </p>
          </AnimatedSection>
        </div>
      </section>

      <footer className="py-4 px-4 text-center text-muted-foreground text-[8px] bg-background border-t border-border">
        <p>© 2026 — Todos os direitos reservados</p>
        <p className="mt-1 max-w-xs mx-auto">Este produto não garante a obtenção de resultados.</p>
      </footer>
    </div>
  );
};

export default Index;
