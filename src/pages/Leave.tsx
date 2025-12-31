import { Plus, Calendar, CheckCircle, Clock, XCircle } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const leaveBalances = [
  { type: "Annual Leave", used: 8, total: 20, color: "bg-primary" },
  { type: "Sick Leave", used: 2, total: 10, color: "bg-info" },
  { type: "Casual Leave", used: 3, total: 5, color: "bg-warning" },
  { type: "Comp Off", used: 0, total: 2, color: "bg-success" },
];

const leaveRequests = [
  {
    id: 1,
    employee: "Sarah Johnson",
    initials: "SJ",
    type: "Annual Leave",
    from: "Jan 15, 2025",
    to: "Jan 17, 2025",
    days: 3,
    reason: "Family vacation",
    status: "pending",
  },
  {
    id: 2,
    employee: "Mike Chen",
    initials: "MC",
    type: "Sick Leave",
    from: "Jan 10, 2025",
    to: "Jan 10, 2025",
    days: 1,
    reason: "Doctor appointment",
    status: "approved",
  },
  {
    id: 3,
    employee: "Emily Davis",
    initials: "ED",
    type: "Casual Leave",
    from: "Jan 8, 2025",
    to: "Jan 8, 2025",
    days: 1,
    reason: "Personal work",
    status: "rejected",
  },
];

const statusStyles: Record<string, string> = {
  approved: "bg-success/10 text-success border-success/20",
  pending: "bg-warning/10 text-warning border-warning/20",
  rejected: "bg-destructive/10 text-destructive border-destructive/20",
};

const teamOnLeave = [
  { name: "Lisa Anderson", initials: "LA", dates: "Jan 2-5", type: "Annual" },
  { name: "James Wilson", initials: "JW", dates: "Jan 3", type: "Sick" },
];

export default function Leave() {
  return (
    <MainLayout title="Leave Management" subtitle="Manage leave requests and balances">
      <div className="space-y-6 animate-fade-in">
        {/* Leave Balances */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {leaveBalances.map((leave) => (
            <div key={leave.type} className="bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-foreground">{leave.type}</span>
                <span className="text-sm text-muted-foreground">
                  {leave.used}/{leave.total} days
                </span>
              </div>
              <Progress value={(leave.used / leave.total) * 100} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                {leave.total - leave.used} days remaining
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Leave Requests */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="all" className="space-y-4">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="all">All Requests</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="approved">Approved</TabsTrigger>
                </TabsList>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Request Leave
                </Button>
              </div>

              <TabsContent value="all" className="space-y-4">
                {leaveRequests.map((request) => (
                  <div
                    key={request.id}
                    className="bg-card rounded-xl p-4 border border-border/50 hover:border-primary/20 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {request.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{request.employee}</p>
                          <p className="text-sm text-muted-foreground">{request.type}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className={statusStyles[request.status]}>
                        {request.status}
                      </Badge>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Duration</p>
                        <p className="font-medium text-foreground">{request.days} day(s)</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">From</p>
                        <p className="font-medium text-foreground">{request.from}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">To</p>
                        <p className="font-medium text-foreground">{request.to}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      <span className="font-medium">Reason:</span> {request.reason}
                    </p>
                    {request.status === "pending" && (
                      <div className="mt-4 flex gap-2">
                        <Button size="sm" variant="success">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button size="sm" variant="outline">
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="pending">
                <p className="text-center text-muted-foreground py-8">
                  Showing pending requests only
                </p>
              </TabsContent>

              <TabsContent value="approved">
                <p className="text-center text-muted-foreground py-8">
                  Showing approved requests only
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Team on Leave */}
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <h3 className="font-semibold text-foreground mb-4">Team on Leave Today</h3>
              <div className="space-y-3">
                {teamOnLeave.map((person, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs">
                        {person.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{person.name}</p>
                      <p className="text-xs text-muted-foreground">{person.dates}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {person.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Holidays */}
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <h3 className="font-semibold text-foreground mb-4">Upcoming Holidays</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">New Year's Day</p>
                    <p className="text-xs text-muted-foreground">Jan 1, 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Republic Day</p>
                    <p className="text-xs text-muted-foreground">Jan 26, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
