import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { FAQ } from '../components/FAQ';
import { 
  Leaf, 
  Coffee, 
  VolumeX, 
  Wind, 
  Calendar,
  Quote,
  X,
  ZoomIn
} from 'lucide-react';

export default function Comunidade() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
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
    {
      icon: <Wind size={20} />,
      title: "Yoga no Jardim",
      desc: "Aulas toda semana para começar o dia com mais energia e foco.",
      img: "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/Yoga.png"
    },
    {
      icon: <Coffee size={20} />,
      title: "Café Especial",
      desc: "Cafés selecionados para você fazer uma pausa e recarregar as energias.",
      img: "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/Cafe.png"
    },
    {
      icon: <VolumeX size={20} />,
      title: "Cantinhos de Foco",
      desc: "Espaços silenciosos para você trabalhar com foco total e sem interrupções.",
      img: "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/Canto-Foco.png"
    },
    {
      icon: <Leaf size={20} />,
      title: "Natureza por Perto",
      desc: "Espaços que unem o conforto de dentro com a beleza dos nossos jardins.",
      img: "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/Natureza.png"
    }
  ];

  const testimonials = [
    {
      quote: "No Coletivo, sinto que meu dia rende mais porque o ambiente respeita meu ritmo. As pausas no pátio são fundamentais para o meu equilíbrio.",
      name: "Clara Mendes",
      role: "Designer e Fundadora",
      img: "https://i.pravatar.cc/150?u=clara"
    },
    {
      quote: "O silêncio e as plantas me ajudam a manter a calma mesmo nos dias mais corridos. É um escritório que realmente cuida da gente.",
      name: "Thiago Rocha",
      role: "Desenvolvedor de Software",
      img: "https://i.pravatar.cc/150?u=thiago"
    },
    {
      quote: "Encontrei aqui um grupo de pessoas que, assim como eu, acredita que trabalhar bem é também saber descansar e se conectar com a natureza.",
      name: "Beatriz Luz",
      role: "Consultora Criativa",
      img: "https://i.pravatar.cc/150?u=beatriz"
    }
  ];

  const communityFaqs = [
    { q: 'Como as plantas ajudam no meu trabalho?', a: 'Ter verde por perto ajuda a reduzir o estresse, limpa o ar e traz uma sensação de calma que melhora muito a nossa concentração no dia a dia.' },
    { q: 'Posso participar das aulas de yoga?', a: 'Sim! Nossas atividades de bem-estar são abertas para todos os membros. Basta conferir os horários na recepção ou no nosso mural.' },
    { q: 'Como funcionam os espaços de silêncio?', a: 'Temos áreas específicas onde o silêncio é a regra, ideais para quando você precisa de foco total ou apenas um momento de tranquilidade para ler e pensar.' },
    { q: 'Existe algum evento focado em saúde mental?', a: 'Com certeza. Realizamos workshops e conversas mensais sobre gestão de energia, foco e cuidados com o corpo e a mente no ambiente corporativo.' }
  ];

  const events = [
    { 
      type: "fruta",
      title: "Dia da Fruta", 
      desc: "Coloridas, refrescantes e cheias de nutrientes, além de deliciosas, são fontes naturais de vitaminas, fibras e antioxidantes que ajudam no bem-estar e na qualidade de vida.",
      cta: "PARTICIPAR",
      img: "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/06/1.png",
    },
    { 
      type: "cuca",
      title: "Dia da Cuca", 
      dateText: "Dia 17 de Junho (Quarta-feira)",
      desc: "Disponível nas copas do Coletivo",
      cta: "VER DETALHES",
      img: "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/06/2.png",
    },
    { 
      type: "massage",
      title: "Quick Massage", 
      subtitle: "GS Massoterapia",
      instagram: "@gs_massoterapia",
      cta: "AGENDAR HORÁRIO",
      img: "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/06/3.png",
    },
    { 
      type: "arraia",
      title: "ARRAIÁ COLETIVO", 
      date: "26",
      month: "JUNHO",
      time: "19 HORAS",
      cta: "CONFIRMAR PRESENÇA",
      img: "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/06/4.png",
    }
  ];

  return (
    <div className="bg-[#F9F8F6]">
      {/* ─── HERO ─── */}
      <section id="comunidade-hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-grey-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/03/Design-sem-nome-4.jpg" 
            alt="Jardim Coletivo" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-grey-900 via-grey-900/60 to-grey-900" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full text-left">
          <div className="max-w-4xl py-12 space-y-12">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-[1.05] tracking-tighter drop-shadow-2xl">
              <motion.span className="block" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}>Trabalhar.</motion.span>
              <motion.span className="block italic font-light opacity-80" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}>Viver.</motion.span>
              <motion.span className="block text-brand" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}>Evoluir.</motion.span>
            </h1>
            
            <motion.p 
              className="text-white/60 font-serif font-light text-lg md:text-xl max-w-2xl leading-relaxed italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Mais que um escritório, um lugar que cuida de você. Unimos a beleza de uma casa histórica com muitas plantas e luz natural para ajudar você a ter mais foco e se sentir bem.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button className="btn btn-brand" onClick={() => (window as any).openModal()}>Conhecer os Espaços</button>
            </motion.div>
          </div>
        </div>

      </section>

      {/* ─── A FORÇA DO VERDE ─── */}
      <section className="py-32 md:py-48 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-16 text-left">
            <div className="reveal max-w-4xl space-y-12">
              <h2 className="font-serif text-5xl md:text-7xl text-grey-900 leading-[1.05] tracking-tighter">Onde a comunidade cresce, <br /><span className="italic text-brand font-light font-serif">os resultados aparecem.</span></h2>
              <p className="font-serif font-light text-grey-500 text-xl md:text-2xl leading-relaxed italic max-w-2xl">
                Espaços criados para trazer a natureza para o seu dia a dia, ajudando você a focar melhor e descansar a sua mente.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={f.title} className="reveal group text-left" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="relative aspect-[3/4] overflow-hidden mb-10 rounded-[3rem] shadow-2xl">
                  <img src={f.img} alt={f.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2.5s] ease-out" />
                  <div className="absolute top-8 right-8 w-14 h-14 backdrop-blur-xl bg-white/10 flex items-center justify-center text-white rounded-[1.5rem] border border-white/20 shadow-xl group-hover:bg-brand group-hover:text-white transition-all duration-700">
                    {f.icon}
                  </div>
                </div>
                <div className="space-y-4 px-2">
                  <h3 className="font-serif text-3xl text-grey-900 tracking-tight group-hover:text-brand transition-colors">{f.title}</h3>
                  <p className="font-serif font-light text-grey-500 text-lg leading-relaxed italic">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOSSA GENTE ─── */}
      <section className="py-32 md:py-48 px-6 md:px-16 bg-white overflow-hidden text-left">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32 space-y-12 reveal">
            <p className="text-brand text-[0.7rem] uppercase tracking-[0.6em] font-normal font-sans italic">Quem faz parte</p>
            <h2 className="font-serif text-5xl md:text-7xl text-grey-900 leading-[1.05] tracking-tighter">Nossa <br /><span className="italic text-brand font-light font-serif">Comunidade.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 xl:gap-20">
            {testimonials.map((t, i) => (
              <div key={t.name} className="reveal bg-grey-50/50 p-12 space-y-12 flex flex-col justify-between border border-grey-100 shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-700 rounded-[3.5rem] group" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="space-y-10">
                  <Quote size={56} className="text-brand/5 group-hover:text-brand/20 transition-colors duration-700" />
                  <p className="font-serif italic text-grey-700 text-2xl leading-relaxed tracking-tight">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex items-center pt-10 border-t border-grey-100">
                  <div>
                    <h4 className="font-sans font-normal text-lg text-grey-900 tracking-tight leading-none mb-2">{t.name}</h4>
                    <p className="font-sans text-[0.65rem] text-brand/60 uppercase tracking-[0.3em] font-normal italic">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALERIA DA COMUNIDADE ─── */}
      <section className="py-32 md:py-48 px-6 md:px-0 bg-[#F9F8F6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-20">
          <div className="space-y-8 reveal">
            <p className="text-brand text-[0.7rem] uppercase tracking-[0.6em] font-normal font-sans italic">— O que está rolando no Coletivo</p>
            <h2 className="font-serif text-5xl md:text-7xl text-grey-900 leading-[1.05] tracking-tighter">
              Fragmentos de uma rotina <br />
              <span className="italic text-brand font-light font-serif">nada comum.</span>
            </h2>
          </div>
        </div>

        <div className="relative flex overflow-hidden">
          <motion.div 
            className="flex gap-8 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 60, 
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {[
              "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0079-scaled.jpg",
              "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0062-scaled.jpg",
              "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0022-scaled.jpg",
              "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0003-scaled.jpg",
              "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0015-scaled.jpg",
              "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/2.jpg",
              "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/4.jpg",
              // Repeat for seamless loop
              "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0079-scaled.jpg",
              "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0062-scaled.jpg",
              "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0022-scaled.jpg",
              "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0003-scaled.jpg",
              "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0015-scaled.jpg",
              "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/2.jpg",
              "https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/4.jpg"
            ].map((img, i) => (
              <div 
                key={i} 
                className="relative w-[300px] md:w-[450px] aspect-[4/5] flex-shrink-0 overflow-hidden rounded-[3rem] shadow-2xl group"
              >
                <img 
                  src={img} 
                  alt={`Comunidade Coletivo ${i + 1}`} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out" 
                />
                <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── AGENDA DE EVENTOS ─── */}
      <section className="py-32 md:py-48 px-6 md:px-16 bg-white overflow-hidden text-left">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 reveal">
            <div className="max-w-2xl space-y-8">
              <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-normal font-sans italic">Eventos e Encontros</div>
              <h2 className="font-serif text-6xl md:text-8xl text-grey-900 leading-[1.05] tracking-tighter">Agenda de Eventos <br /><span className="italic text-brand font-light font-serif">Junho 2026.</span></h2>
            </div>
            <p className="font-serif font-light text-grey-500 text-xl md:text-2xl leading-relaxed max-w-sm italic">
              Nossa agenda é feita para ajudar o seu negócio e também a sua saúde.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((e, i) => {
              return (
                <div 
                  key={e.title} 
                  className="reveal group cursor-pointer flex flex-col h-full"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                  onClick={() => setSelectedImg(e.img)}
                >
                  <div className="bg-white rounded-[2rem] overflow-hidden border border-grey-150/60 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative">
                    <div className="aspect-[3/4.25] w-full bg-white flex items-center justify-center p-3 relative overflow-hidden">
                      <img 
                        src={e.img} 
                        alt={e.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-700 rounded-2xl" 
                      />
                      <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                      
                      {/* Zoom Indicator */}
                      <div className="absolute bottom-5 right-5 bg-[#1F1E1C]/90 backdrop-blur-md px-3 py-2 rounded-full text-white text-[0.65rem] font-sans font-semibold tracking-wider shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-1.5 z-10">
                        <ZoomIn size={12} className="text-brand" />
                        VER FLYER COMPLETO
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-serif text-lg text-grey-900 font-normal group-hover:text-brand transition-colors duration-300">
                      {e.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="relative py-40 md:py-64 px-6 md:px-16 overflow-hidden bg-grey-900 text-center">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/03/Design-sem-nome-4.jpg" 
            alt="Newsletter Background" 
            className="w-full h-full object-cover blur-[4px] scale-110"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-20">
          <div className="reveal space-y-14">
            <div className="text-brand text-[0.75rem] uppercase tracking-[0.6em] font-normal font-sans italic">Unidos em Porto Alegre</div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1] tracking-tighter">Faça parte <br /><span className="italic text-brand font-light font-serif">da nossa história.</span></h2>
            <p className="text-white/60 font-serif font-light text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed italic">
              Seja o primeiro a saber de convites exclusivos e novidades sobre o jeito moderno de trabalhar.
            </p>
          </div>

          <div className="reveal max-w-2xl mx-auto" style={{ transitionDelay: '.2s' }}>
            <form className="flex flex-col sm:flex-row gap-6 p-2 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 focus-within:border-brand/40 transition-all duration-700" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Seu melhor e-mail corporativo" 
                className="flex-grow bg-transparent px-10 py-6 rounded-full text-white placeholder:text-white/20 focus:outline-none font-serif italic text-lg"
                required
              />
              <button type="submit" className="btn btn-brand whitespace-nowrap shadow-2xl shadow-brand/40 hover:scale-105 transition-all duration-500">
                Inscrever agora
              </button>
            </form>
            <div className="flex items-center justify-center gap-4 mt-12 opacity-30 text-white">
              <Leaf size={16} />
              <p className="text-[0.65rem] uppercase tracking-[0.5em] font-sans font-normal">
                Respeitamos sua jornada. Sem excessos, apenas curadoria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQ 
        items={communityFaqs} 
        title="Dúvidas sobre o dia a dia."
        subtitle="Bem-estar e Rotina"
      />

      {/* ─── LIGHTBOX MODAL ─── */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-300 animate-fade-in"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            onClick={() => setSelectedImg(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 z-50 cursor-pointer"
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
          
          <div 
            className="relative max-w-[90vw] max-h-[90vh] p-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImg} 
              alt="Flyer ampliado" 
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </div>
  );
}
