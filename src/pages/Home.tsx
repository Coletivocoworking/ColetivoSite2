import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { FAQ } from '../components/FAQ';
import { 
  MapPin,
  ArrowRight,
  Mic,
  Youtube
} from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

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
    <>
      {/* ──────────────────────── HOME ──────────────────────── */}
      <section id="home" className="relative min-h-[110vh] flex items-center px-6 md:px-16 pt-40 pb-40 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-70">
          <video className="w-full h-full object-cover scale-110" autoPlay loop muted playsInline>
            <source src="http://coletivo.cc/wp-content/uploads/2026/04/Video-Coletivo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full text-left">
          <h1 className="display-1 text-white mb-8 tracking-tighter leading-[1.05] md:leading-[1]">
            <motion.span className="block" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}>Onde seu</motion.span>
            <motion.span className="block" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.55, duration: 1, ease: [0.16, 1, 0.3, 1] }}>trabalho encontra</motion.span>
            <motion.span className="block italic font-light text-brand font-serif" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}>excelência.</motion.span>
          </h1>
          
          <motion.div 
            className="flex flex-wrap items-center gap-12 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.8 }}
          >
            <p className="text-white/60 font-serif font-light text-xl md:text-2xl max-w-lg leading-relaxed italic">
              Mais que um escritório, um ecossistema de pessoas, conexões e evolução. Um lugar que eleva sua rotina, seu foco e sua forma de trabalhar.
            </p>
            <div className="flex gap-8">
              <button className="btn btn-brand h-16 px-10" onClick={() => (window as any).openModal?.()}>Agendar Visita</button>
              <Link to="/sobre" className="btn btn-outline-white h-16 px-10">O Manifesto</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section id="intro" className="py-24 md:py-40 px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="reveal relative group">
          <div className="absolute -inset-4 bg-brand/5 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-700" />
          <img 
            src="http://coletivo.cc/wp-content/uploads/2025/03/Design-sem-nome-4.jpg" 
            alt="Ambiente Coletivo Coworking" 
            className="relative rounded-xl shadow-2xl w-full h-auto object-cover aspect-[4/5]"
            loading="lazy" 
          />
        </div>
          <div className="reveal space-y-8" style={{ transitionDelay: '.15s' }}>
            <p className="text-brand text-[0.7rem] uppercase tracking-[0.3em] font-medium font-sans">Sobre o Coletivo</p>
            <h2 className="font-serif text-4xl md:text-6xl text-black leading-tight">Onde produtividade encontra propósito.</h2>
            <div className="font-serif font-light text-grey-500 text-lg leading-relaxed space-y-6">
              <p>
                No Coletivo, acreditamos que o ambiente certo faz toda a diferença.
                Cada espaço foi pensado para ajudar você a focar e criar parcerias de verdade.
              </p>
              <p>
                Aqui, a praticidade encontra o bom gosto. Seu negócio cresce porque o barulho diminui e você consegue focar no que realmente importa.
              </p>
              <p>
                Mais do que um coworking, somos uma comunidade de pessoas que buscam o lugar ideal para transformar suas ideias em realidade.
              </p>
              <p className="text-brand font-bold pt-4 italic">
                Nossos endereços são o ponto de partida para um novo jeito de trabalhar.
              </p>
            </div>

          </div>
      </section>

      {/* ──────────────────────── STATS ──────────────────────── */}
      <div className="bg-white py-20 px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-y border-grey-100">
        <div className="reveal space-y-2">
          <div className="font-serif text-5xl text-brand">2</div>
          <div className="text-[0.6rem] uppercase tracking-[0.2em] text-grey-500 font-sans">Espaços em Petrópolis</div>
        </div>
        <div className="reveal space-y-2" style={{ transitionDelay: '.1s' }}>
          <div className="font-serif text-5xl text-brand">500+</div>
          <div className="text-[0.6rem] uppercase tracking-[0.2em] text-grey-500 font-sans">Empresas Ativas</div>
        </div>
        <div className="reveal space-y-2" style={{ transitionDelay: '.2s' }}>
          <div className="font-serif text-5xl text-brand">24/7</div>
          <div className="text-[0.6rem] uppercase tracking-[0.2em] text-grey-500 font-sans">Acesso Garantido</div>
        </div>
      </div>

      {/* ──────────────────────── ECOSSISTEMA: O HUB DE NEGÓCIOS ──────────────────────── */}
      <section id="ecossistema" className="py-24 md:py-40 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="reveal space-y-8">
              <p className="text-brand text-[0.7rem] uppercase tracking-[0.3em] font-medium font-sans">Ecossistema</p>
              <h2 className="font-serif text-5xl md:text-7xl text-black leading-tight tracking-tighter">Muito mais que um espaço.<br /><span className="italic text-brand">O lugar onde seu negócio cresce.</span></h2>
            </div>
            <div className="reveal" style={{ transitionDelay: '.15s' }}>
              <p className="font-serif font-light text-grey-500 text-xl leading-relaxed">
                O Coletivo é o ponto de encontro de quem quer fazer acontecer. Um ambiente vivo para criar parcerias, trocar ideias e crescer ao lado de pessoas que inspiram.
              </p>
            </div>
          </div>

          <div className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 opacity-80">
            {[
              'http://coletivo.cc/wp-content/uploads/2026/05/Frame-167.png',
              'http://coletivo.cc/wp-content/uploads/2026/05/Reina-logo.png',
              'http://coletivo.cc/wp-content/uploads/2026/04/10.png',
              'http://coletivo.cc/wp-content/uploads/2026/04/9.png',
              'http://coletivo.cc/wp-content/uploads/2026/04/8.png',
              'http://coletivo.cc/wp-content/uploads/2026/04/7.png',
              'http://coletivo.cc/wp-content/uploads/2026/04/6.png',
              'http://coletivo.cc/wp-content/uploads/2026/04/5.png',
              'http://coletivo.cc/wp-content/uploads/2026/04/4.png',
              'http://coletivo.cc/wp-content/uploads/2026/04/3.png',
              'http://coletivo.cc/wp-content/uploads/2026/04/2.png',
              'http://coletivo.cc/wp-content/uploads/2026/04/1.png'
            ].map((logo, i) => (
              <div key={i} className="h-56 flex items-center justify-center border border-grey-100 rounded-xl px-10 group hover:border-brand/20 hover:bg-brand/5 transition-all duration-700" style={{ transitionDelay: `${i * 0.05}s` }}>
                <img 
                  src={logo} 
                  alt={`Logo ${i + 1}`} 
                  className="max-w-[90%] max-h-36 object-contain transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          

        </div>
      </section>

      {/* ──────────────────────── COMUNIDADE TEASER ──────────────────────── */}
      <section id="comunidade-teaser" className="py-24 md:py-40 px-6 md:px-16 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal space-y-8">
            <p className="text-brand text-[0.7rem] uppercase tracking-[0.3em] font-medium font-sans">Vida no Coletivo</p>
            <h2 className="font-serif text-4xl md:text-6xl text-black leading-tight tracking-tight">Não é só sobre salas.<br /><span className="italic text-brand">É sobre conectar pessoas.</span></h2>
            <p className="font-serif font-light text-grey-500 text-lg leading-relaxed">
              Grandes parcerias nascem nos momentos de troca. Criamos um ambiente vivo onde o café vira oportunidade e as conversas nos corredores impulsionam o seu negócio.
            </p>

          </div>

          <div className="reveal grid grid-cols-2 gap-4" style={{ transitionDelay: '.2s' }}>
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80" alt="Yoga no Jardim" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80" alt="Café Orgânico" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80" alt="Zonas de Silêncio" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80" alt="Design Biofílico" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ──────────────────────── MANIFESTO ──────────────────────── */}
      <section id="manifesto" className="py-24 md:py-40 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mb-20">
          <p className="text-brand text-[0.7rem] uppercase tracking-[0.3em] mb-6 reveal font-sans">Essência</p>
          <h2 className="font-serif text-4xl md:text-6xl text-black leading-tight reveal" style={{ transitionDelay: '.1s' }}>O que acreditamos.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          <div className="reveal space-y-6" style={{ transitionDelay: '.15s' }}>
            <div className="w-12 h-12 text-brand">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v2" /><path d="m5 21 6-14" /><path d="m19 21-6-14" /><path d="M8 14h8" /><circle cx="12" cy="4" r="1" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-black">Arquitetura & Memória</h3>
            <p className="font-sans font-light text-grey-500 leading-relaxed text-sm">Não restauramos o passado por nostalgia. Restauramos porque o que foi construído com rigor merece continuar de pé.</p>
          </div>
          
          <div className="reveal space-y-6" style={{ transitionDelay: '.2s' }}>
            <div className="w-12 h-12 text-brand">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="15" width="18" height="5" rx="1" /><path d="M6 18h.01" /><path d="M9 18h.01" /><path d="M12 15V9" /><path d="M8.5 11.5a5 5 0 0 1 7 0" /><path d="M5.5 8.5a9 9 0 0 1 13 0" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-black">Infraestrutura</h3>
            <p className="font-serif font-light text-grey-500 leading-relaxed text-sm">Funcionalidade imperceptível é o nosso foco. Conectividade, tecnologia e mobiliário desaparecem para que o trabalho apareça.</p>
          </div>

          <div className="reveal space-y-6" style={{ transitionDelay: '.25s' }}>
            <div className="w-12 h-12 text-brand">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-black">Encontros</h3>
            <p className="font-serif font-light text-grey-500 leading-relaxed text-sm">No Coletivo, os melhores projetos nascem no intervalo entre uma reunião e outra.</p>
          </div>
        </div>
      </section>

      {/* ──────────────────────── ESPAÇO ──────────────────────── */}
      <section id="espaco" className="h-[80vh] flex flex-col md:flex-row bg-black overflow-hidden">
        <div 
          className="split-panel group cursor-pointer" 
          onClick={() => navigate('/unidades/casa-62')} 
        >
          <img src="http://coletivo.cc/wp-content/uploads/2025/06/6.jpg" alt="Casa 62" className="split-bg" loading="lazy" />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-1000" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-1000">
            <div className="text-white/30 text-[0.7rem] tracking-[0.6em] mb-4 font-sans font-bold">01</div>
            <h3 className="font-serif text-white text-5xl md:text-7xl mb-4">Casa 62</h3>
            <p className="text-white/40 text-[0.65rem] uppercase tracking-[0.3em] font-sans">Rua Jaime Telles, 62</p>
          </div>
        </div>
        <div 
          className="split-panel group border-t md:border-t-0 md:border-l border-white/5 cursor-pointer" 
          onClick={() => navigate('/unidades/area-51')}
        >
          <img src="http://coletivo.cc/wp-content/uploads/2025/03/Design-sem-nome-4.jpg" alt="Area 51" className="split-bg" loading="lazy" />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-1000" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-1000">
            <div className="text-white/30 text-[0.7rem] tracking-[0.6em] mb-4 font-sans font-bold">02</div>
            <h3 className="font-serif text-white text-5xl md:text-7xl mb-4">Area 51</h3>
            <p className="text-white/40 text-[0.65rem] uppercase tracking-[0.3em] font-sans">Av. Lucas de Oliveira, 894</p>
          </div>
        </div>
      </section>

      {/* ──────────────────────── INFRAESTRUTURA ──────────────────────── */}
      <section id="infraestrutura" className="py-24 md:py-40 px-6 md:px-16 bg-grey-100">
        <div className="max-w-4xl mb-20">
          <p className="text-brand text-[0.7rem] uppercase tracking-[0.3em] mb-6 reveal font-sans">Infraestrutura</p>
          <h2 className="font-serif text-4xl md:text-6xl text-black leading-tight reveal" style={{ transitionDelay: '.1s' }}>Excelência em cada detalhe</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {[
            { title: 'Escritórios Privativos', desc: 'Suítes corporativas exclusivas com máxima privacidade e personalização.', link: '/espacos/privativo-empresa' },
            { title: 'Sala de Reunião', desc: 'Ambientes equipados com tecnologia Pro-AV para decisões de alto impacto.', link: '/espacos/sala-reuniao' },
            { title: 'Escritórios Startups', desc: 'Espaços dinâmicos para times em fase de tração e crescimento acelerado.', link: '/espacos/privativo-startup' },
            { title: 'Endereço Comercial', desc: 'Sua empresa sediada nos endereços mais desejados de Porto Alegre.', link: '/empresas/endereco-comercial' },
            { title: 'Estação Rotativa', desc: 'Liberdade e networking em ambientes inspiradores e flexíveis.', link: '/espacos/estacao-rotativa' },
            { title: 'Estação Fixa', desc: 'Sua mesa dedicada em um ecossistema vibrante para foco absoluto.', link: '/espacos/estacao-fixa' }
          ].map((item, i) => (
            <div key={item.title} className="reveal service-card group" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="w-12 h-px bg-brand mb-8 transition-all duration-700 group-hover:w-20" />
              <h3 className="font-serif text-2xl text-black mb-4">{item.title}</h3>
              <p className="font-sans font-light text-grey-500 leading-relaxed text-sm mb-10">{item.desc}</p>
              {item.link && (
                <Link to={item.link} className="inline-flex items-center gap-3 text-brand text-[0.65rem] uppercase tracking-widest font-bold group-hover:gap-5 transition-all duration-500">
                  Explorar plano <ArrowRight size={14} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────────────── EVENTOS ──────────────────────── */}
      <section id="eventos-home" className="py-24 md:py-48 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-32 items-center">
            <div className="reveal space-y-10">
              <div className="space-y-6">
                <p className="text-brand text-[0.7rem] uppercase tracking-[0.4em] font-bold font-sans">Eventos</p>
                <h2 className="font-serif text-5xl md:text-7xl text-black leading-[1.1] tracking-tighter">O cenário ideal <br /><span className="italic text-brand font-light">para o seu evento corporativo.</span></h2>
                <p className="text-grey-500 font-serif text-xl font-light leading-relaxed">
                  Espaços exclusivos para workshops, treinamentos, reuniões estratégicas e experiências de marca no coração de Porto Alegre. Ambientes projetados para inspirar e gerar conexões de alto nível.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-4">
                {[
                  { title: "Workshops", desc: "Ambientes dinâmicos para aprendizado e cocriação." },
                  { title: "Treinamentos", desc: "Infraestrutura completa para capacitação de times." },
                  { title: "Lançamentos", desc: "O palco perfeito para apresentar novos projetos." },
                  { title: "Meetings", desc: "Salas de board para decisões que mudam o jogo." }
                ].map((item, i) => (
                  <div key={item.title} className="space-y-2">
                    <h4 className="font-serif text-xl text-black">{item.title}</h4>
                    <p className="text-sm text-grey-400 font-sans font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => (window as any).openModal?.('Locação Eventos')}
                  className="btn btn-brand h-16 px-12"
                >
                  Consultar Disponibilidade
                </button>
              </div>
            </div>

            <div className="reveal relative group" style={{ transitionDelay: '.2s' }}>
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-grey-50">
                <img 
                  src="http://coletivo.cc/wp-content/uploads/2025/06/PROPOSTA-EVENTOS.png" 
                  alt="Espaço para Eventos Coletivo" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" 
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-black p-10 rounded-[2rem] shadow-2xl max-w-xs hidden xl:block">
                <p className="text-white/60 font-serif italic text-lg leading-relaxed">
                  "Ambiente impecável. A infraestrutura de áudio e vídeo e o atendimento superaram nossas expectativas para o workshop."
                </p>
                <div className="mt-6 h-px w-10 bg-brand" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────── PARCERIAS ──────────────────────── */}
      <section id="parcerias" className="py-24 md:py-40 px-6 md:px-16 bg-black text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <p className="text-white/40 text-[0.7rem] uppercase tracking-[0.3em] reveal font-sans">Para Marcas</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight reveal" style={{ transitionDelay: '.1s' }}>O ambiente onde sua marca é vista importa tanto quanto o que ela comunica.</h2>
            <p className="font-serif font-light text-white/50 text-lg leading-relaxed reveal" style={{ transitionDelay: '.15s' }}>
              O Coletivo reúne líderes, executivos e profissionais que tomam decisões todos os dias, no mesmo endereço. Marcas que escolhem estar aqui não buscam exposição genérica. Buscam associação intencional.
            </p>
            <ul className="space-y-4 reveal" style={{ transitionDelay: '.2s' }}>
              {[
                'Presença diária nos espaços onde decisões acontecem',
                'Ativações e product placement em ambiente de alto valor',
                'Co-criação de eventos e experiências exclusivas para os membros',
                'Associação direta a um padrão de excelência reconhecível',
                'Acesso a uma rede de fundadores e executivos de Porto Alegre e região.'
              ].map((benefit) => (
                <li key={benefit} className="flex items-center gap-4 text-sm font-light text-white/70 font-sans">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="reveal pt-4" style={{ transitionDelay: '.3s' }}>
              <button className="btn btn-white" onClick={() => (window as any).openModal?.()}>Falar sobre Patrocínios</button>
            </div>
          </div>
          <div className="reveal relative" style={{ transitionDelay: '.2s' }}>
            <div className="aspect-[4/5] overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" 
                alt="Ativação de Marcas" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand p-8 rounded-lg hidden md:block">
              <p className="text-white font-serif text-xl italic text-brand-dark">Ativações de marca e eventos corporativos - Eventos para marcas que entendem o valor do ambiente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────── CTA REMOVED ──────────────────────── */}

      {/* ──────────────────────── PODCAST ──────────────────────── */}
      <section id="podcast" className="py-24 md:py-40 px-6 md:px-16 bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#4A6B3F" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.6,-31.3,86.9,-15.7,85.5,-0.8C84.1,14.1,78,28.2,69.2,40.4C60.4,52.6,48.9,62.9,35.8,70.1C22.7,77.3,8,81.4,-6.4,80.4C-20.8,79.4,-34.9,73.3,-47.1,64.2C-59.3,55.1,-69.6,43,-75.8,29.1C-82,15.2,-84.1,-0.5,-81.2,-15.1C-78.3,-29.7,-70.4,-43.2,-59.1,-51.4C-47.8,-59.6,-33.1,-62.5,-19.7,-69.7C-6.3,-76.9,5.8,-88.4,19.7,-88.4C33.6,-88.4,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 reveal">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center text-brand">
                <Mic size={24} />
              </div>
              <p className="text-brand text-[0.7rem] uppercase tracking-[0.3em] font-bold font-sans">Coletivo Podcast</p>
            </div>
            
            <h2 className="font-serif text-4xl md:text-7xl leading-tight">Quem constrói negócios tem muito a dizer.<br /><span className="italic text-brand">Nós perguntamos. Eles respondem.</span></h2>
            
            <p className="font-serif font-light text-white/40 text-lg md:text-xl leading-relaxed">
              Conversas profundas com empreendedores, criativos e líderes que estão moldando o futuro dos negócios em Porto Alegre e no mundo.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a href="https://www.youtube.com/@ColetivoWorkspace" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand group-hover:bg-brand/10 transition-all">
                  <Youtube size={18} />
                </div>
                <span className="text-[0.7rem] uppercase tracking-widest font-sans">YouTube</span>
              </a>
            </div>
          </div>

          <div className="relative reveal" style={{ transitionDelay: '.2s' }}>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative group">
              <img 
                src="http://coletivo.cc/wp-content/uploads/2026/04/nicolasvvaz_672419504_18576988249011815_7243819519612182986_n.jpg" 
                alt="Podcast Coletivo" 
                className="w-full h-full object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-brand text-[0.6rem] uppercase tracking-widest mb-2 font-sans font-bold">Último Episódio</p>
                <h3 className="font-serif text-2xl text-white">Nutrição, Bem-estar e Produtividade no Trabalho</h3>
              </div>
            </div>
            
            {/* Audio Wave Decoration */}
            <div className="absolute -bottom-6 -right-6 flex items-end gap-1 h-20">
              {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.4, 0.7, 0.5].map((h, i) => (
                <motion.div 
                  key={i}
                  className="w-1.5 bg-brand/40 rounded-full"
                  animate={{ height: [`${h * 100}%`, `${(h + 0.2) * 100}%`, `${h * 100}%`] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────── LOCALIZAÇÃO ──────────────────────── */}
      <section id="localizacao" className="py-24 md:py-40 px-6 md:px-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal relative aspect-square lg:aspect-auto lg:h-[600px] rounded-xl overflow-hidden transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.123!2d-51.196!3d-30.038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519783f6f4f4f4f%3A0x4f4f4f4f4f4f4f4f!2sAv.%20Lucas%20de%20Oliveira%2C%20894%20-%20Petr%C3%B3polis%2C%20Porto%20Alegre%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Coletivo"
            />
          </div>
          <div className="space-y-10">
            <p className="text-brand text-[0.7rem] uppercase tracking-[0.3em] reveal font-sans">Localização</p>
            <h2 className="font-serif text-4xl md:text-6xl text-black leading-tight reveal" style={{ transitionDelay: '.1s' }}>No coração de<br />Petrópolis.</h2>
            <p className="font-serif font-light text-grey-500 text-lg leading-relaxed reveal" style={{ transitionDelay: '.15s' }}>
              Estrategicamente posicionado no bairro mais charmoso e tradicional de Porto Alegre. Próximo aos melhores cafés, parques e centros empresariais da região.
            </p>
            <div className="space-y-6 reveal" style={{ transitionDelay: '.2s' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-grey-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-brand" />
                </div>
                <div>
                  <p className="font-serif text-xl text-black">Av. Lucas de Oliveira, 894</p>
                  <p className="text-grey-400 text-sm font-sans">Petrópolis, Porto Alegre - RS</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-grey-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-brand" />
                </div>
                <div>
                  <p className="font-serif text-xl text-black">Rua Jaime Telles, 62</p>
                  <p className="text-grey-400 text-sm font-sans">Petrópolis, Porto Alegre - RS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
