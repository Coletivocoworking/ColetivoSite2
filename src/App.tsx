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

const seoConfig: Record<string, { title: string; desc: string }> = {
  '/': {
    title: 'Coletivo Coworking | Salas Privativas e Escritórios POA',
    desc: 'O Coletivo é mais que um coworking: um ecossistema completo com salas privativas, estações de trabalho e salas de reunião modernas em Porto Alegre.'
  },
  '/unidades': {
    title: 'Unidades Coletivo | Casa 62 e Area 51 em Porto Alegre',
    desc: 'Conheça nossas duas unidades premium em Porto Alegre: Casa 62 e Area 51. Espaços inspiradores, modernos e prontos para decolar sua empresa.'
  },
  '/unidades/casa-62': {
    title: 'Unidade Casa 62 POA | Coletivo Coworking',
    desc: 'Descubra a Casa 62: um espaço de coworking charmoso e intimista no coração de Porto Alegre, ideal para networking e foco de alto rendimento.'
  },
  '/unidades/area-51': {
    title: 'Unidade Area 51 POA | Hub de Inovação e Tech',
    desc: 'Conheça a Area 51: o hub de inovação, coworking e tecnologia definitivo para startups e empresas modernas acelerarem em Porto Alegre.'
  },
  '/espacos': {
    title: 'Espaços Coworking e Salas Privativas | Coletivo',
    desc: 'Encontre o espaço perfeito para seu negócio: de estações rotativas a escritórios privativos sob medida e salas de reunião totalmente equipadas.'
  },
  '/espacos/estacao-rotativa': {
    title: 'Estação Rotativa | Trabalho Flexível e Conectado',
    desc: 'Trabalhe de forma flexível e econômica com nosso plano de estação rotativa. Acesso a infraestrutura premium e community lounge integrado.'
  },
  '/espacos/estacao-fixa': {
    title: 'Estação Fixa Resident | Sua Mesa Exclusiva POA',
    desc: 'Uma mesa exclusiva para chamar de sua em Porto Alegre. Alie a estabilidade de um escritório próprio ao ecossistema vibrante do Coletivo.'
  },
  '/espacos/privativo-startup': {
    title: 'Salas Privativas para Startups | Coletivo Coworking',
    desc: 'Escritórios privativos flexíveis e dinâmicos sob medida para impulsionar a colaboração e o rápido crescimento da sua startup.'
  },
  '/espacos/privativo-empresa': {
    title: 'Escritórios Privativos Corporate | Coletivo',
    desc: 'Salas exclusivas com máxima privacidade, acústica e infraestrutura premium para consolidar a presença de sua empresa em Porto Alegre.'
  },
  '/espacos/sala-reuniao': {
    title: 'Aluguel de Salas de Reunião em Porto Alegre | Coletivo',
    desc: 'Salas de reunião equipadas com isolamento acústico, tecnologia de ponta e serviço de café para receber seus clientes com máximo profissionalismo.'
  },
  '/empresas/endereco-comercial': {
    title: 'Endereço Fiscal e Comercial POA | Coletivo Coworking',
    desc: 'Formalize sua empresa com endereço fiscal de prestígio em Porto Alegre. Gestão de correspondência profissional e credibilidade imediata.'
  },
  '/empresas/eventos': {
    title: 'Espaço para Eventos Corporativos POA | Coletivo',
    desc: 'Realize palestras, workshops e meetups em auditórios e lounges sofisticados com buffet integrado e suporte técnico completo.'
  },
  '/empresas': {
    title: 'Soluções Corporativas p/ Empresas | Coletivo',
    desc: 'Impulsione sua empresa com escritórios privativos, endereço comercial de prestígio e eventos de alto impacto no Coletivo Coworking.'
  },
  '/comunidade': {
    title: 'Comunidade e Networking em POA | Coletivo',
    desc: 'Faça parte de um hub ativo de conexões humanas e sinergia de negócios. Eventos exclusivos, parcerias e muito networking em Porto Alegre.'
  },
  '/sobre': {
    title: 'Sobre o Coletivo | Manifesto e Nosso Ecossistema',
    desc: 'Descubra a história e o manifesto do Coletivo Coworking. Acreditamos na força da comunidade e na evolução conjunta de pessoas e negócios.'
  },
  '/investidores': {
    title: 'Investidores e Parcerias no Hub | Coletivo',
    desc: 'Apoie o crescimento do ecossistema empreendedor de Porto Alegre investindo em infraestrutura de alto rendimento e inovação contínua.'
  }
};

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Dynamic Title & Description configuration for SEO optimization
    const currentSeo = seoConfig[location.pathname] || seoConfig['/'];
    document.title = currentSeo.title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', currentSeo.desc);

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
