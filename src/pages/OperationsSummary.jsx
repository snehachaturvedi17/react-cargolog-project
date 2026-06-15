import { Activity, Anchor, Box, CheckCircle, Truck } from "lucide-react";

const OperationsSummary = () => {
  return (
    <div className="animate-fade-in max-w-6xl mx-auto space-y-6">
      <div className="mb-2">
        <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
          <Activity className="text-emerald-500" size={32} />
          Daily Operations Summary
        </h1>
        <p className="text-slate-500 mt-1">Live snapshot of port logistics and clearance activities.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Flow Metrics */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-slate-800">
              <Anchor size={20} className="text-primary" /> Logistics Flow
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 text-center">
                <Box size={32} className="mx-auto text-blue-500 mb-2" />
                <p className="text-3xl font-bold text-slate-800">850</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-1">Vessels Arrived</p>
              </div>
              <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 text-center relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden md:block">
                  <div className="w-8 h-px bg-slate-300"></div>
                </div>
                <CheckCircle size={32} className="mx-auto text-emerald-500 mb-2" />
                <p className="text-3xl font-bold text-slate-800">12,402</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-1">Containers Cleared</p>
              </div>
              <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 text-center relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden md:block">
                  <div className="w-8 h-px bg-slate-300"></div>
                </div>
                <Truck size={32} className="mx-auto text-amber-500 mb-2" />
                <p className="text-3xl font-bold text-slate-800">4,120</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-1">Trucks Dispatched</p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6">
            <h2 className="text-xl font-semibold mb-4 text-slate-800">Terminal Efficiency</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-600">Gate A Processing</span>
                  <span className="font-bold text-slate-800">92%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-600">Terminal B Capacity</span>
                  <span className="font-bold text-slate-800">78%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-600">Customs Scanning Bay</span>
                  <span className="font-bold text-slate-800">98%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-rose-500 h-2 rounded-full" style={{width: '98%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Status Log */}
        <div className="glass-panel p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-4 text-slate-800">System Logs</h2>
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {[
              { time: "14:20", msg: "Vessel 'Oceanic' docked at Pier 4.", type: "info" },
              { time: "14:15", msg: "High-risk container flagged at Bay 2.", type: "alert" },
              { time: "13:50", msg: "Shift handover completed successfully.", type: "success" },
              { time: "13:22", msg: "Gate C experienced 5 min delay.", type: "warn" },
              { time: "12:00", msg: "Daily manifest sync completed.", type: "success" },
            ].map((log, idx) => (
              <div key={idx} className="flex gap-3 text-sm border-b border-slate-100 pb-3 last:border-0">
                <span className="text-slate-400 font-mono shrink-0">{log.time}</span>
                <p className={`font-medium ${
                  log.type === 'alert' ? 'text-rose-600' :
                  log.type === 'warn' ? 'text-amber-600' :
                  log.type === 'success' ? 'text-emerald-600' : 'text-slate-600'
                }`}>{log.msg}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationsSummary;
