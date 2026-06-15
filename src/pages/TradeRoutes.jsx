import { tradeRoutesData } from "../data/mockData";
import { Globe, TrendingUp, TrendingDown, Ship } from "lucide-react";

const TradeRoutes = () => {
  return (
    <div className="animate-fade-in max-w-5xl mx-auto space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
          <Globe className="text-blue-500" size={32} />
          Global Trade Route Overview
        </h1>
        <p className="text-slate-500 mt-1">Analyze shipping volumes and active vessels across international lanes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tradeRoutesData.map((route) => {
          const isUp = route.trend.startsWith('+');
          return (
            <div key={route.id} className="glass-card p-6 border border-slate-200/60 relative overflow-hidden group">
              <div className="absolute right-0 top-0 opacity-5 scale-150 transform translate-x-1/4 -translate-y-1/4 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                <Globe size={150} />
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-slate-800">{route.origin}</h2>
                  <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                    isUp ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                  }`}>
                    {isUp ? <TrendingUp size={14}/> : <TrendingDown size={14}/>}
                    {route.trend}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-100">
                    <p className="text-slate-500 text-xs font-semibold uppercase mb-1 flex items-center gap-1">
                      <Ship size={14} className="text-blue-500"/> Active Vessels
                    </p>
                    <p className="text-2xl font-bold text-slate-800">{route.activeVessels}</p>
                  </div>
                  <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-100">
                    <p className="text-slate-500 text-xs font-semibold uppercase mb-1">Monthly Volume</p>
                    <p className="text-2xl font-bold text-slate-800">{route.volume}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TradeRoutes;
