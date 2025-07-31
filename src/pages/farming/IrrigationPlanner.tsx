import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Droplets, Calendar, Clock, AlertCircle } from "lucide-react";

const IrrigationPlanner = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Droplets className="h-8 w-8" />
            Irrigation Planner
          </h1>
          <p className="text-muted-foreground">Smart irrigation scheduling based on crop needs, soil moisture, and weather conditions</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Create Irrigation Schedule</CardTitle>
              <CardDescription>Set up irrigation plan for your crops</CardDescription>
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
                  <Label htmlFor="field-size">Field Size (acres)</Label>
                  <Input id="field-size" type="number" placeholder="5" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="soil-moisture">Current Soil Moisture (%)</Label>
                  <Input id="soil-moisture" type="number" placeholder="25" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="irrigation-method">Irrigation Method</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="drip">Drip Irrigation</SelectItem>
                    <SelectItem value="sprinkler">Sprinkler</SelectItem>
                    <SelectItem value="flood">Flood Irrigation</SelectItem>
                    <SelectItem value="furrow">Furrow Irrigation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Generate Schedule</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Next Irrigation
              </CardTitle>
              <CardDescription>Recommended irrigation timing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 rounded-lg bg-blue-50 border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">Tomorrow</div>
                <div className="text-lg font-medium">6:00 AM - 8:00 AM</div>
                <div className="text-sm text-muted-foreground">Optimal irrigation window</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Water needed:</span>
                  <span className="text-sm font-medium">1,200 liters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Duration:</span>
                  <span className="text-sm font-medium">45 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Weather check:</span>
                  <Badge className="text-xs">Clear</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full">Set Reminder</Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Weekly Schedule
            </CardTitle>
            <CardDescription>Your irrigation plan for this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { day: "Monday", time: "6:00 AM", status: "completed", amount: "1,200L" },
                { day: "Tuesday", time: "6:00 AM", status: "pending", amount: "1,200L" },
                { day: "Wednesday", time: "Skip", status: "skip", amount: "Rain expected" },
                { day: "Thursday", time: "6:30 AM", status: "scheduled", amount: "1,000L" },
                { day: "Friday", time: "6:00 AM", status: "scheduled", amount: "1,200L" },
                { day: "Saturday", time: "6:00 AM", status: "scheduled", amount: "1,200L" },
                { day: "Sunday", time: "Rest day", status: "rest", amount: "-" }
              ].map((schedule, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <div>
                      <div className="font-medium">{schedule.day}</div>
                      <div className="text-sm text-muted-foreground">{schedule.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{schedule.amount}</div>
                    <Badge 
                      variant={
                        schedule.status === "completed" ? "default" :
                        schedule.status === "pending" ? "secondary" :
                        schedule.status === "skip" ? "outline" : "secondary"
                      }
                      className="text-xs"
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
          <Card className="border-green-200 bg-green-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Water Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">85%</div>
              <p className="text-xs text-green-600">Above average efficiency</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Monthly Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">25,400L</div>
              <p className="text-xs text-blue-600">15% less than last month</p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-orange-600">2 Active</div>
              <p className="text-xs text-orange-600">Low soil moisture detected</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default IrrigationPlanner;