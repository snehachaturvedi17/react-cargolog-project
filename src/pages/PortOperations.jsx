import { useState } from "react";
import { Container, ArrowRight, MinusSquare, PlusSquare } from "lucide-react";

const PortOperations = () => {
  const [queue, setQueue] = useState([
    { id: "CNT-XYZ-01", type: "Refrigerated", priority: "High" },
    { id: "CNT-XYZ-02", type: "Dry Cargo", priority: "Standard" },
    { id: "CNT-XYZ-03", type: "Hazardous", priority: "Critical" }
  ]);
  const [newContainer, setNewContainer] = useState("");
  const [newType, setNewType] = useState("Dry Cargo");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newContainer.trim()) return;
    setQueue([...queue, { 
      id: newContainer.toUpperCase(), 
      type: newType, 
      priority: newType === "Hazardous" ? "Critical" : "Standard" 
    }]);
    setNewContainer("");
  };

  const handleProcessNext = () => {
    if (queue.length === 0) return;
    setQueue(queue.slice(1));
  };

  return (
    <div className="animate-fade-in max-w-5xl mx-auto space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
          <Container className="text-purple-500" size={32} />
          Port Inspection Operations Center
        </h1>
        <p className="text-slate-500 mt-1">Manage physical inspection queues and yard logistics.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Operations Control */}
        <div className="glass-panel p-6 lg:col-span-1 h-fit">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Logistics Ingestion</h2>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Container ID</label>
              <input
                type="text"
                className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none uppercase font-mono shadow-sm"
                placeholder="e.g. CNT-1234"
                value={newContainer}
                onChange={(e) => setNewContainer(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Cargo Type</label>
              <select 
                className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none shadow-sm bg-white"
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
              >
                <option>Dry Cargo</option>
                <option>Refrigerated</option>
                <option>Hazardous</option>
                <option>Oversized</option>
              </select>
            </div>
            <button 
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md flex justify-center items-center gap-2"
            >
              <PlusSquare size={18} /> Add to Yard Queue
            </button>
          </form>
        </div>

        {/* Live Queue */}
        <div className="glass-panel p-6 lg:col-span-2">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
            <h2 className="text-xl font-bold text-slate-800">Active Inspection Sequence</h2>
            <button 
              onClick={handleProcessNext}
              disabled={queue.length === 0}
              className={`flex items-center gap-2 py-2 px-4 rounded-lg font-bold transition-all shadow-sm ${
                queue.length > 0
                  ? "bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-md"
                  : "bg-slate-100 text-slate-400 cursor-not-allowed"
              }`}
            >
              <MinusSquare size={18} /> Process Next Unit
            </button>
          </div>

          <div className="space-y-4">
            {queue.length > 0 ? (
              queue.map((item, index) => (
                <div 
                  key={`${item.id}-${index}`}
                  className="flex items-center p-4 rounded-xl border border-slate-200/60 bg-white/50 shadow-sm relative overflow-hidden group hover:border-purple-300 transition-colors"
                >
                  {index === 0 && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-purple-500 animate-pulse"></div>
                  )}
                  
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 font-bold mr-4 shadow-inner text-xl">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1">
                    <span className="font-mono font-bold text-lg text-slate-800">{item.id}</span>
                    <p className="text-sm font-medium text-slate-500">{item.type}</p>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    {index === 0 && (
                      <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-purple-200">
                        In Bay
                      </span>
                    )}
                    <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${
                      item.priority === 'Critical' ? 'bg-rose-100 text-rose-700' :
                      item.priority === 'High' ? 'bg-amber-100 text-amber-700' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {item.priority} Priority
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center text-slate-500 bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
                <Container size={48} className="mx-auto mb-3 text-slate-300" />
                <p className="text-xl font-bold text-slate-700 mb-1">Yard Clear</p>
                <p className="text-sm">No pending containers in the inspection queue.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortOperations;
