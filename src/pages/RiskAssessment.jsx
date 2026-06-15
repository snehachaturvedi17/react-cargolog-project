import { useState } from "react";
import { riskAssessmentData } from "../data/mockData";
import { ShieldAlert, Search, AlertTriangle, ShieldCheck } from "lucide-react";

const RiskAssessment = () => {
  const [filter, setFilter] = useState("All");

  const filteredData = filter === "All" 
    ? riskAssessmentData 
    : riskAssessmentData.filter(item => item.riskLevel === filter);

  return (
    <div className="animate-fade-in max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
            <ShieldAlert className="text-rose-500" size={32} />
            Risk Assessment Panel
          </h1>
          <p className="text-slate-500 mt-1">AI-driven container risk profiling and flagging.</p>
        </div>
        
        <div className="flex bg-white rounded-lg p-1 shadow-sm border border-slate-200">
          {['All', 'High', 'Medium', 'Low'].map(level => (
            <button
              key={level}
              onClick={() => setFilter(level)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === level 
                  ? 'bg-slate-800 text-white shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="glass-panel overflow-hidden">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50/80 backdrop-blur-sm">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Container ID</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Origin</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Contents</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Risk Level</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Reason Flagged</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white/40">
            {filteredData.map((item, idx) => (
              <tr key={idx} className="hover:bg-white/60 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap font-mono font-medium text-slate-800">
                  {item.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                  {item.origin}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                  {item.content}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${
                    item.riskLevel === 'High' ? 'bg-rose-50 text-rose-700 border-rose-200' :
                    item.riskLevel === 'Medium' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                    'bg-emerald-50 text-emerald-700 border-emerald-200'
                  }`}>
                    {item.riskLevel === 'High' ? <AlertTriangle size={12}/> : 
                     item.riskLevel === 'Medium' ? <AlertTriangle size={12}/> : 
                     <ShieldCheck size={12}/>}
                    {item.riskLevel}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">
                  {item.reason}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredData.length === 0 && (
          <div className="p-8 text-center text-slate-500">
            No records found for the selected filter.
          </div>
        )}
      </div>
    </div>
  );
};

export default RiskAssessment;
