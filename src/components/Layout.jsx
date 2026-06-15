import { Link, Outlet, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
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

const Layout = () => {
  const location = useLocation();

  const navItems = [
    { name: "Executive Dashboard", path: "/", icon: <LayoutDashboard size={20} /> },
    { name: "Risk Assessment", path: "/risk", icon: <ShieldAlert size={20} /> },
    { name: "Daily Operations", path: "/operations", icon: <Activity size={20} /> },
    { name: "Trade Routes", path: "/routes", icon: <Globe size={20} /> },
    { name: "Customs Alerts", path: "/alerts", icon: <BellRing size={20} /> },
    { name: "Tariff Intelligence", path: "/tariff", icon: <BookOpen size={20} /> },
    { name: "Bill of Lading", path: "/bol", icon: <FileCheck size={20} /> },
    { name: "Resource Allocation", path: "/resources", icon: <Users size={20} /> },
    { name: "Port Operations", path: "/port", icon: <Container size={20} /> },
    { name: "Route Optimizer", path: "/optimizer", icon: <Route size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden">
      {/* Sidebar - Glassmorphism style */}
      <aside className="w-72 bg-primary text-slate-300 flex flex-col transition-all relative z-20 shadow-[4px_0_24px_rgba(0,0,0,0.15)]">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
        
        <div className="p-8 border-b border-white/10 relative z-10">
          <h1 className="text-2xl font-bold font-display text-white tracking-tight flex items-center gap-3">
            <div className="p-2 bg-accent/20 rounded-lg backdrop-blur-sm">
              <Activity className="text-accent" size={24} />
            </div>
            CargoLog Desk
          </h1>
          <p className="text-xs text-accent/80 mt-2 tracking-wider uppercase font-semibold">Intelligence Platform</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6 custom-scrollbar relative z-10">
          <ul className="space-y-1.5 px-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? "bg-accent text-primary font-bold shadow-[0_0_15px_rgba(174,197,235,0.3)]" 
                        : "hover:bg-white/10 hover:text-white font-medium"
                    }`}
                  >
                    {item.icon}
                    <span className="font-display tracking-wide">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="p-6 border-t border-white/10 relative z-10 bg-black/10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-accent to-blue-400 flex items-center justify-center text-primary font-bold shadow-lg ring-2 ring-white/20">
              CM
            </div>
            <div>
              <p className="text-sm font-bold text-white font-display">Cmdr. Mercer</p>
              <p className="text-xs text-accent/70">Chief Operations</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative z-10 bg-slate-50 overflow-hidden">
        {/* Top Header */}
        <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/60 p-4 flex justify-between items-center z-20 sticky top-0">
          <h2 className="text-xl font-bold font-display text-primary">
            {navItems.find(item => item.path === location.pathname)?.name || "Dashboard"}
          </h2>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-600 tracking-wider uppercase">System Online</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6 md:p-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNlMmU4ZjAiIGZpbGwtb3BhY2l0eT0iMC40Ii8+PC9zdmc+')]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
