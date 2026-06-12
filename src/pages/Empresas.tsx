import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FAQ } from '../components/FAQ';
import { 
  Sparkles,
  Heart,
  Coffee,
  Sun,
  Smile,
  Shield,
  Award,
  Users2,
  TreePine,
  Sparkle
} from 'lucide-react';

export default function Empresas() {
  useEffect(() => {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el));

    return () => {
      revealObs.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#F9F8F6] overflow-hidden selection:bg-brand selection:text-white">
      {/* ─── HERO INTERATIVO E ACOLHEDOR ─── */}
      <section id="empresas-hero" className="relative min-h-[80vh] flex items-center justify-center px-6 pt-32 pb-24 bg-grey-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="http://coletivo.cc/wp-content/uploads/2024/09/DSC01993-scaled.jpg" 
            className="w-full h-full object-cover opacity-25 scale-105 filter grayscale"
            alt="Ambiente Acolhedor do Coletivo"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-grey-900/80 via-grey-900/40 to-grey-900" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-brand/10 border border-brand/20 rounded-full text-brand text-[0.65rem] tracking-[0.3em] uppercase font-sans font-bold"
          >
            <Sparkles size={12} className="text-brand animate-pulse" />
            Um lugar feito para se apaixonar pela rotina
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tighter"
          >
            Trabalhar num lugar que<br />
            <span className="italic text-brand font-light font-serif">te acolhe de verdade.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-white/80 text-lg md:text-xl font-serif font-light max-w-2xl mx-auto leading-relaxed italic"
          >
            Esqueça a chatice de escritórios cinzas e cheios de burocracia. Na Lucas de Oliveira, criamos um espaço gostoso com luz do sol, plantas e café quente para o seu dia render com leveza e sem nenhuma pressa ou preocupação.
          </motion.p>
        </div>
      </section>

      {/* ─── AS COISAS SENSACIONAIS DO COLETIVO ─── */}
      <section className="py-24 md:py-36 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <span className="text-brand text-[0.65rem] uppercase tracking-[0.4em] font-bold font-sans">A EXPERIÊNCIA COLETIVO</span>
            <h2 className="font-serif text-4xl md:text-5xl text-grey-900 mt-2 leading-tight italic">Por que trabalhar aqui é tão bom?</h2>
            <p className="text-grey-500 font-serif text-lg leading-relaxed font-light mt-4 italic">
              Tudo aqui foi feito para você e sua equipe trabalharem tranquilos, sem nenhuma dor de cabeça com papelada ou contas.
            </p>
            <div className="w-16 h-px bg-brand/30 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Benefício 1: Luz e Arquitetura */}
            <div className="reveal space-y-4 p-8 bg-[#F9F8F6] rounded-3xl border border-grey-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm">
                <Sun size={20} />
              </div>
              <h3 className="font-serif text-2xl text-grey-900 font-semibold leading-tight">Muita luz do sol e verde</h3>
              <p className="text-grey-500 font-serif text-base font-light leading-relaxed italic">
                Nosso espaço tem muito verde e janelas grandes. Trabalhar num ambiente iluminado e perto da natureza deixa o dia mais leve e muito mais gostoso.
              </p>
            </div>

            {/* Benefício 2: O Melhor Café */}
            <div className="reveal space-y-4 p-8 bg-[#F9F8F6] rounded-3xl border border-grey-100 hover:shadow-lg transition-all duration-300" style={{ transitionDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm">
                <Coffee size={20} />
              </div>
              <h3 className="font-serif text-2xl text-grey-900 font-semibold leading-tight">Café quentinho sempre pronto</h3>
              <p className="text-grey-500 font-serif text-base font-light leading-relaxed italic">
                Aquele cafezinho passado na hora, gostoso e saboroso, sempre à disposição de todo mundo. Ótimo para aquela pausa merecida ou para bater um papo no meio do dia.
              </p>
            </div>

            {/* Benefício 3: Cuidado e Tranquilidade */}
            <div className="reveal space-y-4 p-8 bg-[#F9F8F6] rounded-3xl border border-grey-100 hover:shadow-lg transition-all duration-300" style={{ transitionDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm">
                <Heart size={20} />
              </div>
              <h3 className="font-serif text-2xl text-grey-900 font-semibold leading-tight">Deixe a chatice com a gente</h3>
              <p className="text-grey-500 font-serif text-base font-light leading-relaxed italic">
                Cuidamos de tudo com muito carinho: da limpeza diária ao cheirinho bom no ar, além de receber bem todas as suas visitas. Você só precisa sentar e trabalhar alegremente.
              </p>
            </div>

            {/* Benefício 4: Atmosfera e Energia */}
            <div className="reveal space-y-4 p-8 bg-[#F9F8F6] rounded-3xl border border-grey-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm">
                <Smile size={20} />
              </div>
              <h3 className="font-serif text-2xl text-grey-900 font-semibold leading-tight">O dia passa mais rápido</h3>
              <p className="text-grey-500 font-serif text-base font-light leading-relaxed italic">
                Estar num espaço alegre e cheio de pessoas de bem com a vida cria um clima acolhedor. A gente trabalha mais animado, o tempo voa e as tarefas parecem bem mais fáceis.
              </p>
            </div>

            {/* Benefício 5: Prestígio simplificado */}
            <div className="reveal space-y-4 p-8 bg-[#F9F8F6] rounded-3xl border border-grey-100 hover:shadow-lg transition-all duration-300" style={{ transitionDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm">
                <Award size={20} />
              </div>
              <h3 className="font-serif text-2xl text-grey-900 font-semibold leading-tight">Lugar lindo para as visitas</h3>
              <p className="text-grey-500 font-serif text-base font-light leading-relaxed italic">
                Ficamos na Lucas de Oliveira, uma rua charmosa e cheia de árvores de Porto Alegre. Qualquer cliente vai adorar te visitar em um lugar tão bonito e aconchegante.
              </p>
            </div>

            {/* Benefício 6: Encontros Naturais */}
            <div className="reveal space-y-4 p-8 bg-[#F9F8F6] rounded-3xl border border-grey-100 hover:shadow-lg transition-all duration-300" style={{ transitionDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm">
                <Users2 size={20} />
              </div>
              <h3 className="font-serif text-2xl text-grey-900 font-semibold leading-tight">Novas amizades e contatos</h3>
              <p className="text-grey-500 font-serif text-base font-light leading-relaxed italic">
                Sem eventos chatos ou conversas forçadas. Aqui no Coletivo, todo mundo se ajuda e as conexões de negócios reais acontecem de forma descontraída na copa de café.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ROTINA SENSORIAL: UM DIA DE TRABALHO ADORÁVEL ─── */}
      <section className="py-24 md:py-36 px-6 md:px-16 bg-[#F9F8F6] border-t border-b border-grey-100/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-6 reveal lg:sticky lg:top-32">
              <span className="text-brand text-[0.65rem] uppercase tracking-[0.4em] font-sans font-bold">DIA A DIA SIMPLES</span>
              <h2 className="font-serif text-4xl md:text-5xl text-grey-900 leading-tight">Como é um dia comum no nosso espaço?</h2>
              <p className="text-grey-500 font-serif text-lg font-light leading-relaxed">
                Esqueça boletos de internet, faxineira, portaria ou goteira. Nós cuidamos de absolutamente tudo enquanto você produz com calma.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-12 reveal" style={{ transitionDelay: '0.2s' }}>
              {/* Evento 1 */}
              <div className="relative pl-10 border-l border-brand/20">
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-brand rounded-full ring-4 ring-brand/10" />
                <span className="font-mono text-brand text-[0.65rem] font-bold uppercase tracking-widest bg-brand/5 px-2 py-0.5 rounded">Manhã</span>
                <h4 className="font-serif text-2xl font-semibold text-grey-900 mt-2">Chegada acolhedora</h4>
                <p className="text-grey-500 font-serif text-base leading-relaxed font-light mt-2 italic">
                  Você chega com facilidade, sente o cheirinho gostoso das salas, escuta uma música ambiente bem calma nos lounges, pega um café fresco na hora e começa o trabalho sem preocupação.
                </p>
              </div>

              {/* Evento 2 */}
              <div className="relative pl-10 border-l border-brand/20">
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-brand rounded-full ring-4 ring-brand/10" />
                <span className="font-mono text-brand text-[0.65rem] font-bold uppercase tracking-widest bg-brand/5 px-2 py-0.5 rounded">Almoço e Tarde</span>
                <h4 className="font-serif text-2xl font-semibold text-grey-900 mt-2">Visitas bem recebidas</h4>
                <p className="text-grey-500 font-serif text-base leading-relaxed font-light mt-2 italic">
                  Seus clientes chegam para conversar e nossa equipe os recebe com muita atenção de forma simpática, oferecendo café ou água, e os encaminha diretamente até você.
                </p>
              </div>

              {/* Evento 3 */}
              <div className="relative pl-10 border-l border-brand/20">
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-brand rounded-full ring-4 ring-brand/10" />
                <span className="font-mono text-brand text-[0.65rem] font-bold uppercase tracking-widest bg-brand/5 px-2 py-0.5 rounded">No meio do dia</span>
                <h4 className="font-serif text-2xl font-semibold text-grey-900 mt-2">Trabalho sem interrupções</h4>
                <p className="text-grey-500 font-serif text-base leading-relaxed font-light mt-2 italic">
                  Internet rápida de verdade, ar-condicionado fresquinho e móveis confortáveis. Deu cansaço de ficar na tela? Dê um pulo no quintal para esticar as pernas e respirar.
                </p>
              </div>

              {/* Evento 4 */}
              <div className="relative pl-10 border-l border-brand/20">
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-brand rounded-full ring-4 ring-brand/10" />
                <span className="font-mono text-brand text-[0.65rem] font-bold uppercase tracking-widest bg-brand/5 px-2 py-0.5 rounded">Fim da tarde</span>
                <h4 className="font-serif text-2xl font-semibold text-grey-900 mt-2">Bater papo e relaxar</h4>
                <p className="text-grey-500 font-serif text-base leading-relaxed font-light mt-2 italic">
                  O comecinho da noite na Lucas de Oliveira é lindo. Termine o expediente conversando no quintal ou nos lounges com outros profissionais incríveis do nosso espaço.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── REAL EXPERIENCE VIEW ─── */}
      <section className="py-24 md:py-36 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:items-center">
            
            <div className="lg:col-span-12 xl:col-span-7 reveal">
              <div className="aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                <img 
                  src="http://coletivo.cc/wp-content/uploads/2024/09/DSC01977-scaled.jpg" 
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                  alt="Lounge do Coletivo"
                />
                <div className="absolute inset-0 bg-brand/10 mix-blend-overlay" />
              </div>
            </div>

            <div className="lg:col-span-12 xl:col-span-5 space-y-8 reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="space-y-4">
                <span className="text-brand text-[0.65rem] uppercase tracking-[0.4em] font-sans font-bold">UM AMBIENTE CONTRA A SOLIDÃO</span>
                <h2 className="font-serif text-4xl md:text-5xl text-grey-900 leading-tight">
                  Faça parte de uma <br />
                  <span className="italic text-brand font-light font-serif">comunidade de verdade.</span>
                </h2>
                <p className="text-grey-500 font-serif text-base md:text-lg leading-relaxed font-light">
                  Nossos membros adoram estar aqui porque se sentem verdadeiramente em casa. Com mais de 120 empresas e mentes ativas dividindo o mesmo teto, o Coletivo traz energia positiva e boas trocas que ajudam seu negócio a ser mais leve e alegre.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="border-l-2 border-brand pl-4 space-y-1">
                  <h4 className="font-serif text-4xl font-bold text-brand">+2.500</h4>
                  <p className="text-grey-400 font-sans text-[0.65rem] uppercase tracking-widest font-bold">Amigos e Membros</p>
                </div>
                <div className="border-l-2 border-brand pl-4 space-y-1">
                  <h4 className="font-serif text-4xl font-bold text-brand">+120</h4>
                  <p className="text-grey-400 font-sans text-[0.65rem] uppercase tracking-widest font-bold">Empresas Parceiras</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── DETALHES MARAVILHOSOS NO ESPAÇO ─── */}
      <section className="py-24 md:py-36 px-6 md:px-16 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center max-w-3xl mx-auto reveal">
            <span className="text-brand text-[0.65rem] uppercase tracking-[0.4em] font-sans font-bold">DETALHES DE AMOR</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Coisas que você só vê por aqui</h2>
            <p className="text-white/60 font-serif text-lg font-light leading-relaxed italic mt-4">
              Cada pedacinho do nosso quintal e das salas foi planejado para surpreender você no dia a dia.
            </p>
            <div className="w-16 h-px bg-brand/30 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Aspecto maravilhoso 1 */}
            <div className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-brand/30 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center text-brand">
                  <TreePine size={24} />
                </div>
                <h3 className="font-serif text-2xl font-semibold">Contato com a Natureza</h3>
                <p className="text-white/60 font-serif text-sm font-light leading-relaxed italic">
                  Nosso quintal é lindo e tem árvores preservadas de verdade com bancos macios. Lugar ideal para respirar ar limpo, tomar um solzinho ou ler sem pressa.
                </p>
              </div>
            </div>

            {/* Aspecto maravilhoso 2 */}
            <div className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-brand/30 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center text-brand">
                  <Sparkle size={24} />
                </div>
                <h3 className="font-serif text-2xl font-semibold">Cheirinho gostoso no ar</h3>
                <p className="text-white/60 font-serif text-sm font-light leading-relaxed italic">
                  Temos um aroma bem leve e especial que traz aquela sensação boa de calma, silêncio e casa limpa toda vez que você ultrapassa nossa portaria.
                </p>
              </div>
            </div>

            {/* Aspecto maravilhoso 3 */}
            <div className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-brand/30 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center text-brand">
                  <Shield size={24} />
                </div>
                <h3 className="font-serif text-2xl font-semibold">Cuidado e carinho</h3>
                <p className="text-white/60 font-serif text-sm font-light leading-relaxed italic">
                  Nossa recepção cuida do controle de entrada das pessoas com muita segurança, mas sem aquela cara fechada e fria dos prédios comerciais comuns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ EM ESTILO PREMIUM RESUMIDO E SIMPLIFICADO ─── */}
      <FAQ 
        subtitle="Dúvidas de quem quer viver essa experiência"
        title="Perguntas Frequentes"
        items={[
          {
            q: "Por que trabalhar no Coletivo é diferente de alugar um escritório tradicional?",
            a: "Num escritório tradicional, você gasta tempo assinando internet de fibra, organizando a faxina do dia, comprando papel higiênico ou pó de café, e tendo de pagar vários boletos complicados. No Coletivo, você faz uma assinatura única e foca só nas suas tarefas enquanto cuidamos de tudo."
          },
          {
            q: "Meus clientes vão gostar de nos visitar aqui?",
            a: "Com certeza absoluta! O Coletivo fica em uma das partes mais charmosas e arborizadas da Lucas de Oliveira. O espaço é muito agradável, limpo, cheiroso, e nossa recepção acolhe cada parceiro de negócios com um café bem gostoso."
          },
          {
            q: "As pessoas conversam entre si? É barulhento?",
            a: "De jeito nenhum. Nosso espaço é dividido com inteligência: temos salas silenciosas e muito confortáveis para quando você precisa de foco, e lounges agradáveis fora das salas para tomar café e bater papo sem atrapalhar ninguém."
          }
        ]}
      />
    </div>
  );
}
