# Coletivo Coworking — Site Institucional

Site institucional do **Coletivo Coworking**, espaço de coworking premium em Porto Alegre com duas unidades: **Casa 62** e **Area 51**.

## Tecnologias

| Camada | Tecnologia |
|---|---|
| Frontend | React 19 + TypeScript |
| Roteamento | React Router DOM v7 |
| Estilização | Tailwind CSS v4 |
| Build | Vite 6 |
| Animações | Motion (Framer Motion) |
| Ícones | Lucide React |
| Servidor | Nginx (via Docker) |
| Deploy | Fly.io via GitHub Actions |

## Estrutura do Projeto

```
ColetivoSite2/
├── public/
│   ├── images/          # Imagens (hero, galeria, equipe, eventos, parceiros...)
│   └── videos/          # Vídeo de fundo (ignorado pelo git)
├── src/
│   ├── pages/           # Uma página por rota
│   ├── components/      # Componentes reutilizáveis
│   ├── seoConfig.ts     # Títulos e meta-descrições por rota
│   ├── App.tsx          # Roteamento principal
│   └── main.tsx         # Ponto de entrada
├── .github/workflows/
│   └── deploy.yml       # CI/CD — deploy automático no Fly.io
├── Dockerfile           # Build multi-stage (Node → Nginx)
├── nginx.conf           # Configuração do servidor Nginx
└── fly.toml             # Configuração do app no Fly.io
```

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Home — apresentação geral |
| `/unidades` | Lista das duas unidades |
| `/unidades/casa-62` | Detalhes da unidade Casa 62 |
| `/unidades/area-51` | Detalhes da unidade Area 51 |
| `/espacos` | Visão geral dos espaços |
| `/espacos/estacao-rotativa` | Estação rotativa (hot desk) |
| `/espacos/estacao-fixa` | Estação fixa (mesa exclusiva) |
| `/espacos/privativo-startup` | Sala privativa para startups |
| `/espacos/privativo-empresa` | Escritório privativo corporate |
| `/espacos/sala-reuniao` | Aluguel de salas de reunião |
| `/empresas` | Soluções corporativas |
| `/empresas/endereco-comercial` | Endereço fiscal/comercial |
| `/empresas/eventos` | Espaço para eventos corporativos |
| `/comunidade` | Comunidade, parceiros e networking |
| `/sobre` | Manifesto e equipe |
| `/faq` | Perguntas frequentes |

## Rodando Localmente

**Pré-requisitos:** Node.js 20+

```bash
# Instalar dependências
npm install

# Criar arquivo de variáveis de ambiente
cp .env.example .env.local
# (edite .env.local e adicione sua GEMINI_API_KEY, se necessário)

# Iniciar servidor de desenvolvimento
npm run dev
# → http://localhost:3000
```

## Build de Produção

```bash
npm run build
# Output gerado em dist/
```

## Deploy

O deploy é automático via **GitHub Actions** ao fazer push na branch `main`.

O workflow (`.github/workflows/deploy.yml`):
1. Faz checkout do código
2. Autentica no Fly.io com o token `FLY_API_TOKEN` (secret do repositório)
3. Executa `flyctl deploy --remote-only` com build remoto no Fly.io
4. O Dockerfile executa o build do Vite e serve os arquivos com Nginx na porta 8080

### Segredos Necessários no GitHub

| Secret | Descrição |
|---|---|
| `FLY_API_TOKEN` | Token de autenticação do Fly.io |
| `GEMINI_API_KEY` | Chave da API Google Gemini (se utilizada) |

### Deploy Manual

```bash
# Instalar flyctl (https://fly.io/docs/flyctl/install/)
flyctl deploy --remote-only --build-arg GEMINI_API_KEY=$GEMINI_API_KEY
```

## App no Fly.io

- **App:** `coletivosite`
- **Região primária:** `gru` (São Paulo)
- **Porta interna:** `8080`
- **HTTPS forçado:** sim

## Variáveis de Ambiente

| Variável | Uso |
|---|---|
| `GEMINI_API_KEY` | Passada como build arg durante o build Docker |

> **Atenção:** a chave é injetada em tempo de build pelo Vite. Nunca a exponha em repositórios públicos.
