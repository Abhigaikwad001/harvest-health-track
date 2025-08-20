import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TestTube, Droplets, Zap, Leaf } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { addSoilTest, getSoilTests, SoilTest } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";

const SoilHealth = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [soilTests, setSoilTests] = useState<SoilTest[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    ph: '',
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    organicMatter: '',
    moisture: '',
    testDate: ''
  });

  useEffect(() => {
    if (user) {
      loadSoilTests();
    }
  }, [user]);

  const loadSoilTests = async () => {
    if (!user) return;
    
    const { data, error } = await getSoilTests(user.uid);
    if (error) {
      toast({
        title: "Error loading soil tests",
        description: error,
        variant: "destructive"
      });
    } else {
      setSoilTests(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    const soilTestData: Omit<SoilTest, 'id' | 'createdAt'> = {
      userId: user.uid,
      ph: parseFloat(formData.ph),
      nitrogen: parseFloat(formData.nitrogen),
      phosphorus: parseFloat(formData.phosphorus),
      potassium: parseFloat(formData.potassium),
      organicMatter: parseFloat(formData.organicMatter),
      moisture: parseFloat(formData.moisture),
      testDate: formData.testDate
    };

    const { id, error } = await addSoilTest(soilTestData);
    
    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: "Soil test results saved successfully!"
      });
      setFormData({
        ph: '',
        nitrogen: '',
        phosphorus: '',
        potassium: '',
        organicMatter: '',
        moisture: '',
        testDate: ''
      });
      loadSoilTests();
    }
    setLoading(false);
  };

  // Calculate soil health score from latest test
  const latestTest = soilTests[0];
  const calculateHealthScore = () => {
    if (!latestTest) return 0;
    
    let score = 0;
    // pH score (optimal 6.0-7.5)
    if (latestTest.ph && latestTest.ph >= 6.0 && latestTest.ph <= 7.5) score += 25;
    else if (latestTest.ph && latestTest.ph >= 5.5 && latestTest.ph <= 8.0) score += 15;
    else score += 5;
    
    // NPK scores (simplified scoring)
    if (latestTest.nitrogen >= 50) score += 25;
    else if (latestTest.nitrogen >= 30) score += 15;
    else score += 5;
    
    if (latestTest.phosphorus >= 40 && latestTest.phosphorus <= 60) score += 25;
    else if (latestTest.phosphorus >= 20 && latestTest.phosphorus <= 80) score += 15;
    else score += 5;
    
    if (latestTest.potassium >= 200) score += 25;
    else if (latestTest.potassium >= 150) score += 15;
    else score += 5;
    
    return Math.max(0, Math.min(100, score));
  };

  const healthScore = calculateHealthScore();

  if (!user) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Please log in to access Soil Health</h2>
          <p className="text-muted-foreground">You need to be logged in to track your soil health.</p>
        </div>
      </Layout>
    );
  }

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
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ph">pH Level</Label>
                    <Input 
                      id="ph" 
                      type="number" 
                      step="0.1" 
                      value={formData.ph}
                      onChange={(e) => setFormData(prev => ({ ...prev, ph: e.target.value }))}
                      placeholder="6.5" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nitrogen">Nitrogen (N) mg/kg</Label>
                    <Input 
                      id="nitrogen" 
                      type="number"
                      value={formData.nitrogen}
                      onChange={(e) => setFormData(prev => ({ ...prev, nitrogen: e.target.value }))}
                      placeholder="50" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phosphorus">Phosphorus (P) mg/kg</Label>
                    <Input 
                      id="phosphorus" 
                      type="number"
                      value={formData.phosphorus}
                      onChange={(e) => setFormData(prev => ({ ...prev, phosphorus: e.target.value }))}
                      placeholder="45" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="potassium">Potassium (K) mg/kg</Label>
                    <Input 
                      id="potassium" 
                      type="number"
                      value={formData.potassium}
                      onChange={(e) => setFormData(prev => ({ ...prev, potassium: e.target.value }))}
                      placeholder="200" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organic-matter">Organic Matter (%)</Label>
                    <Input 
                      id="organic-matter" 
                      type="number" 
                      step="0.1" 
                      value={formData.organicMatter}
                      onChange={(e) => setFormData(prev => ({ ...prev, organicMatter: e.target.value }))}
                      placeholder="2.5" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="moisture">Moisture (%)</Label>
                    <Input 
                      id="moisture" 
                      type="number" 
                      step="0.1" 
                      value={formData.moisture}
                      onChange={(e) => setFormData(prev => ({ ...prev, moisture: e.target.value }))}
                      placeholder="25" 
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="test-date">Test Date</Label>
                  <Input 
                    id="test-date" 
                    type="date" 
                    value={formData.testDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, testDate: e.target.value }))}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Saving..." : "Save Soil Test Results"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Soil Status</CardTitle>
              <CardDescription>Overall health assessment based on latest test</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {latestTest ? (
                <>
                  <div className="text-center">
                    <div className={`text-2xl font-bold mb-2 ${
                      healthScore >= 80 ? 'text-green-600' : 
                      healthScore >= 60 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {healthScore >= 80 ? 'Excellent' : 
                       healthScore >= 60 ? 'Good' : 'Needs Improvement'}
                    </div>
                    <div className="text-sm text-muted-foreground">Soil Health Score: {healthScore}/100</div>
                    <Progress value={healthScore} className="mt-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 rounded-lg bg-green-50 border border-green-200">
                      <Droplets className="h-6 w-6 text-green-600 mx-auto mb-1" />
                      <div className="text-sm font-medium">pH Level</div>
                      <div className="text-lg font-bold text-green-600">{latestTest.ph || latestTest.phLevel}</div>
                      <Badge variant="secondary" className="text-xs">
                        {((latestTest.ph || latestTest.phLevel) && (latestTest.ph || latestTest.phLevel)! >= 6.0 && (latestTest.ph || latestTest.phLevel)! <= 7.5) ? 'Optimal' : 'Adjust'}
                      </Badge>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                      <Zap className="h-6 w-6 text-yellow-600 mx-auto mb-1" />
                      <div className="text-sm font-medium">NPK Levels</div>
                      <div className="text-lg font-bold text-yellow-600">
                        {latestTest.nitrogen >= 50 ? 'Good' : 'Low'}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        N: {latestTest.nitrogen}
                      </Badge>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-blue-50 border border-blue-200">
                      <Leaf className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                      <div className="text-sm font-medium">Organic Matter</div>
                      <div className="text-lg font-bold text-blue-600">{latestTest.organicMatter}%</div>
                      <Badge variant="secondary" className="text-xs">
                        {latestTest.organicMatter >= 2 ? 'Good' : 'Low'}
                      </Badge>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-green-50 border border-green-200">
                      <Droplets className="h-6 w-6 text-green-600 mx-auto mb-1" />
                      <div className="text-sm font-medium">Moisture</div>
                      <div className="text-lg font-bold text-green-600">{latestTest.moisture || 0}%</div>
                      <Badge variant="secondary" className="text-xs">
                        {latestTest.moisture && latestTest.moisture >= 20 && latestTest.moisture <= 30 ? 'Optimal' : 'Monitor'}
                      </Badge>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <TestTube className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No soil test data available. Add your first test results to see analysis.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Previous soil tests */}
        {soilTests.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Soil Test History</CardTitle>
              <CardDescription>Track changes in your soil health over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {soilTests.map((test) => (
                  <div key={test.id} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <div className="font-medium">Test Date: {test.testDate}</div>
                      <div className="text-sm text-muted-foreground">
                        pH: {test.ph || test.phLevel} | N: {test.nitrogen} | P: {test.phosphorus} | K: {test.potassium}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm">Organic Matter: {test.organicMatter}%</div>
                      <div className="text-xs text-muted-foreground">Moisture: {test.moisture || 0}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

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