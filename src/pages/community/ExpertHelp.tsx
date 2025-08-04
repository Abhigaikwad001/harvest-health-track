import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Video, MessageCircle, Calendar, Award } from "lucide-react";

const ExpertHelp = () => {
  const experts = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialization: "Crop Pathology",
      experience: "15+ years",
      rating: 4.9,
      consultations: 250,
      price: "₹500/session",
      availability: "Available Now",
      languages: ["Hindi", "English"],
      avatar: "PS"
    },
    {
      id: 2,
      name: "Amit Kumar",
      specialization: "Soil Science",
      experience: "12+ years",
      rating: 4.8,
      consultations: 180,
      price: "₹400/session",
      availability: "Next: 2 PM",
      languages: ["Hindi", "Punjabi"],
      avatar: "AK"
    },
    {
      id: 3,
      name: "Dr. Rajesh Verma",
      specialization: "Sustainable Farming",
      experience: "20+ years",
      rating: 4.9,
      consultations: 320,
      price: "₹600/session",
      availability: "Tomorrow 10 AM",
      languages: ["Hindi", "English", "Marathi"],
      avatar: "RV"
    },
  ];

  const consultationTypes = [
    { name: "Crop Disease Diagnosis", icon: "🦠", price: "₹300-500" },
    { name: "Soil Testing Analysis", icon: "🌱", price: "₹400-600" },
    { name: "Pest Control Solutions", icon: "🐛", price: "₹300-400" },
    { name: "Farm Planning", icon: "📋", price: "₹500-800" },
    { name: "Market Strategy", icon: "📈", price: "₹600-1000" },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Expert Consultation</h1>
          <p className="text-muted-foreground">Get professional advice from agricultural experts</p>
        </div>

        {/* Consultation Types */}
        <Card>
          <CardHeader>
            <CardTitle>Consultation Services</CardTitle>
            <CardDescription>Choose the type of expert help you need</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {consultationTypes.map((type) => (
                <div key={type.name} className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="text-2xl mb-2">{type.icon}</div>
                  <h3 className="font-medium mb-1">{type.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{type.price}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Book Consultation
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Available Experts */}
        <Card>
          <CardHeader>
            <CardTitle>Available Experts</CardTitle>
            <CardDescription>Connect with verified agricultural professionals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {experts.map((expert) => (
                <div key={expert.id} className="border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="text-lg">{expert.avatar}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold flex items-center gap-2">
                            {expert.name}
                            <Award className="h-5 w-5 text-yellow-500" />
                          </h3>
                          <p className="text-muted-foreground">{expert.specialization}</p>
                        </div>
                        <Badge variant="secondary" className="text-lg font-semibold">
                          {expert.price}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-1 mb-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{expert.rating}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Rating</p>
                        </div>
                        <div>
                          <div className="font-medium mb-1">{expert.consultations}</div>
                          <p className="text-sm text-muted-foreground">Consultations</p>
                        </div>
                        <div>
                          <div className="font-medium mb-1">{expert.experience}</div>
                          <p className="text-sm text-muted-foreground">Experience</p>
                        </div>
                        <div>
                          <div className="font-medium mb-1 text-green-600">{expert.availability}</div>
                          <p className="text-sm text-muted-foreground">Availability</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {expert.languages.map((lang) => (
                          <Badge key={lang} variant="outline">{lang}</Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <Button className="flex-1">
                          <Video className="h-4 w-4 mr-2" />
                          Video Call
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Chat
                        </Button>
                        <Button variant="outline">
                          <Calendar className="h-4 w-4 mr-2" />
                          Schedule
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* How it Works */}
        <Card>
          <CardHeader>
            <CardTitle>How Expert Consultation Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="font-medium mb-2">Choose Expert</h3>
                <p className="text-sm text-muted-foreground">Browse and select an expert based on your needs</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="font-medium mb-2">Book Session</h3>
                <p className="text-sm text-muted-foreground">Schedule a convenient time or get instant consultation</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="font-medium mb-2">Get Advice</h3>
                <p className="text-sm text-muted-foreground">Receive expert guidance via video call or chat</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ExpertHelp;