export const taxCodesData = [
  { id: 1, product: "Electronics", code: "8501", description: "Electric motors and generators" },
  { id: 2, product: "Vehicles", code: "8703", description: "Motor cars and other motor vehicles" },
  { id: 3, product: "Machinery", code: "8471", description: "Automatic data processing machines" },
  { id: 4, product: "Pharmaceuticals", code: "3004", description: "Medicaments for therapeutic use" },
  { id: 5, product: "Clothing", code: "6109", description: "T-shirts, singlets and other vests" },
  { id: 6, product: "Furniture", code: "9403", description: "Other furniture and parts thereof" },
];

export const securityDocsData = [
  "DOC-2023-A1X",
  "DOC-2023-B2Y",
  "DOC-2023-C3Z",
  "DOC-2024-D4W",
  "DOC-2024-E5V",
];

export const cargoItemsData = [
  { id: "CGO-001", description: "Laptops", weight: 500, taxValue: 4500 },
  { id: "CGO-002", description: "Medical Supplies", weight: 200, taxValue: 0 },
  { id: "CGO-003", description: "Automobile Parts", weight: 1200, taxValue: 3200 },
  { id: "CGO-004", description: "Textiles", weight: 800, taxValue: 1500 },
  { id: "CGO-005", description: "Industrial Machinery", weight: 3500, taxValue: 12000 },
];

export const clearanceRoutesData = [
  { id: "R-1", name: "Alpha Corridor", distance: "45 km", waitTime: 120 },
  { id: "R-2", name: "Beta Express", distance: "60 km", waitTime: 45 },
  { id: "R-3", name: "Gamma Route", distance: "30 km", waitTime: 180 },
  { id: "R-4", name: "Delta Highway", distance: "55 km", waitTime: 90 },
];

export const inspectorsData = [
  { id: "INS-01", name: "John Doe", role: "Senior Inspector", workloadScore: 85 },
  { id: "INS-02", name: "Jane Smith", role: "Inspector", workloadScore: 40 },
  { id: "INS-03", name: "Mike Johnson", role: "Junior Inspector", workloadScore: 20 },
  { id: "INS-04", name: "Sarah Williams", role: "Inspector", workloadScore: 65 },
  { id: "INS-05", name: "Robert Brown", role: "Senior Inspector", workloadScore: 95 },
];

// New Enterprise Datasets
export const riskAssessmentData = [
  { id: "CONT-8891-A", origin: "Shanghai", content: "Electronics", riskLevel: "High", reason: "Incomplete Documentation", date: "2026-06-15" },
  { id: "CONT-4423-B", origin: "Rotterdam", content: "Machinery", riskLevel: "Medium", reason: "Random Selection", date: "2026-06-15" },
  { id: "CONT-1102-C", origin: "Singapore", content: "Textiles", riskLevel: "Low", reason: "Trusted Shipper", date: "2026-06-15" },
  { id: "CONT-9932-D", origin: "Dubai", content: "Chemicals", riskLevel: "High", reason: "Hazardous Materials", date: "2026-06-14" },
];

export const tradeRoutesData = [
  { id: "TR-1", origin: "Asia-Pacific", activeVessels: 45, volume: "1.2M TEU", trend: "+5.2%" },
  { id: "TR-2", origin: "Europe", activeVessels: 32, volume: "850K TEU", trend: "-1.1%" },
  { id: "TR-3", origin: "North America", activeVessels: 28, volume: "620K TEU", trend: "+2.4%" },
  { id: "TR-4", origin: "Middle East", activeVessels: 15, volume: "310K TEU", trend: "+8.7%" },
];

export const customsAlertsData = [
  { id: "ALT-1", type: "Security", message: "Enhanced screening required for origin port: Dubai.", time: "10 mins ago", severity: "critical" },
  { id: "ALT-2", type: "Weather", message: "Typhoon warning near Alpha Corridor. Expect delays.", time: "45 mins ago", severity: "warning" },
  { id: "ALT-3", type: "System", message: "Manifest synchronization restored successfully.", time: "2 hours ago", severity: "info" },
  { id: "ALT-4", type: "Operations", message: "North Gate Checkpoint operating at maximum capacity.", time: "3 hours ago", severity: "warning" },
];
