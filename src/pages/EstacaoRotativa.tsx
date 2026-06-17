import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FAQ } from '../components/FAQ';
import { 
  Wifi, 
  Coffee, 
  Users, 
  Leaf, 
  Zap, 
  Shield, 
  ArrowRight,
  Heart,
  Wind,
  Sun,
  CheckCircle2,
  Clock,
  Sparkles,
  Smartphone
} from 'lucide-react';

export default function EstacaoRotativa() {
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

  const features = [
    { icon: <Wifi size={24} />, title: "Internet Ultra-Rápida", desc: "Redundância total e velocidade simétrica para nunca parar." },
    { icon: <Coffee size={24} />, title: "Café de Especialidade", desc: "Grãos selecionados e torrados localmente, ilimitado para você." },
    { icon: <Smartphone size={24} />, title: "App Exclusivo", desc: "Reserve salas e conecte-se com a comunidade na palma da mão." },
    { icon: <Clock size={24} />, title: "Acesso Flexível", desc: "Trabalhe no seu ritmo, respeitando sua produtividade." },
    { icon: <Shield size={24} />, title: "Endereço Comercial", desc: "Dê prestígio ao seu negócio com localização privilegiada." },
    { icon: <Sparkles size={24} />, title: "Atendimento Exclusivo", desc: "Nossa recepção cuida de tudo para você focar no que importa." }
  ];

  return (
    <div className="bg-grey-50 text-grey-900">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-16 overflow-hidden bg-grey-900">
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <img 
            src="http://coletivo.cc/wp-content/uploads/2025/06/1.jpg" 
            alt="Estação Rotativa Coletivo" 
            className="w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-grey-900 via-grey-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <h1 className="display-1 text-white leading-[0.8] mb-8 tracking-tighter">
              Trabalhe com <br /><span className="italic text-brand font-light">liberdade e</span> <br />praticidade.
            </h1>
            
            <p className="text-white/40 font-serif font-light text-lg md:text-xl max-w-2xl leading-relaxed">
              Estações rotativas em ambientes que ajudam você a focar, com o conforto de muitas plantas e luz natural.
            </p>

            <div className="flex flex-wrap gap-6 pt-6">
              <button 
                className="btn btn-brand"
                onClick={() => (window as any).openModal?.('Estação Rotativa')}
              >
                Garantir meu Espaço
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── MANIFESTO ─── */}
      <section className="py-32 md:py-56 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center">
          <div className="reveal space-y-12">
            <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-normal">Networking e Troca</div>
            <h2 className="font-serif text-4xl md:text-7xl text-grey-900 leading-[0.9] tracking-tighter">
              A mobilidade de um <br />
              <span className="italic text-brand font-light uppercase text-3xl md:text-5xl tracking-[0.2em] block mt-4">plano flexível.</span>
            </h2>
            <div className="space-y-8 font-serif font-light text-grey-500 text-lg md:text-xl leading-relaxed">
              <p>
                Para quem está sempre em movimento e busca mais do que apenas internet rápida. A Estação Rotativa é a porta de entrada para um lugar cheio de vida onde cada café é uma chance de fechar novos negócios.
              </p>
              <p>
                Tenha a liberdade de escolher seu lugar a cada dia. De jardins a lounges modernos, nossas unidades Area 51 e Casa 62 oferecem tudo o que você precisa para trabalhar bem nos melhores locais da cidade.
              </p>
            </div>
            <div className="pt-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-grey-100 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500">
                  <ArrowRight size={20} />
                </div>
                <span className="font-serif italic text-lg text-grey-800">Conheça o plano Semanal</span>
              </div>
            </div>
          </div>
          
          <div className="reveal relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative border-[12px] border-grey-50">
              <img 
                src="http://coletivo.cc/wp-content/uploads/2025/06/2.jpg" 
                alt="Detalhe Estação Rotativa" 
                className="w-full h-full object-cover transition-all duration-[2s] ease-out scale-105"
              />
            </div>
            <div className="absolute -bottom-16 -right-16 bg-white p-14 shadow-2xl rounded-[3rem] max-w-sm hidden md:block border-t-8 border-brand">
              <div className="w-12 h-12 bg-grey-50 rounded-2xl flex items-center justify-center text-brand mb-8">
                <Zap size={24} />
              </div>
              <p className="font-serif italic text-xl text-grey-800 leading-relaxed">
                "No Coletivo, o acaso é planejado. Minhas melhores parcerias nasceram de conversas despretensiosas nas estações rotativas."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-8 h-px bg-grey-100" />
                <span className="text-[0.6rem] uppercase tracking-[0.2em] font-sans font-normal text-grey-400">Membro Rotativo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INFRAESTRUTURA ─── */}
      <section className="py-32 md:py-56 bg-grey-50 border-y border-grey-100">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-24 reveal">
            <p className="text-brand text-[0.7rem] uppercase tracking-[0.5em] mb-8 font-sans font-normal">Standard of Excellence</p>
            <h2 className="font-serif text-4xl md:text-7xl text-grey-900 leading-[0.9] tracking-tighter mb-10">Tudo o que <br /><span className="italic text-brand font-light">você precisa.</span></h2>
            <p className="font-serif font-light text-grey-500 text-lg leading-relaxed">O apoio que você precisa para que seu dia seja produtivo, todos os dias.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="reveal group p-14 bg-white rounded-[2.5rem] space-y-8 transition-all duration-500 hover:shadow-2xl border border-grey-100/50"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-grey-50 rounded-2xl flex items-center justify-center text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white group-hover:rotate-6">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-grey-900 mb-4 tracking-tight">{feature.title}</h3>
                  <p className="font-serif font-light text-grey-500 text-base leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BEM-ESTAR ─── */}
      <section className="py-32 md:py-56 px-6 md:px-16 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center">
          <div className="reveal relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-8 items-end group">
              <div className="space-y-8">
                <div className="rounded-[2.5rem] overflow-hidden transition-all duration-1000 shadow-xl scale-95 hover:scale-100">
                  <img src="http://coletivo.cc/wp-content/uploads/2025/06/3.jpg" className="w-full h-full object-cover" alt="Bem-estar 1" />
                </div>
                <div className="rounded-[2.5rem] overflow-hidden transition-all duration-1000 shadow-xl scale-90 hover:scale-95 translate-x-4">
                  <img src="http://coletivo.cc/wp-content/uploads/2025/06/4.jpg" className="w-full h-full object-cover" alt="Bem-estar 2" />
                </div>
              </div>
              <div className="space-y-8 pb-32">
                <div className="rounded-[2.5rem] overflow-hidden transition-all duration-1000 shadow-xl scale-100 hover:scale-105">
                  <img src="http://coletivo.cc/wp-content/uploads/2025/06/5.jpg" className="w-full h-full object-cover" alt="Bem-estar 3" />
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-brand border-[15px] border-white rounded-full flex items-center justify-center text-white p-10 text-center leading-[1.1] font-serif italic text-2xl shadow-2xl z-20 hover:scale-110 transition-transform duration-500">
              Equilíbrio é o novo luxo.
            </div>
          </div>
          
          <div className="reveal order-1 lg:order-2 space-y-16">
            <div className="space-y-10">
              <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-normal">Design Humano</div>
              <h2 className="font-serif text-4xl md:text-7xl text-grey-900 leading-[0.9] tracking-tighter">Design que <br /><span className="italic text-brand font-light uppercase text-3xl md:text-5xl tracking-[0.2em] block mt-4">respira com você.</span></h2>
              <p className="font-serif font-light text-grey-500 text-lg md:text-xl leading-relaxed">
                Nossas estações não são isoladas do mundo. Elas são integradas a jardins verticais, luz solar abundante e áreas de descompressão que elevam a satisfação orgânica.
              </p>
            </div>

            <div className="space-y-12">
              {[
                { icon: <Zap size={24} />, title: "Estrutura de Ponta", desc: "Mobiliário ergonômico e internet de alta velocidade para foco total." },
                { icon: <Users size={24} />, title: "Conexão e Rede", desc: "Integração imediata com a maior comunidade de negócios de Petrópolis." },
                { icon: <Leaf size={24} />, title: "Ambiente Natural", desc: "Espaços com luz solar abundante e vegetação para um dia mais produtivo." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-[1.2rem] bg-grey-50 flex items-center justify-center text-brand flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-grey-900 mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-grey-500 text-base font-serif font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-32 md:py-64 px-6 md:px-16 text-center relative overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto space-y-16 reveal">
          <h2 className="display-1 text-grey-900 leading-[0.8] tracking-tighter">Seu trabalho merece <br /><span className="italic text-brand font-light">esse lugar.</span></h2>
          <p className="font-serif font-light text-grey-500 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Agende uma visita na Casa 62 ou na Area 51 e descubra por que o Coletivo é o lugar ideal para o seu crescimento.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 pt-8">
            <button 
              className="btn btn-brand"
              onClick={() => (window as any).openModal?.('Visita Estação Rotativa')}
            >
              Falar com a Equipe
            </button>
            <button className="btn btn-outline-brand">
              Ver Unidades Disponíveis
            </button>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQ />
    </div>
  );
}
