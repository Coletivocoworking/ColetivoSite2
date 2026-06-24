import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FAQ } from '../components/FAQ';
import { 
  Shield, 
  Lock, 
  Settings, 
  Target,
  Briefcase,
  Layout as LayoutIcon,
  HardHat,
  Scale,
  Sparkles
} from 'lucide-react';

export default function PrivativoEmpresa() {
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

  const enterpriseFeatures = [
    { icon: <Shield size={24} />, title: "Segurança Máxima", desc: "Controle por digital, câmeras de alta qualidade e segurança 24h para sua empresa." },
    { icon: <Settings size={20} />, title: "Marca da sua Empresa", desc: "Você pode escolher os móveis e colocar a marca da sua empresa no escritório." },
    { icon: <Target size={24} />, title: "Silêncio e Privacidade", desc: "Paredes que não deixam o som passar, ideais para reuniões importantes." },
    { icon: <LayoutIcon size={24} />, title: "Escritório do Seu Jeito", desc: "Espaço que pode ser mudado para receber times de 10 a mais de 50 pessoas." },
    { icon: <HardHat size={24} />, title: "Equipe de Apoio", desc: "Garantimos que tudo funcione perfeitamente para sua empresa não parar." },
    { icon: <Scale size={24} />, title: "Contratos Seguros", desc: "Contratos feitos para atender todas as necessidades da sua empresa." }
  ];

  return (
    <div className="bg-grey-50 text-grey-900">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-16 overflow-hidden bg-grey-900">
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <img 
            src="https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/03/Design-sem-nome-4.jpg" 
            alt="Escritórios Privativos Empresa" 
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
              O Escritório Ideal <br /><span className="italic text-brand font-light font-serif">da sua Empresa.</span>
            </h1>
            
            <p className="text-white/40 font-serif font-light text-lg md:text-xl max-w-3xl leading-relaxed">
              Soluções completas para empresas que buscam privacidade, segurança e um ótimo endereço em Porto Alegre.
            </p>

            <div className="flex flex-wrap gap-6 pt-6">
              <button 
                className="btn btn-brand"
                onClick={() => (window as any).openModal?.('Privativo Empresa')}
              >
                Falar com nossa Equipe
              </button>
              <button className="btn btn-outline-white">
                Ver Opções de Salas
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── NARRATIVA CORPORATIVA ─── */}
      <section className="py-32 md:py-64 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center">
          <div className="reveal space-y-12 text-left">
            <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-normal">Segurança e Qualidade</div>
            <h2 className="font-serif text-4xl md:text-7xl text-grey-900 leading-[0.9] tracking-tighter">
              A segurança de um <br />
              <span className="italic text-brand font-light uppercase text-3xl md:text-5xl tracking-[0.2em] block mt-4">escritório próprio.</span>
            </h2>
            <div className="space-y-8 font-serif font-light text-grey-500 text-lg md:text-xl leading-relaxed">
              <p>
                Nossas salas para empresas foram feitas para quem busca um lugar profissional e que passe confiança no mercado.
              </p>
              <p>
                É um espaço exclusivo para seu time, com internet própria e salas de reunião que garantem a privacidade que você precisa no dia a dia.
              </p>
            </div>
            <div className="flex items-center gap-8 p-10 border-l-4 border-brand bg-grey-50 rounded-r-[2.5rem] shadow-sm transform hover:scale-105 transition-transform duration-500">
              <Briefcase className="text-brand flex-shrink-0" size={36} />
              <p className="font-serif italic text-xl text-grey-800 leading-relaxed italic">Economize com infraestrutura e traga seu time para um lugar incrível que ajuda no clima de trabalho.</p>
            </div>
          </div>
          
          <div className="reveal relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative border-[12px] border-grey-50 group">
              <img 
                src="https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/6.jpg" 
                alt="Corporate Environment" 
                className="w-full h-full object-cover transition-all duration-[2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="absolute bottom-16 left-16 right-16">
                <p className="text-white text-3xl md:text-4xl font-serif italic tracking-tight">"Privacidade para você criar as melhores ideias."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ATRIBUTOS ENTERPRISE ─── */}
      <section className="py-32 md:py-64 bg-grey-900 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,107,63,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 text-left">
          <div className="text-left mb-32 reveal">
            <p className="text-brand text-[0.7rem] uppercase tracking-[0.5em] mb-8 font-sans">Apoio ao seu Negócio</p>
            <h2 className="font-serif text-4xl md:text-7xl leading-[0.9] tracking-tighter text-white">Tudo o que sua <br /><span className="italic text-brand font-light">empresa precisa.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {enterpriseFeatures.map((item, i) => (
              <div 
                key={i} 
                className="reveal group space-y-10"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-brand border border-white/10 group-hover:bg-brand group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-white tracking-tight">{item.title}</h3>
                  <p className="font-serif font-light text-white/40 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEGURANÇA & PRIVACIDADE ─── */}
      <section className="py-32 md:py-64 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center">
          <div className="reveal order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-12 mt-16">
                <img src="https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/2.jpg" className="rounded-3xl shadow-xl" alt="Private Office Detail" />
                <div className="p-10 bg-brand text-white rounded-[2.5rem] shadow-2xl">
                  <Lock size={36} className="mb-6 opacity-50" />
                  <h4 className="font-serif text-2xl mb-4 tracking-tight">Rede Segura</h4>
                  <p className="text-sm opacity-70 font-sans leading-relaxed">Internet rápida e segura só para a sua empresa trabalhar com tranquilidade.</p>
                </div>
              </div>
              <div className="space-y-12">
                <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-xl border-8 border-grey-50">
                  <img src="https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/4.jpg" className="w-full h-full object-cover" alt="Corporate Service" />
                </div>
                <img src="https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/5.jpg" className="rounded-3xl shadow-xl" alt="Board Room" />
              </div>
            </div>
          </div>
          
          <div className="reveal order-1 lg:order-2 space-y-16 text-left">
            <div className="space-y-10">
               <div className="text-brand text-[0.7rem] uppercase tracking-[0.4em] font-sans font-normal italic">Gestão Profissional</div>
              <h2 className="font-serif text-4xl md:text-7xl text-grey-900 leading-[0.9] tracking-tighter">Onde o profissionalismo <br /><span className="italic text-brand font-light uppercase text-3xl md:text-5xl tracking-[0.2em] block mt-4">encontra o conforto.</span></h2>
              <p className="font-serif font-light text-grey-500 text-lg md:text-xl leading-relaxed">
                Nossos espaços foram pensados para o conforto do seu time. Planejamos tudo para que sua empresa possa crescer de 20 para 100 pessoas no mesmo lugar.
              </p>
            </div>

            <div className="space-y-10 pt-8 border-t border-grey-50">
              <div className="flex gap-10 group">
                <div className="flex-shrink-0 w-1.5 h-20 bg-grey-100 group-hover:bg-brand transition-all duration-500 rounded-full" />
                <div className="space-y-2">
                  <h4 className="font-serif text-2xl text-grey-900 tracking-tight">Tudo Pronto para Usar</h4>
                  <p className="text-grey-400 font-serif font-light text-lg leading-relaxed italic">Cuidamos de tudo: da limpeza ao atendimento para você focar só no trabalho.</p>
                </div>
              </div>
              <div className="flex gap-10 group">
                <div className="flex-shrink-0 w-1.5 h-20 bg-grey-100 group-hover:bg-brand transition-all duration-500 rounded-full" />
                <div className="space-y-2">
                  <h4 className="font-serif text-2xl text-grey-900 tracking-tight">Trabalhe quando quiser</h4>
                  <p className="text-grey-400 font-serif font-light text-lg leading-relaxed italic">Liberdade total de horários com segurança e atendimento de qualidade.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CALL TO ACTION FINAL ─── */}
      <section className="py-32 md:py-64 px-6 md:px-16 text-center relative overflow-hidden bg-grey-50">
        <div className="max-w-5xl mx-auto space-y-16 reveal relative z-10">
          <h2 className="display-1 text-grey-900 leading-[0.8] tracking-tighter italic">Sua Sede <br /><span className="italic text-brand font-light">está pronta.</span></h2>
          <p className="font-serif font-light text-grey-500 text-lg md:text-3xl leading-relaxed max-w-3xl mx-auto">
            Agende uma visita com nossa equipe e veja como seu novo escritório está pronto para receber sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 pt-12">
            <button 
              className="btn btn-brand"
              onClick={() => (window as any).openModal?.('Visita Privativo Empresa')}
            >
              Falar com a Equipe
            </button>
            <button className="btn btn-outline-brand">
              Conhecer os Espaços
            </button>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQ />
    </div>
  );
}
