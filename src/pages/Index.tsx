import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import { Check, Gift, ShieldCheck, Star, ChefHat, DollarSign, Rocket, BookOpen, Award, Users, Play, Clock, TrendingUp, Heart, Sparkles, Flame, Crown, Zap } from "lucide-react";

import eggBrigadeiro from "@/assets/egg-brigadeiro.jpg";
import eggNinho from "@/assets/egg-ninho.jpg";
import eggOreo from "@/assets/egg-oreo.jpg";
import eggPrestigio from "@/assets/egg-prestigio.jpg";
import eggMaracuja from "@/assets/egg-maracuja.jpg";
import eggKinder from "@/assets/egg-kinder.jpg";
import heroEggs from "@/assets/hero-eggs.jpg";

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
  { text: "Quer trabalhar de casa com liberdade", icon: Crown },
  { text: "Quer aumentar sua renda com algo doce", icon: Sparkles },
];

const conteudos = [
  { icon: BookOpen, title: "Receitas Exclusivas", desc: "Passo a passo detalhado de cada sabor com medidas exatas e dicas profissionais" },
  { icon: ChefHat, title: "Técnicas de Preparo", desc: "Segredos de confeitaria que fazem seus ovos parecerem de loja premium" },
  { icon: Award, title: "Montagem Premium", desc: "Aprenda a montar ovos que impressionam visualmente e valorizam seu produto" },
  { icon: DollarSign, title: "Precificação Inteligente", desc: "Saiba exatamente quanto cobrar para lucrar o máximo em cada unidade" },
  { icon: Rocket, title: "Estratégias de Venda", desc: "Técnicas testadas para vender tudo antes da Páscoa e criar lista de espera" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(165deg, hsl(15 60% 14%) 0%, hsl(20 50% 20%) 40%, hsl(25 45% 28%) 100%)' }}>
        {/* Decorative gold circles */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.07]" style={{ background: 'radial-gradient(circle, hsl(38 85% 55%), transparent 70%)', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-[0.05]" style={{ background: 'radial-gradient(circle, hsl(38 85% 55%), transparent 70%)', transform: 'translate(-40%, 40%)' }} />

        <div className="max-w-5xl mx-auto px-4 pt-10 pb-14 md:pt-16 md:pb-20 relative z-10">
          {/* Top badge */}
          <AnimatedSection animation="fadeInUp">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold font-heading tracking-wide" style={{ background: 'linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 48%))', color: 'hsl(15 60% 14%)' }}>
                <Flame className="w-4 h-4" />
                PÁSCOA 2026 — VAGAS LIMITADAS
                <Flame className="w-4 h-4" />
              </div>
            </div>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection animation="fadeInUp" delay={0.1}>
            <h1 className="font-heading font-extrabold text-center text-[28px] md:text-[46px] leading-[1.15] tracking-tight" style={{ color: 'hsl(35 50% 96%)' }}>
              Aprenda a Fazer Ovos de Colher
              <br />
              <span className="text-gold">Irresistíveis</span> e Fature de
              <br />
              <span className="inline-block mt-1 px-4 py-1 rounded-xl" style={{ background: 'linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 48%))', color: 'hsl(15 60% 14%)' }}>
                R$3.000 a R$10.000
              </span>
              <br className="md:hidden" />
              <span className="ml-2">Nessa Páscoa</span>
            </h1>
          </AnimatedSection>

          {/* Sub */}
          <AnimatedSection animation="fadeInUp" delay={0.15}>
            <p className="text-center text-base md:text-xl mt-5 max-w-2xl mx-auto font-light" style={{ color: 'hsl(35 30% 80%)' }}>
              Mesmo que você <strong className="font-semibold text-cream">nunca tenha feito um ovo</strong> na vida, com ingredientes simples da sua cozinha
            </p>
          </AnimatedSection>

          {/* Pillars */}
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mt-7">
              {[
                { icon: BookOpen, label: "Receitas" },
                { icon: DollarSign, label: "Precificação" },
                { icon: TrendingUp, label: "Vendas" },
              ].map((p) => (
                <div key={p.label} className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold font-heading border" style={{ borderColor: 'hsl(38 85% 55% / 0.4)', background: 'hsl(38 85% 55% / 0.1)', color: 'hsl(38 85% 65%)' }}>
                  <p.icon className="w-4 h-4" />
                  {p.label}
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Hero Image / Video */}
          <AnimatedSection animation="zoomIn" delay={0.25}>
            <div className="mt-9 max-w-3xl mx-auto relative group cursor-pointer">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2" style={{ borderColor: 'hsl(38 85% 55% / 0.3)' }}>
                <img src={heroEggs} alt="Ovos de colher gourmet premium" className="w-full h-auto" />
              </div>
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 48%))' }}>
                  <Play className="w-7 h-7 md:w-8 md:h-8 ml-1" style={{ color: 'hsl(15 60% 14%)' }} />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection animation="bounceIn" delay={0.35}>
            <div className="mt-9 flex flex-col items-center gap-3">
              <CTAButton text="QUERO GANHAR DINHEIRO NA PÁSCOA" variant="dark" className="text-base md:text-lg" />
              <p className="text-xs font-medium flex items-center gap-1.5" style={{ color: 'hsl(38 85% 65%)' }}>
                <ShieldCheck className="w-3.5 h-3.5" />
                Acesso imediato · 7 dias de garantia
              </p>
            </div>
          </AnimatedSection>

          {/* Social proof */}
          <AnimatedSection animation="fadeInUp" delay={0.4}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {[
                { num: "+2.500", label: "alunas" },
                { num: "4.9", label: "estrelas" },
                { num: "+R$50K", label: "faturados" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="font-heading font-extrabold text-lg md:text-xl text-gold">{s.num}</span>
                  <span className="text-xs uppercase tracking-wider" style={{ color: 'hsl(35 30% 70%)' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════ GALERIA ═══════════════════ */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <span className="highlight-text mb-4">🍫 Galeria de Sabores</span>
            <h2 className="font-heading font-bold text-2xl md:text-[38px] leading-tight text-foreground mt-4">
              Veja o que você vai aprender a fazer
              <span className="text-primary"> (e vender!)</span>
            </h2>
            <div className="gold-divider" />
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-10">
            {eggs.map((egg, i) => (
              <AnimatedSection key={egg.name} animation="zoomIn" delay={i * 0.08}>
                <div className="rounded-2xl overflow-hidden group card-shadow bg-card relative">
                  <div className="overflow-hidden">
                    <img
                      src={egg.img}
                      alt={`Ovo de ${egg.name}`}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 py-3 px-2 text-center" style={{ background: 'linear-gradient(to top, hsl(15 60% 14% / 0.9), transparent)' }}>
                    <p className="font-heading font-bold text-sm md:text-base text-cream">{egg.name}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROMESSA ═══════════════════ */}
      <section className="relative overflow-hidden py-16 px-4" style={{ background: 'linear-gradient(165deg, hsl(20 50% 20%), hsl(25 45% 30%))' }}>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <Sparkles className="w-10 h-10 text-gold mx-auto mb-4" />
            <h2 className="font-heading font-bold text-2xl md:text-[38px] leading-tight text-cream">
              Transforme sua cozinha em uma
              <span className="text-gold"> fonte de renda</span> ainda nessa Páscoa
            </h2>
            <div className="gold-divider" />
            <p className="text-cream/70 mt-5 text-lg max-w-xl mx-auto">
              Descubra como produzir ovos de colher que vendem todos os dias e podem te gerar até
              <strong className="text-gold"> R$10.000</strong> em poucos dias
            </p>
          </AnimatedSection>
          <AnimatedSection animation="bounceIn" delay={0.2}>
            <div className="mt-8">
              <CTAButton text="QUERO APRENDER AGORA" variant="dark" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════ PARA QUEM É ═══════════════════ */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-[38px] leading-tight text-center text-foreground">
              Esse mini curso é <span className="text-primary">para você</span> que:
            </h2>
            <div className="gold-divider" />
          </AnimatedSection>
          <div className="mt-8 space-y-3">
            {paraQuem.map((item, i) => (
              <AnimatedSection key={i} animation="fadeInLeft" delay={i * 0.08}>
                <div className="flex items-center gap-4 rounded-2xl px-5 py-4 card-shadow bg-card border-l-4" style={{ borderLeftColor: 'hsl(38 85% 55%)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, hsl(38 85% 55% / 0.15), hsl(38 85% 55% / 0.05))' }}>
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-foreground text-base md:text-lg font-medium">{item.text}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTEÚDO ═══════════════════ */}
      <section className="py-16 px-4 section-alt">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-[38px] leading-tight text-center text-foreground">
              O que você vai <span className="text-primary">dominar</span>
            </h2>
            <p className="text-muted-foreground text-center mt-2 text-base">Conteúdo completo e direto ao ponto</p>
            <div className="gold-divider" />
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {conteudos.map((c, i) => (
              <AnimatedSection key={i} animation="fadeInUp" delay={i * 0.08}>
                <div className="bg-card rounded-2xl p-7 text-center card-shadow hover:-translate-y-1 transition-transform duration-300 h-full border border-transparent hover:border-secondary/30">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, hsl(25 80% 38% / 0.12), hsl(38 85% 55% / 0.08))' }}>
                    <c.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg">{c.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ BÔNUS ═══════════════════ */}
      <section className="py-16 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(165deg, hsl(15 60% 14%) 0%, hsl(20 50% 22%) 100%)' }}>
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold font-heading" style={{ background: 'hsl(38 85% 55% / 0.15)', color: 'hsl(38 85% 65%)', border: '1px solid hsl(38 85% 55% / 0.3)' }}>
                <Gift className="w-4 h-4" />
                BÔNUS ESPECIAIS
              </span>
              <h2 className="font-heading font-bold text-2xl md:text-[38px] leading-tight text-cream mt-4">
                Quem garantir hoje, leva <span className="text-gold">3 bônus</span> grátis
              </h2>
              <div className="gold-divider" />
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {[
              { title: "Planilha de Precificação", desc: "Saiba exatamente quanto lucrar em cada venda — calcule tudo automaticamente", icon: DollarSign, tag: "BÔNUS 1" },
              { title: "Estratégia para 5K+", desc: "Plano simples e testado para vender todos os dias e faturar alto", icon: Rocket, tag: "BÔNUS 2" },
              { title: "Grupo de Vendedoras", desc: "Comunidade exclusiva com vendedoras que já estão faturando — troque dicas e cresça junto", icon: Users, tag: "BÔNUS 3" },
            ].map((b, i) => (
              <AnimatedSection key={i} animation="bounceIn" delay={i * 0.12}>
                <div className="rounded-2xl p-6 h-full relative overflow-hidden" style={{ background: 'linear-gradient(145deg, hsl(20 50% 25%), hsl(15 60% 16%))', border: '1px solid hsl(38 85% 55% / 0.25)' }}>
                  <span className="inline-block text-[10px] font-bold font-heading tracking-widest rounded-full px-3 py-1 mb-4" style={{ background: 'hsl(38 85% 55%)', color: 'hsl(15 60% 14%)' }}>
                    {b.tag}
                  </span>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{ background: 'hsl(38 85% 55% / 0.15)' }}>
                    <b.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-cream text-lg leading-snug">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'hsl(35 30% 70%)' }}>{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ HISTÓRIA ═══════════════════ */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="bg-card rounded-3xl p-8 md:p-12 card-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, hsl(38 85% 55%), hsl(25 80% 38%))' }} />
              <div className="text-center">
                <span className="highlight-text mb-4">💬 Minha História</span>
                <h2 className="font-heading font-bold text-xl md:text-3xl text-foreground mt-4 leading-snug">
                  Eu sei como é <span className="text-primary">precisar de dinheiro</span> e não saber por onde começar...
                </h2>
                <div className="gold-divider" />
                <p className="text-muted-foreground mt-5 text-base md:text-lg leading-relaxed">
                  Foi através dos ovos de colher que consegui mudar minha realidade. Comecei na minha cozinha, sem nenhuma experiência em confeitaria, e em poucas semanas já estava faturando mais do que no meu emprego.
                </p>
                <p className="text-foreground mt-4 text-base md:text-lg font-medium">
                  Hoje quero te ensinar <strong className="text-primary">exatamente</strong> o que eu fiz — passo a passo.
                </p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="bounceIn" delay={0.2}>
            <div className="mt-8 text-center">
              <CTAButton text="QUERO MUDAR MINHA RENDA" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════ OFERTA ═══════════════════ */}
      <section id="oferta" className="py-16 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(165deg, hsl(15 60% 14%), hsl(20 50% 22%))' }}>
        <div className="max-w-lg mx-auto relative z-10">
          <AnimatedSection animation="bounceIn">
            <div className="bg-card rounded-3xl overflow-hidden shadow-2xl border-2" style={{ borderColor: 'hsl(38 85% 55% / 0.4)' }}>
              {/* Top bar */}
              <div className="py-3 px-4 text-center font-heading font-bold text-sm tracking-wide" style={{ background: 'linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 48%))', color: 'hsl(15 60% 14%)' }}>
                <Clock className="w-4 h-4 inline mr-1.5 -mt-0.5" />
                OFERTA ESPECIAL — POR TEMPO LIMITADO
              </div>

              <div className="p-7 md:p-10 text-center">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground">
                  Mini Curso Completo
                </h2>
                <p className="font-heading font-extrabold text-2xl md:text-3xl text-primary mt-1">
                  Ovo de Colher Lucrativo
                </p>

                <div className="gold-divider" />

                {/* Price */}
                <div className="mt-4">
                  <p className="text-muted-foreground line-through text-base">De R$ 197,00</p>
                  <div className="flex items-baseline justify-center gap-1 mt-1">
                    <span className="text-muted-foreground text-lg">R$</span>
                    <span className="font-heading font-black text-6xl md:text-7xl text-primary">47</span>
                    <span className="font-heading font-bold text-xl text-primary">,00</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">ou 5x de R$ 10,14 sem juros</p>
                </div>

                {/* Checklist */}
                <div className="mt-7 space-y-2.5 text-left">
                  {[
                    "Receitas completas de 6 sabores",
                    "Técnicas profissionais de confeitaria",
                    "Planilha de precificação automática",
                    "Estratégia de vendas testada",
                    "Grupo exclusivo de vendedoras",
                    "Todos os bônus incluídos",
                    "Acesso vitalício + atualizações",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(38 85% 55% / 0.2)' }}>
                        <Check className="w-3.5 h-3.5 text-secondary" />
                      </div>
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <CTAButton text="SIM, QUERO LUCRAR NA PÁSCOA" className="w-full" />
                </div>

                <p className="text-xs mt-4 flex items-center justify-center gap-1.5 text-muted-foreground">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  7 dias de garantia · Compra 100% segura
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Urgency */}
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="mt-6 text-center">
              <p className="text-sm font-bold font-heading text-gold flex items-center justify-center gap-2">
                <Flame className="w-4 h-4" />
                Oferta válida apenas até a Páscoa
                <Flame className="w-4 h-4" />
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════ GARANTIA ═══════════════════ */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection animation="zoomIn">
            <div className="bg-card rounded-3xl p-8 md:p-10 card-shadow flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, hsl(25 80% 38% / 0.12), hsl(38 85% 55% / 0.08))' }}>
                <ShieldCheck className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground">
                  7 Dias de Garantia Incondicional
                </h2>
                <p className="text-muted-foreground mt-2 text-base leading-relaxed">
                  Se por qualquer motivo você não gostar, devolvemos <strong className="text-primary">100% do seu dinheiro</strong>. Sem burocracia, sem perguntas. O risco é todo nosso.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════ CTA FINAL ═══════════════════ */}
      <section className="py-16 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(165deg, hsl(15 60% 14%), hsl(20 50% 25%))' }}>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <Crown className="w-10 h-10 text-gold mx-auto mb-4" />
            <h2 className="font-heading font-bold text-2xl md:text-[38px] leading-tight text-cream">
              Não deixe essa oportunidade passar!
            </h2>
            <p className="mt-4 text-base md:text-lg" style={{ color: 'hsl(35 30% 70%)' }}>
              A Páscoa está chegando. Comece hoje e fature alto com seus ovos de colher!
            </p>
            <div className="mt-8">
              <CTAButton text="QUERO COMEÇAR AGORA" variant="dark" className="text-base md:text-lg" />
            </div>
            <p className="text-xs mt-4 flex items-center justify-center gap-1.5" style={{ color: 'hsl(38 85% 65%)' }}>
              <ShieldCheck className="w-3.5 h-3.5" />
              Compra segura · Acesso imediato · 7 dias de garantia
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 text-center text-muted-foreground text-xs bg-background border-t border-border">
        <p>© 2026 — Todos os direitos reservados</p>
        <p className="mt-1 max-w-md mx-auto">Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho não é garantia de resultado futuro.</p>
      </footer>
    </div>
  );
};

export default Index;
