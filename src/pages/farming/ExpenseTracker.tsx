import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IndianRupee, TrendingUp, TrendingDown, Plus } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { addExpense, getExpenses, addIncome, getIncome, Expense, Income } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";

const ExpenseTracker = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [income, setIncome] = useState<Income[]>([]);
  const [loading, setLoading] = useState(false);
  
  const [expenseForm, setExpenseForm] = useState({
    type: "",
    category: "",
    amount: "",
    description: "",
    date: ""
  });

  const [incomeForm, setIncomeForm] = useState({
    type: "",
    amount: "",
    source: "",
    date: "",
    description: ""
  });

  useEffect(() => {
    if (user) {
      loadData();
    }
  }, [user]);

  const loadData = async () => {
    if (!user) return;
    
    const [expenseData, incomeData] = await Promise.all([
      getExpenses(user.uid),
      getIncome(user.uid)
    ]);

    if (expenseData.error) {
      toast({
        title: "Error loading expenses",
        description: expenseData.error,
        variant: "destructive"
      });
    } else {
      setExpenses(expenseData.data);
    }

    if (incomeData.error) {
      toast({
        title: "Error loading income",
        description: incomeData.error,
        variant: "destructive"
      });
    } else {
      setIncome(incomeData.data);
    }
  };

  const handleExpenseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    const { id, error } = await addExpense({
      userId: user.uid,
      type: expenseForm.type,
      category: expenseForm.category,
      amount: parseFloat(expenseForm.amount),
      description: expenseForm.description,
      date: expenseForm.date
    });

    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: "Expense added successfully!"
      });
      setExpenseForm({
        type: "",
        category: "",
        amount: "",
        description: "",
        date: ""
      });
      loadData();
    }
    setLoading(false);
  };

  const handleIncomeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    const { id, error } = await addIncome({
      userId: user.uid,
      type: incomeForm.type,
      amount: parseFloat(incomeForm.amount),
      source: incomeForm.source,
      date: incomeForm.date,
      description: incomeForm.description
    });

    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: "Income added successfully!"
      });
      setIncomeForm({
        type: "",
        amount: "",
        source: "",
        date: "",
        description: ""
      });
      loadData();
    }
    setLoading(false);
  };

  const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
  const netProfit = totalIncome - totalExpenses;

  if (!user) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Please log in to access Expense Tracker</h2>
          <p className="text-muted-foreground">You need to be logged in to track your expenses and income.</p>
        </div>
      </Layout>
    );
  }

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
              <div className="text-2xl font-bold text-green-600">₹{totalIncome.toLocaleString()}</div>
              <p className="text-xs text-green-600">{income.length} transactions</p>
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
              <div className="text-2xl font-bold text-red-600">₹{totalExpenses.toLocaleString()}</div>
              <p className="text-xs text-red-600">{expenses.length} transactions</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Net Profit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${netProfit >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
                ₹{netProfit.toLocaleString()}
              </div>
              <p className="text-xs text-blue-600">
                Profit margin: {totalIncome > 0 ? Math.round((netProfit / totalIncome) * 100) : 0}%
              </p>
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
                <CardTitle>Add New Expense</CardTitle>
                <CardDescription>Record your farm-related expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleExpenseSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expense-type">Expense Type</Label>
                      <Select 
                        value={expenseForm.type} 
                        onValueChange={(value) => setExpenseForm(prev => ({ ...prev, type: value }))}
                      >
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
                      <Input 
                        id="amount" 
                        type="number" 
                        value={expenseForm.amount}
                        onChange={(e) => setExpenseForm(prev => ({ ...prev, amount: e.target.value }))}
                        placeholder="0" 
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input 
                        id="date" 
                        type="date" 
                        value={expenseForm.date}
                        onChange={(e) => setExpenseForm(prev => ({ ...prev, date: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Input 
                        id="description" 
                        value={expenseForm.description}
                        onChange={(e) => setExpenseForm(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Brief description" 
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Adding..." : "Add Expense"}
                  </Button>
                </form>
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
                        {expense.description && (
                          <div className="text-sm text-muted-foreground">{expense.description}</div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-red-600">-₹{expense.amount.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">{expense.category}</div>
                      </div>
                    </div>
                  ))}
                  {expenses.length === 0 && (
                    <p className="text-center text-muted-foreground py-4">No expenses recorded yet.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="income" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Add New Income</CardTitle>
                <CardDescription>Record your farm income and sales</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleIncomeSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="income-type">Income Source</Label>
                      <Select 
                        value={incomeForm.type} 
                        onValueChange={(value) => setIncomeForm(prev => ({ ...prev, type: value }))}
                      >
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
                      <Input 
                        id="income-amount" 
                        type="number" 
                        value={incomeForm.amount}
                        onChange={(e) => setIncomeForm(prev => ({ ...prev, amount: e.target.value }))}
                        placeholder="0" 
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="income-date">Date</Label>
                      <Input 
                        id="income-date" 
                        type="date" 
                        value={incomeForm.date}
                        onChange={(e) => setIncomeForm(prev => ({ ...prev, date: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="buyer">Buyer/Source</Label>
                      <Input 
                        id="buyer" 
                        value={incomeForm.source}
                        onChange={(e) => setIncomeForm(prev => ({ ...prev, source: e.target.value }))}
                        placeholder="Buyer name or source" 
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Adding..." : "Add Income"}
                  </Button>
                </form>
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
                        {item.description && (
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">+₹{item.amount.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">{item.source}</div>
                      </div>
                    </div>
                  ))}
                  {income.length === 0 && (
                    <p className="text-center text-muted-foreground py-4">No income recorded yet.</p>
                  )}
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