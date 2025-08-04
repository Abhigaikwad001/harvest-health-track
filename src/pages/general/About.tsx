import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Leaf, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { title: "Farmers Helped", value: "50,000+", icon: Users },
    { title: "Crops Monitored", value: "100,000+", icon: Leaf },
    { title: "Success Stories", value: "2,500+", icon: Award },
    { title: "Yield Improvement", value: "35%", icon: TrendingUp }
  ];

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "CEO & Founder",
      bio: "Agricultural scientist with 20+ years experience in sustainable farming",
      avatar: "RK"
    },
    {
      name: "Priya Sharma", 
      role: "CTO",
      bio: "Tech expert specializing in AI applications for agriculture",
      avatar: "PS"
    },
    {
      name: "Amit Patel",
      role: "Head of Operations", 
      bio: "Former farmer turned operations expert, ensuring practical solutions",
      avatar: "AP"
    }
  ];

  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">About Smart Farmer</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering farmers with intelligent technology to revolutionize agriculture, 
            increase yields, and build sustainable farming practices for the future.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To bridge the gap between traditional farming wisdom and modern technology, 
                providing farmers with AI-powered tools that make agriculture more productive, 
                profitable, and sustainable. We believe every farmer deserves access to the 
                best resources and knowledge to grow better crops and improve their livelihood.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To create a world where smart farming is accessible to every farmer, 
                regardless of their scale of operation. We envision a future where 
                technology and agriculture work hand in hand to feed the growing global 
                population while preserving our planet's resources.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Impact Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Our Impact</CardTitle>
            <CardDescription className="text-center">
              Real numbers that show the difference we're making
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.title} className="text-center space-y-2">
                  <stat.icon className="h-8 w-8 text-primary mx-auto" />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.title}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Our Story */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Our Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Smart Farmer was born from a simple observation: farmers have incredible knowledge 
              and dedication, but they often lack access to modern tools and technologies that 
              could multiply their success. Our founders, coming from both agricultural and 
              technology backgrounds, saw an opportunity to bridge this gap.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Starting in 2020 with a small team of agricultural scientists and software engineers, 
              we began developing AI-powered solutions specifically designed for Indian farming 
              conditions. Our platform combines centuries of farming wisdom with cutting-edge 
              technology to provide practical, actionable insights.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we're proud to serve thousands of farmers across India, helping them increase 
              their yields, reduce costs, and adopt sustainable practices. But we're just getting 
              started – our goal is to reach every farmer who can benefit from smart agriculture.
            </p>
          </CardContent>
        </Card>

        {/* Team */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Meet Our Team</CardTitle>
            <CardDescription>
              Passionate experts dedicated to transforming agriculture
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="text-center space-y-4">
                  <Avatar className="h-24 w-24 mx-auto">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="text-lg">{member.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <Badge variant="secondary" className="mb-2">{member.role}</Badge>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Values */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Our Values</CardTitle>
            <CardDescription>
              The principles that guide everything we do
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Farmer-First</h3>
                <p className="text-sm text-muted-foreground">
                  Every decision we make is guided by what's best for farmers and their success.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  We continuously push the boundaries of agricultural technology.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Sustainability</h3>
                <p className="text-sm text-muted-foreground">
                  Promoting practices that protect our environment for future generations.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Accessibility</h3>
                <p className="text-sm text-muted-foreground">
                  Making advanced farming tools available to farmers of all scales.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Building a strong network of farmers who support and learn from each other.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  Operating with transparency, honesty, and respect in all our interactions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default About;