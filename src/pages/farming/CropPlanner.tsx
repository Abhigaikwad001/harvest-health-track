import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sprout, MapPin, Calendar, Thermometer } from "lucide-react";

const CropPlanner = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Sprout className="h-8 w-8" />
            Crop Planner
          </h1>
          <p className="text-muted-foreground">Get AI-powered crop suggestions based on your location, soil, and weather conditions</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Location & Soil Information
              </CardTitle>
              <CardDescription>Tell us about your farm location and soil conditions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter your city or district" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="soil-type">Soil Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select soil type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clay">Clay</SelectItem>
                    <SelectItem value="sandy">Sandy</SelectItem>
                    <SelectItem value="loamy">Loamy</SelectItem>
                    <SelectItem value="silt">Silt</SelectItem>
                    <SelectItem value="black">Black Cotton</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ph-level">Soil pH Level</Label>
                <Input id="ph-level" type="number" step="0.1" placeholder="6.5" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="farm-size">Farm Size (acres)</Label>
                <Input id="farm-size" type="number" placeholder="5" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Season & Climate
              </CardTitle>
              <CardDescription>Specify your preferred planting season and climate conditions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="season">Planting Season</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select season" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kharif">Kharif (Monsoon)</SelectItem>
                    <SelectItem value="rabi">Rabi (Winter)</SelectItem>
                    <SelectItem value="zaid">Zaid (Summer)</SelectItem>
                    <SelectItem value="year-round">Year Round</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="water-source">Water Source</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select water source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="irrigation">Irrigation</SelectItem>
                    <SelectItem value="rain">Rain-fed</SelectItem>
                    <SelectItem value="borewell">Borewell</SelectItem>
                    <SelectItem value="canal">Canal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range (₹)</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low (< ₹50,000)</SelectItem>
                    <SelectItem value="medium">Medium (₹50,000 - ₹2,00,000)</SelectItem>
                    <SelectItem value="high">High (> ₹2,00,000)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Get Crop Recommendations</Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Thermometer className="h-5 w-5" />
              Recommended Crops
            </CardTitle>
            <CardDescription>Based on your inputs, here are the best crop options</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Rice", suitability: "95%", investment: "Rs.60,000", roi: "140%" },
                { name: "Wheat", suitability: "88%", investment: "Rs.45,000", roi: "120%" },
                { name: "Cotton", suitability: "82%", investment: "Rs.75,000", roi: "160%" }
              ].map((crop) => (
                <Card key={crop.name} className="border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{crop.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Suitability:</span>
                      <span className="text-sm font-medium text-green-600">{crop.suitability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Investment:</span>
                      <span className="text-sm font-medium">{crop.investment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Expected ROI:</span>
                      <span className="text-sm font-medium text-green-600">{crop.roi}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CropPlanner;