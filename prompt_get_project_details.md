You are acting as a senior technical documentation assistant for my portfolio showcase.

I am running this prompt inside the FRONTEND repository of this project. I need you to generate a complete end-to-end technical breakdown (both Frontend AND Backend) for dedicated project details pages on my portfolio.

### 🔍 Instructions for Repository & System Exploration:

1. **Frontend Deep-Dive**: Inspect `package.json`, route files, state management, UI libraries, custom hooks, and styling setup.
2. **Backend & Architecture Discovery**:
   - Inspect API client declarations, Axios/Fetch interceptors, GraphQL schemas, OpenAPI/Swagger specs, React Query / RTK Query definitions, and environment variables to trace backend endpoints and microservices.
   - **Proactive Local Search**: Look for related backend folders on my local system (e.g. adjacent folders like `../<project-name>-backend`, `../backend`, or microservices repositories) and inspect their code, `go.mod`, `package.json`, Dockerfiles, database migrations/Prisma/ORM schemas, and entry points.
   - If the backend repo cannot be directly accessed, synthesize the full backend architecture, database models, payment gateways, and authentication flows from the API contracts and client logic.

---

### Output Requirements

Please output the technical analysis in the following structured format (providing bilingual content in English and French):

#### 1. Basic Metadata

- **Project Name**: Exact name of the project
- **Tagline**: Concise summary of what it does (under 120 chars)
- **Role**: My role (e.g., Lead Developer, Architect, Fullstack Developer)
- **Timeline / Status**: (e.g. 2024 — Present / Production)
- **Platforms**: (e.g., Web, Android, iOS)
- **Live Links & App Store Links**: (if applicable, or "Private Enterprise Project")

#### 2. High-Level Summary & Problem Statement

- **The Challenge**: What problem does this system solve?
- **The Solution**: Technical solution overview.
- **Target Audience**: Primary user personas.

#### 3. Full-Stack Tech Architecture

- **Frontend Stack**: Frameworks, state management, styling, UI/UX highlights (e.g., React Native/Expo, Next.js 15, TailwindCSS, Zustand).
- **Backend Stack**: Primary backend languages, microservices vs monolith, frameworks (e.g., Golang, NestJS, Python/FastAPI, gRPC).
- **Databases & Caching**: Database engines, vector databases, caching layers (e.g., PostgreSQL + pgvector, Redis, MongoDB, Turso).
- **Infrastructure & DevOps**: Docker, AWS/Cloudflare services, CI/CD pipelines, container orchestration.
- **Third-Party Integrations & APIs**: Payment gateways (MTN MoMo, Airtel Money), AI models (Gemini/OpenAI), SMS/Email, POS systems.

#### 4. Architectural Highlights & Key Engineering Decisions

Highlight 3 to 5 key engineering solutions across both frontend and backend (with WHY and HOW):

- _e.g., High-concurrency backend queue handling in Go_
- _e.g., Mobile offline-first sync & optimistic UI updates_
- _e.g., End-to-end payment webhook reconciliation & idempotent transactions_
- _e.g., Omnichannel AI orchestration agent flow_

#### 5. Core Features Breakdown

List 4 to 6 main features with title, description, and specific frontend/backend tech involved.

#### 6. Metrics & Impact Highlights

Key performance, scalability, or business outcomes (e.g., "Reduced processing latency by 45%", "Seamless payment integration for 2 major TELCOs").

---

### Export Schema

End your response with a valid JSON object formatted as follows:

```json
{
  "id": "project-slug",
  "name": "Project Name",
  "tagline": { "fr": "", "en": "" },
  "overview": { "fr": "", "en": "" },
  "problem": { "fr": "", "en": "" },
  "solution": { "fr": "", "en": "" },
  "platforms": ["Web", "Android", "iOS"],
  "techStack": {
    "frontend": [],
    "backend": [],
    "database": [],
    "devops": [],
    "integrations": []
  },
  "architectureHighlights": [
    {
      "title": { "fr": "", "en": "" },
      "description": { "fr": "", "en": "" }
    }
  ],
  "features": [
    {
      "title": { "fr": "", "en": "" },
      "description": { "fr": "", "en": "" },
      "tech": []
    }
  ],
  "metrics": [{ "value": "", "label": { "fr": "", "en": "" } }],
  "links": {
    "live": "",
    "github": "",
    "appStore": "",
    "playStore": ""
  }
}
```
