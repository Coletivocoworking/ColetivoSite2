import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

export default function App() {
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
