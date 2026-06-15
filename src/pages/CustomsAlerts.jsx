import { customsAlertsData } from "../data/mockData";
import { BellRing, AlertOctagon, Info, AlertTriangle } from "lucide-react";

const CustomsAlerts = () => {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto space-y-6">
      <div className="mb-6 flex justify-between items-end border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
            <BellRing className="text-amber-500" size={32} />
            Live Customs Alerts
          </h1>
          <p className="text-slate-500 mt-1">Real-time notifications for security, weather, and system events.</p>
        </div>
        <div className="hidden sm:block">
          <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
            LIVE SYSTEM
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {customsAlertsData.map((alert) => {
          const isCritical = alert.severity === 'critical';
          const isWarning = alert.severity === 'warning';
          const isInfo = alert.severity === 'info';
          
          return (
            <div 
              key={alert.id} 
              className={`glass-card p-5 border-l-4 flex gap-4 items-start ${
                isCritical ? 'border-l-rose-500 bg-rose-50/30' :
                isWarning ? 'border-l-amber-500 bg-amber-50/30' :
                'border-l-blue-500 bg-blue-50/30'
              }`}
            >
              <div className={`p-2 rounded-full shrink-0 ${
                isCritical ? 'bg-rose-100 text-rose-600' :
                isWarning ? 'bg-amber-100 text-amber-600' :
                'bg-blue-100 text-blue-600'
              }`}>
                {isCritical && <AlertOctagon size={24} />}
                {isWarning && <AlertTriangle size={24} />}
                {isInfo && <Info size={24} />}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className={`font-bold text-lg ${
                    isCritical ? 'text-rose-900' :
                    isWarning ? 'text-amber-900' :
                    'text-blue-900'
                  }`}>
                    {alert.type} Alert
                  </h3>
                  <span className="text-xs font-semibold text-slate-400 bg-white px-2 py-1 rounded border border-slate-100">
                    {alert.time}
                  </span>
                </div>
                <p className="text-slate-600 font-medium">{alert.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomsAlerts;
