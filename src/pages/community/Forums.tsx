import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ThumbsUp, Pin, Plus, TrendingUp } from "lucide-react";

const Forums = () => {
  const categories = [
    { name: "Crop Management", posts: 145, color: "bg-green-100 text-green-800" },
    { name: "Equipment", posts: 89, color: "bg-blue-100 text-blue-800" },
    { name: "Market Prices", posts: 67, color: "bg-yellow-100 text-yellow-800" },
    { name: "Weather & Climate", posts: 234, color: "bg-purple-100 text-purple-800" },
    { name: "Government Schemes", posts: 56, color: "bg-red-100 text-red-800" },
  ];

  const posts = [
    {
      id: 1,
      title: "Best practices for organic rice cultivation in monsoon",
      author: "Raj Patel",
      category: "Crop Management",
      replies: 23,
      likes: 45,
      time: "2 hours ago",
      isPinned: true,
      snippet: "I've been experimenting with organic methods for rice cultivation..."
    },
    {
      id: 2,
      title: "Current wheat prices in Punjab market",
      author: "Market Expert",
      category: "Market Prices",
      replies: 12,
      likes: 18,
      time: "4 hours ago",
      isPinned: false,
      snippet: "MSP has been announced at ₹2,125 per quintal this season..."
    },
    {
      id: 3,
      title: "Tractor maintenance tips for rainy season",
      author: "Equipment Tech",
      category: "Equipment",
      replies: 8,
      likes: 32,
      time: "1 day ago",
      isPinned: false,
      snippet: "Proper maintenance during monsoon is crucial for equipment longevity..."
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Community Forums</h1>
            <p className="text-muted-foreground">Connect with fellow farmers, share knowledge and get advice</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </div>

        {/* Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Forum Categories</CardTitle>
            <CardDescription>Browse discussions by topic</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <div key={category.name} className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{category.name}</h3>
                    <Badge variant="secondary" className={category.color}>
                      {category.posts}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{category.posts} discussions</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Posts */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Recent Discussions</CardTitle>
                <CardDescription>Latest posts from the community</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Trending
                </Button>
                <Button variant="outline" size="sm">Latest</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>{post.author.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        {post.isPinned && <Pin className="h-4 w-4 text-primary" />}
                        <h3 className="font-medium line-clamp-1">{post.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {post.snippet}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span>By {post.author}</span>
                          <span>{post.time}</span>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{post.replies}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Forums;