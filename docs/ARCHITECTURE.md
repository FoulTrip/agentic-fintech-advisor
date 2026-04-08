# Arquitectura del Sistema - Agentic Fintech Advisor

## Diagrama de Arquitectura

```mermaid
graph TD
    User((Usuario)) --> NextJS[Next.js Frontend / App Router]
    NextJS --> FastAPI[FastAPI Backend - Orchestrator]
    FastAPI --> LLM[LLM Providers: OpenAI/Anthropic]
    FastAPI --> DB[(Prisma / SQLite)]
    NextJS --> TradingEngine[Paper Trading Core]
    TradingEngine --> DB
```

## Componentes Principales

1.  **Frontend (Next.js 14)**: Gestiona la UI 'Premium Fintech', gráficas de TradingView y el Playground de agentes.
2.  **Orchestrator (FastAPI/LangGraph)**: El cerebro que encadena los agentes. Recibe el output de un analista técnico y lo pasa al analista de sentimiento.
3.  **Paper Trading Engine**: Lógica pura en TypeScript/Python para simular el mercado sin riesgo real.
4.  **Capa de Persistencia**: Prisma actúa como ORM para gestionar el historial de operaciones y las trazas de razonamiento de los agentes.
