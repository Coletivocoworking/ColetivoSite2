import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { FAQ } from '../components/FAQ';
import { 
  MapPin, 
  Clock, 
  Car,
  Layout as LayoutIcon,
  Users,
  Briefcase,
  ArrowRight,
  Wifi,
  Coffee,
  Shield,
  CheckCircle2
} from 'lucide-react';

export default function Unidades() {
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
    <div className="bg-[#F9F8F6]">
      {/* ─── HERO UNIDADES ─── */}
      <section id="unidades-hero" className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-20 px-6 md:px-16 overflow-hidden bg-grey-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/03/Design-sem-nome-4.jpg" 
            alt="Unidades Coletivo" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-grey-900 via-transparent to-grey-900" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="tag-label">
              Nossos Espaços
            </p>
            
            <h1 className="display-hero text-white mb-16 tracking-tighter">
              <span className="block italic text-brand font-light">O lugar ideal</span>
              <span className="block">para o seu trabalho.</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-16 mt-20">
              <p className="body-lead text-white/65 max-w-md">
                Dois espaços incríveis no bairro Petrópolis, feitos para você levar o seu trabalho a outro nível.
              </p>
              <div className="w-px h-24 bg-white/10 hidden md:block" />
              <div className="space-y-4">
                <p className="text-white/20 text-[0.6rem] uppercase tracking-widest font-sans font-normal">Experiência</p>
                <p className="text-brand font-serif italic text-2xl">Arquitetura & Alma</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SEÇÃO CASA 62 ─── */}
      <section id="casa62" className="py-24 md:py-40 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-center">
            {/* Image Side */}
            <div className="lg:col-span-7 relative reveal cursor-pointer group" onClick={() => navigate('/unidades/casa-62')}>
              <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]">
                <img 
                  src="https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/1.jpg" 
                  alt="Casa 62 Fachada" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
              </div>
              <div className="absolute -bottom-12 -right-6 md:-right-12 bg-white p-12 md:p-16 text-black max-w-sm hidden md:block shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] rounded-3xl border-t-8 border-brand">
                <p className="tag-label text-brand">Estética & Legado</p>
                <h3 className="display-subsection text-grey-900 mb-6 italic group-hover:text-brand transition-colors">Casa 62</h3>
                <p className="body-main text-grey-500 leading-relaxed">
                  Onde a tradição encontra a qualidade do trabalho atual em um ambiente histórico cuidadosamente reformado.
                </p>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:col-span-5 lg:pl-28 space-y-12 reveal" style={{ transitionDelay: '.2s' }}>
              <div className="space-y-6">
                <h2 className="display-section text-grey-900 leading-[0.9]">
                  Tradição e <br />
                  <span className="italic text-brand font-light">Legado.</span>
                </h2>
                <div className="w-20 h-px bg-brand" />
              </div>

              <div className="body-lead text-grey-500 space-y-8">
                <p>
                  Localizada na Rua Jaime Telles, 62, esta unidade é um grande exemplo da arquitetura do século XX.
                </p>
                <p>
                  Cada detalhe foi preservado para criar um ambiente que une o conforto de uma casa histórica com a tecnologia necessária para empresas.
                </p>
              </div>

              <div className="pt-6 flex flex-col gap-8">
                <div className="flex items-center gap-4 text-grey-400 text-[0.65rem] uppercase tracking-[0.2em] font-sans font-normal">
                  <MapPin size={16} className="text-brand" />
                  Rua Jaime Telles, 62 — Petrópolis
                </div>
                <div className="flex flex-wrap gap-4">
                  <button 
                    className="btn btn-brand"
                    onClick={() => (window as any).openModal?.('Casa 62')}
                  >
                    Visitar Unidade
                  </button>
                  <Link to="/unidades/casa-62" className="btn btn-outline-brand">
                    Explorar Detalhes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEÇÃO AREA 51 ─── */}
      <section id="area51" className="py-24 md:py-40 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-center">
            {/* Text Side (First on Desktop) */}
            <div className="lg:col-span-5 lg:pr-28 order-2 lg:order-1 space-y-12 reveal">
              <div className="space-y-6">
                <h2 className="display-section text-grey-900 leading-[0.9]">
                  Inovação e <br />
                  <span className="italic text-brand font-light">Conexão.</span>
                </h2>
                <div className="w-20 h-px bg-brand" />
              </div>

              <div className="body-lead text-grey-500 space-y-8">
                <p>
                  A Area 51, na Av. Lucas de Oliveira, é o centro da inovação em Petrópolis. Um espaço moderno feito para estimular parcerias e o crescimento.
                </p>
                <p>
                  Com espaços abertos, muita luz natural e visual moderno, é o lugar ideal para empresas que buscam estar no centro das novidades.
                </p>
              </div>

              <div className="pt-6 flex flex-col gap-8">
                <div className="flex items-center gap-4 text-grey-400 text-[0.65rem] uppercase tracking-[0.2em] font-sans font-normal">
                  <MapPin size={16} className="text-brand" />
                  Av. Lucas de Oliveira, 894 — Petrópolis
                </div>
                <div className="flex flex-wrap gap-4">
                  <button 
                    className="btn btn-brand w-fit"
                    onClick={() => (window as any).openModal?.('Area 51')}
                  >
                    Agendar Visita
                  </button>
                  <Link to="/unidades/area-51" className="btn btn-outline-brand">
                    Explorar Detalhes
                  </Link>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="lg:col-span-7 relative order-1 lg:order-2 reveal cursor-pointer group" style={{ transitionDelay: '.2s' }} onClick={() => navigate('/unidades/area-51')}>
              <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]">
                <img 
                  src="https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/03/Design-sem-nome-4.jpg" 
                  alt="Area 51 Interior" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
              </div>
              <div className="absolute -top-12 -left-6 md:-left-12 bg-white p-12 md:p-16 text-black max-w-sm hidden md:block shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] rounded-3xl border-b-8 border-grey-900">
                <p className="tag-label text-grey-450">Hub & Comunidade</p>
                <h3 className="display-subsection text-grey-900 mb-6 italic group-hover:text-brand transition-colors">Area 51</h3>
                <p className="body-main text-grey-500 leading-relaxed">
                  O centro da inovação e troca de ideias, feito para ajudar na criatividade e no crescimento de novas parcerias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIFERENCIAIS GLOBAIS ─── */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="reveal space-y-6">
              <p className="tag-label">Excelência</p>
              <h2 className="display-section text-grey-900 leading-tight">Padrão Coletivo em cada detalhe.</h2>
              <p className="body-lead text-grey-500">
                Independente da unidade escolhida, você terá acesso à mesma infraestrutura de ponta e comunidade vibrante.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {[
                { icon: <Wifi size={20} />, title: 'Internet Fibra', desc: 'Conexão rápida com mais estabilidade e que funciona sempre.' },
                { icon: <Coffee size={20} />, title: 'Café Especial', desc: 'Cafés e chás selecionados liberados para todos os membros.' },
                { icon: <Shield size={20} />, title: 'Segurança 24h', desc: 'Monitoramento constante e acesso seguro para você.' },
                { icon: <Users size={20} />, title: 'Networking', desc: 'Eventos exclusivos e conexões reais com outras empresas.' }
              ].map((item, i) => (
                <div key={item.title} className="reveal space-y-4" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="display-subsection text-grey-900">{item.title}</h3>
                  <p className="body-main text-grey-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOCALIZAÇÃO COMPARATIVA ─── */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="reveal space-y-12">
              <div className="space-y-4">
                <p className="tag-label">Localização</p>
                <h2 className="display-section text-grey-900">Petrópolis como seu endereço.</h2>
              </div>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-grey-200 flex items-center justify-center group-hover:border-brand transition-colors">
                    <MapPin size={18} className="text-grey-400 group-hover:text-brand" />
                  </div>
                  <div>
                    <h4 className="display-subsection text-grey-900 mb-1">Casa 62</h4>
                    <p className="text-grey-500 text-sm font-sans">Rua Jaime Telles, 62</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-grey-200 flex items-center justify-center group-hover:border-brand transition-colors">
                    <MapPin size={18} className="text-grey-400 group-hover:text-brand" />
                  </div>
                  <div>
                    <h4 className="display-subsection text-grey-900 mb-1">Area 51</h4>
                    <p className="text-grey-500 text-sm font-sans">Av. Lucas de Oliveira, 894</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal relative aspect-square lg:aspect-auto lg:h-[600px] rounded-sm overflow-hidden contrast-125 transition-all duration-1000">
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
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-24 md:py-40 px-6 md:px-16 bg-[#1a1a1a] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          <h2 className="display-section text-white leading-tight">Escolha seu ponto de partida.</h2>
          <p className="body-lead text-white/40 max-w-2xl mx-auto">
            Seja na tradição da Casa 62 ou na inovação da Area 51, o Coletivo é o lugar onde seu negócio acontece.
          </p>
          <div className="reveal pt-8 flex flex-col sm:flex-row justify-center gap-6">
            <button 
              className="btn btn-white px-12 rounded-full"
              onClick={() => (window as any).openModal?.('Espaços')}
            >
              Agendar Visita
            </button>
            <button 
              className="btn btn-outline-white px-12 rounded-full"
              onClick={() => (window as any).openModal?.('Consultoria')}
            >
              Falar com a Equipe
            </button>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQ />
    </div>
  );
}
