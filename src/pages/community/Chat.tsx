import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Send, Phone, Video, MoreVertical } from "lucide-react";

const Chat = () => {
  const conversations = [
    { id: 1, name: "Ram Singh", lastMessage: "Thanks for the rice samples!", time: "2m", unread: 2, avatar: "RS" },
    { id: 2, name: "Farmer Group", lastMessage: "Weather update for tomorrow", time: "1h", unread: 5, avatar: "FG" },
    { id: 3, name: "Equipment Seller", lastMessage: "Tractor is available", time: "3h", unread: 0, avatar: "ES" },
  ];

  const messages = [
    { id: 1, sender: "Ram Singh", message: "Hi! I'm interested in your organic rice", time: "10:30 AM", isOwn: false },
    { id: 2, sender: "You", message: "Hello! Yes, we have premium quality organic rice available", time: "10:32 AM", isOwn: true },
    { id: 3, sender: "Ram Singh", message: "What's the price per kg?", time: "10:33 AM", isOwn: false },
    { id: 4, sender: "You", message: "₹45 per kg. Minimum order 100kg", time: "10:35 AM", isOwn: true },
    { id: 5, sender: "Ram Singh", message: "Can I get samples first?", time: "10:36 AM", isOwn: false },
  ];

  return (
    <Layout>
      <div className="h-[600px] flex gap-4">
        {/* Conversations List */}
        <Card className="w-80 flex flex-col">
          <CardHeader>
            <CardTitle>Messages</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-0">
            <div className="space-y-1">
              {conversations.map((conv) => (
                <div key={conv.id} className="flex items-center gap-3 p-3 hover:bg-muted cursor-pointer border-b">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>{conv.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="font-medium truncate">{conv.name}</p>
                      <span className="text-xs text-muted-foreground">{conv.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                  </div>
                  {conv.unread > 0 && (
                    <div className="bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {conv.unread}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="flex-1 flex flex-col">
          {/* Chat Header */}
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>RS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Ram Singh</p>
                  <p className="text-sm text-muted-foreground">Online</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.isOwn 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted'
                  }`}>
                    <p className="text-sm">{msg.message}</p>
                    <p className={`text-xs mt-1 ${msg.isOwn ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          {/* Message Input */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Chat;