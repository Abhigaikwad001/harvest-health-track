import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IndianRupee, TrendingUp, TrendingDown, Plus } from "lucide-react";

const ExpenseTracker = () => {
  const expenses = [
    { id: 1, type: "Seeds", amount: 15000, date: "2024-01-15", category: "farming" },
    { id: 2, type: "Fertilizer", amount: 8500, date: "2024-01-20", category: "farming" },
    { id: 3, type: "Fuel", amount: 3200, date: "2024-01-22", category: "equipment" },
  ];

  const income = [
    { id: 1, type: "Wheat Sale", amount: 85000, date: "2024-01-25", buyer: "Local Trader" },
    { id: 2, type: "Rice Sale", amount: 65000, date: "2024-01-28", buyer: "Cooperative" },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <IndianRupee className="h-8 w-8" />
            Expense Tracker
          </h1>
          <p className="text-muted-foreground">Monitor your farm expenses and income to maximize profitability</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-green-200 bg-green-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Total Income
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">₹1,50,000</div>
              <p className="text-xs text-green-600">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-red-600" />
                Total Expenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">₹26,700</div>
              <p className="text-xs text-red-600">+5% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Net Profit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">₹1,23,300</div>
              <p className="text-xs text-blue-600">Profit margin: 82%</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="expenses" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="income">Income</TabsTrigger>
          </TabsList>

          <TabsContent value="expenses" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Add New Expense
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Expense
                  </Button>
                </CardTitle>
                <CardDescription>Record your farm-related expenses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expense-type">Expense Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="seeds">Seeds</SelectItem>
                        <SelectItem value="fertilizer">Fertilizer</SelectItem>
                        <SelectItem value="pesticide">Pesticide</SelectItem>
                        <SelectItem value="fuel">Fuel</SelectItem>
                        <SelectItem value="labor">Labor</SelectItem>
                        <SelectItem value="equipment">Equipment</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount (₹)</Label>
                    <Input id="amount" type="number" placeholder="0" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Input id="description" placeholder="Brief description" />
                  </div>
                </div>
                <Button className="w-full">Add Expense</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {expenses.map((expense) => (
                    <div key={expense.id} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <div className="font-medium">{expense.type}</div>
                        <div className="text-sm text-muted-foreground">{expense.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-red-600">-₹{expense.amount.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">{expense.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="income" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Add New Income
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Income
                  </Button>
                </CardTitle>
                <CardDescription>Record your farm income and sales</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="income-type">Income Source</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="crop-sale">Crop Sale</SelectItem>
                        <SelectItem value="subsidy">Government Subsidy</SelectItem>
                        <SelectItem value="contract">Contract Farming</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="income-amount">Amount (₹)</Label>
                    <Input id="income-amount" type="number" placeholder="0" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="income-date">Date</Label>
                    <Input id="income-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="buyer">Buyer/Source</Label>
                    <Input id="buyer" placeholder="Buyer name or source" />
                  </div>
                </div>
                <Button className="w-full">Add Income</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Income</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {income.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <div className="font-medium">{item.type}</div>
                        <div className="text-sm text-muted-foreground">{item.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">+₹{item.amount.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">{item.buyer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ExpenseTracker;