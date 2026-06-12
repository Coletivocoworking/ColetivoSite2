import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FAQ } from '../components/FAQ';
import { 
  Leaf, 
  Coffee, 
  VolumeX, 
  Wind, 
  Calendar,
  Quote
} from 'lucide-react';

export default function Comunidade() {
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
      img: "http://coletivo.cc/wp-content/uploads/2025/06/5.jpg"
    },
    {
      icon: <Coffee size={20} />,
      title: "Café Especial",
      desc: "Cafés selecionados para você fazer uma pausa e recarregar as energias.",
      img: "http://coletivo.cc/wp-content/uploads/2025/06/3.jpg"
    },
    {
      icon: <VolumeX size={20} />,
      title: "Cantinhos de Foco",
      desc: "Espaços silenciosos para você trabalhar com foco total e sem interrupções.",
      img: "http://coletivo.cc/wp-content/uploads/2025/06/1.jpg"
    },
    {
      icon: <Leaf size={20} />,
      title: "Natureza por Perto",
      desc: "Espaços que unem o conforto de dentro com a beleza dos nossos jardins.",
      img: "http://coletivo.cc/wp-content/uploads/2025/06/7.jpg"
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
      date: "06", 
      month: "MAI", 
      title: "Mães e Filhos (Dia das Mães)", 
      subtitle: "Celebração • 08:30 - 10:30",
      cta: "SOLICITAR CONVITE",
      img: "http://coletivo.cc/wp-content/uploads/2025/06/5.jpg"
    },
    { 
      date: "08", 
      month: "MAI", 
      title: "Pet Day", 
      subtitle: "Comunidade • Dia Inteiro",
      cta: "TRAZER MEU PET",
      img: "http://coletivo.cc/wp-content/uploads/2025/06/8.jpg"
    },
    { 
      date: "13", 
      month: "MAI", 
      title: "Dia da Fruta", 
      subtitle: "Wellness • 09:00 - 11:00",
      cta: "PARTICIPAR",
      img: "http://coletivo.cc/wp-content/uploads/2025/06/2.jpg"
    },
    { 
      date: "15", 
      month: "MAI", 
      title: "Game Night", 
      subtitle: "Social • 18:00 - 21:00",
      cta: "RESERVAR LUGAR",
      img: "http://coletivo.cc/wp-content/uploads/2025/06/3.jpg"
    },
    { 
      date: "27", 
      month: "MAI", 
      title: "Círculo de Negócios Coletivo", 
      subtitle: "Networking • 10:00 - 12:00",
      cta: "INSCREVER-SE",
      img: "http://coletivo.cc/wp-content/uploads/2025/06/1.jpg"
    },
    { 
      date: "29", 
      month: "MAI", 
      title: "Quick Massage", 
      subtitle: "Relaxe • 08:00 - 12:00",
      cta: "AGENDAR HORÁRIO",
      img: "http://coletivo.cc/wp-content/uploads/2025/06/7.jpg"
    }
  ];

  return (
    <div className="bg-[#F9F8F6]">
      {/* ─── HERO ─── */}
      <section id="comunidade-hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-grey-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="http://coletivo.cc/wp-content/uploads/2025/03/Design-sem-nome-4.jpg" 
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
              <button className="btn btn-brand h-16 px-10" onClick={() => (window as any).openModal()}>Conhecer os Espaços</button>
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
                  <img src={f.img} alt={f.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2.5s] ease-out" />
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
            <p className="text-brand text-[0.7rem] uppercase tracking-[0.6em] font-bold font-sans italic">Quem faz parte</p>
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
                <div className="flex items-center gap-8 pt-10 border-t border-grey-100">
                  <div className="relative">
                    <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full transition-all duration-1000 object-cover border-2 border-white shadow-lg group-hover:scale-110" />
                    <div className="absolute -inset-2 rounded-full border border-brand/10 group-hover:border-brand/40 transition-colors duration-700 pointer-events-none" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-lg text-grey-900 tracking-tight leading-none mb-2">{t.name}</h4>
                    <p className="font-sans text-[0.65rem] text-brand/60 uppercase tracking-[0.3em] font-bold italic">{t.role}</p>
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
            <p className="text-brand text-[0.7rem] uppercase tracking-[0.6em] font-bold font-sans italic">— O que está rolando no Coletivo</p>
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
              "http://coletivo.cc/wp-content/uploads/2026/05/AREA_51_0079-scaled.jpg",
              "http://coletivo.cc/wp-content/uploads/2026/05/AREA_51_0062-scaled.jpg",
              "http://coletivo.cc/wp-content/uploads/2026/05/AREA_51_0022-scaled.jpg",
              "http://coletivo.cc/wp-content/uploads/2026/05/AREA_51_0003-scaled.jpg",
              "http://coletivo.cc/wp-content/uploads/2026/05/AREA_51_0015-scaled.jpg",
              // Repeat for seamless loop
              "http://coletivo.cc/wp-content/uploads/2026/05/AREA_51_0079-scaled.jpg",
              "http://coletivo.cc/wp-content/uploads/2026/05/AREA_51_0062-scaled.jpg",
              "http://coletivo.cc/wp-content/uploads/2026/05/AREA_51_0022-scaled.jpg",
              "http://coletivo.cc/wp-content/uploads/2026/05/AREA_51_0003-scaled.jpg",
              "http://coletivo.cc/wp-content/uploads/2026/05/AREA_51_0015-scaled.jpg"
            ].map((img, i) => (
              <div 
                key={i} 
                className="relative w-[300px] md:w-[450px] aspect-[4/5] flex-shrink-0 overflow-hidden rounded-[3rem] shadow-2xl group"
              >
                <img 
                  src={img} 
                  alt={`Comunidade Coletivo ${i + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out" 
                />
                <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── WELLNESS AGENDA ─── */}
      <section className="py-32 md:py-48 px-6 md:px-16 bg-white overflow-hidden text-left">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 reveal">
            <div className="max-w-2xl space-y-8">
              <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-bold font-sans italic">Eventos e Encontros</div>
              <h2 className="font-serif text-6xl md:text-8xl text-grey-900 leading-[1.05] tracking-tighter">Agenda <br /><span className="italic text-brand font-light font-serif">Wellness 2026.</span></h2>
            </div>
            <p className="font-serif font-light text-grey-500 text-xl md:text-2xl leading-relaxed max-w-sm italic">
              Nossa agenda é feita para ajudar o seu negócio e também a sua saúde.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((e, i) => (
              <div 
                key={e.title} 
                className="reveal group cursor-pointer"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl">
                  <img 
                    src={e.img} 
                    alt={e.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                  
                  <div className="absolute top-8 left-8 bg-white p-4 rounded-2xl text-center min-w-[70px] shadow-2xl">
                    <p className="font-serif text-3xl font-bold text-grey-900 leading-none">{e.date}</p>
                    <p className="text-[0.6rem] font-bold font-sans text-brand tracking-widest mt-1">{e.month}</p>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="w-full h-12 bg-white text-brand text-[0.6rem] font-bold font-sans uppercase tracking-[0.2em] rounded-xl hover:bg-brand hover:text-white transition-colors duration-300 shadow-xl">
                      {e.cta}
                    </button>
                  </div>
                </div>

                <div className="space-y-3 px-2">
                  <p className="text-brand text-[0.65rem] uppercase tracking-[0.2em] font-bold font-sans">{e.subtitle.split(' • ')[0]}</p>
                  <h4 className="font-serif text-2xl text-grey-900 leading-tight group-hover:text-brand transition-colors">{e.title}</h4>
                  <p className="text-grey-400 font-sans text-xs font-light tracking-wide">{e.subtitle.split(' • ')[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="relative py-40 md:py-64 px-6 md:px-16 overflow-hidden bg-grey-900 text-center">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="http://coletivo.cc/wp-content/uploads/2025/03/Design-sem-nome-4.jpg" 
            alt="Newsletter Background" 
            className="w-full h-full object-cover blur-[4px] scale-110"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-20">
          <div className="reveal space-y-14">
            <div className="text-brand text-[0.75rem] uppercase tracking-[0.6em] font-bold font-sans italic">Unidos em Porto Alegre</div>
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
              <button type="submit" className="btn btn-brand h-16 px-14 text-lg whitespace-nowrap shadow-2xl shadow-brand/40 hover:scale-105 transition-all duration-500">
                Inscrever agora
              </button>
            </form>
            <div className="flex items-center justify-center gap-4 mt-12 opacity-30 text-white">
              <Leaf size={16} />
              <p className="text-[0.65rem] uppercase tracking-[0.5em] font-sans font-bold">
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
    </div>
  );
}
