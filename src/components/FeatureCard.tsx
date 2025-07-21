import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  benefits: string;
  variant?: "default" | "growth" | "earth" | "sky" | "harvest";
}

export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  benefits, 
  variant = "default" 
}: FeatureCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary group">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </div>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-foreground mb-2">📌 Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-muted-foreground text-sm flex items-start">
                <span className="text-primary mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-foreground mb-2">Benefits:</h4>
          <p className="text-muted-foreground text-sm">{benefits}</p>
        </div>
        
        <Button 
          variant={variant} 
          className="w-full mt-4"
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};