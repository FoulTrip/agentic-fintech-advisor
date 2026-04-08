import CandleChart from "@/components/charts/CandleChart";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Panel Izquierdo: Watchlist y Portafolio */}
      <div className="col-span-3 space-y-6">
        <Card className="p-4 bg-slate-900 border-slate-800">
          <h2 className="text-lg font-semibold mb-4">Portafolio Simulado</h2>
          <div className="space-y-2">
            <p className="text-sm text-slate-400">Balance Total</p>
            <p className="text-2xl font-mono">$100,000.00</p>
            <p className="text-xs text-green-500">+2.4% (Hoy)</p>
          </div>
        </Card>
        
        <Card className="p-4 bg-slate-900 border-slate-800">
          <h2 className="text-lg font-semibold mb-4">Watchlist</h2>
          <div className="space-y-4">
            {['NVDA', 'AAPL', 'MSFT'].map((ticker) => (
              <div key={ticker} className="flex justify-between items-center p-2 hover:bg-slate-800 rounded cursor-pointer transition-colors">
                <span className="font-bold">{ticker}</span>
                <span className="text-slate-300 font-mono">$150.00</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Panel Central: Gráfica y Orquestación */}
      <div className="col-span-6 space-y-6">
        <Card className="p-4 bg-slate-900 border-slate-800 min-h-[400px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">NVDA / USD</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-blue-600 rounded text-xs font-bold">1H</button>
              <button className="px-3 py-1 bg-slate-800 rounded text-xs font-bold">1D</button>
            </div>
          </div>
          <CandleChart />
        </Card>

        <Card className="p-6 bg-slate-900 border-slate-800">
          <h2 className="text-lg font-semibold mb-4">Playground de Agentes</h2>
          <div className="flex flex-col gap-4">
             <div className="p-3 border-l-2 border-blue-500 bg-blue-500/10 rounded">
                <p className="text-xs font-bold text-blue-400 uppercase">Analista Técnico</p>
                <p className="text-sm italic text-slate-300">"Detectada divergencia alcista en RSI de 14 periodos. Soporte sólido en $145.20..."</p>
             </div>
             <div className="p-3 border-l-2 border-purple-500 bg-purple-500/10 rounded">
                <p className="text-xs font-bold text-purple-400 uppercase">Analista de Sentimiento</p>
                <p className="text-sm italic text-slate-300">"Sentimiento en redes sociales neutral-alcista. Menciones de IA impulsan el ticker..."</p>
             </div>
          </div>
        </Card>
      </div>

      {/* Panel Derecho: Órdenes y Logs */}
      <div className="col-span-3 space-y-6">
        <Card className="p-4 bg-slate-900 border-slate-800">
          <h2 className="text-lg font-semibold mb-4">Ejecutar Orden</h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-slate-400">Cantidad</label>
              <input type="number" className="w-full bg-slate-800 border-slate-700 rounded p-2 text-sm" placeholder="0.00" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-green-600 hover:bg-green-700 py-2 rounded font-bold text-sm">COMPRAR</button>
              <button className="bg-red-600 hover:bg-red-700 py-2 rounded font-bold text-sm">VENDER</button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}