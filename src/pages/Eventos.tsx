import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FAQ } from '../components/FAQ';
import { 
  ArrowRight, 
  Gem,
  Camera,
  Coffee,
  Volume2,
  Tv,
  Utensils
} from 'lucide-react';

export default function Eventos() {
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

  const eventTypes = [
    { 
      title: "Workshops & Treinamentos", 
      desc: "Salas que podem ser mudadas de acordo com o que você precisa para ensinar e aprender de forma prática.",
      img: "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/4.jpg",
      capacity: "Até 40 pessoas"
    },
    { 
      title: "Talks & Lançamentos", 
      desc: "Palco, iluminação especial e som de alta qualidade para transformar sua apresentação em um momento inesquecível.",
      img: "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/6.jpg",
      capacity: "Até 60 pessoas"
    },
    { 
      title: "Networking & Comemorações", 
      desc: "Espaços leves e perto da natureza, ideais para festas e para conhecer novas pessoas sem pressa.",
      img: "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/1.jpg",
      capacity: "Até 100 pessoas"
    }
  ];

  const services = [
    { icon: <Volume2 />, title: "Som Profissional", desc: "Sistemas de som de alta qualidade para palestras e músicas." },
    { icon: <Tv />, title: "Imagens em 4K", desc: "Telas gigantes ou projetores de alta qualidade para suas apresentações." },
    { icon: <Utensils />, title: "Lanches Especiais", desc: "Opções de lanches, salgados e cafés preparados na hora." },
    { icon: <Camera />, title: "Equipe de Apoio", desc: "Equipe técnica dedicada para garantir que tudo aconteça perfeitamente." }
  ];

  return (
    <div className="bg-grey-50 text-grey-900">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-16 overflow-hidden bg-grey-900">
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <img 
            src="https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/6.jpg" 
            alt="Eventos Coletivo" 
            className="w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-grey-900/40 via-transparent to-grey-900" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <h1 className="display-1 text-white leading-[0.8] mb-8 tracking-tighter">
              O lugar ideal <br /><span className="italic text-brand font-light font-serif">para sua Marca.</span>
            </h1>
            
            <p className="text-white/40 font-serif font-light text-lg md:text-xl max-w-3xl leading-relaxed">
              De reuniões de trabalho aos lançamentos mais especiais. Crie momentos marcantes em um lugar bonito com tecnologia de som e imagem de última geração.
            </p>

            <div className="flex flex-wrap gap-8 pt-10">
              <button 
                className="btn btn-brand"
                onClick={() => (window as any).openModal?.('Espaço para Eventos')}
              >
                Pedir Orçamento
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── NARRATIVA DE MARCA ─── */}
      <section className="py-32 md:py-64 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center text-left">
            <div className="reveal space-y-12">
              <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-normal italic">Ambiente Especial</div>
              <h2 className="font-serif text-4xl md:text-7xl text-grey-900 leading-[0.9] tracking-tighter">
                O lugar que <br />
                <span className="italic text-brand font-light uppercase text-3xl md:text-5xl tracking-[0.2em] block mt-4">ajuda na sua marca.</span>
              </h2>
              <div className="space-y-8 font-serif font-light text-grey-500 text-lg md:text-xl leading-relaxed">
                <p>
                  No Coletivo, transformamos espaços em momentos marcantes. Seja um café da manhã de trabalho ou uma festa para seus convidados, nossos pátios, jardins e visual moderno são ideais para mostrar sua empresa.
                </p>
                <p>
                  Não cuidamos apenas do espaço físico. Cuidamos do clima do lugar. Do café preparado na hora à qualidade das luzes especiais, tudo é planejado para que seu evento aconteça da melhor forma possível.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-12 pt-10 border-t border-grey-50">
                <div className="space-y-4">
                  <span className="text-5xl md:text-6xl font-serif text-brand italic tracking-tighter leading-none">100%</span>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-grey-400 font-sans font-normal italic">Privacidade & Conforto</p>
                </div>
                <div className="space-y-4">
                  <span className="text-5xl md:text-6xl font-serif text-brand italic tracking-tighter leading-none">4K</span>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-grey-400 font-sans font-normal italic">Tecnologia de som e imagem</p>
                </div>
              </div>
            </div>
            
            <div className="reveal relative">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative border-[12px] border-grey-50 group">
                <img 
                  src="https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/2.jpg" 
                  alt="Event Experience" 
                  className="w-full h-full object-cover transition-all duration-[2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-grey-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="absolute bottom-16 left-16 right-16">
                  <p className="text-white text-3xl md:text-4xl font-serif italic tracking-tight">"Ajudamos a transformar eventos de trabalho em momentos inesquecíveis para sua marca."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIPOS DE EVENTO ─── */}
      <section className="py-32 md:py-64 bg-grey-50 border-y border-grey-100">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-left">
          <div className="text-left mb-32 reveal">
            <p className="text-brand text-[0.7rem] uppercase tracking-[0.5em] mb-8 font-normal font-sans italic">Formatos Especiais</p>
            <h2 className="font-serif text-4xl md:text-7xl lg:text-8xl text-grey-900 tracking-tighter leading-[0.8]">Sua ideia, <br /><span className="italic text-brand font-light uppercase text-3xl md:text-5xl tracking-[0.22em] block mt-8">nosso palco.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 xl:gap-16">
            {eventTypes.map((event, i) => (
              <div 
                key={i} 
                className="reveal group bg-white rounded-[3.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-grey-100/50 flex flex-col"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2s] ease-out" />
                  <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md text-brand px-6 py-2 rounded-full text-[0.6rem] uppercase tracking-[0.2em] font-sans font-normal shadow-xl border border-grey-100/50">
                    {event.capacity}
                  </div>
                </div>
                <div className="p-14 space-y-8 flex-grow">
                  <h3 className="font-serif text-3xl text-grey-900 tracking-tight leading-none">{event.title}</h3>
                  <p className="font-serif font-light text-grey-500 leading-relaxed text-lg">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOSPITALITY & TECH ─── */}
      <section className="py-32 md:py-64 bg-grey-900 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,107,63,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center">
            <div className="reveal space-y-16">
              <div className="space-y-8">
                <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-normal italic">Serviços Completos</div>
                <h2 className="font-serif text-4xl md:text-7xl leading-[0.9] tracking-tighter text-white">Trabalho <br /><span className="italic text-brand font-light">sem preocupações.</span></h2>
                <p className="font-serif font-light text-white/40 text-lg md:text-2xl leading-relaxed">
                  Tecnologia de alto nível para que você possa focar em seus convidados, enquanto nossa equipe cuida de todos os detalhes técnicos.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                {services.map((service, i) => (
                  <div key={i} className="space-y-6 group reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <div className="w-16 h-16 rounded-[1.2rem] bg-white/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-inner group-hover:rotate-6">
                      {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl mb-2 tracking-tight text-white leading-none">{service.title}</h4>
                      <p className="text-white/30 font-serif font-light text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="reveal relative aspect-square">
              <div className="absolute inset-0 bg-brand/5 rounded-full animate-pulse blur-3xl opacity-50" />
              <div className="relative z-10 w-full h-full bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 p-16 md:p-24 flex flex-col justify-between group overflow-hidden hover:border-brand/30 transition-all duration-1000">
                <div className="absolute -top-10 -right-10 p-12 text-brand/10 group-hover:text-brand/30 transition-all duration-1000 scale-150 rotate-12">
                  <Gem size={200} strokeWidth={0.5} />
                </div>
                <div className="space-y-8 relative z-10">
                  <p className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-normal italic">Qualidade Máxima</p>
                  <h3 className="font-serif text-5xl md:text-7xl leading-[0.9] tracking-tighter">Cuidado com os <br /><span className="italic text-brand font-light uppercase text-3xl tracking-[0.2em] block mt-4">Convidados.</span></h3>
                  <p className="text-white/40 font-serif font-light text-xl leading-relaxed">Nossa equipe especial, que atende grandes empresas, cuidará do conforto dos seus convidados, do início ao fim.</p>
                </div>
                <div className="pt-12 relative z-10">
                  <div className="flex items-center gap-6 text-brand font-serif italic text-2xl md:text-3xl tracking-tight">
                    <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center shadow-lg shadow-brand/10">
                      <Coffee size={32} />
                    </div>
                    Café preparado na hora incluso
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-32 md:py-64 px-6 md:px-16 text-center relative overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto space-y-16 reveal relative z-10">
          <h2 className="display-1 text-grey-900 leading-[0.8] tracking-tighter italic">Onde sua marca <br /><span className="italic text-brand font-light font-serif">faz história.</span></h2>
          <p className="font-serif font-light text-grey-500 text-lg md:text-3xl leading-relaxed max-w-3xl mx-auto py-8 italic leading-relaxed">
            Agende uma visita e descubra como nossos espaços podem ajudar no seu próximo grande evento empresarial.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-10 pt-10">
            <button 
              className="btn btn-brand shadow-xl shadow-brand/20 transition-all duration-500"
              onClick={() => (window as any).openModal?.('Visita Técnica Eventos')}
            >
              Agendar Visita
            </button>
            <button className="btn btn-outline-brand">
              Ver Informações
            </button>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQ />
    </div>
  );
}
