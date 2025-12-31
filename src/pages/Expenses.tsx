import { Plus, Receipt, CheckCircle, Clock, XCircle, Download, Filter } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatCard } from "@/components/dashboard/StatCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const expenses = [
  {
    id: "EXP001",
    employee: "Sarah Johnson",
    initials: "SJ",
    category: "Travel",
    description: "Client meeting - Flight tickets",
    amount: "$450.00",
    date: "Dec 28, 2024",
    status: "pending",
    receipt: true,
  },
  {
    id: "EXP002",
    employee: "Mike Chen",
    initials: "MC",
    category: "Equipment",
    description: "Keyboard and mouse",
    amount: "$125.00",
    date: "Dec 27, 2024",
    status: "approved",
    receipt: true,
  },
  {
    id: "EXP003",
    employee: "Emily Davis",
    initials: "ED",
    category: "Internet",
    description: "Home internet - December",
    amount: "$75.00",
    date: "Dec 26, 2024",
    status: "approved",
    receipt: true,
  },
  {
    id: "EXP004",
    employee: "James Wilson",
    initials: "JW",
    category: "Food",
    description: "Team lunch meeting",
    amount: "$180.00",
    date: "Dec 25, 2024",
    status: "rejected",
    receipt: false,
  },
  {
    id: "EXP005",
    employee: "Lisa Anderson",
    initials: "LA",
    category: "Software",
    description: "Design tool subscription",
    amount: "$29.00",
    date: "Dec 24, 2024",
    status: "pending",
    receipt: true,
  },
];

const statusStyles: Record<string, string> = {
  approved: "bg-success/10 text-success border-success/20",
  pending: "bg-warning/10 text-warning border-warning/20",
  rejected: "bg-destructive/10 text-destructive border-destructive/20",
};

const categoryColors: Record<string, string> = {
  Travel: "bg-info/10 text-info",
  Equipment: "bg-primary/10 text-primary",
  Internet: "bg-success/10 text-success",
  Food: "bg-warning/10 text-warning",
  Software: "bg-accent text-accent-foreground",
};

export default function Expenses() {
  return (
    <MainLayout title="Expense Management" subtitle="Submit and track expense claims">
      <div className="space-y-6 animate-fade-in">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard
            title="Total Claims"
            value="$12,450"
            change="This month"
            icon={Receipt}
            iconColor="bg-primary/10 text-primary"
          />
          <StatCard
            title="Approved"
            value="$8,200"
            change="66% of total"
            changeType="positive"
            icon={CheckCircle}
            iconColor="bg-success/10 text-success"
          />
          <StatCard
            title="Pending"
            value="$3,450"
            change="8 claims"
            icon={Clock}
            iconColor="bg-warning/10 text-warning"
          />
          <StatCard
            title="Rejected"
            value="$800"
            change="2 claims"
            changeType="negative"
            icon={XCircle}
            iconColor="bg-destructive/10 text-destructive"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="space-y-4">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="all">All Expenses</TabsTrigger>
              <TabsTrigger value="pending">Pending Approval</TabsTrigger>
              <TabsTrigger value="my">My Expenses</TabsTrigger>
            </TabsList>
            <div className="flex gap-2">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Submit Expense
              </Button>
            </div>
          </div>

          <TabsContent value="all">
            <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-4 font-semibold text-foreground">Employee</th>
                    <th className="text-left p-4 font-semibold text-foreground">Category</th>
                    <th className="text-left p-4 font-semibold text-foreground">Description</th>
                    <th className="text-left p-4 font-semibold text-foreground">Amount</th>
                    <th className="text-left p-4 font-semibold text-foreground">Date</th>
                    <th className="text-left p-4 font-semibold text-foreground">Status</th>
                    <th className="text-left p-4 font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expense) => (
                    <tr key={expense.id} className="border-t border-border hover:bg-muted/30">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-primary/10 text-primary text-xs">
                              {expense.initials}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium text-foreground">{expense.employee}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant="secondary" className={categoryColors[expense.category]}>
                          {expense.category}
                        </Badge>
                      </td>
                      <td className="p-4 text-muted-foreground">{expense.description}</td>
                      <td className="p-4 font-semibold text-foreground">{expense.amount}</td>
                      <td className="p-4 text-muted-foreground">{expense.date}</td>
                      <td className="p-4">
                        <Badge variant="outline" className={statusStyles[expense.status]}>
                          {expense.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          {expense.status === "pending" && (
                            <>
                              <Button size="sm" variant="ghost" className="text-success hover:text-success">
                                Approve
                              </Button>
                              <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                                Reject
                              </Button>
                            </>
                          )}
                          {expense.status !== "pending" && (
                            <Button size="sm" variant="ghost">
                              View
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="pending">
            <p className="text-center text-muted-foreground py-8">
              Showing pending expenses only
            </p>
          </TabsContent>

          <TabsContent value="my">
            <p className="text-center text-muted-foreground py-8">
              Showing your expenses only
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
