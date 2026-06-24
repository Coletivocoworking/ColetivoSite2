import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FAQ } from '../components/FAQ';
import { 
  Wifi, 
  Coffee, 
  Users, 
  Leaf, 
  Shield, 
  ArrowRight,
  Heart,
  Wind,
  Sun,
  CheckCircle2,
  Lock,
  MapPin,
  CalendarDays
} from 'lucide-react';

export default function EstacaoFixa() {
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
    { icon: <Lock size={24} />, title: "Espaço Reservado", desc: "Sua mesa, do seu jeito. Gaveteiro privativo com chave incluso." },
    { icon: <Shield size={24} />, title: "Endereço Fiscal & Comercial", desc: "Sua empresa sediada em um dos endereços mais nobres da cidade." },
    { icon: <CalendarDays size={24} />, title: "Créditos para Reunião", desc: "Cota mensal generosa para receber seus clientes com profissionalismo." },
    { icon: <Wifi size={24} />, title: "Redundância de Rede", desc: "Link dedicado garantindo 100% de disponibilidade para seu fluxo." },
    { icon: <MapPin size={24} />, title: "Gestão de Correspondência", desc: "Recebimento e digitalização de documentos e encomendas." },
    { icon: <Coffee size={24} />, title: "Experiência Barista", desc: "Cafés de especialidade ilimitados para manter o foco." }
  ];

  return (
    <div className="bg-grey-50 text-grey-900">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-16 overflow-hidden bg-grey-900">
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <img 
            src="/images/hero/coletivo-coworking-espacos-hero.jpg" 
            alt="Estação Fixa Coletivo" 
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
              O lugar ideal <br /><span className="italic text-brand font-light">para o seu</span> <br />negócio.
            </h1>
            
            <p className="text-white/40 font-serif font-light text-lg md:text-xl max-w-2xl leading-relaxed">
              Estações fixas feitas para quem busca foco total e o conforto de um espaço dedicado no coração do Coletivo.
            </p>

            <div className="flex flex-wrap gap-6 pt-6">
              <button 
                className="btn btn-brand"
                onClick={() => (window as any).openModal?.('Estação Fixa')}
              >
                Agendar Visita
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── MANIFESTO ─── */}
      <section className="py-32 md:py-56 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center">
          <div className="reveal space-y-12">
            <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-normal">Trabalho Fixo</div>
            <h2 className="font-serif text-4xl md:text-7xl text-grey-900 leading-[0.9] tracking-tighter">
              Sua mesa está <br />
              <span className="italic text-brand font-light uppercase text-3xl md:text-5xl tracking-[0.2em] block mt-4">sempre pronta.</span>
            </h2>
            <div className="space-y-8 font-serif font-light text-grey-500 text-lg md:text-xl leading-relaxed">
              <p>
                O plano Resident é perfeito para quem busca tranquilidade. Chegue, acomode-se e sinta a diferença de um espaço que foi feito para você e respeita o seu ritmo.
              </p>
              <p>
                Sua mesa, sua identidade. Aqui, sua cadeira, seus equipamentos e seu trabalho encontram um lar definitivo. Tenha um ambiente com tudo pronto enquanto se conecta com outras pessoas que também estão crescendo.
              </p>
            </div>
            <div className="pt-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-grey-100 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500">
                  <ArrowRight size={20} />
                </div>
                <span className="font-serif italic text-lg text-grey-800">Conheça o plano Fixo</span>
              </div>
            </div>
          </div>
          
          <div className="reveal relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative border-[12px] border-grey-50">
              <img 
                src="/images/hero/coletivo-coworking-espacos-hero.jpg" 
                alt="Detalhe Estação Fixa" 
                className="w-full h-full object-cover transition-all duration-[2s] ease-out scale-105"
              />
            </div>
            <div className="absolute -bottom-16 -right-16 bg-white p-14 shadow-2xl rounded-[3rem] max-w-sm hidden md:block border-t-8 border-brand">
              <div className="w-12 h-12 bg-grey-50 rounded-2xl flex items-center justify-center text-brand mb-8">
                <Users size={24} />
              </div>
              <p className="font-serif italic text-xl text-grey-800 leading-relaxed">
                "Ter minha mesa fixa no Coletivo me deu a disciplina que eu precisava, sem perder a troca valiosa com outros empreendedores."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-8 h-px bg-grey-100" />
                <span className="text-[0.6rem] uppercase tracking-[0.2em] font-sans font-normal text-grey-400">Membro Coletivo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INFRAESTRUTURA ─── */}
      <section className="py-32 md:py-56 bg-grey-50 border-y border-grey-100">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-24 reveal">
            <p className="text-brand text-[0.7rem] uppercase tracking-[0.5em] mb-8 font-sans font-normal">Resident Privileges</p>
            <h2 className="font-serif text-4xl md:text-7xl text-grey-900 leading-[0.9] tracking-tighter mb-10">Tudo o que você <br /><span className="italic text-brand font-light">precisa para focar.</span></h2>
            <p className="font-serif font-light text-grey-500 text-lg leading-relaxed">Seu trabalho não pode parar. Cada detalhe foi pensado para ajudar você a produzir muito mais.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="reveal group p-14 bg-white rounded-[2.5rem] space-y-8 transition-all duration-500 hover:shadow-2xl border border-grey-100/50"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-grey-50 rounded-2xl flex items-center justify-center text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white group-hover:rotate-6">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-grey-900 mb-4 tracking-tight">{feature.title}</h3>
                  <p className="font-serif font-light text-grey-500 text-base leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BEM-ESTAR ─── */}
      <section className="py-32 md:py-56 px-6 md:px-16 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center">
          <div className="reveal relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="/images/galeria/coletivo-coworking-espaco-interno-05.jpg" 
                alt="Bem-estar Resident" 
                className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-grey-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-16 left-16 right-16">
                <p className="font-serif italic text-3xl text-white tracking-tight">Equilíbrio em cada estação de trabalho.</p>
              </div>
            </div>
          </div>
          
          <div className="reveal order-1 lg:order-2 space-y-16">
            <div className="space-y-10">
              <div className="text-brand text-[0.7rem] uppercase tracking-[0.5em] font-sans font-normal">Saúde e Foco</div>
              <h2 className="font-serif text-4xl md:text-7xl text-grey-900 leading-[0.9] tracking-tighter">Privacidade em <br /><span className="italic text-brand font-light uppercase text-3xl md:text-5xl tracking-[0.2em] block mt-4">ecossistema vivo.</span></h2>
              <p className="font-serif font-light text-grey-500 text-lg md:text-xl leading-relaxed">
                Nossas áreas Resident são posicionadas estrategicamente para garantir o silêncio e o foco que tarefas complexas exigem, mantendo a conectividade visual com o pulsar da nossa rede criativa.
              </p>
            </div>

            <div className="space-y-12">
              {[
                { icon: <Sun size={24} />, title: "Ergonomia de Elite", desc: "Mobiliário certificado e iluminação planejada para longas jornadas de alto foco." },
                { icon: <Wind size={24} />, title: "Climatização Precisa", desc: "Conforto térmico individualizado para que nada interrompa seu fluxo de pensamento." },
                { icon: <Leaf size={24} />, title: "Biofilia de Estação", desc: "Vegetação natural integrada ao seu campo de visão para alívio tensional imediato." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-[1.2rem] bg-grey-50 flex items-center justify-center text-brand flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-500">
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
        </div>
      </section>

      {/* ─── CTAs ─── */}
      <section className="py-32 md:py-64 px-6 md:px-16 text-center relative overflow-hidden bg-grey-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,107,63,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto space-y-16 reveal relative z-10">
            <h2 className="display-1 leading-[0.8] tracking-tighter">Escolha seu <br /><span className="italic text-brand font-light">lugar agora.</span></h2>
          <p className="font-serif font-light text-white/40 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto">
            O plano Resident é a melhor opção para quem busca um lugar fixo e produtivo. Garanta seu espaço hoje.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 pt-8">
            <button 
              className="btn btn-brand"
              onClick={() => (window as any).openModal?.('Estação Fixa')}
            >
              Agendar Visita
            </button>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQ />
    </div>
  );
}
