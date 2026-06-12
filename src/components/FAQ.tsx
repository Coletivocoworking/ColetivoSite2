import React from 'react';
import { motion } from 'motion/react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const defaultItems: FAQItem[] = [
  { q: 'O que está incluído nos planos de escritório?', a: 'Todos os planos incluem internet rápida, café à vontade, cuidado com suas cartas, descontos em salas de reunião e acesso a todas as áreas comuns e eventos.' },
  { q: 'Posso usar o endereço do Coletivo para minha empresa?', a: 'Sim, oferecemos planos de Endereço Comercial e Fiscal para você registrar sua empresa nos melhores endereços de Porto Alegre.' },
  { q: 'Como funciona o acesso às unidades?', a: 'Quem tem mesa fixa ou sala privativa pode entrar 24h por dia. Outros planos funcionam no horário comercial das unidades.' },
  { q: 'Existem salas para reuniões privativas?', a: 'Sim, nossas salas de reunião possuem isolamento de som e equipamentos de vídeo e áudio de alta qualidade para garantir sua privacidade.' }
];

export const FAQ: React.FC<FAQProps> = ({ 
  items = defaultItems, 
  title = "Tire suas dúvidas.",
  subtitle = "Perguntas Comuns",
  className = "bg-[#F3F2F0]"
}) => {
  return (
    <section className={`py-24 md:py-40 px-6 md:px-16 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-24 reveal">
          <p className="text-brand text-[0.65rem] uppercase tracking-[0.5em] mb-8 font-bold font-sans italic">{subtitle}</p>
          <h2 className="font-serif text-4xl md:text-6xl text-grey-900 leading-tight tracking-tighter italic">{title}</h2>
        </div>

        <div className="space-y-6 reveal">
          {items.map((faq, i) => (
            <motion.details 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 cursor-pointer group hover:shadow-xl transition-all duration-500 border border-transparent hover:border-brand/10"
            >
              <summary className="font-serif text-xl italic text-grey-900 list-none flex justify-between items-center pr-4">
                {faq.q}
                <span className="text-brand transition-transform group-open:rotate-45 text-2xl">+</span>
              </summary>
              <div className="mt-6 font-serif font-light text-grey-500 leading-relaxed italic border-t border-grey-50 pt-6">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
