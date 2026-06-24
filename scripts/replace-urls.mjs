/**
 * Substitui todas as URLs externas pelos paths locais em todos os arquivos
 * .tsx, .ts e index.html do projeto.
 *
 * Uso: node scripts/replace-urls.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(join(fileURLToPath(import.meta.url), '..', '..'));

// ─── MAPA: URL externa → path local ──────────────────────────────────────────
// Para o Tailwind bg-[url('...')] a substituição funciona igual, pois
// o arquivo é um TSX text e fazemos replace de string.

const MAP = [
  // Logo
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/03/Frame-2.png',
    '/images/logo/coletivo-coworking-logo.png',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/Frame-167.png',
    '/images/logo/coletivo-coworking-logo-alternativo.png',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/Reina-logo.png',
    '/images/logo/coletivo-coworking-parceiro-reina.png',
  ],
  // Hero
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/03/IMG_0571_edit-scaled.jpg',
    '/images/hero/coletivo-coworking-porto-alegre-hero.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/03/Design-sem-nome-4.jpg',
    '/images/hero/coletivo-coworking-area51-hero.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/6.jpg',
    '/images/hero/coletivo-coworking-espacos-hero.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/1.jpg',
    '/images/hero/coletivo-coworking-sala-privativa-hero.jpg',
  ],
  // DSC01993 retornou 404 → não substituir, mantém URL original
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/03/Design-sem-nome-5.jpg',
    '/images/hero/coletivo-coworking-area51-alternativo-hero.jpg',
  ],
  // Galeria interna
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/2.jpg',
    '/images/galeria/coletivo-coworking-espaco-interno-01.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/3.jpg',
    '/images/galeria/coletivo-coworking-espaco-interno-02.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/4.jpg',
    '/images/galeria/coletivo-coworking-espaco-interno-03.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/5.jpg',
    '/images/galeria/coletivo-coworking-espaco-interno-04.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2022/12/Rectangle-67.jpg',
    '/images/galeria/coletivo-coworking-espaco-interno-05.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/nicolasvvaz_672419504_18576988249011815_7243819519612182986_n.jpg',
    '/images/galeria/coletivo-coworking-podcast.jpg',
  ],
  // Galeria Area 51
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0003-scaled.jpg',
    '/images/galeria/coletivo-area51-espaco-coworking-01.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0015-scaled.jpg',
    '/images/galeria/coletivo-area51-espaco-coworking-02.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0022-scaled.jpg',
    '/images/galeria/coletivo-area51-espaco-coworking-03.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0062-scaled.jpg',
    '/images/galeria/coletivo-area51-espaco-coworking-04.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0079-scaled.jpg',
    '/images/galeria/coletivo-area51-espaco-coworking-05.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0495-2-scaled.jpg',
    '/images/galeria/coletivo-area51-espaco-coworking-06.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2022/12/Coletivo-area-51-frente.jpg',
    '/images/galeria/coletivo-area51-fachada.jpg',
  ],
  // Galeria Casa 62
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/04/IMG_0879_edit-scaled.jpg',
    '/images/galeria/coletivo-casa62-espaco-interno-01.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/04/IMG_0980_edit-v02.jpg',
    '/images/galeria/coletivo-casa62-espaco-interno-02.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/03/IMG_0691_edit-scaled.jpg',
    '/images/galeria/coletivo-casa62-espaco-interno-03.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/03/IMG_0610_edit-scaled.jpg',
    '/images/galeria/coletivo-casa62-espaco-interno-04.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/04/IMG_0909_edit.jpg',
    '/images/galeria/coletivo-casa62-espaco-interno-05.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/03/IMG_0630_edit-1-scaled.jpg',
    '/images/galeria/coletivo-casa62-espaco-interno-06.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/04/IMG_0732_edit.jpg',
    '/images/galeria/coletivo-casa62-espaco-interno-07.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/04/IMG_0873-1.jpeg',
    '/images/galeria/coletivo-casa62-espaco-interno-08.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/04/IMG_0879.jpeg',
    '/images/galeria/coletivo-casa62-espaco-interno-09.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/04/IMG_6134-1.jpeg',
    '/images/galeria/coletivo-casa62-espaco-interno-10.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2022/12/coletivo62-petropolis-corredor.jpg',
    '/images/galeria/coletivo-casa62-corredor-historico.jpg',
  ],
  // Equipe
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/13.png',
    '/images/equipe/coletivo-coworking-equipe-jade.png',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-17.31.04.jpeg',
    '/images/equipe/coletivo-coworking-equipe-thaty.jpg',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/14.png',
    '/images/equipe/coletivo-coworking-equipe-brenda.png',
  ],
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/12.png',
    '/images/equipe/coletivo-coworking-equipe-luana.png',
  ],
  // Parceiros
  ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/1.png', '/images/parceiros/coletivo-coworking-parceiro-01.png'],
  ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/2.png', '/images/parceiros/coletivo-coworking-parceiro-02.png'],
  ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/3.png', '/images/parceiros/coletivo-coworking-parceiro-03.png'],
  ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/4.png', '/images/parceiros/coletivo-coworking-parceiro-04.png'],
  ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/5.png', '/images/parceiros/coletivo-coworking-parceiro-05.png'],
  ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/6.png', '/images/parceiros/coletivo-coworking-parceiro-06.png'],
  ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/7.png', '/images/parceiros/coletivo-coworking-parceiro-07.png'],
  ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/8.png', '/images/parceiros/coletivo-coworking-parceiro-08.png'],
  ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/9.png', '/images/parceiros/coletivo-coworking-parceiro-09.png'],
  ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/10.png', '/images/parceiros/coletivo-coworking-parceiro-10.png'],
  // Amenidades
  ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/Yoga.png', '/images/amenidades/coletivo-coworking-amenidade-yoga.png'],
  ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/Cafe.png', '/images/amenidades/coletivo-coworking-amenidade-cafe.png'],
  ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/Canto-Foco.png', '/images/amenidades/coletivo-coworking-amenidade-canto-foco.png'],
  ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/Natureza.png', '/images/amenidades/coletivo-coworking-amenidade-natureza.png'],
  // Eventos
  ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/PROPOSTA-EVENTOS.png', '/images/eventos/coletivo-coworking-eventos-proposta.png'],
  ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/06/1.png', '/images/eventos/coletivo-coworking-evento-fruta.png'],
  ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/06/2.png', '/images/eventos/coletivo-coworking-evento-cuca.png'],
  ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/06/3.png', '/images/eventos/coletivo-coworking-evento-massage.png'],
  ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/06/4.png', '/images/eventos/coletivo-coworking-evento-arraia.png'],
  // Stock — Unsplash (mesma foto em dois tamanhos → mesmo destino)
  [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    '/images/stock/coletivo-escritorio-moderno-01.jpg',
  ],
  [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    '/images/stock/coletivo-escritorio-moderno-01.jpg',
  ],
  [
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200',
    '/images/stock/coletivo-escritorio-moderno-02.jpg',
  ],
  [
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200',
    '/images/stock/coletivo-escritorio-colaborativo.jpg',
  ],
  [
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    '/images/stock/coletivo-sala-reuniao-profissional.jpg',
  ],
  // UI
  [
    'https://www.transparenttextures.com/patterns/carbon-fibre.png',
    '/images/ui/coletivo-textura-sala-reuniao.png',
  ],
  // Vídeo
  [
    'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/Video-Coletivo.mp4',
    '/videos/coletivo-coworking-porto-alegre.mp4',
  ],
];

// ─── ARQUIVOS A PROCESSAR ─────────────────────────────────────────────────────
const FILES = [
  'index.html',
  'src/seoConfig.ts',
  'src/components/Layout.tsx',
  'src/pages/Home.tsx',
  'src/pages/Comunidade.tsx',
  'src/pages/Sobre.tsx',
  'src/pages/Empresas.tsx',
  'src/pages/Area51.tsx',
  'src/pages/Casa62.tsx',
  'src/pages/Unidades.tsx',
  'src/pages/Espacos.tsx',
  'src/pages/EstacaoRotativa.tsx',
  'src/pages/EstacaoFixa.tsx',
  'src/pages/PrivativoStartup.tsx',
  'src/pages/PrivativoEmpresa.tsx',
  'src/pages/SalaReuniao.tsx',
  'src/pages/EnderecoComercial.tsx',
  'src/pages/Eventos.tsx',
  'src/pages/Investidores.tsx',
];

// ─── EXECUÇÃO ─────────────────────────────────────────────────────────────────
let totalReplacements = 0;

for (const rel of FILES) {
  const abs = join(ROOT, rel);
  let content = readFileSync(abs, 'utf8');
  let fileReplacements = 0;

  for (const [external, local] of MAP) {
    const before = content;
    // Substitui todas as ocorrências (flags g)
    content = content.split(external).join(local);
    if (content !== before) {
      const count = (before.split(external).length - 1);
      fileReplacements += count;
    }
  }

  if (fileReplacements > 0) {
    writeFileSync(abs, content, 'utf8');
    console.log(`UPDATED  ${rel}  (${fileReplacements} substituições)`);
    totalReplacements += fileReplacements;
  } else {
    console.log(`CLEAN    ${rel}`);
  }
}

console.log(`\n── Total de substituições: ${totalReplacements} ──`);
