# Agentic Fintech Advisor (AFA)

Plataforma de asesoría financiera de última generación que utiliza agentes de IA orquestados secuencialmente y un módulo de Paper Trading para simulación de mercado.

## Características
- **Orquestación de Agentes**: Flujos secuenciales (Técnico -> Fundamental -> Sentimiento).
- **Paper Trading**: Ejecución simulada con activos reales (NVDA, AAPL, MSFT).
- **Interfaz Premium**: Diseñada con Next.js 14, Tailwind CSS y shadcn/ui.
- **Visualización Avanzada**: Gráficos de velas japonesas interactivos.

## Requisitos
- Node.js 18+
- SQLite (para desarrollo local)

## Instalación
1. Clonar el repositorio.
2. Instalar dependencias: `npm install`
3. Configurar variables de entorno: `cp .env.example .env`
4. Generar el cliente de Prisma: `npx prisma generate`
5. Ejecutar migraciones: `npx prisma migrate dev --name init`
6. Iniciar servidor: `npm run dev`

## Disclaimer Legal
Esta aplicación es únicamente para fines educativos y de simulación. No constituye asesoramiento financiero real. Los datos y operaciones son ficticios.