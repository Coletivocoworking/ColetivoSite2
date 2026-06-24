import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Send, 
  Youtube,
  CheckCircle2, 
  AlertCircle,
  MapPin,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [isNavDarkMode, setIsNavDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSubOpen, setIsMobileSubOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [selectedUnit, setSelectedUnit] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Loader timeout - faster for better UX
    const timer = setTimeout(() => setIsLoaderVisible(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      const sy = window.scrollY;
      setIsScrolled(sy > 50);

      // Logic to detect dark sections more reliably
      const darkSections = ['home', 'sobre-hero', 'espaco', 'parcerias', 'cta', 'empresas-hero', 'empresas-planos', 'empresas-eventos', 'empresas-faq', 'empresas-newsletter', 'comunidade-hero', 'comunidade-newsletter', 'unidades-hero', 'casa62', 'area51', 'espacos-hero', 'podcast', 'investidores-hero', 'investidores-footer'];
      let isDark = false;
      
      // Default to dark if at the very top on pages with dark heroes
      const path = location.pathname;
      const darkPages = ['/', '/sobre', '/empresas', '/comunidade', '/espacos', '/unidades'];
      if (sy < 80 && darkPages.some(p => path === p || path.startsWith(p))) {
        isDark = true;
      }

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((sec) => {
        const htmlSec = sec as HTMLElement;
        const rect = htmlSec.getBoundingClientRect();
        // If the section is covering the top area (navbar area)
        // Check at a specific point on the navbar
        const navPoint = 40;
        if (rect.top <= navPoint && rect.bottom >= navPoint) {
          if (darkSections.includes(htmlSec.id)) {
            isDark = true;
          } else {
            isDark = false;
          }
        }
      });

      setIsNavDarkMode(isDark);
      document.body.classList.toggle('on-dark', isDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Restore Reveal Observer
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el));

    // Use requestAnimationFrame to ensure the DOM is ready for section detection
    const rafId = requestAnimationFrame(handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObs.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [location.pathname]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  
  const openModal = (unit = '') => {
    setSelectedUnit(unit);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    (window as any).openModal = openModal;
    return () => {
      delete (window as any).openModal;
    };
  }, [openModal]);

  const closeModal = () => {
    setIsModalOpen(false);
    setFormStatus('idle');
    document.body.style.overflow = '';
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (!data.nome || !data.email) {
      setFormStatus('error');
      return;
    }

    // Prepare WhatsApp message
    const phone = "555123911501";
    const message = `Olá! Gostaria de agendar uma visita.
    
*Nome:* ${data.nome}
*E-mail:* ${data.email}
*Telefone:* ${data.tel || 'Não informado'}
*Empresa:* ${data.empresa || 'Não informada'}
*Unidade:* ${data.unidade || 'Não informada'}
*Plano:* ${data.plano || 'Não informado'}
*Mensagem:* ${data.msg || 'Sem mensagem adicional'}`;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Simulate a small delay for UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setFormStatus('success');
  };

  const navLinks = [
    { 
      name: 'Espaços', 
      path: '/espacos',
      subItems: [
        { name: 'Estação Rotativa', path: '/espacos/estacao-rotativa' },
        { name: 'Estação Fixa', path: '/espacos/estacao-fixa' },
        { name: 'Escritório Privativo Startup', path: '/espacos/privativo-startup' },
        { name: 'Escritório Privativo Empresa', path: '/espacos/privativo-empresa' },
        { name: 'Sala de reuniões', path: '/espacos/sala-reuniao' },
        { name: 'Endereço comercial', path: '/empresas/endereco-comercial' },
        { name: 'Espaço para eventos', path: '/empresas/eventos' }
      ]
    },
    { name: 'Somos Coletivo', path: '/sobre' },
    { name: 'Comunidade', path: '/comunidade' },
    { name: 'Empresas', path: '/empresas' }
  ];

  return (
    <>
      {/* Loader */}
      <AnimatePresence>
        {isLoaderVisible && (
          <motion.div
            id="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.img
              src="/images/logo/coletivo-coworking-logo.png"
              alt="Coletivo"
              className="loader-logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp */}
      <button
        onClick={() => openModal()}
        className="whatsapp-float glass border-none cursor-pointer"
        title="Agendar Visita via WhatsApp"
      >
        <svg viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[2000] flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <motion.div
              className="bg-white w-full max-w-[640px] max-h-[90vh] overflow-y-auto p-8 md:p-16 relative shadow-2xl border border-grey-100 rounded-3xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
            >
              <button 
                className="absolute top-6 right-6 md:top-10 md:right-10 flex items-center gap-2 text-[0.6rem] uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity font-sans"
                onClick={closeModal} 
              >
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <line x1="1" y1="1" x2="11" y2="11" stroke="currentColor" strokeWidth="1" />
                  <line x1="11" y1="1" x2="1" y2="11" stroke="currentColor" strokeWidth="1" />
                </svg>
                Fechar
              </button>

              {formStatus !== 'success' ? (
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl mb-4 text-brand">Fale com a nossa Equipe</h2>
                  <p className="font-serif font-light text-grey-500 text-sm mb-10 leading-relaxed">Deixe seus dados e entraremos em contato para ajudar você a encontrar o melhor espaço para sua empresa.</p>

                  {formStatus === 'error' && (
                    <div className="bg-red-50 text-red-600 text-[0.7rem] p-4 mb-8 border-l-2 border-red-600 tracking-wide">
                      Por favor, preencha seu Nome e E-mail.
                    </div>
                  )}

                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[0.6rem] uppercase tracking-widest opacity-40 font-sans">Nome</label>
                        <input type="text" name="nome" placeholder="Seu nome" className="form-input" required />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[0.6rem] uppercase tracking-widest opacity-40 font-sans">E-mail</label>
                        <input type="email" name="email" placeholder="seu@email.com" className="form-input" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[0.6rem] uppercase tracking-widest opacity-40 font-sans">WhatsApp</label>
                        <input type="tel" name="tel" placeholder="(51) 9 0000-0000" className="form-input" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[0.6rem] uppercase tracking-widest opacity-40 font-sans">Sua Empresa</label>
                        <input type="text" name="empresa" placeholder="Nome da empresa (opcional)" className="form-input" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[0.6rem] uppercase tracking-widest opacity-40 font-sans">Onde você quer trabalhar?</label>
                        <select name="unidade" className="form-input" value={selectedUnit} onChange={(e) => setSelectedUnit(e.target.value)}>
                          <option value="">Selecione</option>
                          <option value="Casa 62">Casa 62</option>
                          <option value="Area 51">Area 51</option>
                          <option value="Ambas">Ambas as unidades</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[0.6rem] uppercase tracking-widest opacity-40 font-sans">O que você procura?</label>
                        <select name="plano" className="form-input">
                          <option value="">Selecione</option>
                          <option value="Rotativa">Mesa Rotativa</option>
                          <option value="Residente">Mesa Fixa</option>
                          <option value="Suite">Sala Privativa</option>
                          <option value="Patrocinio">Eventos / Parcerias</option>
                          <option value="NaoSei">Ainda não sei</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[0.6rem] uppercase tracking-widest opacity-40 font-sans">Como podemos ajudar? (opcional)</label>
                      <textarea name="msg" rows={3} placeholder="Escreva aqui sua dúvida..." className="form-input resize-none"></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="btn btn-brand w-full mt-4 disabled:opacity-50" 
                    >
                      {formStatus === 'submitting' ? 'Enviando...' : 'Pedir Contato'}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">✦</div>
                  <h3 className="font-serif text-3xl mb-4">Obrigado pelo contato!</h3>
                  <p className="font-serif font-light text-grey-500 max-w-xs mx-auto mb-10">Recebemos seus dados e nossa equipe vai ligar para você em breve.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://wa.me/5551999999999?text=Olá!%20Acabei%20de%20enviar%20uma%20mensagem%20pelo%20site%20e%20gostaria%20de%20falar%20com%20vocês."
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-brand flex items-center gap-2"
                    >
                      Chamar no WhatsApp <ArrowUpRight size={16} />
                    </a>
                    <button onClick={closeModal} className="btn btn-outline-brand">Fechar</button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-[1500] flex flex-col overflow-y-auto w-full h-full px-6 py-24"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Close button with high-contrast safety and comfortable touch area */}
            <button 
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 text-white/70 hover:text-white transition-all cursor-pointer"
              style={{ minWidth: '44px', minHeight: '44px' }}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="flex flex-col items-center gap-10 my-auto py-6">
              {navLinks.map((item) => (
                <div key={item.name} className="flex flex-col items-center w-full max-w-sm">
                  {item.subItems ? (
                    <div className="flex flex-col items-center w-full">
                      {/* Accordion trigger. Touching here opens subclass options easily */}
                      <button 
                        onClick={() => setIsMobileSubOpen(!isMobileSubOpen)}
                        className="text-white text-3xl font-serif hover:text-brand transition-colors flex items-center justify-center gap-3 cursor-pointer py-2 focus:outline-none"
                        style={{ minHeight: '48px' }}
                      >
                        {item.name}
                        <motion.span
                          animate={{ rotate: isMobileSubOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="inline-block text-white/50"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isMobileSubOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden flex flex-col items-center gap-4 bg-white/5 rounded-2xl p-4 w-full mt-3 border border-white/5 shadow-inner"
                          >
                            <Link
                              to={item.path}
                              className="text-brand text-xs uppercase tracking-[0.2em] font-sans font-medium py-2.5"
                              style={{ minHeight: '44px' }}
                              onClick={() => { setIsMobileMenuOpen(false); setIsMobileSubOpen(false); }}
                            >
                              Ver Todos os Espaços
                            </Link>
                            <div className="h-px bg-white/10 w-1/2" />
                            {item.subItems.map(sub => (
                              <Link 
                                key={sub.name}
                                to={sub.path}
                                className="text-white/70 hover:text-brand text-xs uppercase tracking-widest transition-colors font-sans py-2.5 text-center active:scale-95"
                                style={{ minHeight: '44px' }}
                                onClick={() => { setIsMobileMenuOpen(false); setIsMobileSubOpen(false); }}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      to={item.path} 
                      className="text-white text-3xl font-serif hover:text-brand transition-colors py-2 block text-center"
                      style={{ minHeight: '48px' }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Contact / High contrast buttons & socials */}
            <div className="mt-auto pt-8 flex flex-col items-center gap-4 w-full max-w-sm mx-auto">
              <a 
                href="https://coletivo.conexa.app/index.php?r=site/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-brand w-full py-3.5 text-center"
                style={{ minHeight: '48px' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Área do Cliente
              </a>
              <button 
                className="btn btn-outline-white w-full py-3.5"
                style={{ minHeight: '48px' }}
                onClick={() => { setIsMobileMenuOpen(false); openModal(); }}
              >
                Fale com a gente
              </button>
              
              <div className="flex gap-6 justify-center">
                <a href="https://www.youtube.com/@ColetivoWorkspace" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand p-2" title="YouTube"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg></a>
                <a href="https://www.instagram.com/coletivocoworking/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand p-2" title="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
                <a href="https://www.linkedin.com/company/coletivocoworking/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand p-2" title="LinkedIn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 h-20 md:h-24 flex items-center px-6 md:px-16 z-[1000] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isScrolled 
            ? (isNavDarkMode ? 'bg-black/10 text-white backdrop-blur-xl' : 'bg-white/80 text-black border-b border-black/5 backdrop-blur-xl')
            : (isNavDarkMode ? 'bg-transparent text-white' : 'bg-transparent text-black')
          }
        `}
      >
        {/* Left Side - Desktop Links / Mobile Placeholder */}
        <div className="flex-1 flex justify-start">
          <ul className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.slice(0, 2).map((item) => (
              <li key={item.name} className="relative group py-4">
                <Link 
                  to={item.path} 
                  className={`nav-link ${isNavDarkMode ? 'text-white' : 'text-black'}`}
                >
                  {item.name}
                </Link>
                
                {item.subItems && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] border border-grey-100 py-3 min-w-[200px] rounded-2xl overflow-hidden">
                      {item.subItems.map(sub => (
                        <Link 
                          key={sub.name}
                          to={sub.path}
                          className="block px-6 py-2.5 text-[0.65rem] uppercase tracking-widest text-grey-500 hover:text-brand hover:bg-grey-50 transition-colors font-sans"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Center - Logo */}
        <div className="flex-none flex justify-center">
          <Link to="/" className="w-24 md:w-28 transition-transform hover:scale-105 duration-700">
            <img 
              src="/images/logo/coletivo-coworking-logo.png" 
              alt="Coletivo" 
              className="w-full h-auto transition-all duration-700"
              style={{ filter: isNavDarkMode ? 'brightness(0) invert(1)' : 'brightness(0)' }}
            />
          </Link>
        </div>

        {/* Right Side - Desktop Links + Mobile Menu Button */}
        <div className="flex-1 flex justify-end items-center">
          <ul className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.slice(2).map((item) => (
              <li key={item.name} className="relative group py-4">
                <Link 
                  to={item.path} 
                  className={`nav-link ${isNavDarkMode ? 'text-white' : 'text-black'}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a 
                href="https://coletivo.conexa.app/index.php?r=site/login"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${isNavDarkMode ? 'btn-white' : 'btn-brand'} py-2.5 px-8`}
              >
                Área do Cliente
              </a>
            </li>
          </ul>

          <button 
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={toggleMobileMenu} 
          >
            <span className={`w-6 h-px transition-all duration-300 ${isNavDarkMode ? 'bg-white' : 'bg-black'}`} style={{ transform: isMobileMenuOpen ? 'translateY(7px) rotate(45deg)' : '' }}></span>
            <span className={`w-6 h-px transition-all duration-300 ${isNavDarkMode ? 'bg-white' : 'bg-black'}`} style={{ opacity: isMobileMenuOpen ? '0' : '1' }}></span>
            <span className={`w-6 h-px transition-all duration-300 ${isNavDarkMode ? 'bg-white' : 'bg-black'}`} style={{ transform: isMobileMenuOpen ? 'translateY(-7px) rotate(-45deg)' : '' }}></span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-32 md:py-48 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <img src="/images/logo/coletivo-coworking-logo.png" alt="Coletivo" className="w-32 invert brightness-0" />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              O melhor lugar para trabalhar em Porto Alegre, com espaços incríveis e uma comunidade unida.
            </p>
            <div className="flex gap-6">
              <a href="https://www.youtube.com/@ColetivoWorkspace" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand transition-colors" title="YouTube"><Youtube size={20} /></a>
              <a href="https://www.instagram.com/coletivocoworking/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand transition-colors" title="Instagram"><Instagram size={20} /></a>
              <a href="https://www.linkedin.com/company/coletivocoworking/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand transition-colors" title="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[0.7rem] uppercase tracking-[0.3em] font-normal font-sans">Espaços</h4>
            <ul className="space-y-6">
              <li>
                <Link to="/unidades/casa-62" className="group">
                  <p className="text-white text-sm font-medium font-sans group-hover:text-brand transition-colors">Casa 62</p>
                  <p className="text-white/40 text-xs mt-1 font-sans">Rua Jaime Telles, 62</p>
                </Link>
              </li>
              <li>
                <Link to="/unidades#area51" className="group">
                  <p className="text-white text-sm font-medium font-sans group-hover:text-brand transition-colors">Area 51</p>
                  <p className="text-white/40 text-xs mt-1 font-sans">Av. Lucas de Oliveira, 894</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[0.7rem] uppercase tracking-[0.3em] font-normal font-sans">Navegação</h4>
            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-white/40 hover:text-white text-sm transition-colors font-sans">{item.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/investidores" className="text-white/40 hover:text-white text-sm transition-colors font-sans">Investidores</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[0.7rem] uppercase tracking-[0.3em] font-normal font-sans">Novidades</h4>
            <p className="text-white/40 text-sm font-sans">Receba dicas e novidades sobre o mercado local.</p>
            <form className="relative">
              <input type="email" placeholder="Seu e-mail" className="w-full bg-white/5 border-b border-white/10 py-4 outline-none focus:border-brand transition-colors text-sm font-sans" />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-brand hover:text-white transition-colors">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 font-sans">
          <p className="text-white/20 text-[0.6rem] uppercase tracking-widest">© 2025 Coletivo Coworking. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 hover:text-white text-[0.6rem] uppercase tracking-widest transition-colors">Privacidade</a>
            <a href="#" className="text-white/20 hover:text-white text-[0.6rem] uppercase tracking-widest transition-colors">Termos</a>
          </div>
        </div>
      </footer>
    </>
  );
}
