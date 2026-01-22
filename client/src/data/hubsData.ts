export interface HubData {
  id: string;
  name: string;
  country: string;
  region: string;
  tier: "major" | "emerging";
  aiMaturity: "advanced" | "mature" | "developing" | "emerging";
  keyInstitutions: string[];
  aiInitiatives: string[];
  metrics: {
    aiPrograms: number;
    annualFunding: string;
    aiAdoptionRate: number;
    startupCount?: number;
  };
  competitiveEdge: string[];
  telsTPAlignment: "high" | "medium" | "low";
  strategicInsights: string[];
}

export const hubsData: HubData[] = [
  {
    id: "boston",
    name: "Boston",
    country: "USA",
    region: "North America",
    tier: "major",
    aiMaturity: "advanced",
    keyInstitutions: ["MIT Media Lab", "Harvard Medical School", "Broad Institute"],
    aiInitiatives: [
      "Life with AI research theme",
      "AI-driven gene-drug identification",
      "Pandemic prediction algorithms",
      "AIM PhD track"
    ],
    metrics: {
      aiPrograms: 40,
      annualFunding: "$2.3B",
      aiAdoptionRate: 85,
      startupCount: 250
    },
    competitiveEdge: [
      "Academic-Industry Integration",
      "Venture Capital Density",
      "Talent Concentration",
      "Drug Discovery Excellence"
    ],
    telsTPAlignment: "high",
    strategicInsights: [
      "AI is transitioning from efficiency tool to co-creative research partner",
      "Deep academic-industry integration accelerates innovation cycles",
      "Talent concentration in AI-biotech creates network effects",
      "Multi-disciplinary teams outperform specialists"
    ]
  }
];

export const getHubById = (id: string): HubData | undefined => {
  return hubsData.find(hub => hub.id === id);
};

export const getHubsByTier = (tier: "major" | "emerging"): HubData[] => {
  return hubsData.filter(hub => hub.tier === tier);
};

export const getHubsByRegion = (region: string): HubData[] => {
  return hubsData.filter(hub => hub.region === region);
};

export const getHubsByMaturity = (maturity: string): HubData[] => {
  return hubsData.filter(hub => hub.aiMaturity === maturity);
};