import { clearanceRoutesData } from "../data/mockData";
import { Route, Navigation, Timer, Compass } from "lucide-react";

const RouteOptimizer = () => {
  const optimizedRoute = clearanceRoutesData.reduce((prev, current) => {
    return (prev.waitTime < current.waitTime) ? prev : current;
  });

  return (
    <div className="animate-fade-in max-w-5xl mx-auto space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
          <Route className="text-teal-500" size={32} />
          Clearance Route Optimizer
        </h1>
        <p className="text-slate-500 mt-1">Algorithmic routing to reduce transit bottlenecks in real-time.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Recommended Route Hero */}
        <div className="lg:col-span-12 glass-panel p-0 overflow-hidden relative border-none bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl">
          <div className="absolute right-0 top-0 opacity-10 scale-150 transform translate-x-1/4 -translate-y-1/4">
            <Compass size={300} />
          </div>
          
          <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 border border-teal-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Navigation size={14} /> AI Recommended Path
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-2 tracking-tight">
                {optimizedRoute.name}
              </h2>
              <p className="text-slate-400 text-lg">Safest and most efficient route generated.</p>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center min-w-[120px]">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Distance</p>
                <p className="text-3xl font-bold">{optimizedRoute.distance}</p>
              </div>
              <div className="bg-teal-500/20 backdrop-blur-md border border-teal-500/30 rounded-2xl p-6 text-center min-w-[120px]">
                <p className="text-teal-200 text-xs font-bold uppercase tracking-wider mb-2">ETA</p>
                <p className="text-3xl font-bold text-teal-400">{optimizedRoute.waitTime}m</p>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Routes */}
        <div className="lg:col-span-12">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Alternative Logistics Corridors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {clearanceRoutesData.map((route) => {
              if (route.id === optimizedRoute.id) return null; // Skip optimal route in this list
              
              return (
                <div key={route.id} className="glass-card p-5 group hover:border-slate-300">
                  <h4 className="font-bold text-lg text-slate-800 mb-1">{route.name}</h4>
                  
                  <div className="flex justify-between items-end mt-6">
                    <div className="text-slate-500 font-medium">{route.distance}</div>
                    <div className="flex items-center gap-1.5 text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg text-sm font-bold">
                      <Timer size={16} className="text-amber-500" />
                      {route.waitTime}m
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteOptimizer;
