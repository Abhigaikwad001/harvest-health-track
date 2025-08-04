import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, ShoppingCart, MessageSquare, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    { title: "Total Users", value: "12,345", change: "+12%", icon: Users, color: "text-blue-600" },
    { title: "Active Listings", value: "1,567", change: "+8%", icon: ShoppingCart, color: "text-green-600" },
    { title: "Support Tickets", value: "23", change: "-15%", icon: MessageSquare, color: "text-yellow-600" },
    { title: "Revenue", value: "₹2,34,567", change: "+25%", icon: TrendingUp, color: "text-purple-600" }
  ];

  const recentActivity = [
    { type: "user", message: "New user registration: Raj Kumar", time: "2 mins ago", status: "success" },
    { type: "listing", message: "New marketplace listing: Organic Rice", time: "5 mins ago", status: "info" },
    { type: "support", message: "Support ticket resolved: Crop disease query", time: "10 mins ago", status: "success" },
    { type: "alert", message: "Server load high - investigating", time: "15 mins ago", status: "warning" }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Monitor and manage your Smart Farmer platform</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                    {stat.change}
                  </span> from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest platform activities and events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`h-2 w-2 rounded-full ${
                      activity.status === 'success' ? 'bg-green-500' :
                      activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm">{activity.message}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <Badge variant={
                      activity.status === 'success' ? 'default' :
                      activity.status === 'warning' ? 'destructive' : 'secondary'
                    }>
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Manage Users</span>
                  </div>
                  <Badge variant="secondary">12,345</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted cursor-pointer">
                  <div className="flex items-center gap-3">
                    <ShoppingCart className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Review Listings</span>
                  </div>
                  <Badge variant="secondary">23 pending</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted cursor-pointer">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-yellow-600" />
                    <span className="font-medium">Support Tickets</span>
                  </div>
                  <Badge variant="destructive">5 urgent</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted cursor-pointer">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    <span className="font-medium">View Reports</span>
                  </div>
                  <Badge variant="outline">Updated</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Current platform health and performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">API Status</span>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
                <div className="text-xs text-muted-foreground">All services operational</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Database</span>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
                <div className="text-xs text-muted-foreground">99.9% uptime</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Storage</span>
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                </div>
                <div className="text-xs text-muted-foreground">78% capacity used</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AdminDashboard;