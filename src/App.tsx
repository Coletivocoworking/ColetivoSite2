import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Unidades from './pages/Unidades';
import Espacos from './pages/Espacos';
import Empresas from './pages/Empresas';
import Comunidade from './pages/Comunidade';
import Sobre from './pages/Sobre';
import EstacaoRotativa from './pages/EstacaoRotativa';
import EstacaoFixa from './pages/EstacaoFixa';
import PrivativoStartup from './pages/PrivativoStartup';
import PrivativoEmpresa from './pages/PrivativoEmpresa';
import SalaReuniao from './pages/SalaReuniao';
import EnderecoComercial from './pages/EnderecoComercial';
import Eventos from './pages/Eventos';
import Casa62 from './pages/Casa62';
import Area51 from './pages/Area51';
import Investidores from './pages/Investidores';

import { seoConfig } from './seoConfig';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Dynamic Title & Description configuration for SEO and rich link previews (Telegram, WhatsApp, etc)
    const currentSeo = seoConfig[location.pathname] || seoConfig['/'];
    document.title = currentSeo.title;
    
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta Description
    setMetaTag('name', 'description', currentSeo.desc);

    // Open Graph (WhatsApp, Telegram, Facebook)
    setMetaTag('property', 'og:title', currentSeo.title);
    setMetaTag('property', 'og:description', currentSeo.desc);
    setMetaTag('property', 'og:image', currentSeo.ogImage);
    setMetaTag('property', 'og:url', window.location.href);
    setMetaTag('property', 'og:type', 'website');

    // Twitter Cards
    setMetaTag('name', 'twitter:title', currentSeo.title);
    setMetaTag('name', 'twitter:description', currentSeo.desc);
    setMetaTag('name', 'twitter:image', currentSeo.ogImage);
    setMetaTag('name', 'twitter:card', 'summary_large_image');

    // Scroll to top smoothly on route change to prevent visual jumps on mobile
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unidades" element={<Unidades />} />
        <Route path="/unidades/casa-62" element={<Casa62 />} />
        <Route path="/unidades/area-51" element={<Area51 />} />
        <Route path="/espacos" element={<Espacos />} />
        <Route path="/espacos/estacao-rotativa" element={<EstacaoRotativa />} />
        <Route path="/espacos/estacao-fixa" element={<EstacaoFixa />} />
        <Route path="/espacos/privativo-startup" element={<PrivativoStartup />} />
        <Route path="/espacos/privativo-empresa" element={<PrivativoEmpresa />} />
        <Route path="/espacos/sala-reuniao" element={<SalaReuniao />} />
        <Route path="/empresas/endereco-comercial" element={<EnderecoComercial />} />
        <Route path="/empresas/eventos" element={<Eventos />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/comunidade" element={<Comunidade />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/investidores" element={<Investidores />} />
      </Routes>
    </Layout>
  );
}
