import { FeatureCard } from "./FeatureCard";
import { Calendar, FlaskConical, TrendingUp, Cloud, Users } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Crop Planner & Calendar",
      description: "AI-powered crop planning with dynamic calendars and smart notifications",
      features: [
        "Suggests best crops based on soil type and weather",
        "Market demand analysis",
        "Dynamic sowing to harvesting calendar",
        "Smart notifications for watering, fertilizing, and harvesting",
        "Seasonal loss prevention"
      ],
      benefits: "Helps farmers plan crop cycles efficiently and avoid seasonal losses.",
      variant: "growth" as const
    },
    {
      icon: FlaskConical,
      title: "Soil Health Tracker",
      description: "Comprehensive soil analysis with personalized recommendations",
      features: [
        "Upload soil test reports or input NPK values manually",
        "Personalized fertilizer recommendations",
        "Organic treatment suggestions",
        "Crop suitability analysis",
        "Visual health status indicators (Green/Yellow/Red)"
      ],
      benefits: "Promotes sustainable agriculture by reducing overuse of chemicals and improving soil fertility.",
      variant: "earth" as const
    },
    {
      icon: TrendingUp,
      title: "Farm Expense & Yield Tracker",
      description: "Complete financial management with detailed analytics",
      features: [
        "Track daily/monthly expenses (seed, labor, tools, fertilizers)",
        "Yield tracking per crop",
        "Sales and profit monitoring",
        "Comprehensive graphs and reports",
        "Decision-making insights"
      ],
      benefits: "Acts as a farm bookkeeping tool, giving financial visibility and helping in loan/grant applications.",
      variant: "harvest" as const
    },
    {
      icon: Cloud,
      title: "Weather Alert & Advisory",
      description: "Real-time weather monitoring with farming-specific alerts",
      features: [
        "Real-time localized weather updates",
        "Alerts for rain, frost, heatwaves, and windstorms",
        "Custom farming tips based on current weather",
        "Weather-based farming recommendations",
        "Crop damage prevention alerts"
      ],
      benefits: "Reduces crop damage and helps in weather-based planning.",
      variant: "sky" as const
    },
    {
      icon: Users,
      title: "Farmer-to-Farmer Marketplace",
      description: "Direct trading platform connecting farmers nationwide",
      features: [
        "Buy/sell equipment, seeds, and organic manure",
        "Direct crop sales (B2C and B2B)",
        "Integrated chat and call options",
        "Verified buyer/seller profiles",
        "Secure transaction system"
      ],
      benefits: "Enables direct trade between farmers, lowering middlemen costs and increasing earnings.",
      variant: "default" as const
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Complete Farm Management Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Five powerful modules working together to revolutionize your farming operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};