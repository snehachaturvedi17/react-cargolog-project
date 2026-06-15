import { Link } from "react-router-dom";
import { 
  ShieldAlert, 
  Activity, 
  Globe, 
  BellRing, 
  BookOpen, 
  FileCheck, 
  Users, 
  Container, 
  Route 
} from "lucide-react";

const ExecutiveDashboard = () => {
  const modules = [
    { name: "Risk Assessment", path: "/risk", icon: <ShieldAlert size={24} className="text-rose-500" />, desc: "AI-driven container risk profiling" },
    { name: "Daily Operations", path: "/operations", icon: <Activity size={24} className="text-emerald-500" />, desc: "Real-time port operational metrics" },
    { name: "Global Trade Routes", path: "/routes", icon: <Globe size={24} className="text-blue-500" />, desc: "International shipping lane tracking" },
    { name: "Live Customs Alerts", path: "/alerts", icon: <BellRing size={24} className="text-amber-500" />, desc: "Critical security & weather warnings" },
    { name: "Tariff Intelligence", path: "/tariff", icon: <BookOpen size={24} className="text-indigo-500" />, desc: "HSN code and tax bracket engine" },
    { name: "Bill of Lading Hub", path: "/bol", icon: <FileCheck size={24} className="text-cyan-500" />, desc: "Secure document verification" },
    { name: "Resource Allocation", path: "/resources", icon: <Users size={24} className="text-orange-500" />, desc: "Dynamic inspector deployment" },
    { name: "Port Operations", path: "/port", icon: <Container size={24} className="text-purple-500" />, desc: "Queue and manifest logistics" },
    { name: "Route Optimizer", path: "/optimizer", icon: <Route size={24} className="text-teal-500" />, desc: "Clearance logistics routing" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="mb-2">
        <h1 className="text-3xl font-bold text-slate-800">Executive Dashboard</h1>
        <p className="text-slate-500">Real-time intelligence for CargoLog Port Authority.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <div className="glass-card p-5">
          <h3 className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Active Shipments</h3>
          <p className="text-2xl font-bold text-slate-800 mt-1">2,845</p>
          <span className="text-emerald-500 text-xs font-medium mt-1 inline-block">↑ 14% WoW</span>
        </div>
        <div className="glass-card p-5 border-l-4 border-l-amber-400">
          <h3 className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Pending Insp.</h3>
          <p className="text-2xl font-bold text-slate-800 mt-1">142</p>
          <span className="text-amber-600 text-xs font-medium mt-1 inline-block">Normal Load</span>
        </div>
        <div className="glass-card p-5 border-l-4 border-l-rose-500">
          <h3 className="text-slate-500 text-xs font-semibold uppercase tracking-wider">High Risk Cont.</h3>
          <p className="text-2xl font-bold text-slate-800 mt-1">18</p>
          <span className="text-rose-600 text-xs font-medium mt-1 inline-block">Action Required</span>
        </div>
        <div className="glass-card p-5">
          <h3 className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Docs Verified</h3>
          <p className="text-2xl font-bold text-slate-800 mt-1">12.4k</p>
          <span className="text-emerald-500 text-xs font-medium mt-1 inline-block">Today</span>
        </div>
        <div className="glass-card p-5">
          <h3 className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Clearance Time</h3>
          <p className="text-2xl font-bold text-slate-800 mt-1">4.2h</p>
          <span className="text-emerald-500 text-xs font-medium mt-1 inline-block">↓ 0.5h Avg</span>
        </div>
        <div className="glass-card p-5 bg-gradient-to-br from-primary to-secondary text-white border-none">
          <h3 className="text-white/80 text-xs font-semibold uppercase tracking-wider">Tax Revenue</h3>
          <p className="text-2xl font-bold mt-1">$42.8M</p>
          <span className="text-emerald-300 text-xs font-medium mt-1 inline-block">↑ 5.2% MoM</span>
        </div>
      </div>

      {/* Modules Grid */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4">Platform Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <Link 
              key={mod.path} 
              to={mod.path}
              className="glass-card p-6 flex items-start gap-4 group"
            >
              <div className="h-12 w-12 rounded-xl bg-slate-50 shadow-inner flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 border border-slate-100">
                {mod.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-primary transition-colors">{mod.name}</h3>
                <p className="text-sm text-slate-500 mt-1 leading-snug">{mod.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;
