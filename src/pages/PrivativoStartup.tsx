import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FAQ } from '../components/FAQ';
import { 
  Wifi, 
  Users, 
  Shield, 
  CheckCircle2, 
  Lock, 
  Building2, 
  Settings, 
  Users2,
  Zap,
  Globe,
  PieChart,
  Target
} from 'lucide-react';

export default function PrivativoStartup() {
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

  const startupFeatures = [
    { icon: <Zap size={24} />, title: "Flexibilidade", desc: "Contratos que mudam conforme o ritmo de crescimento da sua startup." },
    { icon: <Globe size={24} />, title: "Conexão com Inovação", desc: "Fique perto de outros fundadores, investidores e profissionais talentosos." },
    { icon: <PieChart size={24} />, title: "Ajuda e Mentorias", desc: "Participe de eventos para apresentar sua ideia e workshops para crescer." },
    { icon: <Users2 size={24} />, title: "Bons Talentos", desc: "Um lugar inspirador que ajuda a atrair e manter as melhores pessoas no seu time." },
    { icon: <Wifi size={24} />, title: "Internet Hiper Rápida", desc: "Internet preparada para muitas chamadas de vídeo e arquivos pesados." },
    { icon: <Lock size={24} />, title: "Seu Espaço, Sua Marca", desc: "Salas que você pode decorar para deixar com a cara do seu time." }
  ];

  return (
    <div className="bg-grey-50 text-grey-900">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-16 overflow-hidden bg-grey-900">
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <img 
            src="http://coletivo.cc/wp-content/uploads/2025/06/1.jpg" 
            alt="Escritórios Privativos Startup" 
            className="w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-grey-900 via-grey-900/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <h1 className="display-1 text-white leading-[0.8] mb-8 tracking-tighter">
              Faça sua <br /><span className="italic text-brand font-light">Startup Crescer.</span>
            </h1>
            
            <p className="text-white/40 font-serif font-light text-lg md:text-xl max-w-3xl leading-relaxed">
              Escritórios modernos e reservados em um lugar que respira inovação e ajuda seu time a crescer no dia a dia.
            </p>

            <div className="flex flex-wrap gap-6 pt-6">
              <button 
                className="btn btn-brand"
                onClick={() => (window as any).openModal?.('Privativo Startup')}
              >
                Reservar nossa Sala
              </button>
              <button className="btn btn-outline-white">
                Ver Nossos Espaços
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STARTUP MANIFESTO ─── */}
      <section className="py-32 md:py-64 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center">
          <div className="reveal space-y-16">
            <div className="space-y-10">
              <p className="text-brand text-[0.7rem] uppercase tracking-[0.4em] font-sans font-normal">Lugar de Inovação</p>
              <h2 className="font-serif text-4xl md:text-7xl text-grey-900 leading-[0.9] tracking-tighter">
                Onde as ideias <br />
                <span className="italic text-brand font-light uppercase text-3xl md:text-5xl tracking-[0.2em] block mt-4">saem do papel.</span>
              </h2>
              <p className="font-serif font-light text-grey-500 text-lg md:text-xl leading-relaxed">
                Nossas salas para startups são muito mais que um escritório. Aqui seu time foca no produto enquanto nós cuidamos de tudo o que o espaço precisa para funcionar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {startupFeatures.map((item, i) => (
                <div key={i} className="reveal group space-y-6">
                  <div className="w-14 h-14 bg-grey-50 rounded-2xl flex items-center justify-center text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white group-hover:rotate-6">
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
          
          <div className="reveal relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative border-[12px] border-grey-50 group">
              <img 
                src="http://coletivo.cc/wp-content/uploads/2025/06/1.jpg" 
                alt="Startup Suite" 
                className="w-full h-full object-cover transition-all duration-[2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
            <div className="absolute -bottom-16 -right-16 bg-white p-14 shadow-2xl rounded-[3rem] max-w-sm hidden xl:block border-t-8 border-brand">
              <div className="w-12 h-12 bg-grey-50 rounded-xl flex items-center justify-center text-brand mb-8 font-serif italic text-2xl">
                <Target size={24} />
              </div>
              <p className="font-serif italic text-2xl leading-relaxed text-grey-800">
                "No Coletivo, estamos sempre perto de novas ideias. Nosso time cresce mais a cada dia aqui."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-8 h-px bg-grey-100" />
                <span className="text-[0.6rem] uppercase tracking-[0.2em] font-sans font-normal text-grey-400">Fundador da TechSuite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-32 md:py-64 px-6 md:px-16 text-center relative overflow-hidden bg-grey-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,107,63,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto space-y-16 reveal relative z-10">
          <h2 className="display-1 text-white leading-[0.8] tracking-tighter">Sua jornada <br /><span className="italic text-brand font-light italic">começa aqui.</span></h2>
          <p className="font-serif font-light text-white/30 text-lg md:text-3xl leading-relaxed max-w-3xl mx-auto">
            Agende uma visita e sinta a energia de um lugar que vai ajudar sua startup a chegar mais longe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 pt-12">
            <button 
              className="btn btn-brand"
              onClick={() => (window as any).openModal?.('Visita Privativo Startup')}
            >
              Falar com a Equipe
            </button>
            <button className="btn btn-outline-white">
              Ver Fotos das Salas
            </button>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQ />
    </div>
  );
}
