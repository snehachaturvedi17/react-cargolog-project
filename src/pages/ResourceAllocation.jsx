import { useState } from "react";
import { inspectorsData } from "../data/mockData";
import { Users, Crosshair, Award } from "lucide-react";

const ResourceAllocation = () => {
  const [inspectors, setInspectors] = useState(inspectorsData);

  const handleSort = (type) => {
    const sorted = [...inspectors].sort((a, b) => {
      if (type === 'capacity') return a.workloadScore - b.workloadScore;
      return b.workloadScore - a.workloadScore; // heavy first
    });
    setInspectors(sorted);
  };

  return (
    <div className="animate-fade-in max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
            <Users className="text-orange-500" size={32} />
            Resource Allocation Dashboard
          </h1>
          <p className="text-slate-500 mt-1">Dynamic deployment of customs officers based on live terminal demands.</p>
        </div>
        
        <div className="flex items-center bg-white p-1 rounded-xl shadow-sm border border-slate-200 mt-4 md:mt-0">
          <button 
            onClick={() => handleSort('capacity')}
            className="px-4 py-2 text-sm font-medium rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          >
            Optimize Available
          </button>
          <div className="w-px h-6 bg-slate-200 mx-1"></div>
          <button 
            onClick={() => handleSort('heavy')}
            className="px-4 py-2 text-sm font-medium rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          >
            View Critical
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {inspectors.map((inspector) => {
          const isCritical = inspector.workloadScore >= 85;
          const isOptimal = inspector.workloadScore <= 45;

          return (
            <div 
              key={inspector.id} 
              className={`glass-card p-6 border-t-4 ${
                isCritical ? 'border-t-rose-500' :
                isOptimal ? 'border-t-emerald-500' : 'border-t-amber-500'
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{inspector.name}</h3>
                  <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                    <Award size={14} /> {inspector.role}
                  </div>
                </div>
                <span className="text-xs font-mono bg-slate-100 text-slate-500 px-2 py-1 rounded">
                  {inspector.id}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Utilization</span>
                  <span className={`text-2xl font-bold ${
                    isCritical ? 'text-rose-600' : isOptimal ? 'text-emerald-600' : 'text-amber-600'
                  }`}>
                    {inspector.workloadScore}%
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden shadow-inner">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${
                      isCritical ? 'bg-gradient-to-r from-rose-400 to-rose-600' :
                      isOptimal ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 
                      'bg-gradient-to-r from-amber-400 to-amber-600'
                    }`} 
                    style={{ width: `${inspector.workloadScore}%` }}
                  ></div>
                </div>
              </div>
              
              <button 
                className={`w-full mt-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                  isCritical 
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200' 
                    : 'bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg'
                }`}
                disabled={isCritical}
              >
                <Crosshair size={16} />
                {isCritical ? 'Maximum Capacity Reached' : 'Deploy Officer to Zone'}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ResourceAllocation;
