import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain, Zap, TrendingUp, AlertTriangle } from "lucide-react";

const CropAdvisor = () => {
  const recentAdvice = [
    {
      crop: "Tomato",
      issue: "Yellowing leaves in monsoon",
      advice: "This appears to be early blight. Apply copper-based fungicide...",
      confidence: 95,
      date: "2 hours ago"
    },
    {
      crop: "Wheat",
      issue: "Low germination rate",
      advice: "Check seed quality and soil moisture. Consider pre-soaking...",
      confidence: 88,
      date: "1 day ago"
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            AI Crop Advisor
          </h1>
          <p className="text-muted-foreground">Get intelligent recommendations for your crops using AI technology</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Get AI Advice
              </CardTitle>
              <CardDescription>Describe your crop issue for personalized recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="crop">Crop Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="tomato">Tomato</SelectItem>
                    <SelectItem value="potato">Potato</SelectItem>
                    <SelectItem value="cotton">Cotton</SelectItem>
                    <SelectItem value="sugarcane">Sugarcane</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="growth-stage">Growth Stage</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select growth stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seeding">Seeding</SelectItem>
                    <SelectItem value="vegetative">Vegetative</SelectItem>
                    <SelectItem value="flowering">Flowering</SelectItem>
                    <SelectItem value="fruiting">Fruiting/Grain Filling</SelectItem>
                    <SelectItem value="harvest">Pre-Harvest</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="City, State" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="issue">Describe Your Issue</Label>
                <Textarea 
                  id="issue" 
                  placeholder="Describe what you're observing - leaf color, growth patterns, pest presence, etc."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="weather">Recent Weather</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Recent weather conditions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="heavy-rain">Heavy Rain</SelectItem>
                    <SelectItem value="drought">Drought</SelectItem>
                    <SelectItem value="extreme-heat">Extreme Heat</SelectItem>
                    <SelectItem value="frost">Frost</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full">
                <Brain className="h-4 w-4 mr-2" />
                Get AI Recommendation
              </Button>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                AI Analysis Results
              </CardTitle>
              <CardDescription>Intelligent recommendations based on your input</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium text-green-800">Primary Recommendation</span>
                  </div>
                  <p className="text-sm text-green-700 mb-3">
                    Based on your description, this appears to be a nutrient deficiency issue. 
                    The yellowing pattern suggests nitrogen deficiency.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Confidence Level:</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Recommended Actions:</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2"></div>
                      <p className="text-sm">Apply balanced NPK fertilizer (10:26:26) at 50kg per acre</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2"></div>
                      <p className="text-sm">Ensure proper drainage to prevent root rot</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2"></div>
                      <p className="text-sm">Monitor for improvement over next 7-10 days</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <span className="font-medium text-yellow-800">Important Note</span>
                  </div>
                  <p className="text-sm text-yellow-700">
                    If symptoms persist after treatment, consider soil testing for accurate nutrient analysis.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Consultations */}
        <Card>
          <CardHeader>
            <CardTitle>Recent AI Consultations</CardTitle>
            <CardDescription>Your previous interactions with the AI advisor</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAdvice.map((item, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium">{item.crop} - {item.issue}</h4>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{item.confidence}%</div>
                      <div className="text-xs text-muted-foreground">Confidence</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.advice}</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    View Full Report
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CropAdvisor;