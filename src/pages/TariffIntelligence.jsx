import { useState } from "react";
import { taxCodesData } from "../data/mockData";
import { Search, BookOpen, ChevronRight } from "lucide-react";

const TariffIntelligence = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCodes = taxCodesData.filter(
    (item) =>
      item.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fade-in max-w-5xl mx-auto space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
          <BookOpen className="text-indigo-500" size={32} />
          HSN & Tariff Intelligence Center
        </h1>
        <p className="text-slate-500 mt-1">Search the global harmonized system database for tariff classifications.</p>
      </div>

      <div className="glass-panel p-6">
        {/* Search Input */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-indigo-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-4 border-2 border-indigo-100 rounded-xl focus:ring-0 focus:border-indigo-400 bg-indigo-50/30 text-slate-900 placeholder-slate-400 text-lg transition-colors"
            placeholder="Search by HSN Code or Product Category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCodes.length > 0 ? (
            filteredCodes.map((item) => (
              <div key={item.id} className="glass-card p-5 group cursor-pointer border border-slate-100 hover:border-indigo-200 flex justify-between items-center">
                <div>
                  <span className="inline-block bg-indigo-100 text-indigo-800 font-mono text-sm font-bold px-2 py-1 rounded mb-2">
                    HSN: {item.code}
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">
                    {item.product}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 line-clamp-1">
                    {item.description}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                  <ChevronRight size={20} />
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-200">
              <BookOpen size={48} className="mx-auto text-slate-300 mb-3" />
              <p className="text-lg font-medium">No classifications found</p>
              <p>Try searching for a different term or code.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TariffIntelligence;
