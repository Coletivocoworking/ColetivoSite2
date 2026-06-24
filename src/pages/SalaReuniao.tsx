import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FAQ } from '../components/FAQ';
import { 
  Wifi, 
  Coffee, 
  Users, 
  Zap, 
  Shield, 
  Tv, 
  Video, 
  Mic2,
  Calendar,
  Clock,
  Sparkles
} from 'lucide-react';

export default function SalaReuniao() {
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

  const technologies = [
    { icon: <Tv size={24} />, title: "Telas de Alta Qualidade", desc: "Telas grandes e nítidas para suas apresentações, sem fios espalhados no ambiente." },
    { icon: <Video size={24} />, title: "Videochamadas", desc: "Sistemas de alta qualidade com câmeras que seguem quem está falando." },
    { icon: <Mic2 size={24} />, title: "Som Perfeito", desc: "Microfones que tiram o eco e os barulhos de fora da sala de reunião." },
    { icon: <Wifi size={24} />, title: "Internet Própria", desc: "Conexão rápida e exclusiva para garantir que a chamada não caia." }
  ];

  const types = [
    { 
      title: "Sala de Decisões", 
      capacity: "Até 14 pessoas", 
      desc: "Perfeita para reuniões importantes e apresentações para investidores. Mesa grande e confortável.",
      img: "/images/hero/coletivo-coworking-espacos-hero.jpg"
    },
    { 
      title: "Sala para Conversas", 
      capacity: "2 a 4 pessoas", 
      desc: "Lugar reservado para entrevistas ou reuniões rápidas com poucas pessoas.",
      img: "/images/galeria/coletivo-coworking-espaco-interno-01.jpg"
    },
    { 
      title: "Sala de Criação", 
      capacity: "Até 8 pessoas", 
      desc: "Sala com paredes para escrever e móveis que você pode mudar de lugar como quiser.",
      img: "/images/galeria/coletivo-coworking-espaco-interno-03.jpg"
    }
  ];

  return (
    <div className="bg-grey-50 text-grey-900">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-16 overflow-hidden bg-grey-900">
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <img 
            src="/images/hero/coletivo-coworking-espacos-hero.jpg" 
            alt="Salas de Reunião Coletivo" 
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
              O Lugar Perfeito <br /><span className="italic text-brand font-light font-serif">para se Reunir.</span>
            </h1>
            
            <p className="text-white/40 font-serif font-light text-lg md:text-xl max-w-3xl leading-relaxed">
              Salas de reunião que misturam o estilo clássico de Porto Alegre com a melhor tecnologia para suas decisões mais importantes.
            </p>

            <div className="flex flex-wrap gap-6 pt-10">
              <button 
                className="btn btn-brand"
                onClick={() => (window as any).openModal?.('Reserva Sala de Reunião')}
              >
                Reservar Agora
              </button>
              <button className="btn btn-outline-white">
                Ver Horários Disponíveis
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── MANIFESTO ─── */}
      <section className="py-32 md:py-64 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center">
          <div className="reveal space-y-12 text-left">
            <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-normal">Privacidade e Qualidade</div>
            <h2 className="font-serif text-4xl md:text-7xl text-grey-900 leading-[0.9] tracking-tighter">
              Onde o futuro é <br />
              <span className="italic text-brand font-light uppercase text-3xl md:text-5xl tracking-[0.2em] block mt-4">construído.</span>
            </h2>
            <div className="space-y-8 font-serif font-light text-grey-500 text-lg md:text-xl leading-relaxed">
              <p>
                No Coletivo, sabemos que uma reunião é o momento de criar grandes ideias. Por isso, garantimos um lugar silencioso e focado.
              </p>
              <p>
                Você começa suas reuniões em segundos com apenas um toque. Nossa equipe cuida de tudo, do café ao atendimento, para você focar só na sua conversa.
              </p>
            </div>
            <div className="flex items-center gap-8 p-10 border-l-4 border-brand bg-grey-50 rounded-r-[2.5rem] shadow-sm transform hover:scale-105 transition-transform duration-500">
              <Shield className="text-brand flex-shrink-0" size={36} />
              <p className="font-serif italic text-xl text-grey-800 leading-relaxed italic">Salas com isolamento de som para garantir que ninguém ouça o que é falado lá dentro.</p>
            </div>
          </div>
          
          <div className="reveal relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative border-[12px] border-grey-50 group">
              <img 
                src="/images/hero/coletivo-coworking-espacos-hero.jpg" 
                alt="Sala de Reunião Board" 
                className="w-full h-full object-cover transition-all duration-[2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-grey-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
            <div className="absolute -bottom-16 -left-16 bg-brand text-white p-14 shadow-2xl rounded-[3rem] max-w-sm hidden xl:block border-t-8 border-white/20">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Sparkles size={32} />
              </div>
              <p className="font-serif italic text-2xl leading-relaxed italic">
                "O lugar ideal para fechar contratos com seriedade e tecnologia de ponta."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODALIDADES ─── */}
      <section className="py-32 md:py-64 bg-grey-50 border-y border-grey-100">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-left">
          <div className="text-left mb-32 reveal">
            <p className="text-brand text-[0.7rem] uppercase tracking-[0.5em] mb-8 font-sans italic">Temos a sala ideal para você</p>
            <h2 className="font-serif text-4xl md:text-7xl lg:text-8xl text-grey-900 tracking-tighter leading-[0.8]">Formatos de <br /><span className="italic text-brand font-light uppercase text-3xl md:text-5xl tracking-[0.22em] block mt-8">alta qualidade.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 xl:gap-16">
            {types.map((type, i) => (
              <div 
                key={i} 
                className="reveal group bg-white rounded-[3.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-grey-100/50 flex flex-col"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={type.img} alt={type.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2s] ease-out" />
                  <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md text-brand px-5 py-2 rounded-full text-[0.6rem] uppercase tracking-[0.2em] font-sans font-normal shadow-xl border border-grey-100/50 flex items-center gap-2">
                    <Users size={12} />
                    {type.capacity}
                  </div>
                </div>
                <div className="p-14 space-y-8 flex-grow text-left">
                  <h3 className="font-serif text-3xl text-grey-900 tracking-tight">{type.title}</h3>
                  <p className="font-serif font-light text-grey-500 leading-relaxed text-lg">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECNOLOGIA ─── */}
      <section className="py-32 md:py-64 bg-grey-900 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,107,63,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center">
            <div className="reveal space-y-16">
              <div className="space-y-8">
                <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-normal italic">Simples e fácil de usar</div>
                <h2 className="font-serif text-4xl md:text-7xl leading-[0.9] tracking-tighter text-white">Inteligência que <br /><span className="italic text-brand font-light">ajuda você.</span></h2>
                <p className="font-serif font-light text-white/40 text-lg md:text-2xl leading-relaxed">
                  Tudo é pensado para ser simples. Você chega, conecta seu computador e começa a usar tudo em segundos.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                {technologies.map((tech, i) => (
                  <div key={i} className="reveal space-y-6 group" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <div className="w-16 h-16 rounded-[1.2rem] bg-white/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-inner group-hover:rotate-6">
                      {React.cloneElement(tech.icon as React.ReactElement, { size: 28 })}
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl mb-2 tracking-tight text-white">{tech.title}</h4>
                      <p className="text-white/30 font-serif font-light text-sm leading-relaxed">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="reveal relative aspect-square">
              <div className="absolute inset-0 bg-brand/5 rounded-full animate-pulse blur-3xl opacity-50" />
              <div className="relative z-10 w-full h-full bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 p-20 flex items-center justify-center group overflow-hidden hover:border-brand/30 transition-all duration-1000">
                <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-1000 bg-[url('/images/ui/coletivo-textura-sala-reuniao.png')]" />
                <div className="relative z-10 bg-grey-900 p-10 rounded-full border border-white/10 shadow-2xl group-hover:scale-110 transition-transform duration-[1.5s] ease-out">
                  <Zap className="text-brand animate-pulse" size={120} strokeWidth={1} />
                </div>
                <div className="absolute inset-16 border border-brand/20 rounded-[3rem] animate-ping opacity-20 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOOKING SECTION ─── */}
      <section className="py-32 md:py-64 px-6 md:px-16 bg-white text-center sm:text-left">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="reveal space-y-8 text-center md:text-left">
             <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-normal italic">Reserva Simples</div>
            <h2 className="display-1 text-grey-900 leading-[0.8] tracking-tighter">Agende <br /><span className="italic text-brand font-light italic">agora.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 xl:gap-16 reveal">
            {[
              { icon: <Clock />, title: "Reserva Flexível", desc: "Reserve por hora, turno ou dia inteiro. Pague apenas pelas horas que usar." },
              { icon: <Calendar />, title: "Agendamento Online", desc: "Veja os horários disponíveis e reserve pelo nosso aplicativo." },
              { icon: <Coffee />, title: "Café e Lanches", desc: "Temos opções de café e lanches para seu time recarregar as energias." }
            ].map((item, i) => (
              <div key={i} className="p-14 bg-grey-50 rounded-[3rem] space-y-8 hover:translate-y-[-12px] transition-all duration-[1s] ease-out border border-grey-100 hover:border-brand/40 group shadow-sm hover:shadow-2xl">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm mx-auto md:mx-0 group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-700">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-serif text-2xl text-grey-900 mb-4 tracking-tight">{item.title}</h4>
                  <p className="text-grey-500 text-lg font-serif font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-20 reveal border-t border-grey-50 text-center">
            <button 
              className="btn btn-brand shadow-xl shadow-brand/20 transition-all duration-500"
              onClick={() => (window as any).openModal?.('Sala de Reunião')}
            >
              Falar com nossa Equipe
            </button>
            <div className="mt-16 flex items-center justify-center gap-6">
              <div className="w-12 h-px bg-grey-100" />
              <p className="text-grey-400 font-serif font-light text-2xl italic tracking-tight">A partir de <span className="text-grey-900 font-normal not-italic font-sans">R$ 120 / hora</span></p>
              <div className="w-12 h-px bg-grey-100" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQ />
    </div>
  );
}
