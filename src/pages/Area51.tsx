import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FAQ } from '../components/FAQ';
import { MapPin, Phone, Clock, Shield, Coffee, Wifi, Users, Layout as LayoutIcon, Trees, Rocket } from 'lucide-react';

export default function Area51() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el));
    return () => revealObs.disconnect();
  }, []);

  const galleries = [
    "http://coletivo.cc/wp-content/uploads/2025/03/Design-sem-nome-4.jpg",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200"
  ];

  return (
    <div className="bg-[#F9F8F6] text-[#1a1a1a]">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-16 overflow-hidden bg-grey-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="http://coletivo.cc/wp-content/uploads/2025/03/Design-sem-nome-4.jpg" 
            alt="Area 51" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-grey-900 via-transparent to-grey-900" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl space-y-12"
          >
            <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-normal italic">Unidade 02: Nosso Centro de Inovação</div>
            <h1 className="display-1 text-white leading-[0.8] mb-10 tracking-tighter">
              Area 51. <br />
              <span className="italic text-brand font-light font-serif">Inovação & Conexão.</span>
            </h1>
            <p className="font-serif font-light text-white/50 text-lg md:text-2xl max-w-2xl leading-relaxed italic">
              O centro da inovação em Petrópolis. Um espaço moderno feito para ajudar você a conhecer pessoas e fazer sua empresa crescer rápido.
            </p>
            <div className="flex flex-wrap gap-8 pt-6">
              <button className="btn btn-brand" onClick={() => (window as any).openModal?.('Area 51')}>Agendar Visita</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SOBRE A UNIDADE ─── */}
      <section id="sobre" className="py-32 md:py-64 px-6 md:px-16 max-w-7xl mx-auto text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center">
          <div className="reveal space-y-12">
            <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-normal italic">Um Lugar Moderno</div>
            <h2 className="font-serif text-4xl md:text-7xl text-grey-900 leading-[0.9] tracking-tighter">O salto para o <br /><span className="italic text-brand font-light">futuro.</span></h2>
            <div className="space-y-8 font-serif font-light text-grey-500 text-lg md:text-xl leading-relaxed italic">
              <p>
                Localizada na Avenida Lucas de Oliveira, a Area 51 levou o Coletivo para um novo nível de inovação. Ocupando um prédio marcante do início do século XX, o espaço foi transformado em um lugar que ajuda a criar ideias e novos negócios.
              </p>
              <p>
                Com mais de 2.100m², a unidade oferece espaços abertos, muitas plantas e áreas para relaxar que ajudam a criar e trabalhar junto com outras pessoas que estão conosco.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-16 pt-12 border-t border-grey-100">
              <div className="space-y-4">
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-grey-400 font-sans font-normal italic">Nossa Comunidade</p>
                <p className="font-serif text-4xl text-grey-900">+350 Membros</p>
              </div>
              <div className="space-y-4">
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-grey-400 font-sans font-normal italic">Tamanho Total</p>
                <p className="font-serif text-4xl text-grey-900">2.100 m²</p>
              </div>
            </div>
          </div>
          <div className="reveal relative group">
            <div className="absolute -inset-8 bg-brand/5 rounded-[4rem] -rotate-3 group-hover:rotate-0 transition-all duration-[2s] ease-out" />
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                alt="Area 51 Interior" 
                className="w-full aspect-[4/5] object-cover transition-all duration-[2s] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-grey-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── INFRAESTRUTURA ─── */}
      <section className="py-32 md:py-64 px-6 md:px-16 bg-grey-900 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,107,63,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-left">
          <div className="max-w-3xl mb-32 reveal">
            <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] mb-8 font-normal font-sans italic">Tudo o que oferecemos</div>
            <h2 className="font-serif text-4xl md:text-7xl leading-[0.9] tracking-tighter">O lugar perfeito para <br /><span className="italic text-brand font-light">crescer.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-16">
            {[
              { icon: <Rocket size={28} />, title: "Sedes Privativas", desc: "Salas para empresas que podem ser do jeito que você precisa para crescer." },
              { icon: <Shield size={28} />, title: "Salas de Reunião", desc: "Telas de alta qualidade para suas reuniões e apresentações importantes." },
              { icon: <Users size={28} />, title: "Mesa Rotativa", desc: "Espaços de trabalho feitos para quem gosta de novas parcerias no dia a dia." },
              { icon: <Wifi size={28} />, title: "Internet Rápida", desc: "Conexão de alta velocidade com muita estabilidade para seu trabalho." },
              { icon: <Trees size={28} />, title: "Nossos Jardins", desc: "Lindo pátio para eventos, reuniões ou para relaxar um pouco." },
              { icon: <Coffee size={28} />, title: "Cozinha e Café", desc: "Espaço com equipe para preparar seu café com grãos selecionados." }
            ].map((item, i) => (
              <div key={i} className="reveal group space-y-8" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand transition-all duration-700 group-hover:bg-brand group-hover:text-white group-hover:rotate-6 group-hover:scale-110 shadow-lg">{item.icon}</div>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-white tracking-tight group-hover:text-brand transition-colors">{item.title}</h3>
                  <p className="text-white/30 text-base font-serif font-light leading-relaxed max-w-sm italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALERIA ─── */}
      <section className="py-32 md:py-64 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-24 reveal text-left">
          <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] mb-8 font-normal font-sans italic">Atmosfera Moderna</div>
          <h2 className="font-serif text-4xl md:text-7xl text-black leading-[0.8] tracking-tighter">Perspectivas <br /><span className="italic text-brand font-light font-serif">Área 51.</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {galleries.map((img, i) => (
            <motion.div 
              key={i}
              className="reveal aspect-[3/4]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <img src={img} alt={`Gallery Area 51 ${i}`} className="w-full h-full object-cover rounded-[2.5rem] transition-all duration-[1s] cursor-pointer hover:scale-105" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── LOCALIZAÇÃO ─── */}
      <section className="py-32 md:py-64 px-6 md:px-16 bg-[#0a0a0a] text-white overflow-hidden relative text-left">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(138,43,226,0.1)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center">
          <div className="reveal order-2 lg:order-1">
             <div className="bg-white/5 backdrop-blur-3xl rounded-[4rem] p-12 md:p-16 border border-white/10 space-y-16 shadow-2xl">
               <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <MapPin size={32} className="text-white" />
                  </div>
                  <div className="space-y-2 pt-2">
                    <h3 className="font-serif text-3xl tracking-tight leading-none text-white">Onde estamos</h3>
                    <p className="text-white/40 font-serif font-light text-lg italic leading-relaxed">Av. Lucas de Oliveira, 894 — Petrópolis, Porto Alegre/RS</p>
                  </div>
               </div>
               <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-brand shadow-lg group-hover:bg-brand group-hover:text-white transition-all duration-500 group-hover:scale-110">
                    <Clock size={32} />
                  </div>
                  <div className="space-y-2 pt-2">
                    <h3 className="font-serif text-3xl tracking-tight leading-none text-white">Funcionamento</h3>
                    <p className="text-white/40 font-serif font-light text-lg italic leading-relaxed">Segunda a Sexta: 08:30 às 18:30 <br /> <span className="text-brand font-normal not-italic font-sans text-sm tracking-widest uppercase mt-2 block">24/7 para Empresas Residentes</span></p>
                  </div>
               </div>
               <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-brand shadow-lg group-hover:bg-brand group-hover:text-white transition-all duration-500 group-hover:scale-110">
                    <Phone size={32} />
                  </div>
                  <div className="space-y-2 pt-2">
                    <h3 className="font-serif text-3xl tracking-tight leading-none text-white">Suporte Hub</h3>
                    <p className="text-white/40 font-serif font-light text-lg italic leading-relaxed">(51) 3517-3806 <br /> hello@coletivo.cc</p>
                  </div>
               </div>
             </div>
          </div>
          <div className="reveal order-1 lg:order-2 space-y-12">
            <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-normal italic">Conexão Estratégica</div>
            <h2 className="font-serif text-4xl md:text-7xl leading-[0.9] tracking-tighter">O pulso da <br /><span className="italic text-brand font-light font-serif">Lucas de Oliveira.</span></h2>
            <p className="font-serif font-light text-white/40 text-lg md:text-2xl leading-relaxed lg:max-w-md italic">
              Conectamos você ao centro de negócios mais movimentado da cidade, trazendo rapidez e um bom endereço para sua empresa.
            </p>
            <div className="pt-10">
              <button 
                className="btn btn-brand shadow-xl shadow-brand/20 transition-all duration-500"
                onClick={() => (window as any).openModal?.('Visita Area 51')}
              >
                Agendar Visita
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQ />
    </div>
  );
}
