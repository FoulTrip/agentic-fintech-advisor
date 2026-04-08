# Guía de Despliegue

Este documento describe cómo desplegar el sistema AFA en entornos de producción.

## Requisitos Previos
- Cuenta en Vercel (Frontend).
- Instancia de Docker o Google Cloud Run (Backend).
- Base de datos MongoDB o PostgreSQL (Prisma).

## Pasos de Despliegue

### 1. Frontend (Vercel)
- Conectar el repositorio de GitHub.
- Configurar variables de entorno (`OPENAI_API_KEY`, `DATABASE_URL`).
- Comando de Build: `npm run build`.

### 2. Backend (FastAPI)
- Construir la imagen Docker:
  ```bash
  docker build -t afa-backend .
  ```
- Desplegar en un servicio de contenedores.

### 3. Base de Datos
- Ejecutar migraciones de Prisma:
  ```bash
  npx prisma migrate deploy
  ```

## Variables de Entorno Críticas
- `NEXT_PUBLIC_API_URL`: URL del backend FastAPI.
- `DATABASE_URL`: String de conexión a la DB.
- `LLM_API_KEY`: Clave para el proveedor de IA.
