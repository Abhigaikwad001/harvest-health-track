import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { updateUserProfile, UserProfile } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { user, userProfile } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    phone: '',
    language: '',
    farmName: '',
    location: '',
    farmSize: '',
    primaryCrop: '',
    farmDescription: ''
  });

  useEffect(() => {
    if (user && userProfile) {
      setFormData({
        displayName: userProfile.displayName || '',
        email: user.email || '',
        phone: userProfile.phone || '',
        language: userProfile.language || '',
        farmName: userProfile.farmName || '',
        location: userProfile.location || '',
        farmSize: userProfile.farmSize?.toString() || '',
        primaryCrop: userProfile.primaryCrop || '',
        farmDescription: userProfile.farmDescription || ''
      });
    }
  }, [user, userProfile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    const profileData: Partial<UserProfile> = {
      displayName: formData.displayName,
      phone: formData.phone,
      language: formData.language,
      farmName: formData.farmName,
      location: formData.location,
      farmSize: parseFloat(formData.farmSize) || 0,
      primaryCrop: formData.primaryCrop,
      farmDescription: formData.farmDescription
    };

    const { error } = await updateUserProfile(user.uid, profileData);
    
    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success", 
        description: "Profile updated successfully!"
      });
    }
    setLoading(false);
  };

  if (!user) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Please log in to access Profile</h2>
          <p className="text-muted-foreground">You need to be logged in to view and edit your profile.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Profile Settings</h1>
            <p className="text-muted-foreground">Manage your personal information and farm details</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    value={formData.displayName}
                    onChange={(e) => setFormData(prev => ({ ...prev, displayName: e.target.value }))}
                    placeholder="Your full name" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    disabled
                    placeholder="your@email.com" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+91 XXXXX XXXXX" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Preferred Language</Label>
                  <Select 
                    value={formData.language} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, language: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="marathi">Marathi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Farm Details</CardTitle>
                <CardDescription>Information about your farm</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="farm-name">Farm Name</Label>
                  <Input 
                    id="farm-name" 
                    value={formData.farmName}
                    onChange={(e) => setFormData(prev => ({ ...prev, farmName: e.target.value }))}
                    placeholder="Your farm name" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input 
                    id="location" 
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="City, State" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="farm-size">Farm Size (acres)</Label>
                  <Input 
                    id="farm-size" 
                    type="number" 
                    value={formData.farmSize}
                    onChange={(e) => setFormData(prev => ({ ...prev, farmSize: e.target.value }))}
                    placeholder="0" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="farm-type">Primary Crop Type</Label>
                  <Select 
                    value={formData.primaryCrop} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, primaryCrop: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select crop type" />
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
                <div className="space-y-2">
                  <Label htmlFor="description">Farm Description</Label>
                  <Textarea 
                    id="description" 
                    value={formData.farmDescription}
                    onChange={(e) => setFormData(prev => ({ ...prev, farmDescription: e.target.value }))}
                    placeholder="Tell us about your farm..." 
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Profile;