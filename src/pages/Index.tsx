import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import { Check, Gift, ShieldCheck, ChefHat, DollarSign, Rocket, BookOpen, Award, Users, Play, Clock, TrendingUp, Flame, Crown, CupSoda } from "lucide-react";

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

      <section className="py-16 px-4 section-alt">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="premium-panel p-8 md:p-12 text-center">
              <div className="icon-chip mx-auto mb-5">
                <CupSoda className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-bold text-2xl md:text-[38px] leading-tight text-foreground">
                Transforme sua cozinha em uma <span className="text-primary">fonte de renda</span>
              </h2>
              <div className="gold-divider" />
              <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
                Aprenda a criar ovos de colher com visual premium, sabor marcante e apresentação de vitrine para vender muito nessa Páscoa.
              </p>
              <div className="mt-8">
                <CTAButton text="QUERO APRENDER AGORA" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-[38px] leading-tight text-center text-foreground">
              Esse mini curso é <span className="text-primary">para você</span> que:
            </h2>
            <div className="gold-divider" />
          </AnimatedSection>
          <div className="mt-8 space-y-4">
            {paraQuem.map((item, i) => (
              <AnimatedSection key={item} animation="fadeInLeft" delay={i * 0.08}>
                <div className="premium-panel px-5 py-4 flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4.5 h-4.5 text-secondary" />
                  </div>
                  <span className="text-foreground text-base md:text-lg font-medium">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 section-alt">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-[38px] leading-tight text-center text-foreground">
              O que você vai <span className="text-primary">dominar</span>
            </h2>
            <p className="text-muted-foreground text-center mt-2 text-base">Um conteúdo direto, lucrativo e fácil de aplicar</p>
            <div className="gold-divider" />
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {conteudos.map((c, i) => (
              <AnimatedSection key={c.title} animation="fadeInUp" delay={i * 0.08}>
                <div className="premium-panel p-7 text-center h-full hover:-translate-y-1 transition-transform duration-300">
                  <div className="icon-chip mx-auto mb-4">
                    <c.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg">{c.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 section-chocolate">
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold font-heading" style={{ background: "hsl(38 85% 55% / 0.15)", color: "hsl(38 85% 65%)", border: "1px solid hsl(38 85% 55% / 0.3)" }}>
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
            {bonus.map((b, i) => (
              <AnimatedSection key={b.title} animation="bounceIn" delay={i * 0.12}>
                <div className="premium-dark-panel p-6 h-full">
                  <span className="inline-block text-[10px] font-bold font-heading tracking-widest rounded-full px-3 py-1 mb-4" style={{ background: "hsl(38 85% 55%)", color: "hsl(15 60% 14%)" }}>
                    {b.tag}
                  </span>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3" style={{ background: "hsl(38 85% 55% / 0.14)" }}>
                    <b.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-cream text-lg leading-snug">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "hsl(35 30% 74%)" }}>{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="premium-panel p-8 md:p-12 relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(90deg, hsl(38 85% 55%), hsl(25 80% 38%))" }} />
              <div className="icon-chip mx-auto mb-5">
                <ChefHat className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-bold text-xl md:text-3xl text-foreground leading-snug">
                Eu sei como é <span className="text-primary">precisar de dinheiro</span> e não saber por onde começar...
              </h2>
              <div className="gold-divider" />
              <p className="text-muted-foreground mt-5 text-base md:text-lg leading-relaxed">
                Foi através dos ovos de colher que consegui mudar minha realidade. Comecei na minha cozinha, sem experiência, e em poucas semanas já estava faturando mais do que no meu emprego.
              </p>
              <p className="text-foreground mt-4 text-base md:text-lg font-medium">
                Hoje quero te ensinar <strong className="text-primary">exatamente</strong> o que eu fiz — passo a passo.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="bounceIn" delay={0.2}>
            <div className="mt-8 text-center">
              <CTAButton text="QUERO MUDAR MINHA RENDA" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="oferta" className="py-16 px-4 section-chocolate">
        <div className="max-w-lg mx-auto relative z-10">
          <AnimatedSection animation="bounceIn">
            <div className="premium-panel overflow-hidden border-2" style={{ borderColor: "hsl(38 85% 55% / 0.35)" }}>
              <div className="py-3 px-4 text-center font-heading font-bold text-sm tracking-wide" style={{ background: "linear-gradient(135deg, hsl(38 85% 55%), hsl(38 90% 48%))", color: "hsl(15 60% 14%)" }}>
                <Clock className="w-4 h-4 inline mr-1.5 -mt-0.5" />
                OFERTA ESPECIAL — POR TEMPO LIMITADO
              </div>

              <div className="p-7 md:p-10 text-center">
                <div className="flex justify-center mb-4">
                  <img src={logoOvoLucrativo} alt="Ovo Lucrativo" className="w-36 md:w-44 h-auto drop-shadow-md" />
                </div>
                <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground">Mini Curso Completo</h2>
                <p className="font-heading font-extrabold text-2xl md:text-3xl text-primary mt-1">Ovo de Colher Lucrativo</p>
                <div className="gold-divider" />

                <div className="mt-4">
                  <p className="text-muted-foreground line-through text-base">De R$ 197,00</p>
                  <div className="flex items-baseline justify-center gap-1 mt-1">
                    <span className="text-muted-foreground text-lg">R$</span>
                    <span className="font-heading font-black text-6xl md:text-7xl text-primary">47</span>
                    <span className="font-heading font-bold text-xl text-primary">,00</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">ou 5x de R$ 10,14 sem juros</p>
                </div>

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
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-secondary/15">
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

      <section className="py-16 px-4 bg-background">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection animation="zoomIn">
            <div className="premium-panel p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 bg-secondary/10">
                <ShieldCheck className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground">7 Dias de Garantia Incondicional</h2>
                <p className="text-muted-foreground mt-2 text-base leading-relaxed">
                  Se por qualquer motivo você não gostar, devolvemos <strong className="text-primary">100% do seu dinheiro</strong>. Sem burocracia, sem perguntas. O risco é todo nosso.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4 section-chocolate">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <Crown className="w-10 h-10 text-gold mx-auto mb-4" />
            <h2 className="font-heading font-bold text-2xl md:text-[38px] leading-tight text-cream">Não deixe essa oportunidade passar!</h2>
            <p className="mt-4 text-base md:text-lg" style={{ color: "hsl(35 30% 70%)" }}>
              A Páscoa está chegando. Comece hoje e fature alto com seus ovos de colher.
            </p>
            <div className="mt-8">
              <CTAButton text="QUERO COMEÇAR AGORA" variant="dark" className="text-base md:text-lg" />
            </div>
            <p className="text-xs mt-4 flex items-center justify-center gap-1.5" style={{ color: "hsl(38 85% 65%)" }}>
              <ShieldCheck className="w-3.5 h-3.5" />
              Compra segura · Acesso imediato · 7 dias de garantia
            </p>
          </AnimatedSection>
        </div>
      </section>

      <footer className="py-8 px-4 text-center text-muted-foreground text-xs bg-background border-t border-border">
        <p>© 2026 — Todos os direitos reservados</p>
        <p className="mt-1 max-w-md mx-auto">Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho não é garantia de resultado futuro.</p>
      </footer>
    </div>
  );
};

export default Index;
