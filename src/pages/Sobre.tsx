import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ } from '../components/FAQ';
import { Quote, Building2, Users2, Zap, X } from 'lucide-react';

export default function Sobre() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
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

    return () => revealObs.disconnect();
  }, []);

  return (
    <div className="bg-[#F9F8F6] overflow-hidden">
      {/* ─── HERO ─── */}
      <section id="sobre-hero" className="relative min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-20 bg-grey-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="http://coletivo.cc/wp-content/uploads/2025/03/Design-sem-nome-4.jpg" 
            alt="Somos Coletivo Background" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-grey-900 via-grey-900/60 to-grey-900" />
        </div>
        
        <div className="relative z-10 max-w-7xl text-center space-y-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-[0.7rem] uppercase font-bold font-sans tracking-[0.4em] italic"
          >
            A Alma do Nosso Espaço
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="display-1 text-white tracking-tighter leading-[0.9]"
          >
            Somos <br /><span className="italic text-brand font-light font-serif">Coletivo.</span>
          </motion.h1>
        </div>
      </section>

      {/* ─── MANIFESTO (A ALMA) ─── */}
      <section id="manifesto" className="py-24 md:py-48 px-6 md:px-16 bg-[#F9F8F6] relative overflow-hidden">
        {/* Subtle Background Ornament */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-24 reveal">
            <Quote className="text-brand/20 mx-auto mb-10" size={64} strokeWidth={1} />
            <h2 className="font-serif text-3xl md:text-6xl text-grey-900 mb-12 italic leading-[1.1] tracking-tight max-w-4xl mx-auto">
              Um lugar onde você <span className="text-brand">produz mais</span> e se sente parte de <span className="text-brand">algo maior.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-32">
            {[
              { 
                title: 'Empresas', 
                icon: <Building2 className="text-brand" size={32} />, 
                desc: 'Tudo o que sua empresa precisa para crescer, em espaços confortáveis e prontos para o trabalho.' 
              },
              { 
                title: 'Comunidade', 
                icon: <Users2 className="text-brand" size={32} />, 
                desc: 'Trabalhamos juntos. Acreditamos que crescer acompanhado é muito melhor do que sozinho.' 
              },
              { 
                title: 'Conexão', 
                icon: <Zap className="text-brand" size={32} />, 
                desc: 'Transformamos conversas simples em grandes parcerias para o seu negócio.' 
              }
            ].map((item, i) => (
              <div key={i} className="reveal group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl shadow-brand/5 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="font-serif text-3xl italic text-grey-900 mb-6">{item.title}</h3>
                <p className="font-sans font-light text-grey-500 text-xl leading-relaxed italic">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal border-t border-brand/10 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 font-sans font-light text-grey-600 text-lg md:text-xl leading-relaxed italic">
                <p>
                  Acreditamos que o sucesso não precisa vir com cansaço excessivo. No Coletivo, cada detalhe é pensado para respeitar o seu tempo e ajudar você a pensar melhor.
                </p>
                <p>
                  Cuidamos de você e da nossa rede de contatos. Criamos o lugar perfeito para você crescer com equilíbrio e bons resultados.
                </p>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand/10 rounded-[2.5rem] rotate-2 group-hover:rotate-0 transition-transform duration-700" />
                <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl">
                  <img 
                    src="http://coletivo.cc/wp-content/uploads/2025/03/Design-sem-nome-4.jpg" 
                    alt="Alma Coletivo" 
                    className="w-full h-full object-cover transition-all duration-1000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HISTÓRIA E VALOR HISTÓRICO ─── */}
      <section className="py-32 md:py-64 px-6 md:px-16 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center text-left">
          <div className="reveal space-y-12">

            <h2 className="font-serif text-4xl md:text-8xl text-grey-900 leading-[0.8] tracking-tighter">
              Nossa história ajuda a <span className="text-brand italic font-light">impulsionar</span> o seu futuro.
            </h2>
            <div className="space-y-8 font-serif font-light text-grey-500 text-lg md:text-2xl italic leading-relaxed">
              <p>
                Nossa história faz parte de Porto Alegre. Começamos na Casa 62, uma casa histórica de 1965 que cuidamos com muito carinho até hoje.
              </p>
              <p>
                Onde antes viviam famílias tradicionais, hoje trabalhamos com a energia de novas empresas. Unimos a beleza dos materiais antigos com a tecnologia atual, criando um ambiente que inspira confiança e inovação.
              </p>
            </div>
          </div>
          <div className="reveal relative group">
            <div className="absolute -inset-10 bg-brand/5 rounded-[4rem] -rotate-3 group-hover:rotate-0 transition-all duration-[2.5s] ease-out" />
            <div className="aspect-[4/5] overflow-hidden rounded-[3.5rem] shadow-2xl relative">
              <img 
                src="http://coletivo.cc/wp-content/uploads/2025/06/6.jpg" 
                alt="História Coletivo" 
                className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-grey-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── EQUIPE (A EQUIPE) ─── */}
      <section className="py-32 md:py-64 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24 reveal text-left">
            <p className="text-brand text-[0.65rem] uppercase tracking-[0.5em] mb-8 font-bold font-sans italic">Nosso Time</p>
            <h2 className="font-serif text-5xl md:text-8xl text-grey-900 mb-12 leading-[0.8] tracking-tighter">As pessoas por trás<br />da <span className="italic text-brand font-light">experiência.</span></h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
            {[
              { name: 'Jade', role: 'Recepção Casa 62', img: 'http://coletivo.cc/wp-content/uploads/2026/04/13.png' },
              { name: 'Thaty', role: 'Recepção Area 51', img: 'http://coletivo.cc/wp-content/uploads/2026/04/15.png' },
              { name: 'Brenda', role: 'Gerente de Comunidade', img: 'http://coletivo.cc/wp-content/uploads/2026/04/14.png' },
              { name: 'Luana', role: 'Gerente Operacional', img: 'http://coletivo.cc/wp-content/uploads/2026/04/12.png' },
              { name: 'Diogo', role: 'Diretor', img: 'http://coletivo.cc/wp-content/uploads/2026/04/13.png' },
              { name: 'Esdras', role: 'Sucesso do Cliente', img: 'http://coletivo.cc/wp-content/uploads/2026/04/15.png' },
              { name: 'Isadora', role: 'Comercial', img: 'http://coletivo.cc/wp-content/uploads/2026/04/14.png' },
              { name: 'Eduarda', role: 'Social Media', img: 'http://coletivo.cc/wp-content/uploads/2026/04/13.png' },
              { name: 'Nicolas', role: 'Marketing', img: 'http://coletivo.cc/wp-content/uploads/2026/04/15.png' }
            ].map((member, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="aspect-[3/4] overflow-hidden rounded-[1.5rem] mb-6 transition-all duration-700 shadow-xl shadow-black/5">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl italic text-grey-900 leading-tight">{member.name}</h3>
                <p className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-widest text-brand font-sans font-bold mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALERIA CASA 62 ─── */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16 md:mb-24">
            <div className="max-w-xl reveal text-left">
              <p className="text-brand text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.5em] mb-6 font-bold font-sans">Patrimônio & Design</p>
              <h2 className="font-serif text-4xl md:text-7xl text-grey-900 leading-[0.85] tracking-tighter">
                Casa 62 <br />
                <span className="italic text-brand font-light">Nossa Origem.</span>
              </h2>
            </div>
            <div className="max-w-xs reveal">
              <p className="font-serif font-light text-grey-400 text-base leading-relaxed">
                Cada detalhe da nossa primeira unidade foi pensado para preservar a história enquanto abraça o futuro do trabalho.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
            {[
              { img: "http://coletivo.cc/wp-content/uploads/2023/04/IMG_0879_edit-scaled.jpg", col: "col-span-2 md:col-span-8", aspect: "aspect-[16/10]" },
              { img: "http://coletivo.cc/wp-content/uploads/2023/04/IMG_0980_edit-v02.jpg", col: "col-span-1 md:col-span-4", aspect: "aspect-[4/5]" },
              { img: "http://coletivo.cc/wp-content/uploads/2023/03/IMG_0691_edit-scaled.jpg", col: "col-span-1 md:col-span-4", aspect: "aspect-square" },
              { img: "http://coletivo.cc/wp-content/uploads/2023/03/IMG_0571_edit-scaled.jpg", col: "col-span-1 md:col-span-4", aspect: "aspect-square" },
              { img: "http://coletivo.cc/wp-content/uploads/2023/03/IMG_0610_edit-scaled.jpg", col: "col-span-1 md:col-span-4", aspect: "aspect-square" },
              { img: "http://coletivo.cc/wp-content/uploads/2023/04/IMG_0909_edit.jpg", col: "col-span-2 md:col-span-12", aspect: "aspect-[3/1] md:aspect-[21/7]" },
              { img: "http://coletivo.cc/wp-content/uploads/2023/03/IMG_0630_edit-1-scaled.jpg", col: "col-span-1 md:col-span-6", aspect: "aspect-[16/10]" },
              { img: "http://coletivo.cc/wp-content/uploads/2025/06/4.jpg", col: "col-span-1 md:col-span-6", aspect: "aspect-[16/10]" },
              { img: "http://coletivo.cc/wp-content/uploads/2023/04/IMG_0732_edit.jpg", col: "col-span-1 md:col-span-5", aspect: "aspect-[4/5]" },
              { img: "http://coletivo.cc/wp-content/uploads/2022/12/coletivo62-petropolis-corredor.jpg", col: "col-span-2 md:col-span-7", aspect: "aspect-[16/10] md:aspect-[4/5] lg:aspect-[16/10]" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`${item.col} ${item.aspect} overflow-hidden rounded-2xl md:rounded-[2.5rem] reveal relative group cursor-zoom-in`}
                onClick={() => setSelectedImg(item.img)}
              >
                <img 
                  src={item.img} 
                  alt={`Casa 62 Detail ${i + 1}`} 
                  className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-105 ease-out"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIGHTBOX ─── */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-8 right-8 p-2 hover:bg-grey-50 rounded-full transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X className="w-6 h-6 text-grey-900" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
            >
              <img 
                src={selectedImg} 
                alt="Selected preview" 
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── GALERIA AREA 51 ─── */}
      <section className="py-24 md:py-32 bg-[#F9F8F6] border-t border-grey-100 overflow-hidden">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16 md:mb-24">
            <div className="max-w-xl reveal text-left">
              <p className="text-brand text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.5em] mb-6 font-bold font-sans">Inovação & Expansão</p>
              <h2 className="font-serif text-4xl md:text-7xl text-grey-900 leading-[0.85] tracking-tighter">
                Area 51 <br />
                <span className="italic text-brand font-light">Novo Horizonte.</span>
              </h2>
            </div>
            <div className="max-w-xs reveal">
              <p className="font-serif font-light text-grey-400 text-base leading-relaxed">
                Nossa segunda unidade traz uma estética contemporânea e industrial, focada na inovação e conexões globais.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
            {[
              { img: "http://coletivo.cc/wp-content/uploads/2022/12/Coletivo-area-51-frente.jpg", col: "col-span-2 md:col-span-12", aspect: "aspect-[21/9]" },
              { img: "http://coletivo.cc/wp-content/uploads/2025/06/1.jpg", col: "col-span-1 md:col-span-4", aspect: "aspect-square" },
              { img: "http://coletivo.cc/wp-content/uploads/2025/06/3.jpg", col: "col-span-1 md:col-span-4", aspect: "aspect-square" },
              { img: "http://coletivo.cc/wp-content/uploads/2023/04/IMG_0873-1.jpeg", col: "col-span-1 md:col-span-4", aspect: "aspect-square" },
              { img: "http://coletivo.cc/wp-content/uploads/2025/03/Design-sem-nome-5.jpg", col: "col-span-2 md:col-span-8", aspect: "aspect-[16/10] md:aspect-[21/9]" },
              { img: "http://coletivo.cc/wp-content/uploads/2025/03/Design-sem-nome-4.jpg", col: "col-span-1 md:col-span-4", aspect: "aspect-[4/5]" },
              { img: "http://coletivo.cc/wp-content/uploads/2023/04/IMG_0879.jpeg", col: "col-span-1 md:col-span-6", aspect: "aspect-[16/10]" },
              { img: "http://coletivo.cc/wp-content/uploads/2023/04/IMG_6134-1.jpeg", col: "col-span-1 md:col-span-6", aspect: "aspect-[16/10]" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`${item.col} ${item.aspect} overflow-hidden rounded-2xl md:rounded-[2.5rem] reveal relative group cursor-zoom-in shadow-xl shadow-black/5`}
                onClick={() => setSelectedImg(item.img)}
              >
                <img 
                  src={item.img} 
                  alt={`Area 51 Detail ${i + 1}`} 
                  className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-105 ease-out"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQ />


    </div>
  );
}
