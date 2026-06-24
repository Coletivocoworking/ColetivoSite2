/**
 * Script de download de imagens e vídeos do site Coletivo Coworking.
 * Baixa todos os assets externos com nomes SEO-friendly e os organiza em public/.
 *
 * Uso: node scripts/download-images.mjs
 * Requer Node.js 18+ (fetch nativo).
 */

import { createWriteStream, mkdirSync, existsSync } from 'fs';
import { pipeline } from 'stream/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(fileURLToPath(import.meta.url), '..', '..');

// ─── MAPEAMENTO COMPLETO: url → destino local ──────────────────────────────
// Múltiplas URLs que apontam para o mesmo asset físico são colapsadas em um
// único destino. A substituição no código usa o campo `locals` (todas as URLs
// que devem ser trocadas por esse destino).

export const ASSETS = [
  // ── LOGO ──────────────────────────────────────────────────────────────────
  {
    dest: 'public/images/logo/coletivo-coworking-logo.png',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/03/Frame-2.png',
    ],
  },
  {
    dest: 'public/images/logo/coletivo-coworking-logo-alternativo.png',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/Frame-167.png',
    ],
  },
  {
    dest: 'public/images/logo/coletivo-coworking-parceiro-reina.png',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/Reina-logo.png',
    ],
  },

  // ── HERO ──────────────────────────────────────────────────────────────────
  {
    dest: 'public/images/hero/coletivo-coworking-porto-alegre-hero.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/03/IMG_0571_edit-scaled.jpg',
    ],
  },
  {
    dest: 'public/images/hero/coletivo-coworking-area51-hero.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/03/Design-sem-nome-4.jpg',
    ],
  },
  {
    dest: 'public/images/hero/coletivo-coworking-espacos-hero.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/6.jpg',
    ],
  },
  {
    dest: 'public/images/hero/coletivo-coworking-sala-privativa-hero.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/1.jpg',
    ],
  },
  {
    dest: 'public/images/hero/coletivo-coworking-empresa-hero.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2024/09/DSC01993-scaled.jpg',
    ],
  },
  {
    dest: 'public/images/hero/coletivo-coworking-area51-alternativo-hero.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/03/Design-sem-nome-5.jpg',
    ],
  },

  // ── GALERIA — ESPAÇOS INTERNOS GENÉRICOS ──────────────────────────────────
  {
    dest: 'public/images/galeria/coletivo-coworking-espaco-interno-01.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/2.jpg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-coworking-espaco-interno-02.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/3.jpg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-coworking-espaco-interno-03.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/4.jpg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-coworking-espaco-interno-04.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/5.jpg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-coworking-espaco-interno-05.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2022/12/Rectangle-67.jpg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-coworking-podcast.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/nicolasvvaz_672419504_18576988249011815_7243819519612182986_n.jpg',
    ],
  },

  // ── GALERIA — AREA 51 ──────────────────────────────────────────────────────
  {
    dest: 'public/images/galeria/coletivo-area51-espaco-coworking-01.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0003-scaled.jpg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-area51-espaco-coworking-02.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0015-scaled.jpg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-area51-espaco-coworking-03.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0022-scaled.jpg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-area51-espaco-coworking-04.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0062-scaled.jpg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-area51-espaco-coworking-05.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0079-scaled.jpg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-area51-espaco-coworking-06.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0495-2-scaled.jpg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-area51-fachada.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2022/12/Coletivo-area-51-frente.jpg',
    ],
  },

  // ── GALERIA — CASA 62 ──────────────────────────────────────────────────────
  {
    dest: 'public/images/galeria/coletivo-casa62-espaco-interno-01.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/04/IMG_0879_edit-scaled.jpg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-casa62-espaco-interno-02.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/04/IMG_0980_edit-v02.jpg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-casa62-espaco-interno-03.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/03/IMG_0691_edit-scaled.jpg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-casa62-espaco-interno-04.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/03/IMG_0610_edit-scaled.jpg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-casa62-espaco-interno-05.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/04/IMG_0909_edit.jpg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-casa62-espaco-interno-06.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/03/IMG_0630_edit-1-scaled.jpg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-casa62-espaco-interno-07.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/04/IMG_0732_edit.jpg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-casa62-espaco-interno-08.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/04/IMG_0873-1.jpeg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-casa62-espaco-interno-09.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/04/IMG_0879.jpeg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-casa62-espaco-interno-10.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/04/IMG_6134-1.jpeg',
    ],
  },
  {
    dest: 'public/images/galeria/coletivo-casa62-corredor-historico.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2022/12/coletivo62-petropolis-corredor.jpg',
    ],
  },

  // ── EQUIPE ────────────────────────────────────────────────────────────────
  {
    dest: 'public/images/equipe/coletivo-coworking-equipe-jade.png',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/13.png',
    ],
  },
  {
    dest: 'public/images/equipe/coletivo-coworking-equipe-thaty.jpg',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-17.31.04.jpeg',
    ],
  },
  {
    dest: 'public/images/equipe/coletivo-coworking-equipe-brenda.png',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/14.png',
    ],
  },
  {
    dest: 'public/images/equipe/coletivo-coworking-equipe-luana.png',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/12.png',
    ],
  },

  // ── PARCEIROS ─────────────────────────────────────────────────────────────
  {
    dest: 'public/images/parceiros/coletivo-coworking-parceiro-01.png',
    urls: ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/1.png'],
  },
  {
    dest: 'public/images/parceiros/coletivo-coworking-parceiro-02.png',
    urls: ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/2.png'],
  },
  {
    dest: 'public/images/parceiros/coletivo-coworking-parceiro-03.png',
    urls: ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/3.png'],
  },
  {
    dest: 'public/images/parceiros/coletivo-coworking-parceiro-04.png',
    urls: ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/4.png'],
  },
  {
    dest: 'public/images/parceiros/coletivo-coworking-parceiro-05.png',
    urls: ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/5.png'],
  },
  {
    dest: 'public/images/parceiros/coletivo-coworking-parceiro-06.png',
    urls: ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/6.png'],
  },
  {
    dest: 'public/images/parceiros/coletivo-coworking-parceiro-07.png',
    urls: ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/7.png'],
  },
  {
    dest: 'public/images/parceiros/coletivo-coworking-parceiro-08.png',
    urls: ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/8.png'],
  },
  {
    dest: 'public/images/parceiros/coletivo-coworking-parceiro-09.png',
    urls: ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/9.png'],
  },
  {
    dest: 'public/images/parceiros/coletivo-coworking-parceiro-10.png',
    urls: ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/10.png'],
  },

  // ── AMENIDADES ────────────────────────────────────────────────────────────
  {
    dest: 'public/images/amenidades/coletivo-coworking-amenidade-yoga.png',
    urls: ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/Yoga.png'],
  },
  {
    dest: 'public/images/amenidades/coletivo-coworking-amenidade-cafe.png',
    urls: ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/Cafe.png'],
  },
  {
    dest: 'public/images/amenidades/coletivo-coworking-amenidade-canto-foco.png',
    urls: ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/Canto-Foco.png'],
  },
  {
    dest: 'public/images/amenidades/coletivo-coworking-amenidade-natureza.png',
    urls: ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/Natureza.png'],
  },

  // ── EVENTOS ───────────────────────────────────────────────────────────────
  {
    dest: 'public/images/eventos/coletivo-coworking-eventos-proposta.png',
    urls: ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/PROPOSTA-EVENTOS.png'],
  },
  {
    dest: 'public/images/eventos/coletivo-coworking-evento-fruta.png',
    urls: ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/06/1.png'],
  },
  {
    dest: 'public/images/eventos/coletivo-coworking-evento-cuca.png',
    urls: ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/06/2.png'],
  },
  {
    dest: 'public/images/eventos/coletivo-coworking-evento-massage.png',
    urls: ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/06/3.png'],
  },
  {
    dest: 'public/images/eventos/coletivo-coworking-evento-arraia.png',
    urls: ['https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/06/4.png'],
  },

  // ── STOCK (Unsplash) ──────────────────────────────────────────────────────
  {
    dest: 'public/images/stock/coletivo-escritorio-moderno-01.jpg',
    // Duas URLs apontam para a mesma foto (tamanhos diferentes) → mesmo destino
    urls: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    ],
  },
  {
    dest: 'public/images/stock/coletivo-escritorio-moderno-02.jpg',
    urls: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200',
    ],
  },
  {
    dest: 'public/images/stock/coletivo-escritorio-colaborativo.jpg',
    urls: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200',
    ],
  },
  {
    dest: 'public/images/stock/coletivo-sala-reuniao-profissional.jpg',
    urls: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    ],
  },

  // ── UI ────────────────────────────────────────────────────────────────────
  {
    dest: 'public/images/ui/coletivo-textura-sala-reuniao.png',
    urls: ['https://www.transparenttextures.com/patterns/carbon-fibre.png'],
  },

  // ── VÍDEO ─────────────────────────────────────────────────────────────────
  {
    dest: 'public/videos/coletivo-coworking-porto-alegre.mp4',
    urls: [
      'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/04/Video-Coletivo.mp4',
    ],
  },
];

// ─── DOWNLOAD ─────────────────────────────────────────────────────────────────

async function downloadAsset(url, destRel) {
  const destAbs = join(ROOT, destRel);
  if (existsSync(destAbs)) {
    console.log(`SKIP  ${destRel}`);
    return 'skip';
  }
  mkdirSync(dirname(destAbs), { recursive: true });

  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ColetivoBot/1.0)' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
  await pipeline(res.body, createWriteStream(destAbs));
  return 'ok';
}

async function main() {
  const results = { ok: 0, skip: 0, err: 0 };

  for (const asset of ASSETS) {
    const url = asset.urls[0]; // usa a primeira URL para download
    try {
      const status = await downloadAsset(url, asset.dest);
      results[status]++;
      if (status === 'ok') console.log(`OK    ${asset.dest}`);
    } catch (e) {
      results.err++;
      console.error(`ERR   ${asset.dest}  →  ${e.message}`);
    }
  }

  console.log(`\n── Resultado ──`);
  console.log(`  OK:   ${results.ok}`);
  console.log(`  SKIP: ${results.skip}`);
  console.log(`  ERR:  ${results.err}`);
  console.log(`  Total de assets mapeados: ${ASSETS.length}`);
}

main();
