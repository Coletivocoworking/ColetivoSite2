import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Award, Users, MapPin, Target, BarChart3, ArrowRight } from 'lucide-react';

const Investidores = () => {
  return (
    <div className="pt-20">
      {/* ──────────────────────── HERO ──────────────────────── */}
      <section id="investidores-hero" className="relative h-[80vh] flex items-center px-6 md:px-16 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0022-scaled.jpg" 
            className="w-full h-full object-cover" 
            alt="Investidores" 
          />
        </div>
        
        <div className="relative z-10 max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-brand/20 border border-brand/30 rounded-full text-brand font-mono text-xs tracking-widest uppercase mb-8"
          >
            Opportunities for Growth
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-6xl md:text-9xl text-white leading-[0.85] tracking-tighter mb-12"
          >
            Escalando o <br />
            <span className="italic text-brand font-light">Ecossistema.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif font-light text-grey-400 text-xl md:text-2xl max-w-2xl leading-relaxed"
          >
            Invista em um modelo de negócio validado que une ativos imobiliários, tecnologia e uma comunidade vibrante de alto valor.
          </motion.p>
        </div>
      </section>

      {/* ──────────────────────── METRICS ──────────────────────── */}
      <section className="py-24 bg-white px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: 'Ocupação Média', value: '92%' },
            { label: 'Retenção (LTV)', value: '18m+' },
            { label: 'Crescimento anual', value: '45%' },
            { label: 'Membros Ativos', value: '450+' },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="text-4xl md:text-5xl font-serif text-grey-900 mb-2">{stat.value}</div>
              <div className="text-sm uppercase tracking-widest text-grey-400 font-sans font-normal">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──────────────────────── PUBLICIDADE ──────────────────────── */}
      <section className="py-32 bg-[#F9F8F6] px-6 md:px-16" id="publicidade">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="font-serif text-5xl md:text-7xl text-grey-900 leading-[0.9] tracking-tighter">
                  Mídia & <br />
                  <span className="italic text-brand">Publicidade.</span>
                </h2>
                <p className="font-serif font-light text-grey-500 text-lg md:text-xl leading-relaxed">
                  Posicione sua marca onde a decisão acontece. O Coletivo é o ponto de encontro do PIB criativo e empresarial de Petrópolis.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { 
                    icon: <Target size={24} />, 
                    title: 'Telas Digitais', 
                    desc: 'Inserções em nossas TVs de alta definição localizadas em pontos de alta circulação.' 
                  },
                  { 
                    icon: <Users size={24} />, 
                    title: 'Eventos Proprietários', 
                    desc: 'Patrocínio de meetups, palestras e conferências exclusivas para networking.' 
                  },
                  { 
                    icon: <BarChart3 size={24} />, 
                    title: 'Brand Experience', 
                    desc: 'Ações de sampling e demonstração de produtos em ambiente de alto engajamento.' 
                  },
                  { 
                    icon: <TrendingUp size={24} />, 
                    title: 'Newsletter Exclusiva', 
                    desc: 'Reach direto na caixa de entrada dos tomadores de decisão da nossa base.' 
                  }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white rounded-3xl space-y-4 border border-grey-100 hover:shadow-xl transition-all duration-500">
                    <div className="text-brand">{item.icon}</div>
                    <h3 className="font-serif text-2xl text-grey-900 tracking-tight">{item.title}</h3>
                    <p className="font-serif font-light text-grey-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0015-scaled.jpg" 
                  className="w-full h-full object-cover" 
                  alt="Marketing no Coletivo" 
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand rounded-full blur-[80px] opacity-20 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────── FRANQUIAS ──────────────────────── */}
      <section className="py-32 md:py-56 px-6 md:px-16 bg-white overflow-hidden" id="franquias">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="font-serif text-5xl md:text-8xl text-grey-900 mb-10 leading-[0.8] tracking-tighter">
              Expansão <br />
              <span className="italic text-brand font-light">Franquias.</span>
            </h2>
            <p className="font-serif font-light text-grey-500 text-lg md:text-xl leading-relaxed">
              Leve a experiência Coletivo para sua região com o nosso suporte operacional, branding consolidado e tecnologia de gestão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Award size={32} />, 
                title: 'Know-how', 
                desc: 'Acesso total aos processos que tornaram o Coletivo referência em hospitalidade e produtividade.' 
              },
              { 
                icon: <MapPin size={32} />, 
                title: 'Curadoria de Imóveis', 
                desc: 'Apoio especializado na seleção de casarões históricos e retrofit para o conceito Coletivo.' 
              },
              { 
                icon: <TrendingUp size={32} />, 
                title: 'Gestão Inteligente', 
                desc: 'Software integrado para faturamento, acesso de membros e controle de custos automatizado.' 
              }
            ].map((card, i) => (
              <div key={i} className="p-16 bg-[#F9F8F6] rounded-[3rem] space-y-8 flex flex-col items-center text-center group hover:bg-black transition-colors duration-700">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-brand shadow-inner group-hover:bg-brand group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  {card.icon}
                </div>
                <h3 className="font-serif text-3xl text-grey-900 group-hover:text-white transition-colors duration-500">{card.title}</h3>
                <p className="font-serif font-light text-grey-400 text-lg leading-relaxed group-hover:text-grey-300 transition-colors duration-500">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <a 
              href="https://wa.me/5524992644262" 
              className="inline-flex items-center gap-4 bg-brand text-white px-12 py-6 rounded-full font-sans font-normal tracking-widest text-sm hover:scale-105 hover:bg-brand-dark transition-all duration-500 group"
            >
              SOLICITAR APRESENTAÇÃO DE FRANQUIA 
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ──────────────────────── CTA ──────────────────────── */}
      <section id="investidores-footer" className="py-32 bg-black px-6 md:px-16 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-serif text-5xl md:text-8xl text-white leading-[0.8] tracking-tighter mb-12">
            Pronto para <br />
            <span className="italic text-brand">investir no futuro?</span>
          </h2>
          <p className="font-serif font-light text-grey-400 text-xl md:text-2xl mb-16 leading-relaxed">
            Seja um parceiro de mídia ou um franqueado. Vamos construir o ecossistema mais relevante do Rio de Janeiro juntos.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:contato@coletivo.cc" 
              className="bg-white text-black px-12 py-6 rounded-full font-sans font-normal tracking-widest text-sm hover:scale-105 transition-all duration-500 w-full md:w-auto"
            >
              FALAR COM DIRETORIA
            </a>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 left-20 text-brand text-[20vw] font-serif italic select-none">Invest</div>
          <div className="absolute bottom-20 right-20 text-brand text-[20vw] font-serif italic select-none">Growth</div>
        </div>
      </section>
    </div>
  );
};

export default Investidores;
