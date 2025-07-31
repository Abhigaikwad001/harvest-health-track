import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TestTube, Droplets, Zap, Leaf } from "lucide-react";

const SoilHealth = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <TestTube className="h-8 w-8" />
            Soil Health Monitor
          </h1>
          <p className="text-muted-foreground">Track and improve your soil health with detailed analysis and recommendations</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Add New Soil Test</CardTitle>
              <CardDescription>Enter your latest soil test results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ph">pH Level</Label>
                  <Input id="ph" type="number" step="0.1" placeholder="6.5" />
                </div>
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
                <div className="space-y-2">
                  <Label htmlFor="organic-matter">Organic Matter (%)</Label>
                  <Input id="organic-matter" type="number" step="0.1" placeholder="2.5" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="moisture">Moisture (%)</Label>
                  <Input id="moisture" type="number" step="0.1" placeholder="25" />
                </div>
              </div>
              <Button className="w-full">Save Soil Test Results</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Soil Status</CardTitle>
              <CardDescription>Overall health assessment of your soil</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Good</div>
                <div className="text-sm text-muted-foreground">Soil Health Score: 78/100</div>
                <Progress value={78} className="mt-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-green-50 border border-green-200">
                  <Droplets className="h-6 w-6 text-green-600 mx-auto mb-1" />
                  <div className="text-sm font-medium">pH Level</div>
                  <div className="text-lg font-bold text-green-600">6.8</div>
                  <Badge variant="secondary" className="text-xs">Optimal</Badge>
                </div>
                <div className="text-center p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                  <Zap className="h-6 w-6 text-yellow-600 mx-auto mb-1" />
                  <div className="text-sm font-medium">NPK Levels</div>
                  <div className="text-lg font-bold text-yellow-600">Medium</div>
                  <Badge variant="outline" className="text-xs">Needs Attention</Badge>
                </div>
                <div className="text-center p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <Leaf className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                  <div className="text-sm font-medium">Organic Matter</div>
                  <div className="text-lg font-bold text-blue-600">2.8%</div>
                  <Badge variant="secondary" className="text-xs">Good</Badge>
                </div>
                <div className="text-center p-3 rounded-lg bg-green-50 border border-green-200">
                  <Droplets className="h-6 w-6 text-green-600 mx-auto mb-1" />
                  <div className="text-sm font-medium">Moisture</div>
                  <div className="text-lg font-bold text-green-600">28%</div>
                  <Badge variant="secondary" className="text-xs">Optimal</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Fertilizer Recommendations</CardTitle>
            <CardDescription>Improve your soil health with these targeted recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className="p-2 rounded bg-blue-100">
                      <span className="text-blue-600 font-bold">N</span>
                    </div>
                    Nitrogen Boost
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">Apply 40 kg/acre of Urea</p>
                  <p className="text-xs text-blue-600">Best time: Pre-sowing</p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className="p-2 rounded bg-orange-100">
                      <span className="text-orange-600 font-bold">P</span>
                    </div>
                    Phosphorus
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">Apply 20 kg/acre of DAP</p>
                  <p className="text-xs text-orange-600">Best time: Basal application</p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className="p-2 rounded bg-purple-100">
                      <span className="text-purple-600 font-bold">K</span>
                    </div>
                    Potassium
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">Apply 15 kg/acre of MOP</p>
                  <p className="text-xs text-purple-600">Best time: Split application</p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default SoilHealth;