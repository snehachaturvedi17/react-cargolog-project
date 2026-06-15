import { useState } from "react";
import { securityDocsData } from "../data/mockData";
import { FileCheck, ShieldAlert, FileText, CheckCircle } from "lucide-react";

const BillOfLadingHub = () => {
  const [docId, setDocId] = useState("");
  const [status, setStatus] = useState(null); // null | "verified" | "not-found"

  const handleVerify = (e) => {
    e.preventDefault();
    if (!docId.trim()) return;

    const isFound = securityDocsData.includes(docId.trim().toUpperCase());
    setStatus(isFound ? "verified" : "not-found");
  };

  return (
    <div className="animate-fade-in max-w-3xl mx-auto space-y-6">
      <div className="mb-6 text-center">
        <div className="w-20 h-20 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 rotate-3">
          <FileCheck className="text-cyan-600" size={40} />
        </div>
        <h1 className="text-3xl font-bold text-slate-800">Bill of Lading Verification Hub</h1>
        <p className="text-slate-500 mt-2 max-w-xl mx-auto">
          Authenticate critical shipping documents securely against the international customs ledger.
        </p>
      </div>

      <div className="glass-panel p-8">
        <form onSubmit={handleVerify} className="mb-8 relative">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FileText className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none uppercase font-mono tracking-wider shadow-sm"
                placeholder="INPUT BL NUMBER (e.g. DOC-2023-A1X)"
                value={docId}
                onChange={(e) => {
                  setDocId(e.target.value);
                  if (status) setStatus(null);
                }}
              />
            </div>
            <button 
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
            >
              Verify Ledger
            </button>
          </div>
        </form>

        {status === "verified" && (
          <div className="bg-emerald-50/80 backdrop-blur-sm border border-emerald-200 rounded-xl p-8 text-center animate-fade-in shadow-sm">
            <CheckCircle size={48} className="text-emerald-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-emerald-900 mb-2">Authentication Successful</h3>
            <p className="text-emerald-700 font-medium bg-emerald-100/50 inline-block px-4 py-1 rounded-full border border-emerald-200">
              BL NUMBER: {docId.toUpperCase()}
            </p>
            <p className="text-emerald-600 mt-4 text-sm">This Bill of Lading is valid and cleared for continued operations.</p>
          </div>
        )}

        {status === "not-found" && (
          <div className="bg-rose-50/80 backdrop-blur-sm border border-rose-200 rounded-xl p-8 text-center animate-fade-in shadow-sm">
            <ShieldAlert size={48} className="text-rose-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-rose-900 mb-2">Fraud Alert: Record Not Found</h3>
            <p className="text-rose-700 font-medium bg-rose-100/50 inline-block px-4 py-1 rounded-full border border-rose-200">
              BL NUMBER: {docId.toUpperCase()}
            </p>
            <p className="text-rose-600 mt-4 text-sm">Warning: This document does not exist in the ledger. Detain shipment.</p>
          </div>
        )}
        
        {!status && (
          <div className="py-12 text-center">
            <p className="text-slate-400 font-medium tracking-wide uppercase text-sm">System ready for query</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BillOfLadingHub;
