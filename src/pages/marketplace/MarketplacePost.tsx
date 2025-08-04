import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const MarketplacePost = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Link to="/marketplace">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Post New Listing</h1>
            <p className="text-muted-foreground">List your products for sale in the marketplace</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Product Information</CardTitle>
            <CardDescription>Provide details about your product</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Product Title</Label>
              <Input id="title" placeholder="e.g., Organic Rice - Premium Quality" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="crops">Crops</SelectItem>
                  <SelectItem value="equipment">Equipment</SelectItem>
                  <SelectItem value="seeds">Seeds</SelectItem>
                  <SelectItem value="fertilizers">Fertilizers</SelectItem>
                  <SelectItem value="tools">Tools</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                placeholder="Describe your product, its quality, origin, etc."
                rows={4}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input id="price" placeholder="₹100/kg" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Available Quantity</Label>
                <Input id="quantity" placeholder="1000 kg" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="City, State" />
            </div>

            <div className="space-y-2">
              <Label>Product Images</Label>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB</p>
                <Button variant="outline" className="mt-4">
                  Choose Files
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>How buyers can reach you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Contact Name</Label>
              <Input id="contact-name" placeholder="Your name" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+91 98765 43210" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email (Optional)</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button className="flex-1">Post Listing</Button>
          <Button variant="outline">Save as Draft</Button>
        </div>
      </div>
    </Layout>
  );
};

export default MarketplacePost;