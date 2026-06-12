import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FAQ } from '../components/FAQ';
import { 
  Wifi, 
  Coffee, 
  Users, 
  Leaf, 
  Zap, 
  Shield, 
  ArrowRight,
  Monitor,
  Heart,
  Wind,
  Sun,
  CheckCircle2
} from 'lucide-react';

export default function Espacos() {
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
    <div className="bg-[#F9F8F6]">
      {/* ─── HERO ESPAÇOS ─── */}
      <section id="espacos-hero" className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-16 overflow-hidden bg-grey-900">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="http://coletivo.cc/wp-content/uploads/2025/03/Design-sem-nome-4.jpg" 
            alt="Espaços Coletivo" 
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
            <p className="text-brand text-[0.7rem] uppercase tracking-[0.6em] font-sans font-bold">Tipos de Espaços</p>
            <h1 className="display-1 text-white leading-[0.8] mb-8 tracking-tighter">
              Trabalhe melhor <br /><span className="italic text-brand font-light">com mais</span> <br />conforto.
            </h1>
            <p className="text-white/40 font-serif font-light text-base md:text-xl max-w-2xl leading-relaxed">
              Espaços criados para ajudar você a criar e respeitar o seu tempo. Escolha o serviço que melhor se adapta ao seu momento.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-px bg-brand/30" />
              <p className="text-[0.6rem] uppercase tracking-[0.3em] font-sans font-bold text-white/40">Explore nossas soluções</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CATEGORIA: SALAS PRIVATIVAS (PRIMARY FOCUS) ─── */}
      <section id="privativo-empresa" className="py-32 md:py-56 px-6 md:px-16 overflow-hidden scroll-mt-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center">
            <div className="reveal space-y-12">
              <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-bold italic">Privacidade: Salas para Empresas</div>
              <h2 className="font-serif text-4xl md:text-7xl text-grey-900 leading-[0.9] tracking-tighter">
                Exclusividade & <br />
                <span className="italic text-brand font-light font-serif">Sua Identidade.</span>
              </h2>
              
              <div className="space-y-8 font-serif font-light text-grey-500 text-lg md:text-xl leading-relaxed">
                <p>
                  Nossas salas privativas são o coração do Coletivo. Projetadas para empresas que buscam solidez e privacidade sem abrir mão da energia de uma comunidade vibrante.
                </p>
                <p>
                  Aqui, o espaço se adapta ao seu negócio. Oferecemos infraestrutura de alto padrão, isolamento acústico e a liberdade de personalizar o ambiente com a cultura da sua marca.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-[1.2rem] bg-grey-50 flex items-center justify-center text-brand shadow-sm flex-shrink-0 group hover:bg-brand hover:text-white transition-all duration-500">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-grey-900 mb-1 tracking-tight">Segurança & Privacidade</h4>
                    <p className="text-sm text-grey-400 font-serif font-light leading-relaxed">Acesso controlado e ambientes isolados para total confidencialidade.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-[1.2rem] bg-grey-50 flex items-center justify-center text-brand shadow-sm flex-shrink-0 group hover:bg-brand hover:text-white transition-all duration-500">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-grey-900 mb-1 tracking-tight">Escalabilidade</h4>
                    <p className="text-sm text-grey-400 font-serif font-light leading-relaxed">Sua empresa cresce, nós crescemos com você. Layouts flexíveis.</p>
                  </div>
                </div>
              </div>

              <div className="pt-10 flex flex-wrap gap-6">
                <button 
                  className="btn btn-brand"
                  onClick={() => (window as any).openModal?.('Privativo Empresa')}
                >
                  Receber Proposta
                </button>
                <Link to="/espacos/privativo-empresa" className="btn btn-outline-brand">
                  Ver Localizações
                </Link>
              </div>
            </div>

            <div className="reveal relative" style={{ transitionDelay: '.2s' }}>
              <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-grey-50">
                <img 
                  src="http://coletivo.cc/wp-content/uploads/2025/06/6.jpg" 
                  alt="Escritório Privativo Coletivo" 
                  className="w-full h-full object-cover transition-all duration-[2s] ease-out scale-105"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 bg-grey-900 p-10 md:p-14 shadow-2xl rounded-[2.5rem] max-w-sm hidden md:block border-t-8 border-brand">
                <p className="font-serif italic text-xl text-white/80 leading-relaxed">
                  "Ter nossa própria sede dentro do Coletivo nos deu a solidez de um escritório corporativo com o frescor de uma rede moderna."
                </p>
                <div className="mt-8 h-px bg-brand w-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SALAS DE TIME (STARTUP) ─── */}
      <section id="privativo-startup" className="py-24 md:py-32 px-6 md:px-16 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="reveal order-2 lg:order-1 relative h-[500px] rounded-[3rem] overflow-hidden">
               <img 
                  src="http://coletivo.cc/wp-content/uploads/2025/03/Design-sem-nome-4.jpg" 
                  alt="Salas de Time Coletivo" 
                  className="w-full h-full object-cover"
                />
            </div>
            <div className="reveal order-1 lg:order-2 space-y-10">
              <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-bold">Crescimento: Salas de Time</div>
              <h2 className="font-serif text-4xl md:text-6xl text-grey-900 leading-tight tracking-tighter">Agilidade para <br /><span className="italic text-brand font-light">Seu Time Crescer.</span></h2>
              <p className="font-serif font-light text-grey-500 text-lg md:text-xl leading-relaxed">
                Ideal para squads e startups que precisam de um ambiente focado e integrado ao ecossistema. Espaços dinâmicos que incentivam a colaboração.
              </p>
              <div className="space-y-4">
                {[
                  "Infraestrutura de tecnologia redundante",
                  "Mobiliário ergonômico premium",
                  "Acesso 24/7 incluso",
                  "Internet de ultra velocidade"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-grey-800 font-serif text-lg">
                    <CheckCircle2 size={18} className="text-brand" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <button 
                  className="btn btn-brand"
                  onClick={() => (window as any).openModal?.('Privativo Startup')}
                >
                  Consultar Disponibilidade
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIFERENCIAIS COLETIVO ─── */}
      <section className="py-32 md:py-56 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24 reveal">
            <p className="text-brand text-[0.7rem] uppercase tracking-[0.5em] mb-8 font-sans font-bold">Padrão Coletivo</p>
            <h2 className="font-serif text-5xl md:text-7xl text-grey-900 leading-[0.9] tracking-tighter">Onde o trabalho <br /><span className="italic text-brand font-light">encontra a vida.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: <Zap size={32} />, title: 'Infraestrutura', desc: 'Mobiliário ergonômico, internet redundante e tecnologia de ponta para sua jornada não parar.' },
              { icon: <Users size={32} />, title: 'Conexão Real', desc: 'Muito além do networking: uma comunidade de parceiros e amigos focados em crescer juntos.' },
              { icon: <Leaf size={32} />, title: 'Ambiente Vivo', desc: 'Espaços com luz natural e vegetação, respeitando a arquitetura histórica e seu conforto.' }
            ].map((item, i) => (
              <div key={item.title} className="reveal p-16 bg-[#F9F8F6] rounded-[3rem] space-y-8 text-center shadow-sm hover:shadow-2xl transition-all duration-500 border border-grey-100/50 group" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-20 h-20 bg-white rounded-[1.5rem] flex items-center justify-center text-brand mx-auto shadow-inner group-hover:bg-brand group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  {item.icon}
                </div>
                <h3 className="font-serif text-3xl text-grey-900 tracking-tight">{item.title}</h3>
                <p className="font-serif font-light text-grey-400 text-base leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUTRAS CATEGORIAS ─── */}
      <section className="py-32 md:py-64 px-6 md:px-16 bg-grey-900 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,107,63,0.03)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-48 md:space-y-72 relative z-10">
          
          {/* ESTAÇÃO ROTATIVA */}
          <div id="estacao-rotativa" className="grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center scroll-mt-32">
            <div className="reveal space-y-12">
              <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-bold italic">Individuais: Mesa Rotativa</div>
              <h2 className="font-serif text-4xl md:text-7xl leading-[0.9] tracking-tighter">Liberdade &<br /><span className="italic text-brand font-light">Praticidade.</span></h2>
              <p className="font-serif font-light text-white/30 text-lg md:text-xl leading-relaxed">
                Para quem está sempre em movimento e quer um lugar de qualidade. Tenha a liberdade de escolher seu lugar a cada dia em ambientes amplos e inspiradores.
              </p>
              <div className="flex flex-wrap gap-6 pt-6">
                <button 
                  className="btn btn-brand"
                  onClick={() => (window as any).openModal?.('Mesa Rotativa')}
                >
                  Assinar Rotativo
                </button>
                <Link to="/espacos/estacao-rotativa" className="btn btn-outline-white">
                  Ver Detalhes
                </Link>
              </div>
            </div>
            <div className="reveal aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
              <img src="http://coletivo.cc/wp-content/uploads/2025/06/1.jpg" alt="Estação Rotativa" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-1000" />
            </div>
          </div>

          {/* ESTAÇÃO FIXA */}
          <div id="estacao-fixa" className="grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center scroll-mt-32">
            <div className="reveal order-2 lg:order-1 aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
              <img src="http://coletivo.cc/wp-content/uploads/2025/06/6.jpg" alt="Espaço Resident" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-1000" />
            </div>
            <div className="reveal order-1 lg:order-2 space-y-12">
              <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-bold italic">Dedicados: Mesa Fixa</div>
              <h2 className="font-serif text-4xl md:text-7xl leading-[0.9] tracking-tighter">Sua base de<br /><span className="italic text-brand font-light">foco total.</span></h2>
              <p className="font-serif font-light text-white/30 text-lg md:text-xl leading-relaxed">
                Para quem gosta de rotina. O plano Resident oferece uma mesa só sua em um ambiente compartilhado, unindo privacidade e comunidade.
              </p>
              <div className="flex flex-wrap gap-6 pt-6">
                <button 
                  className="btn btn-brand"
                  onClick={() => (window as any).openModal?.('Plano Resident')}
                >
                  Assinar Resident
                </button>
                <Link to="/espacos/estacao-fixa" className="btn btn-outline-white">
                  Localizações
                </Link>
              </div>
            </div>
          </div>

          {/* SALAS DE REUNIÃO */}
          <div id="sala-reuniao" className="grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center scroll-mt-32 pb-12">
            <div className="reveal order-2 lg:order-1 aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
              <img src="http://coletivo.cc/wp-content/uploads/2025/06/2.jpg" alt="Salas de Reunião" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-1000" />
            </div>
            <div className="reveal order-1 lg:order-2 space-y-12">
              <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-bold italic">Reuniões: Salas Profissionais</div>
              <h2 className="font-serif text-4xl md:text-7xl leading-[0.9] tracking-tighter text-white">Momentos de <br /><span className="italic text-brand font-light">Grandes Reuniões.</span></h2>
              <p className="font-serif font-light text-white/30 text-lg md:text-xl leading-relaxed">
                Ambientes com telas de alta qualidade, bom isolamento de barulho e atendimento completo para você e seus clientes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Videoconferência Pro-AV",
                  "Hospitalidade dedicada",
                  "Catering artesanal opcional",
                  "Ambiente Climatizado"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/50 font-serif text-lg italic tracking-tight">
                    <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
                      <CheckCircle2 size={12} className="text-brand" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-6 pt-6">
                <button 
                  className="btn btn-brand"
                  onClick={() => (window as any).openModal?.('Sala de Reunião')}
                >
                  Reservar Agora
                </button>
                <Link to="/espacos/sala-reuniao" className="btn btn-outline-white">
                  Ver Todas as Salas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQ />
    </div>
  );
}
