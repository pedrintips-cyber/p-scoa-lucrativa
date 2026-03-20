import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import { Check, Gift, ShieldCheck, ChefHat, DollarSign, Rocket, BookOpen, Award, Users, Play, Clock, TrendingUp, Flame, Crown, CupSoda, Star, Lock, Zap, Heart, Eye, Sparkles } from "lucide-react";

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
  "Quer uma renda extra urgente",
  "Está começando do zero na confeitaria",
  "Quer faturar alto nessa Páscoa",
  "Quer trabalhar de casa com liberdade",
  "Quer aumentar sua renda com um produto premium",
];

const modulos = [
  { num: "01", title: "Receitas Exclusivas", desc: "Passo a passo detalhado de cada sabor com medidas exatas e acabamento profissional que vende", img: moduloReceitas, icon: BookOpen },
  { num: "02", title: "Técnicas de Preparo", desc: "Segredos para deixar seu recheio cremoso, estruturado e com aparência de vitrine", img: moduloTecnicas, icon: ChefHat },
  { num: "03", title: "Montagem Premium", desc: "Aprenda a montar ovos que impressionam, valorizam seu produto e vendem mais fácil", img: moduloMontagem, icon: Award },
  { num: "04", title: "Precificação Inteligente", desc: "Saiba quanto cobrar para não sair no prejuízo e maximizar seu lucro em cada ovo", img: moduloPrecificacao, icon: DollarSign },
  { num: "05", title: "Estratégias de Venda", desc: "Métodos simples para vender rápido, criar desejo e aproveitar a sazonalidade da Páscoa", img: moduloVendas, icon: Rocket },
];

