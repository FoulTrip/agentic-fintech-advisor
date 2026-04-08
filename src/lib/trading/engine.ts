/**
 * Motor de Paper Trading
 * Gestiona la lógica de ejecución de órdenes simuladas y cálculo de P&L.
 */

export interface Position {
  ticker: string;
  quantity: number;
  averagePrice: number;
}

export class TradingEngine {
  private balance: number;
  private positions: Map<string, Position>;

  constructor(initialBalance: number = 100000) {
    this.balance = initialBalance;
    this.positions = new Map();
  }

  /**
   * Ejecuta una orden de compra
   */
  buy(ticker: string, quantity: number, price: number) {
    const cost = quantity * price;
    if (cost > this.balance) {
      throw new Error("Saldo insuficiente para completar la operación.");
    }

    this.balance -= cost;
    const currentPos = this.positions.get(ticker) || { ticker, quantity: 0, averagePrice: 0 };
    
    // Cálculo del precio promedio ponderado
    const totalQty = currentPos.quantity + quantity;
    const avgPrice = ((currentPos.quantity * currentPos.averagePrice) + cost) / totalQty;

    this.positions.set(ticker, {
      ticker,
      quantity: totalQty,
      averagePrice: avgPrice
    });

    return { balance: this.balance, position: this.positions.get(ticker) };
  }

  /**
   * Calcula el P&L latente basado en un precio actual de mercado
   */
  calculatePnL(ticker: string, currentPrice: number): number {
    const position = this.positions.get(ticker);
    if (!position) return 0;
    return (currentPrice - position.averagePrice) * position.quantity;
  }

  getAccountSummary() {
    return {
      balance: this.balance,
      positions: Array.from(this.positions.values())
    };
  }
}