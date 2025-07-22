# 🏛️ Sistema de Atos Normativos

Um sistema completo para **gestão e consulta de atos normativos**, com frontend em **Next.js** e backend em **NestJS**. Permite importação, criação, edição, revogação e consulta pública de atos, com busca por texto e voz, além de integração com **OpenAI MCP** para perguntas e explicações sobre os documentos.

---

## ✨ Funcionalidades

### 📜 Consulta Pública
- Página aberta para visualização de atos normativos.
- Interface responsiva e acessível
- Busca por texto e **voz** (Web Speech API).
- Integração com **OpenAI MCP** para perguntas sobre os atos.
- Filtro por **ano**, **categoria** e **status** (ativo/revogado).

### 🔧 Administração (Painel CRUD)
- Criação de novos atos normativos.
- Edição de títulos, descrições, datas, etc.
- Revogação de atos (atos revogados aparecem tachados, mas não são excluídos).
- Upload e importação em lote (via CSV ou Excel).
- Separação por categorias:
  - Instruções Normativas
  - Resoluções
  - Portarias
  - Despachos Decisórios
  - ATAs

---

## 🧱 Tecnologias Utilizadas

### Backend (NestJS + Prisma)
- NestJS (estrutura modular e escalável)
- Prisma ORM + PostgreSQL
- Multer (para upload de arquivos)
- BullMQ (processamento assíncrono de importações)
- OpenAI SDK (integração com MCP)
- PostgreSQL Full-Text Search (ou ElasticSearch opcional)

### Frontend (Next.js App Router)
- Next.js 14+
- TailwindCSS
- Shadcn/ui (ou Radix)
- React Hook Form
- Axios (ou React Query)
- Web Speech API (busca por voz)

---

## 📁 Estrutura de Pastas

### 📦 Backend (`/backend`)
```
backend
│
├── src
│   ├── main.ts
│   ├── app.module.ts
│   │
│   ├── atos/
│   │   ├── ato.module.ts
│   │   ├── ato.controller.ts
│   │   ├── ato.service.ts
│   │   ├── ato.entity.ts
│   │   └── dto/
│   │       ├── create-ato.dto.ts
│   │       └── update-ato.dto.ts
│   │
│   ├── upload/               # Upload de arquivos CSV/Excel
│   │   ├── upload.module.ts
│   │   └── upload.service.ts
│   │
│   ├── jobs/                 # Processadores BullMQ
│   │   ├── queue.module.ts
│   │   └── queue.processor.ts
│   │
│   ├── openai/               # Integração com MCP da OpenAI
│   │   ├── openai.module.ts
│   │   └── openai.service.ts
│   │
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── seed.ts
│
├── .env
├── package.json
└── tsconfig.json
```

### 💻 Frontend (`/frontend`)
```
/frontend
│
├── app/
│ ├── page.tsx (Consulta pública)
│ ├── admin/
│ │ ├── page.tsx (Dashboard)
│ │ ├── new.tsx (Novo Ato)
│ │ └── edit/[id].tsx
│
├── components/
│ ├── ui/
│ ├── form/
│ ├── search/
│ └── ato-card.tsx
│
├── hooks/
│ └── useVoiceSearch.ts
│
├── lib/
│ └── api.ts (Axios)
│
├── styles/
│ └── globals.css
│
├── tailwind.config.js
└── package.json
```
---

## ⚙️ Como Rodar o Projeto

Clone o repositório e acesse a pasta principal:
### Clonar o repositório
```
git clone https://github.com/seu-usuario/atos-normativos.git
cd atos-normativos
```

### Configurar o backend
```
cd backend
npm install
```

### Criar o arquivo .env
```echo "DATABASE_URL=postgresql://usuario:senha@localhost:5432/atos" > .env
echo "OPENAI_API_KEY=your-openai-api-key" >> .env
```
### Rodar as migrations do Prisma
```
npx prisma migrate dev
```

### Iniciar o servidor backend
```
npm run start:dev &
```

### Voltar para a raiz e configurar o frontend
```
cd ../frontend
npm install
```

### Iniciar o frontend
```
npm run dev
```


##  🧪 Funcionalidades Futuras (Sugestões)

- Exportação de PDFs

- API pública para atos normativos

- Dashboard com estatísticas


##  🤖 Integração com OpenAI MCP
### Integração com o modelo de linguagem da OpenAI (MCP) para permitir:

- Geração de respostas explicativas sobre os atos.

- Resumo de atos normativos longos.

- Explicações por voz (futuramente).

##  📚 Licença
Este projeto está sob a licença MIT.

##  ✍️ Autor
Desenvolvido com ❤️ por [Lorena Debs](https://github.com/DebsLorena)