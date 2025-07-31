import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Cloud, Droplets, Bug, AlertTriangle } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "weather",
    title: "Heavy Rain Alert",
    message: "Heavy rainfall expected in next 48 hours. Consider protective measures for crops.",
    time: "2 hours ago",
    priority: "high",
    icon: Cloud
  },
  {
    id: 2,
    type: "irrigation",
    title: "Irrigation Reminder",
    message: "Your wheat crop needs watering. Optimal time: 6-8 AM tomorrow.",
    time: "5 hours ago", 
    priority: "medium",
    icon: Droplets
  },
  {
    id: 3,
    type: "pest",
    title: "Pest Alert",
    message: "Aphid activity detected in nearby farms. Monitor your crops closely.",
    time: "1 day ago",
    priority: "high",
    icon: Bug
  },
  {
    id: 4,
    type: "general",
    title: "Market Price Update",
    message: "Wheat prices have increased by 5% in your region.",
    time: "2 days ago",
    priority: "low",
    icon: AlertTriangle
  }
];

const Notifications = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      case "low": return "secondary";
      default: return "default";
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Bell className="h-8 w-8" />
              Notifications
            </h1>
            <p className="text-muted-foreground">Stay updated with important alerts and reminders</p>
          </div>
          <Button variant="outline">Mark All as Read</Button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <Card key={notification.id} className="transition-colors hover:bg-muted/50">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{notification.title}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          {notification.time}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant={getPriorityColor(notification.priority) as any}>
                      {notification.priority}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{notification.message}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;