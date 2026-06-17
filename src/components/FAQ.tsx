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
        <div className="text-center mb-16 reveal">
          <p className="tag-label">{subtitle}</p>
          <h2 className="display-section text-grey-900 italic">{title}</h2>
        </div>

        <div className="space-y-4 reveal">
          {items.map((faq, i) => (
            <motion.details 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-5 md:p-6 cursor-pointer group transition-all duration-300 border border-grey-100 hover:border-brand/20 hover:shadow-sm"
            >
              <summary className="font-serif text-sm md:text-base text-grey-900 list-none flex justify-between items-center pr-2 font-normal italic select-none">
                {faq.q}
                <span className="text-brand transition-transform duration-300 group-open:rotate-45 text-xl font-light ml-4">+</span>
              </summary>
              <div className="mt-4 font-serif text-xs md:text-sm font-light text-grey-500 italic border-t border-grey-50 pt-4 leading-relaxed">
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
