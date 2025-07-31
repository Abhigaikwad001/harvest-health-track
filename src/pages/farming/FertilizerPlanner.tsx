import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Leaf, Calendar, AlertTriangle, CheckCircle } from "lucide-react";

const FertilizerPlanner = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Leaf className="h-8 w-8" />
            Fertilizer Planner
          </h1>
          <p className="text-muted-foreground">Get precise fertilizer recommendations and dosage schedules for optimal crop nutrition</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Create Fertilizer Plan</CardTitle>
              <CardDescription>Enter crop and soil details for personalized recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="crop">Crop Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="cotton">Cotton</SelectItem>
                    <SelectItem value="sugarcane">Sugarcane</SelectItem>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="area">Field Area (acres)</Label>
                  <Input id="area" type="number" placeholder="5" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="growth-stage">Growth Stage</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="germination">Germination</SelectItem>
                      <SelectItem value="vegetative">Vegetative</SelectItem>
                      <SelectItem value="flowering">Flowering</SelectItem>
                      <SelectItem value="maturity">Maturity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nitrogen">Nitrogen (N)</Label>
                  <Input id="nitrogen" placeholder="mg/kg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phosphorus">Phosphorus (P)</Label>
                  <Input id="phosphorus" placeholder="mg/kg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="potassium">Potassium (K)</Label>
                  <Input id="potassium" placeholder="mg/kg" />
                </div>
              </div>
              <Button className="w-full">Generate Plan</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Nutritional Status</CardTitle>
              <CardDescription>Based on your latest soil test results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Nitrogen (N)</span>
                    <span className="text-sm text-red-600">Low</span>
                  </div>
                  <Progress value={30} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">30 mg/kg (Optimal: 50-80 mg/kg)</p>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Phosphorus (P)</span>
                    <span className="text-sm text-green-600">Good</span>
                  </div>
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">45 mg/kg (Optimal: 40-60 mg/kg)</p>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Potassium (K)</span>
                    <span className="text-sm text-yellow-600">Medium</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">180 mg/kg (Optimal: 200-300 mg/kg)</p>
                </div>
              </div>
              <div className="pt-2 border-t">
                <div className="text-sm font-medium mb-2">Recommendations</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="h-3 w-3 text-red-500" />
                    <span>Increase nitrogen application</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Phosphorus levels optimal</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="h-3 w-3 text-yellow-500" />
                    <span>Slight potassium boost needed</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Fertilizer Schedule
            </CardTitle>
            <CardDescription>Recommended fertilizer application timeline</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  stage: "Pre-Sowing",
                  date: "March 15, 2024",
                  fertilizer: "DAP (Diammonium Phosphate)",
                  dosage: "50 kg/acre",
                  status: "completed",
                  method: "Broadcast and incorporate"
                },
                {
                  stage: "30 Days After Sowing",
                  date: "April 20, 2024",
                  fertilizer: "Urea",
                  dosage: "25 kg/acre",
                  status: "pending",
                  method: "Side dressing"
                },
                {
                  stage: "Flowering Stage",
                  date: "May 25, 2024",
                  fertilizer: "NPK (19:19:19)",
                  dosage: "30 kg/acre",
                  status: "scheduled",
                  method: "Foliar spray"
                },
                {
                  stage: "Grain Filling",
                  date: "June 15, 2024",
                  fertilizer: "Potash (MOP)",
                  dosage: "20 kg/acre",
                  status: "scheduled",
                  method: "Soil application"
                }
              ].map((schedule, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${
                      schedule.status === "completed" ? "bg-green-500" :
                      schedule.status === "pending" ? "bg-yellow-500" : "bg-gray-300"
                    }`}></div>
                    <div>
                      <div className="font-medium">{schedule.stage}</div>
                      <div className="text-sm text-muted-foreground">{schedule.date}</div>
                      <div className="text-xs text-muted-foreground">{schedule.method}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{schedule.fertilizer}</div>
                    <div className="text-sm text-muted-foreground">{schedule.dosage}</div>
                    <Badge 
                      variant={
                        schedule.status === "completed" ? "default" :
                        schedule.status === "pending" ? "secondary" : "outline"
                      }
                      className="text-xs mt-1"
                    >
                      {schedule.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Organic Options</CardTitle>
              <CardDescription>Eco-friendly alternatives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm font-medium">Recommended:</div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Vermicompost: 2 tons/acre</li>
                <li>• Neem cake: 200 kg/acre</li>
                <li>• Bone meal: 100 kg/acre</li>
              </ul>
              <Button variant="outline" size="sm" className="w-full mt-2">
                View Organic Plan
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Cost Estimation</CardTitle>
              <CardDescription>Total fertilizer cost</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">₹8,500</div>
              <p className="text-xs text-muted-foreground">For 5 acres (complete season)</p>
              <div className="mt-2 pt-2 border-t text-xs">
                <div className="flex justify-between">
                  <span>Chemical fertilizers:</span>
                  <span>₹6,200</span>
                </div>
                <div className="flex justify-between">
                  <span>Organic supplements:</span>
                  <span>₹2,300</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Application Tips</CardTitle>
              <CardDescription>Best practices</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm">
                <div className="font-medium text-green-600">✓ Best time:</div>
                <div className="text-muted-foreground">Early morning or evening</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-blue-600">💧 After application:</div>
                <div className="text-muted-foreground">Irrigate within 24 hours</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-orange-600">⚠️ Weather check:</div>
                <div className="text-muted-foreground">Avoid before heavy rain</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default FertilizerPlanner;