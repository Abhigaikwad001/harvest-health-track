import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Sun, CloudRain, Wind, Droplets, Thermometer } from "lucide-react";

const WeatherAdvisory = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Cloud className="h-8 w-8" />
            Weather Advisory
          </h1>
          <p className="text-muted-foreground">Get weather forecasts and farming recommendations for your region</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sun className="h-6 w-6 text-yellow-500" />
                Current Weather
              </CardTitle>
              <CardDescription>Mumbai, Maharashtra</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold">28°C</div>
                <div className="text-muted-foreground">Partly Cloudy</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">Humidity: 65%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Wind: 12 km/h</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader>
              <CardTitle>Today's Advisory</CardTitle>
              <CardDescription>Farming recommendations for today</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge className="bg-green-600">Good</Badge>
                <span className="text-sm">Field preparation activities</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Moderate</Badge>
                <span className="text-sm">Pesticide application</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="destructive">Avoid</Badge>
                <span className="text-sm">Irrigation (rain expected)</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>7-Day Forecast</CardTitle>
            <CardDescription>Weather outlook for the next week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-7">
              {[
                { day: "Today", temp: "28°C", condition: "Partly Cloudy", icon: Sun, rain: "10%" },
                { day: "Tomorrow", temp: "30°C", condition: "Sunny", icon: Sun, rain: "0%" },
                { day: "Wed", temp: "26°C", condition: "Rainy", icon: CloudRain, rain: "80%" },
                { day: "Thu", temp: "25°C", condition: "Cloudy", icon: Cloud, rain: "40%" },
                { day: "Fri", temp: "27°C", condition: "Sunny", icon: Sun, rain: "5%" },
                { day: "Sat", temp: "29°C", condition: "Partly Cloudy", icon: Sun, rain: "15%" },
                { day: "Sun", temp: "31°C", condition: "Sunny", icon: Sun, rain: "0%" }
              ].map((forecast, index) => {
                const Icon = forecast.icon;
                return (
                  <Card key={index} className="text-center p-3">
                    <div className="text-sm font-medium mb-2">{forecast.day}</div>
                    <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="font-bold text-lg">{forecast.temp}</div>
                    <div className="text-xs text-muted-foreground mb-1">{forecast.condition}</div>
                    <div className="text-xs text-blue-600">{forecast.rain} rain</div>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Sowing Recommendations</CardTitle>
              <CardDescription>Best crops to sow based on weather conditions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="border-l-4 border-green-500 pl-4">
                <div className="font-medium text-green-700">Excellent for Sowing</div>
                <div className="text-sm text-muted-foreground">Rice, Cotton, Sugarcane</div>
                <div className="text-xs text-green-600">Monsoon arrival expected this week</div>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="font-medium text-yellow-700">Moderate for Sowing</div>
                <div className="text-sm text-muted-foreground">Pulses, Vegetables</div>
                <div className="text-xs text-yellow-600">Consider irrigation availability</div>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <div className="font-medium text-red-700">Not Recommended</div>
                <div className="text-sm text-muted-foreground">Wheat, Barley</div>
                <div className="text-xs text-red-600">Wrong season for these crops</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Harvest Recommendations</CardTitle>
              <CardDescription>Optimal harvesting guidance based on weather</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="border-l-4 border-green-500 pl-4">
                <div className="font-medium text-green-700">Proceed with Harvest</div>
                <div className="text-sm text-muted-foreground">Rabi crops ready for harvest</div>
                <div className="text-xs text-green-600">Clear weather for next 3 days</div>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="font-medium text-yellow-700">Wait for Better Weather</div>
                <div className="text-sm text-muted-foreground">Late-season vegetables</div>
                <div className="text-xs text-yellow-600">Rain expected mid-week</div>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="font-medium text-blue-700">Storage Advisory</div>
                <div className="text-sm text-muted-foreground">Ensure proper drying before storage</div>
                <div className="text-xs text-blue-600">High humidity levels expected</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Thermometer className="h-5 w-5" />
              Weather Alerts
            </CardTitle>
            <CardDescription>Important weather warnings for your area</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
              <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
              <div>
                <div className="font-medium text-yellow-800">Moderate Rain Alert</div>
                <div className="text-sm text-yellow-700">Expected rainfall: 25-50mm in next 24 hours</div>
                <div className="text-xs text-yellow-600">Issued: 2 hours ago</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <div className="font-medium text-blue-800">Wind Advisory</div>
                <div className="text-sm text-blue-700">Strong winds expected (25-35 km/h) tomorrow evening</div>
                <div className="text-xs text-blue-600">Issued: 6 hours ago</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default WeatherAdvisory;