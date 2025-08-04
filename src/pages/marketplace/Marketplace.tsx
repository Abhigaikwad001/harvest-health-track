import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, MapPin, Phone, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Marketplace = () => {
  const listings = [
    {
      id: 1,
      title: "Organic Rice - Premium Quality",
      seller: "Ram Singh",
      location: "Punjab",
      price: "₹45/kg",
      rating: 4.8,
      image: "/placeholder.svg",
      category: "Crops",
      description: "Fresh organic rice, pesticide-free"
    },
    {
      id: 2,
      title: "Tractor - Mahindra 575 DI",
      seller: "Farmer Equipment Co.",
      location: "Haryana",
      price: "₹8,50,000",
      rating: 4.5,
      image: "/placeholder.svg",
      category: "Equipment",
      description: "Well-maintained tractor, 2019 model"
    },
    {
      id: 3,
      title: "Organic Manure - Cow Dung",
      seller: "Green Farm Solutions",
      location: "Maharashtra",
      price: "₹15/kg",
      rating: 4.9,
      image: "/placeholder.svg",
      category: "Fertilizers",
      description: "Pure cow dung manure, composted"
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Farmer Marketplace</h1>
            <p className="text-muted-foreground">Buy and sell farming products directly with other farmers</p>
          </div>
          <Link to="/marketplace/post">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Post Listing
            </Button>
          </Link>
        </div>

        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search products..." className="pl-10" />
          </div>
          <Button variant="outline">Filter</Button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {["All", "Crops", "Equipment", "Seeds", "Fertilizers", "Tools"].map((category) => (
            <Badge key={category} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted">
                <img 
                  src={listing.image} 
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg line-clamp-1">{listing.title}</CardTitle>
                  <Badge variant="outline">{listing.category}</Badge>
                </div>
                <CardDescription className="line-clamp-2">{listing.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{listing.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{listing.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {listing.location}
                  </div>
                  <div className="text-sm font-medium">{listing.seller}</div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1">Contact Seller</Button>
                  <Button variant="outline" size="icon">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Marketplace;