import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText } from "lucide-react";

export const SpecificationSheet = () => {
  const specifications = {
    overview: {
      title: "Harvest Health Track - Smart Agriculture Platform",
      description: "Comprehensive farm management solution with 5 integrated modules",
      targetUsers: ["Small to Medium Farmers", "Agricultural Cooperatives", "Farm Managers", "Agricultural Consultants"],
      platforms: ["Web Application", "Mobile Responsive", "Progressive Web App (PWA)"]
    },
    modules: [
      {
        id: "crop-planner",
        name: "Smart Crop Planner & Calendar",
        features: [
          "AI-powered crop suggestions based on soil type, weather, and market demand",
          "Dynamic planting to harvesting calendar with seasonal adjustments",
          "Smart notifications for watering, fertilizing, pesticide application",
          "Harvest time predictions with weather integration",
          "Multi-crop rotation planning and optimization",
          "Regional crop database with local varieties",
          "Integration with local agricultural extension services"
        ],
        technicalSpecs: [
          "Weather API integration (OpenWeatherMap/AccuWeather)",
          "Machine learning algorithms for crop recommendation",
          "Push notification system",
          "Calendar synchronization",
          "Offline data caching"
        ],
        benefits: "Reduces crop failure by 25%, optimizes planting schedules, prevents seasonal losses"
      },
      {
        id: "soil-health",
        name: "Soil Health Tracker",
        features: [
          "Soil test report upload and OCR processing",
          "Manual NPK value input with validation",
          "Personalized fertilizer recommendations",
          "Organic treatment suggestions and alternatives",
          "Crop suitability analysis based on soil conditions",
          "Visual health indicators (Green/Yellow/Red status)",
          "Historical soil health trends and analytics",
          "Integration with local soil testing labs"
        ],
        technicalSpecs: [
          "OCR for soil report processing",
          "NPK calculation algorithms",
          "Database of fertilizers and organic treatments",
          "Chart.js for data visualization",
          "PDF report generation"
        ],
        benefits: "Promotes sustainable agriculture, reduces chemical overuse by 30%, improves soil fertility over time"
      },
      {
        id: "expense-yield",
        name: "Farm Expense & Yield Tracker",
        features: [
          "Comprehensive expense tracking (seeds, labor, tools, fertilizers, pesticides)",
          "Real-time yield monitoring per crop and field",
          "Sales tracking with buyer information",
          "Profit/loss analysis with detailed breakdowns",
          "Interactive graphs and charts for trend analysis",
          "Monthly and seasonal financial reports",
          "Export capabilities for loan/grant applications",
          "Tax calculation assistance",
          "ROI analysis per crop type"
        ],
        technicalSpecs: [
          "Double-entry bookkeeping system",
          "Recharts for data visualization",
          "PDF/Excel export functionality",
          "Multi-currency support",
          "Data backup and sync"
        ],
        benefits: "Provides 100% financial visibility, helps secure loans, improves profit margins by 15%"
      },
      {
        id: "weather-alerts",
        name: "Weather Alert & Advisory System",
        features: [
          "Real-time localized weather updates (hourly/daily)",
          "Advanced weather alerts (rain, frost, heatwaves, storms)",
          "Custom farming advisories based on current conditions",
          "7-day and 15-day weather forecasts",
          "Severe weather early warning system",
          "Historical weather data analysis",
          "Integration with crop calendar for weather-based recommendations",
          "SMS/Email alert options for critical warnings"
        ],
        technicalSpecs: [
          "Multiple weather API integrations",
          "GPS-based location services",
          "Push notification infrastructure",
          "SMS gateway integration",
          "Background sync for offline alerts"
        ],
        benefits: "Reduces weather-related crop damage by 40%, enables proactive farm management"
      },
      {
        id: "marketplace",
        name: "Farmer-to-Farmer Marketplace",
        features: [
          "Equipment marketplace (buying/selling farm machinery)",
          "Seeds and sapling exchange platform",
          "Organic manure and fertilizer trading",
          "Direct crop sales (B2C and B2B)",
          "Integrated chat and video call system",
          "Verified seller/buyer profiles with ratings",
          "Secure payment gateway integration",
          "Logistics and delivery coordination",
          "Price comparison and market rate tracking",
          "Bulk order management for cooperatives"
        ],
        technicalSpecs: [
          "Real-time chat system (WebSocket)",
          "Payment gateway integration (Stripe/PayPal)",
          "User verification system",
          "Rating and review system",
          "Geolocation for local trading",
          "Image upload and compression"
        ],
        benefits: "Eliminates middlemen, increases farmer income by 20-30%, creates direct market access"
      }
    ],
    technicalArchitecture: {
      frontend: ["React 18", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Progressive Web App"],
      backend: ["Node.js", "Express.js", "Supabase", "PostgreSQL", "Real-time subscriptions"],
      integrations: ["Weather APIs", "Payment Gateways", "SMS Services", "Push Notifications", "OCR Services"],
      security: ["JWT Authentication", "Role-based Access Control", "Data Encryption", "HTTPS", "API Rate Limiting"],
      deployment: ["Vercel/Netlify", "CDN", "Database Backups", "Auto-scaling", "SSL Certificates"]
    },
    implementation: {
      phase1: ["Core authentication and user management", "Basic dashboard", "Weather integration"],
      phase2: ["Crop planner with calendar", "Soil health tracker", "Basic expense tracking"],
      phase3: ["Advanced analytics", "Marketplace basic features", "Mobile app development"],
      phase4: ["AI recommendations", "Advanced marketplace", "Multi-language support"],
      timeline: "6-8 months for full implementation"
    }
  };

  const downloadSpec = () => {
    const specText = JSON.stringify(specifications, null, 2);
    const blob = new Blob([specText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'harvest-health-track-specifications.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Technical Specifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Comprehensive technical documentation for the Harvest Health Track platform
          </p>
          <Button onClick={downloadSpec} variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Download Full Specifications
          </Button>
        </div>

        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Platform Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Target Users:</h4>
              <div className="flex flex-wrap gap-2">
                {specifications.overview.targetUsers.map((user, index) => (
                  <Badge key={index} variant="secondary">{user}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Platforms:</h4>
              <div className="flex flex-wrap gap-2">
                {specifications.overview.platforms.map((platform, index) => (
                  <Badge key={index} variant="outline">{platform}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Module Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {specifications.modules.map((module, index) => (
            <Card key={module.id} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{module.name}</CardTitle>
                <CardDescription>{module.benefits}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                  <ul className="text-sm space-y-1">
                    {module.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                    {module.features.length > 4 && (
                      <li className="text-muted-foreground text-xs">
                        +{module.features.length - 4} more features...
                      </li>
                    )}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Technical Stack:</h4>
                  <div className="flex flex-wrap gap-1">
                    {module.technicalSpecs.slice(0, 3).map((spec, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Architecture */}
        <Card>
          <CardHeader>
            <CardTitle>Technical Architecture</CardTitle>
            <CardDescription>Modern, scalable technology stack</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <div className="space-y-1">
                  {specifications.technicalArchitecture.frontend.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs block w-fit">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Backend</h4>
                <div className="space-y-1">
                  {specifications.technicalArchitecture.backend.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs block w-fit">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Integrations</h4>
                <div className="space-y-1">
                  {specifications.technicalArchitecture.integrations.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs block w-fit">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Security</h4>
                <div className="space-y-1">
                  {specifications.technicalArchitecture.security.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs block w-fit">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};