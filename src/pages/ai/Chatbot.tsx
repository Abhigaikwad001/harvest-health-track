import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, Lightbulb, MessageCircle } from "lucide-react";

const Chatbot = () => {
  const messages = [
    {
      id: 1,
      type: "bot",
      message: "Hello! I'm your Smart Farming AI Assistant. How can I help you today?",
      time: "10:30 AM",
      suggestions: ["Crop diseases", "Weather advice", "Fertilizer tips", "Market prices"]
    },
    {
      id: 2,
      type: "user", 
      message: "My tomato plants have yellow leaves. What should I do?",
      time: "10:32 AM"
    },
    {
      id: 3,
      type: "bot",
      message: "Yellow leaves on tomato plants can indicate several issues. Let me help you diagnose:\n\n1. **Nutrient Deficiency**: Most commonly nitrogen deficiency\n2. **Overwatering**: Check if soil is waterlogged\n3. **Disease**: Could be early blight or fusarium wilt\n\nCan you tell me:\n- Are the yellow leaves at the bottom or throughout the plant?\n- How does the soil feel - wet, dry, or moist?\n- Any spots or patterns on the leaves?",
      time: "10:33 AM",
      suggestions: ["Bottom leaves", "Top leaves", "Wet soil", "Dry soil", "Spots on leaves"]
    }
  ];

  const quickActions = [
    { title: "Weather Forecast", description: "Get 7-day weather forecast for your location", icon: "🌤️" },
    { title: "Crop Calendar", description: "Planting and harvesting schedules", icon: "📅" },
    { title: "Market Prices", description: "Current prices for major crops", icon: "💰" },
    { title: "Disease Symptoms", description: "Identify plant diseases by symptoms", icon: "🔍" },
    { title: "Fertilizer Guide", description: "Nutrient recommendations for crops", icon: "🧪" },
    { title: "Pest Control", description: "Natural and chemical pest solutions", icon: "🐛" }
  ];

  return (
    <Layout>
      <div className="grid gap-6 lg:grid-cols-4">
        {/* Quick Actions Sidebar */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription>Common farming questions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((action, index) => (
              <div key={index} className="p-3 border rounded-lg hover:bg-muted cursor-pointer transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{action.icon}</span>
                  <h4 className="font-medium text-sm">{action.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card className="lg:col-span-3 flex flex-col h-[600px]">
          <CardHeader className="border-b">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>
                  <Bot className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="flex items-center gap-2">
                  Smart Farming AI Assistant
                  <Badge variant="secondary" className="text-xs">Online</Badge>
                </CardTitle>
                <CardDescription>Ask me anything about farming, crops, weather, and more</CardDescription>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.type === 'bot' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
                
                <div className={`max-w-[80%] space-y-2 ${msg.type === 'user' ? 'order-first' : ''}`}>
                  <div className={`p-3 rounded-lg ${
                    msg.type === 'user' 
                      ? 'bg-primary text-primary-foreground ml-auto' 
                      : 'bg-muted'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{msg.message}</p>
                    <p className={`text-xs mt-2 ${
                      msg.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                    }`}>
                      {msg.time}
                    </p>
                  </div>
                  
                  {msg.suggestions && (
                    <div className="flex flex-wrap gap-2">
                      {msg.suggestions.map((suggestion, index) => (
                        <Button key={index} variant="outline" size="sm" className="text-xs">
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>

                {msg.type === 'user' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </CardContent>

          {/* Input Area */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input 
                placeholder="Ask about crops, weather, diseases, market prices..."
                className="flex-1"
              />
              <Button>
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
              <Lightbulb className="h-3 w-3" />
              <span>Try asking: "What fertilizer should I use for rice?" or "When to plant wheat in Punjab?"</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Features */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            AI Assistant Features
          </CardTitle>
          <CardDescription>What our farming AI can help you with</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Crop Management",
                description: "Planting schedules, varieties, spacing, and care tips",
                icon: "🌱"
              },
              {
                title: "Disease & Pest Control", 
                description: "Identify problems and get treatment recommendations",
                icon: "🔬"
              },
              {
                title: "Nutrition & Fertilizers",
                description: "Soil health, nutrient needs, and fertilizer schedules",
                icon: "🧪"
              },
              {
                title: "Weather Insights",
                description: "Weather-based farming advice and planning",
                icon: "⛅"
              },
              {
                title: "Market Information",
                description: "Current prices, demand trends, and selling tips",
                icon: "📊"
              },
              {
                title: "Government Schemes",
                description: "Information about subsidies and support programs",
                icon: "🏛️"
              }
            ].map((feature, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{feature.icon}</span>
                  <h3 className="font-medium">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Chatbot;