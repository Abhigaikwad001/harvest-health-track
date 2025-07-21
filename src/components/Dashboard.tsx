import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  FlaskConical, 
  TrendingUp, 
  Cloud, 
  Users,
  Thermometer,
  Droplets,
  Sun,
  AlertTriangle
} from "lucide-react";

export const Dashboard = () => {
  const weatherData = {
    temperature: "24°C",
    humidity: "68%",
    rainfall: "12mm",
    condition: "Partly Cloudy"
  };

  const quickStats = [
    { label: "Active Crops", value: "8", trend: "+2 this season" },
    { label: "Total Expenses", value: "₹45,680", trend: "-5% vs last month" },
    { label: "Expected Yield", value: "12.5 tons", trend: "+15% vs last year" },
    { label: "Soil Health", value: "Good", trend: "Improved NPK levels" }
  ];

  const recentAlerts = [
    { type: "weather", message: "Heavy rain expected tomorrow", priority: "high" },
    { type: "crop", message: "Tomato harvest ready in 3 days", priority: "medium" },
    { type: "soil", message: "Field A needs phosphorus", priority: "low" }
  ];

  return (
    <section id="dashboard" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Farm Dashboard</h2>
          <p className="text-muted-foreground">Welcome back! Here's your farm overview</p>
        </div>

        {/* Weather Widget */}
        <Card className="mb-8 bg-gradient-to-r from-sky/10 to-accent/10 border-sky/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Cloud className="h-5 w-5 text-sky" />
                Today's Weather
              </CardTitle>
              <Badge variant="secondary">{weatherData.condition}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Thermometer className="h-4 w-4 text-sky" />
                <span className="text-sm text-muted-foreground">Temperature:</span>
                <span className="font-semibold">{weatherData.temperature}</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4 text-sky" />
                <span className="text-sm text-muted-foreground">Humidity:</span>
                <span className="font-semibold">{weatherData.humidity}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="h-4 w-4 text-sky" />
                <span className="text-sm text-muted-foreground">Rainfall:</span>
                <span className="font-semibold">{weatherData.rainfall}</span>
              </div>
              <Button variant="sky" size="sm" className="w-full">
                View 7-day Forecast
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                <div className="text-xs text-success">{stat.trend}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-all group cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                <Calendar className="h-5 w-5" />
                Crop Planner
              </CardTitle>
              <CardDescription>Plan and track your crops</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="text-sm">Next planting: Wheat (Dec 15)</div>
                <div className="text-sm">Harvest ready: Tomatoes (3 days)</div>
              </div>
              <Button variant="growth" className="w-full">Open Planner</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all group cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                <FlaskConical className="h-5 w-5" />
                Soil Health
              </CardTitle>
              <CardDescription>Monitor soil conditions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm">Overall Health:</span>
                  <Badge variant="secondary" className="bg-success/10 text-success">Good</Badge>
                </div>
                <div className="text-sm">Last test: 2 weeks ago</div>
              </div>
              <Button variant="earth" className="w-full">View Analysis</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all group cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                <TrendingUp className="h-5 w-5" />
                Expenses & Yield
              </CardTitle>
              <CardDescription>Track farm finances</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="text-sm">This month: ₹45,680 spent</div>
                <div className="text-sm">Profit margin: +12%</div>
              </div>
              <Button variant="harvest" className="w-full">View Reports</Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Recent Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentAlerts.map((alert, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      alert.priority === 'high' ? 'bg-destructive' :
                      alert.priority === 'medium' ? 'bg-warning' : 'bg-success'
                    }`} />
                    <span className="text-sm">{alert.message}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {alert.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};