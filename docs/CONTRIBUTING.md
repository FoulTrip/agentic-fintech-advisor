# Guía de Contribución

¡Gracias por querer contribuir a Agentic Fintech Advisor!

## Estándares de Código
- **Clean Code**: Funciones pequeñas y con una sola responsabilidad.
- **SOLID**: Aplicar principios de diseño orientado a objetos.
- **Tipado**: TypeScript estricto en todo el proyecto.
- **Idioma**: Variables y funciones en **Inglés**, comentarios en **Español**.

## Proceso de Desarrollo
1. Crea una rama para tu funcionalidad: `feature/nombre-de-la-mejora`.
2. Asegúrate de que todos los tests pasen: `npm test`.
3. Abre un Pull Request describiendo los cambios.

## Estructura de Carpetas
- `src/components`: Componentes de UI (shadcn/ui).
- `src/lib/agents`: Lógica de orquestación.
- `src/lib/trading`: Motor de simulación.
- `__tests__`: Suite de pruebas.
