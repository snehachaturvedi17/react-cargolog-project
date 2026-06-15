import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ExecutiveDashboard from "./pages/ExecutiveDashboard";
import RiskAssessment from "./pages/RiskAssessment";
import OperationsSummary from "./pages/OperationsSummary";
import TradeRoutes from "./pages/TradeRoutes";
import CustomsAlerts from "./pages/CustomsAlerts";
import TariffIntelligence from "./pages/TariffIntelligence";
import BillOfLadingHub from "./pages/BillOfLadingHub";
import ResourceAllocation from "./pages/ResourceAllocation";
import PortOperations from "./pages/PortOperations";
import RouteOptimizer from "./pages/RouteOptimizer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ExecutiveDashboard />} />
          <Route path="risk" element={<RiskAssessment />} />
          <Route path="operations" element={<OperationsSummary />} />
          <Route path="routes" element={<TradeRoutes />} />
          <Route path="alerts" element={<CustomsAlerts />} />
          <Route path="tariff" element={<TariffIntelligence />} />
          <Route path="bol" element={<BillOfLadingHub />} />
          <Route path="resources" element={<ResourceAllocation />} />
          <Route path="port" element={<PortOperations />} />
          <Route path="optimizer" element={<RouteOptimizer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
