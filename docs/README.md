# Agentic Fintech Advisor (AFA)

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

AFA es una plataforma avanzada de análisis financiero que utiliza agentes de IA orquestados para proporcionar insights profundos y simulaciones de trading en tiempo real.

## 🚀 Características Principales
- **Orquestación de Agentes**: Flujos de trabajo secuenciales entre analistas técnicos, fundamentales y de sentimiento.
- **Paper Trading**: Simulador de mercado con activos reales (NVDA, AAPL, MSFT) y gestión de portafolio.
- **UI Premium**: Interfaz oscura de alta fidelidad construida con Next.js, Tailwind y shadcn/ui.
- **Rastro de Razonamiento**: Visualización de la lógica detrás de cada decisión de la IA.

## 🛠️ Stack Tecnológico
- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui.
- **Backend**: FastAPI (Python), LangChain.
- **Base de Datos**: Prisma ORM, SQLite/MongoDB.
- **Gráficas**: Lightweight Charts (TradingView).

## 📦 Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/FoulTrip/agentic-fintech-advisor.git
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar el entorno:**
   Crea un archivo `.env` basado en `.env.example`.

4. **Inicializar Base de Datos:**
   ```bash
   npx prisma migrate dev
   ```

5. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

## ⚖️ Aviso Legal
Esta herramienta es exclusivamente para fines educativos y de simulación. No constituye asesoramiento financiero real.
