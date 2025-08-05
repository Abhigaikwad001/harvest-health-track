import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sprout, MapPin, Calendar, Thermometer, Plus } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { addCropPlan, getCropPlans, CropPlan } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";

const CropPlanner = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [cropPlans, setCropPlans] = useState<CropPlan[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    cropName: "",
    location: "",
    soilType: "",
    phLevel: "",
    farmSize: "",
    season: "",
    waterSource: "",
    budget: "",
    plantingDate: "",
    harvestDate: "",
    notes: ""
  });

  useEffect(() => {
    if (user) {
      loadCropPlans();
    }
  }, [user]);

  const loadCropPlans = async () => {
    if (!user) return;
    const { data, error } = await getCropPlans(user.uid);
    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive"
      });
    } else {
      setCropPlans(data);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    const { id, error } = await addCropPlan({
      userId: user.uid,
      cropName: formData.cropName,
      location: formData.location,
      soilType: formData.soilType,
      season: formData.season,
      waterSource: formData.waterSource,
      budget: formData.budget,
      plantingDate: formData.plantingDate,
      harvestDate: formData.harvestDate,
      area: parseFloat(formData.farmSize) || 0,
      status: 'planned',
      notes: formData.notes
    });

    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: "Crop plan added successfully!"
      });
      setFormData({
        cropName: "",
        location: "",
        soilType: "",
        phLevel: "",
        farmSize: "",
        season: "",
        waterSource: "",
        budget: "",
        plantingDate: "",
        harvestDate: "",
        notes: ""
      });
      loadCropPlans();
    }
    setLoading(false);
  };

  if (!user) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Please log in to access Crop Planner</h2>
          <p className="text-muted-foreground">You need to be logged in to create and manage crop plans.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Sprout className="h-8 w-8" />
            Crop Planner
          </h1>
          <p className="text-muted-foreground">Plan your crops and track your farming activities</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-2">
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
                <Label htmlFor="cropName">Crop Name</Label>
                <Input 
                  id="cropName" 
                  value={formData.cropName}
                  onChange={(e) => handleInputChange('cropName', e.target.value)}
                  placeholder="e.g., Rice, Wheat, Cotton" 
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input 
                  id="location" 
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="Enter your city or district" 
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="soil-type">Soil Type</Label>
                <Select value={formData.soilType} onValueChange={(value) => handleInputChange('soilType', value)}>
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
                <Label htmlFor="farm-size">Farm Size (acres)</Label>
                <Input 
                  id="farm-size" 
                  type="number" 
                  value={formData.farmSize}
                  onChange={(e) => handleInputChange('farmSize', e.target.value)}
                  placeholder="5" 
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Season & Dates
              </CardTitle>
              <CardDescription>Specify your planting season and dates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="season">Planting Season</Label>
                <Select value={formData.season} onValueChange={(value) => handleInputChange('season', value)}>
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
                <Label htmlFor="planting-date">Planting Date</Label>
                <Input 
                  id="planting-date" 
                  type="date" 
                  value={formData.plantingDate}
                  onChange={(e) => handleInputChange('plantingDate', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="harvest-date">Expected Harvest Date</Label>
                <Input 
                  id="harvest-date" 
                  type="date" 
                  value={formData.harvestDate}
                  onChange={(e) => handleInputChange('harvestDate', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="water-source">Water Source</Label>
                <Select value={formData.waterSource} onValueChange={(value) => handleInputChange('waterSource', value)}>
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
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Adding Plan..." : "Add Crop Plan"}
              </Button>
            </CardContent>
          </Card>
        </form>

        {cropPlans.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="h-5 w-5" />
                Your Crop Plans
              </CardTitle>
              <CardDescription>Manage your existing crop plans</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {cropPlans.map((plan) => (
                  <Card key={plan.id} className="border-primary/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{plan.cropName}</CardTitle>
                      <div className="text-sm text-muted-foreground">{plan.location}</div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Area:</span>
                        <span className="text-sm font-medium">{plan.area} acres</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Season:</span>
                        <span className="text-sm font-medium">{plan.season}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Status:</span>
                        <span className="text-sm font-medium capitalize">{plan.status}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Planting:</span>
                        <span className="text-sm font-medium">{plan.plantingDate}</span>
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
        )}
      </div>
    </Layout>
  );
};

export default CropPlanner;