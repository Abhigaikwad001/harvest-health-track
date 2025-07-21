import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, TrendingUp, Cloud } from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern Smart Farming"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 lg:py-32">
        <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
          <div className="flex items-center justify-center lg:justify-start mb-6">
            <Leaf className="h-8 w-8 text-primary mr-2" />
            <span className="text-primary font-semibold">Smart Agriculture Platform</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Grow Smarter with
            <span className="text-primary block">Harvest Health Track</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
            Complete farm management platform with crop planning, soil tracking, 
            expense monitoring, weather alerts, and farmer marketplace - all in one place.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
            <div className="flex items-center text-muted-foreground">
              <Leaf className="h-5 w-5 text-primary mr-2" />
              <span>Smart Crop Planning</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <TrendingUp className="h-5 w-5 text-primary mr-2" />
              <span>Yield Tracking</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Cloud className="h-5 w-5 text-primary mr-2" />
              <span>Weather Alerts</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" variant="growth" className="text-lg px-8">
              Start Farming Smart
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};