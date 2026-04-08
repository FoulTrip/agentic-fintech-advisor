# Documentación de la API - AFA

Esta API gestiona la orquestación de agentes de IA y la lógica de simulación financiera.

## Endpoints de Agentes

### Orquestar Análisis
`POST /api/v1/orchestrate`

Inicia una secuencia de análisis por múltiples agentes.

**Request Body:**
```json
{
  "ticker": "NVDA",
  "agent_ids": ["tech-analyst", "sentiment-analyst"],
  "context": "Análisis trimestral"
}
```

**Response:**
```json
{
  "trace_id": "uuid-123",
  "status": "processing"
}
```

## Endpoints de Mercado

### Obtener Velas (Candlesticks)
`GET /api/v1/market/candles/{ticker}`

**Parámetros:**
- `ticker` (string): Símbolo del activo (NVDA, AAPL, MSFT).

**Response:**
```json
[
  { "time": "2023-10-01", "open": 150, "high": 155, "low": 149, "close": 153 }
]
```

## Endpoints de Trading

### Ejecutar Orden
`POST /api/v1/trading/order`

**Request Body:**
```json
{
  "ticker": "AAPL",
  "side": "BUY",
  "quantity": 10,
  "type": "MARKET"
}
```

### Estado del Portafolio
`GET /api/v1/portfolio/status`

**Response:**
```json
{
  "balance": 100000,
  "equity": 105420,
  "pnl_unrealized": 5420,
  "positions": []
}
```
