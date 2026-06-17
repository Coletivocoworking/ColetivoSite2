import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FAQ } from '../components/FAQ';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Globe, 
  Mail, 
  PhoneCall, 
  Trophy,
  ArrowRight,
  Gem,
  CheckCircle2,
  Clock,
  Landmark
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EnderecoComercial() {
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

  const benefits = [
    { 
      icon: <Landmark size={24} />, 
      title: "Endereço Fiscal e Comercial", 
      desc: "Use nosso endereço para registrar sua empresa legalmente e passar confiança aos clientes." 
    },
    { 
      icon: <Mail size={24} />, 
      title: "Suas Cartas e Encomendas", 
      desc: "Recebemos tudo para você e avisamos assim que chegar algo novo." 
    },
    { 
      icon: <ShieldCheck size={24} />, 
      title: "Mais Confiança", 
      desc: "Use um endereço conhecido em Porto Alegre para mostrar que sua empresa é séria e profissional." 
    },
    { 
      icon: <Globe size={24} />, 
      title: "Apareça no Google", 
      desc: "Apareça no Google Maps com um endereço real para que seus clientes encontrem você com facilidade." 
    },
    { 
      icon: <Clock size={24} />, 
      title: "Rapidez e Sem Burocracia", 
      desc: "Contratação rápida e digital para você começar a usar o endereço agora." 
    },
    { 
      icon: <PhoneCall size={24} />, 
      title: "Receba seus Clientes", 
      desc: "Nossa equipe está pronta para receber seus clientes e ajudar no que for preciso." 
    }
  ];

  return (
    <div className="bg-grey-50 text-grey-900">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-16 overflow-hidden bg-grey-900 text-white">
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <img 
            src="https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/03/Design-sem-nome-4.jpg" 
            alt="Endereço Comercial Coletivo" 
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
            <h1 className="display-1 leading-[0.8] tracking-tighter">
              Sua Empresa nos <br />
              <span className="italic text-brand font-light">Melhores Endereços.</span>
            </h1>
            
            <p className="text-white/40 font-serif font-light text-lg md:text-xl max-w-3xl leading-relaxed">
              Dê ao seu negócio a segurança de um endereço real em Porto Alegre, sem os custos de alugar uma sala inteira.
            </p>

            <div className="flex flex-wrap gap-6 pt-10">
              <button 
                className="btn btn-brand"
                onClick={() => (window as any).openModal?.('Endereço Comercial')}
              >
                Ativar Endereço Agora
              </button>
              <a href="#unidades" className="btn btn-outline-white">
                Ver Unidades Disponíveis
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── MANIFESTO ─── */}
      <section className="py-32 md:py-64 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center">
          <div className="reveal space-y-12 text-left">
            <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-normal">Sua Empresa Bem Vista</div>
            <h2 className="font-serif text-4xl md:text-7xl text-grey-900 leading-[0.9] tracking-tighter">
              A importância de <br />
              <span className="italic text-brand font-light uppercase text-3xl md:text-5xl tracking-[0.2em] block mt-4">um bom endereço.</span>
            </h2>
            <div className="space-y-8 font-serif font-light text-grey-500 text-lg md:text-xl leading-relaxed">
              <p>
                No mundo dos negócios, o endereço da sua empresa é uma ótima primeira impressão. Estar presente nos melhores bairros da cidade passa mais confiança e seriedade antes mesmo da primeira reunião.
              </p>
              <p>
                Oferecemos mais do que uma caixa postal; oferecemos um apoio completo para suas cartas e encomendas, além de salas de reunião completas para seus encontros com clientes.
              </p>
            </div>
            <div className="flex items-center gap-8 p-10 bg-grey-50 rounded-[2.5rem] shadow-sm transform hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm border border-grey-100 flex-shrink-0">
                <Trophy size={32} />
              </div>
              <p className="font-serif italic text-xl text-grey-800 leading-snug">Coloque sua marca onde os grandes negócios e as parcerias de sucesso acontecem.</p>
            </div>
          </div>
          
          <div className="reveal relative">
             <div className="grid grid-cols-2 gap-8">
              <div className="space-y-12 mt-16">
                <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl group border-[12px] border-grey-50">
                  <img src="https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/6.jpg" className="w-full h-full object-cover transition-all duration-[2s] ease-out group-hover:scale-105" alt="Unidade Casa 62" />
                </div>
                <div className="p-12 bg-brand text-white rounded-[3rem] shadow-2xl transform -rotate-2">
                  <MapPin size={24} className="mb-4 opacity-50" />
                  <h4 className="font-serif text-2xl mb-1 tracking-tight">Casa 62</h4>
                  <p className="text-[0.6rem] uppercase tracking-widest opacity-50 font-sans font-normal leading-none font-sans">Moinhos de Vento</p>
                </div>
              </div>
              <div className="space-y-12">
                <div className="p-12 bg-white border border-grey-100 shadow-2xl rounded-[3rem] text-center transform rotate-2">
                  <Building2 size={24} className="mx-auto text-brand mb-4 opacity-30" />
                  <h4 className="font-serif text-2xl mb-1 text-grey-900 tracking-tight">Area 51</h4>
                  <p className="text-[0.6rem] uppercase tracking-widest text-grey-400 font-sans font-normal leading-none">Bela Vista</p>
                </div>
                <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl group border-[12px] border-grey-50">
                  <img src="https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/1.jpg" className="w-full h-full object-cover transition-all duration-[2s] ease-out group-hover:scale-105" alt="Unidade Area 51" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BENEFÍCIOS ─── */}
      <section className="py-32 md:py-64 bg-grey-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(74,107,63,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 text-left">
          <div className="text-left mb-32 reveal">
            <p className="text-brand text-[0.7rem] uppercase tracking-[0.5em] mb-8 font-sans italic">Credibilidade para o Negócio</p>
            <h2 className="display-1 leading-[0.8] mb-8 tracking-tighter text-white">Um endereço que <br /><span className="italic text-brand font-light">valoriza seu negócio.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-20">
            {benefits.map((benefit, i) => (
              <div 
                key={i} 
                className="reveal group space-y-10"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-brand border border-white/10 group-hover:bg-brand group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  {React.cloneElement(benefit.icon as React.ReactElement, { size: 28 })}
                </div>
                <div className="space-y-6">
                  <h3 className="font-serif text-3xl tracking-tight leading-none text-white">{benefit.title}</h3>
                  <p className="font-serif font-light text-white/40 text-lg leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="py-32 md:py-64 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-24 xl:gap-32 items-center">
            <div className="reveal space-y-16">
              <div className="space-y-10 text-left">
                <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-normal">Confiança e Seriedade</div>
                <h2 className="font-serif text-4xl md:text-7xl text-grey-900 leading-[0.9] tracking-tighter">Onde o sucesso <br /><span className="italic text-brand font-light uppercase text-3xl md:text-5xl tracking-[0.2em] block mt-4">começa.</span></h2>
                <p className="font-serif font-light text-grey-500 text-xl md:text-2xl leading-relaxed">
                  Sem papelada difícil e sem fiadores. Tudo o que você precisa para começar a trabalhar com um endereço de confiança.
                </p>
              </div>
              <div className="space-y-10 pt-10 border-t border-grey-50">
                {[
                  "Uso comercial e fiscal imediato",
                  "Controle tudo pelo nosso aplicativo",
                  "Descontos em salas de reunião",
                   "Acesso à nossa rede de contatos"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-8 text-grey-800 font-serif text-2xl italic tracking-tight reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={24} className="text-brand" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="reveal relative" style={{ transitionDelay: '.2s' }}>
              <div className="bg-grey-900 text-white p-16 md:p-24 rounded-[4rem] shadow-2xl relative overflow-hidden border border-white/5 group">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
                
                <div className="space-y-16 relative z-10 text-left">
                  <div className="space-y-6">
                    <p className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-normal italic">Apenas</p>
                    <div className="flex items-baseline gap-4">
                      <span className="text-7xl md:text-9xl font-serif tracking-tighter leading-none">R$ 250</span>
                      <span className="text-white/20 font-serif italic text-3xl pb-2">/mês</span>
                    </div>
                  </div>
                  
                  <div className="h-px bg-white/5 w-full" />
                  
                  <ul className="space-y-12">
                    <li className="flex justify-between items-center group/item">
                      <span className="font-serif text-2xl tracking-tight text-white/50 group-hover/item:text-white transition-colors duration-500">Endereço Comercial</span>
                      <div className="w-10 h-10 rounded-full border border-brand/30 flex items-center justify-center text-brand">
                        <CheckCircle2 size={20} />
                      </div>
                    </li>
                    <li className="flex justify-between items-center group/item">
                      <span className="font-serif text-2xl tracking-tight text-white/50 group-hover/item:text-white transition-colors duration-500">Endereço Fiscal</span>
                      <div className="w-10 h-10 rounded-full border border-brand/30 flex items-center justify-center text-brand">
                        <CheckCircle2 size={20} />
                      </div>
                    </li>
                    <li className="flex justify-between items-center group/item">
                      <span className="font-serif text-2xl tracking-tight text-white/50 group-hover/item:text-white transition-colors duration-500">Gestão de Cartas e Encomendas</span>
                      <div className="w-10 h-10 rounded-full border border-brand/30 flex items-center justify-center text-brand">
                        <CheckCircle2 size={20} />
                      </div>
                    </li>
                  </ul>

                  <button 
                    className="btn btn-brand w-full py-5 text-base font-normal tracking-widest shadow-2xl shadow-brand/40"
                    onClick={() => (window as any).openModal?.('Endereço Comercial - Plano Base')}
                  >
                    ATIVAR AGORA
                  </button>
                  <p className="text-center text-white/30 text-[0.6rem] uppercase tracking-[0.2em] font-sans font-normal">Sem tempo mínimo • Ativação em 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-32 md:py-64 px-6 md:px-16 text-center relative overflow-hidden bg-grey-50">
        <div className="max-w-6xl mx-auto space-y-16 reveal relative z-10">
          <h2 className="display-1 leading-[0.8] text-grey-900 tracking-tighter">Dê um passo <br /><span className="italic text-brand font-light">à frente.</span></h2>
          <p className="font-serif font-light text-grey-500 text-lg md:text-3xl leading-relaxed max-w-4xl mx-auto">
            Sua marca em destaque. Sua empresa protegida. No Coletivo, seu endereço ajuda sua marca a crescer com um ótimo endereço.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 pt-12">
            <button 
              className="btn btn-brand"
              onClick={() => (window as any).openModal?.('Visita Endereço Comercial')}
            >
              Começar Hoje
            </button>
            <Link to="/unidades" className="btn btn-outline-brand">
              Ver Nossos Espaços
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQ />
    </div>
  );
}