const bonus = [
  { title: "Planilha de Precificação", desc: "Saiba exatamente quanto lucrar em cada venda com cálculo automático", icon: DollarSign, tag: "BÔNUS 1" },
  { title: "Estratégia para 5K+", desc: "Plano simples e prático para vender todos os dias e escalar seu faturamento", icon: TrendingUp, tag: "BÔNUS 2" },
  { title: "Grupo de Vendedoras", desc: "Comunidade exclusiva com alunas e vendedoras que já estão faturando e trocando estratégias", icon: Users, tag: "BÔNUS 3" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(165deg, hsl(15 60% 14%) 0%, hsl(20 50% 20%) 40%, hsl(25 45% 28%) 100%)" }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, hsl(38 85% 55%), transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, hsl(38 85% 55%), transparent 70%)", transform: "translate(-40%, 40%)" }} />

        <div className="max-w-5xl mx-auto px-4 pt-10 pb-14 md:pt-16 md:pb-20 relative z-10">
          <AnimatedSection animation="fadeInUp">
            <div className="flex justify-center mb-5">
              <img src={logoOvoLucrativo} alt="Ovo Lucrativo — Método de Ovos de Colher" className="w-48 md:w-64 h-auto drop-shadow-lg" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold font-heading tracking-wide" style={{ background: "linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 48%))", color: "hsl(15 60% 14%)" }}>
                <Flame className="w-4 h-4" />
                PÁSCOA 2026 — VAGAS LIMITADAS
                <Flame className="w-4 h-4" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.1}>
            <h1 className="font-heading font-extrabold text-center text-[28px] md:text-[46px] leading-[1.15] tracking-tight" style={{ color: "hsl(35 50% 96%)" }}>
              Aprenda a Fazer Ovos de Colher
              <br />
              <span className="text-gold">Irresistíveis</span> e Fature de
              <br />
              <span className="inline-block mt-1 px-4 py-1 rounded-xl" style={{ background: "linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 48%))", color: "hsl(15 60% 14%)" }}>
                R$3.000 a R$10.000
              </span>
              <br className="md:hidden" />
              <span className="ml-2">Nessa Páscoa</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.15}>
            <p className="text-center text-base md:text-xl mt-5 max-w-2xl mx-auto font-light" style={{ color: "hsl(35 30% 80%)" }}>
              Mesmo que você <strong className="font-semibold text-cream">nunca tenha feito um ovo</strong> na vida, com ingredientes simples da sua cozinha
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mt-7">
              {[
                { icon: BookOpen, label: "Receitas" },
                { icon: DollarSign, label: "Precificação" },
                { icon: TrendingUp, label: "Vendas" },
              ].map((p) => (
                <div key={p.label} className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold font-heading border" style={{ borderColor: "hsl(38 85% 55% / 0.4)", background: "hsl(38 85% 55% / 0.1)", color: "hsl(38 85% 65%)" }}>
                  <p.icon className="w-4 h-4" />
                  {p.label}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="zoomIn" delay={0.25}>
            <div className="mt-9 max-w-3xl mx-auto relative group cursor-pointer">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2" style={{ borderColor: "hsl(38 85% 55% / 0.3)" }}>
                <img src={heroEggs} alt="Ovos de colher gourmet premium" className="w-full h-auto" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300" style={{ background: "linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 48%))" }}>
                  <Play className="w-7 h-7 md:w-8 md:h-8 ml-1" style={{ color: "hsl(15 60% 14%)" }} />
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="bounceIn" delay={0.35}>
            <div className="mt-9 flex flex-col items-center gap-3">
              <CTAButton text="QUERO GANHAR DINHEIRO NA PÁSCOA" variant="dark" className="text-base md:text-lg" />
              <p className="text-xs font-medium flex items-center gap-1.5" style={{ color: "hsl(38 85% 65%)" }}>
                <ShieldCheck className="w-3.5 h-3.5" />
                Acesso imediato · 7 dias de garantia
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.4}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {[
                { num: "+2.500", label: "alunas" },
                { num: "4.9", label: "avaliação" },
                { num: "+R$50K", label: "faturados" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="font-heading font-extrabold text-lg md:text-xl text-gold">{s.num}</span>
                  <span className="text-xs uppercase tracking-wider" style={{ color: "hsl(35 30% 70%)" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <span className="highlight-text mb-4">🍫 Galeria de Sabores</span>
            <h2 className="font-heading font-bold text-2xl md:text-[38px] leading-tight text-foreground mt-4">
              Veja o que você vai aprender a fazer
              <span className="text-primary"> e vender</span>
            </h2>
            <div className="gold-divider" />
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-10">
            {eggs.map((egg, i) => (
              <AnimatedSection key={egg.name} animation="zoomIn" delay={i * 0.08}>
                <div className="rounded-2xl overflow-hidden group card-shadow bg-card relative">
                  <div className="overflow-hidden">
                    <img src={egg.img} alt={`Ovo de ${egg.name}`} className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 py-3 px-2 text-center" style={{ background: "linear-gradient(to top, hsl(15 60% 14% / 0.9), transparent)" }}>
                    <p className="font-heading font-bold text-sm md:text-base text-cream">{egg.name}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Transforme sua cozinha — compact motivational */}
      <section className="py-14 px-4 section-alt">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="premium-panel p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.18), hsl(var(--gold) / 0.06))" }}>
                  <Sparkles className="w-9 h-9 text-primary" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground leading-snug">
                  Transforme sua cozinha em uma <span className="text-primary">fonte de renda</span>
                </h2>
                <p className="text-muted-foreground mt-2 text-sm md:text-base leading-relaxed">
                  Ovos de colher com visual premium, sabor marcante e apresentação de vitrine para vender muito nessa Páscoa.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-14 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-8">
              <span className="highlight-text mb-3">✨ Pra quem é</span>
              <h2 className="font-heading font-bold text-2xl md:text-[36px] leading-tight text-foreground mt-4">
                Esse mini curso é <span className="text-primary">para você</span> que:
              </h2>
              <div className="gold-divider" />
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-3">
            {paraQuem.map((item, i) => (
              <AnimatedSection key={item} animation="fadeInUp" delay={i * 0.06}>
                <div className="premium-panel px-5 py-4 flex items-center gap-4 hover:-translate-y-0.5 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(var(--gold)), hsl(38 90% 48%))" }}>
                    <Check className="w-5 h-5" style={{ color: "hsl(15 60% 14%)" }} />
                  </div>
                  <span className="text-foreground text-sm md:text-base font-medium">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section className="py-14 px-4 section-alt">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center">
              <span className="highlight-text mb-3">📚 Conteúdo</span>
              <h2 className="font-heading font-bold text-2xl md:text-[36px] leading-tight text-foreground mt-4">
                O que você vai <span className="text-primary">dominar</span>
              </h2>
              <p className="text-muted-foreground text-center mt-2 text-sm">5 módulos diretos, lucrativos e fáceis de aplicar</p>
              <div className="gold-divider" />
            </div>
          </AnimatedSection>

          <div className="mt-10 space-y-5">
            {modulos.map((m, i) => (
              <AnimatedSection key={m.title} animation={i % 2 === 0 ? "fadeInLeft" : "fadeInRight"} delay={i * 0.08}>
                <div className={`premium-panel overflow-hidden flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  <div className="md:w-2/5 relative overflow-hidden">
                    <img src={m.img} alt={m.title} className="w-full h-48 md:h-full object-cover" loading="lazy" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center font-heading font-black text-sm" style={{ background: "linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 48%))", color: "hsl(15 60% 14%)" }}>
                      {m.num}
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="icon-chip !w-9 !h-9 !rounded-xl">
                        <m.icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold font-heading tracking-widest text-primary uppercase">Módulo {m.num}</span>
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-lg md:text-xl leading-snug">{m.title}</h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-14 px-4 section-chocolate">
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold font-heading" style={{ background: "hsl(38 85% 55% / 0.15)", color: "hsl(38 85% 65%)", border: "1px solid hsl(38 85% 55% / 0.3)" }}>
                <Gift className="w-4 h-4" />
                BÔNUS EXCLUSIVOS
              </span>
              <h2 className="font-heading font-bold text-2xl md:text-[36px] leading-tight text-cream mt-4">
                Quem garantir hoje, leva <span className="text-gold">3 bônus</span> grátis
              </h2>
              <div className="gold-divider" />
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            {bonus.map((b, i) => (
              <AnimatedSection key={b.title} animation="bounceIn" delay={i * 0.1}>
                <div className="premium-dark-panel p-5 h-full hover:-translate-y-1 transition-transform duration-300">
                  <span className="inline-block text-[10px] font-bold font-heading tracking-widest rounded-full px-3 py-1 mb-3" style={{ background: "hsl(38 85% 55%)", color: "hsl(15 60% 14%)" }}>
                    {b.tag}
                  </span>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: "hsl(38 85% 55% / 0.14)" }}>
                    <b.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-cream text-base leading-snug">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "hsl(35 30% 74%)" }}>{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* História pessoal */}
      <section className="py-14 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="premium-panel p-6 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }} />
              <div className="flex flex-col md:flex-row items-center gap-5">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.18), hsl(var(--gold) / 0.06))" }}>
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="font-heading font-bold text-lg md:text-xl text-foreground leading-snug">
                    Eu sei como é <span className="text-primary">precisar de dinheiro</span> e não saber por onde começar...
                  </h2>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    Foi através dos ovos de colher que consegui mudar minha realidade. Comecei na minha cozinha, sem experiência, e em poucas semanas já estava faturando mais do que no meu emprego.
                  </p>
                  <p className="text-foreground mt-2 text-sm font-medium">
                    Hoje quero te ensinar <strong className="text-primary">exatamente</strong> o que eu fiz — passo a passo.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* OFERTA — Painel de pagamento compacto e premium */}
      <section id="oferta" className="py-16 px-4 section-chocolate">
        <div className="max-w-md mx-auto relative z-10">
          <AnimatedSection animation="bounceIn">
            <div className="rounded-[1.75rem] overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(30 30% 99%), hsl(35 50% 96%))", border: "2px solid hsl(38 85% 55% / 0.4)", boxShadow: "0 30px 60px hsl(15 60% 14% / 0.35)" }}>
              {/* Gold header bar */}
              <div className="py-3 text-center font-heading font-bold text-sm tracking-wider" style={{ background: "linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 45%))", color: "hsl(15 60% 14%)" }}>
                <Flame className="w-4 h-4 inline mr-1 -mt-0.5" />
                OFERTA ESPECIAL DE PÁSCOA
                <Flame className="w-4 h-4 inline ml-1 -mt-0.5" />
              </div>

              <div className="px-6 pt-6 pb-2 text-center">
                <img src={logoOvoLucrativo} alt="Ovo Lucrativo" className="w-28 h-auto mx-auto mb-3 drop-shadow-md" />
                <p className="font-heading font-bold text-sm text-foreground tracking-wide uppercase">Mini Curso Completo</p>
              </div>

              {/* Price block */}
              <div className="px-6 py-4 text-center">
                <p className="text-muted-foreground line-through text-sm">De R$ 197,00</p>
                <div className="flex items-baseline justify-center gap-0.5 mt-1">
                  <span className="text-muted-foreground text-base font-medium">R$</span>
                  <span className="font-heading font-black text-[56px] leading-none text-primary">47</span>
                  <span className="font-heading font-bold text-lg text-primary">,00</span>
                </div>
                <div className="inline-flex items-center gap-1.5 mt-1 rounded-full px-3 py-1 text-xs font-bold" style={{ background: "hsl(var(--gold) / 0.12)", color: "hsl(var(--primary))" }}>
                  <Zap className="w-3 h-3" />
                  ou 5x de R$ 10,14 sem juros
                </div>
              </div>

              {/* Checklist */}
              <div className="px-6 pb-4">
                <div className="space-y-2">
                  {[
                    { icon: BookOpen, text: "5 módulos completos passo a passo" },
                    { icon: ChefHat, text: "6 receitas de sabores exclusivos" },
                    { icon: DollarSign, text: "Planilha de precificação automática" },
                    { icon: TrendingUp, text: "Estratégia de vendas para 5K+" },
                    { icon: Users, text: "Grupo exclusivo de vendedoras" },
                    { icon: Gift, text: "Todos os 3 bônus incluídos" },
                    { icon: Eye, text: "Acesso vitalício + atualizações" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 rounded-xl px-3 py-2" style={{ background: "hsl(var(--gold) / 0.06)" }}>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 48%))" }}>
                        <item.icon className="w-3.5 h-3.5" style={{ color: "hsl(15 60% 14%)" }} />
                      </div>
                      <span className="text-foreground text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 pb-3">
                <CTAButton text="GARANTIR MINHA VAGA AGORA" className="w-full text-base" />
              </div>

              {/* Trust badges inline */}
              <div className="px-6 pb-5 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-primary" />
                  Compra segura
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-primary" />
                  7 dias de garantia
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Garantia — logo embaixo do painel, compacto */}
          <AnimatedSection animation="fadeInUp" delay={0.15}>
            <div className="mt-5 rounded-2xl p-5 flex items-center gap-4" style={{ background: "hsl(38 85% 55% / 0.08)", border: "1px solid hsl(38 85% 55% / 0.25)" }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 45%))" }}>
                <ShieldCheck className="w-7 h-7" style={{ color: "hsl(15 60% 14%)" }} />
              </div>
              <div>
                <p className="font-heading font-bold text-sm text-cream">Garantia de 7 dias</p>
                <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "hsl(35 30% 74%)" }}>
                  Se não gostar, devolvemos <strong className="text-gold">100% do valor</strong>. Sem burocracia.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.25}>
            <div className="mt-4 text-center">
              <p className="text-sm font-bold font-heading text-gold flex items-center justify-center gap-2">
                <Flame className="w-4 h-4" />
                Oferta válida apenas até a Páscoa
                <Flame className="w-4 h-4" />
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-14 px-4 bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <Crown className="w-9 h-9 text-primary mx-auto mb-3" />
            <h2 className="font-heading font-bold text-xl md:text-[32px] leading-tight text-foreground">Não deixe essa oportunidade passar!</h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground">
              A Páscoa está chegando. Comece hoje e fature alto com seus ovos de colher.
            </p>
            <div className="mt-6">
              <CTAButton text="QUERO COMEÇAR AGORA" className="text-base" />
            </div>
            <p className="text-xs mt-3 flex items-center justify-center gap-1.5 text-muted-foreground">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              Compra segura · Acesso imediato · 7 dias de garantia
            </p>
          </AnimatedSection>
        </div>
      </section>

      <footer className="py-6 px-4 text-center text-muted-foreground text-xs bg-background border-t border-border">
        <p>© 2026 — Todos os direitos reservados</p>
        <p className="mt-1 max-w-md mx-auto">Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho não é garantia de resultado futuro.</p>
      </footer>
    </div>
  );
};

export default Index;
