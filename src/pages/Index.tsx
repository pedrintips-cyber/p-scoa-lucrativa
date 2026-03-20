import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import { Check, Gift, ShieldCheck, Star, ChefHat, DollarSign, Rocket, BookOpen, Award } from "lucide-react";

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
  "Quer uma renda extra urgente",
  "Está começando do zero",
  "Quer vender na Páscoa",
  "Quer trabalhar de casa",
  "Quer aumentar sua renda",
];

const conteudos = [
  { icon: BookOpen, title: "Receitas completas", desc: "Passo a passo de cada sabor" },
  { icon: ChefHat, title: "Técnicas de preparo", desc: "Segredos profissionais" },
  { icon: Award, title: "Ovos premium", desc: "Montagem que impressiona" },
  { icon: DollarSign, title: "Calcular preço", desc: "Lucre em cada unidade" },
  { icon: Rocket, title: "Vender rápido", desc: "Estratégias de venda" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      {/* HERO */}
      <section className="relative py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection animation="fadeInUp">
            <span className="highlight-text mb-6">🐣 Páscoa 2026</span>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={0.1}>
            <h1 className="font-heading font-extrabold text-3xl md:text-[42px] leading-tight mt-6 text-foreground">
              Aprenda a Fazer Ovos de Colher Irresistíveis e Fature de{" "}
              <span className="text-primary">R$3.000 a R$10.000</span> Nessa Páscoa
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              Mesmo começando do zero e usando ingredientes simples da sua cozinha
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={0.25}>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {["Receitas", "Precificação", "Vendas"].map((t) => (
                <span key={t} className="highlight-text text-base">{t}</span>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection animation="zoomIn" delay={0.3}>
            <div className="mt-8 rounded-xl overflow-hidden shadow-xl max-w-3xl mx-auto">
              <img src={heroEggs} alt="Ovos de colher gourmet" className="w-full h-auto" />
            </div>
          </AnimatedSection>
          <AnimatedSection animation="bounceIn" delay={0.4}>
            <div className="mt-8">
              <CTAButton text="QUERO GANHAR DINHEIRO NA PÁSCOA 🎯" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* GALERIA */}
      <section className="section-alt py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground">
              Veja o que você vai aprender a fazer <span className="text-primary">(e vender)</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-10">
            {eggs.map((egg, i) => (
              <AnimatedSection key={egg.name} animation="zoomIn" delay={i * 0.1}>
                <div className="bg-card rounded-xl overflow-hidden card-shadow">
                  <img src={egg.img} alt={`Ovo de ${egg.name}`} className="w-full aspect-square object-cover" loading="lazy" />
                  <p className="font-heading font-semibold text-foreground py-3 text-sm md:text-base">{egg.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROMESSA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground">
              Transforme sua cozinha em uma <span className="text-primary">fonte de renda</span> ainda nessa Páscoa
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Descubra como produzir ovos de colher que vendem todos os dias e podem te gerar até <strong className="text-primary">R$10.000</strong> em poucos dias
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="section-alt py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-center text-foreground">
              Esse mini curso é <span className="text-primary">para você</span> que:
            </h2>
          </AnimatedSection>
          <div className="mt-8 space-y-4">
            {paraQuem.map((item, i) => (
              <AnimatedSection key={i} animation="fadeInLeft" delay={i * 0.1}>
                <div className="flex items-center gap-3 bg-card rounded-xl px-6 py-4 card-shadow">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-foreground text-base md:text-lg">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-center text-foreground">
              O que você vai <span className="text-primary">aprender</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {conteudos.map((c, i) => (
              <AnimatedSection key={i} animation="fadeInUp" delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 text-center card-shadow">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <c.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg">{c.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">{c.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="section-alt py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-center text-foreground">
              🎁 <span className="text-primary">Bônus</span> Exclusivos
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              { title: "Planilha de Precificação", desc: "Saiba exatamente quanto lucrar em cada venda", icon: DollarSign },
              { title: "Estratégia para faturar 5K+", desc: "Plano simples para vender todos os dias", icon: Rocket },
            ].map((b, i) => (
              <AnimatedSection key={i} animation="bounceIn" delay={i * 0.15}>
                <div className="bg-card rounded-xl p-8 card-shadow border-2 border-secondary/30">
                  <div className="flex items-center gap-3 mb-3">
                    <Gift className="w-8 h-8 text-secondary" />
                    <h3 className="font-heading font-bold text-foreground text-lg">{b.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground">
              Eu sei como é <span className="text-primary">precisar de dinheiro</span> e não saber por onde começar...
            </h2>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              Foi através dos ovos de colher que consegui mudar minha renda. Comecei na minha cozinha, sem experiência, e em poucas semanas já estava faturando mais do que no meu emprego. Hoje quero te ensinar exatamente o que eu fiz.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="bounceIn" delay={0.2}>
            <div className="mt-8">
              <CTAButton text="QUERO COMEÇAR AGORA 🚀" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="section-alt py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection animation="bounceIn">
            <div className="bg-card rounded-2xl p-8 md:p-12 card-shadow border-2 border-primary/20">
              <span className="highlight-text mb-4">⏰ Oferta por tempo limitado</span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-4">
                Mini Curso Ovo de Colher
              </h2>
              <div className="mt-6">
                <p className="text-muted-foreground line-through text-lg">De R$ 197,00</p>
                <p className="font-heading font-extrabold text-5xl md:text-6xl text-primary mt-2">
                  R$ 47<span className="text-3xl">,00</span>
                </p>
                <p className="text-muted-foreground mt-2">ou 5x de R$ 10,14</p>
              </div>
              <div className="mt-6 space-y-2 text-left max-w-sm mx-auto">
                {["Receitas completas", "Técnicas profissionais", "Planilha de precificação", "Estratégia de vendas", "Bônus exclusivos", "Acesso vitalício"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <CTAButton text="SIM, QUERO LUCRAR NA PÁSCOA 🎯" />
              </div>
              <p className="text-primary font-semibold text-sm mt-4">
                ⚡ Oferta válida apenas até a Páscoa
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection animation="zoomIn">
            <div className="bg-card rounded-2xl p-8 card-shadow border border-border">
              <ShieldCheck className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
                7 Dias de Garantia Incondicional
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Se não gostar, devolvemos <strong className="text-primary">100% do seu dinheiro</strong>. Sem perguntas.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-primary-foreground">
              Não perca essa oportunidade!
            </h2>
            <p className="text-primary-foreground/80 mt-4 text-lg">
              A Páscoa está chegando. Comece agora e fature alto!
            </p>
            <div className="mt-8">
              <a
                href="#oferta"
                className="inline-block bg-card text-primary font-heading font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:scale-105 transition-transform"
              >
                SIM, QUERO LUCRAR NA PÁSCOA 🐣
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 text-center text-muted-foreground text-sm">
        <p>© 2026 - Todos os direitos reservados</p>
        <p className="mt-1">Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho não é garantia de resultado futuro.</p>
      </footer>
    </div>
  );
};

export default Index;
