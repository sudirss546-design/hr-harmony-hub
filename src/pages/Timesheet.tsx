import { Plus, ChevronLeft, ChevronRight, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { StatCard } from "@/components/dashboard/StatCard";

const timesheetData = [
  { day: "Monday", date: "Dec 30", hours: 8, project: "HR Portal", task: "Dashboard UI", status: "approved" },
  { day: "Tuesday", date: "Dec 31", hours: 7.5, project: "HR Portal", task: "Employee Module", status: "pending" },
  { day: "Wednesday", date: "Jan 1", hours: 0, project: "-", task: "Holiday", status: "holiday" },
  { day: "Thursday", date: "Jan 2", hours: 8, project: "Client Project", task: "API Integration", status: "draft" },
  { day: "Friday", date: "Jan 3", hours: 6, project: "HR Portal", task: "Testing", status: "draft" },
];

const statusIcons: Record<string, typeof CheckCircle> = {
  approved: CheckCircle,
  pending: AlertCircle,
  rejected: XCircle,
  draft: Clock,
  holiday: Clock,
};

const statusStyles: Record<string, string> = {
  approved: "bg-success/10 text-success",
  pending: "bg-warning/10 text-warning",
  rejected: "bg-destructive/10 text-destructive",
  draft: "bg-muted text-muted-foreground",
  holiday: "bg-info/10 text-info",
};

export default function Timesheet() {
  const totalHours = timesheetData.reduce((sum, day) => sum + day.hours, 0);
  const targetHours = 40;
  const progress = (totalHours / targetHours) * 100;

  return (
    <MainLayout title="Timesheet" subtitle="Track your work hours">
      <div className="space-y-6 animate-fade-in">
        {/* Week Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-lg font-semibold">Dec 30, 2024 - Jan 3, 2025</h2>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Save Draft</Button>
            <Button>Submit Week</Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard
            title="Hours This Week"
            value={`${totalHours}h`}
            change={`${targetHours - totalHours}h remaining`}
            icon={Clock}
            iconColor="bg-primary/10 text-primary"
          />
          <StatCard
            title="Billable Hours"
            value="24h"
            change="80% billable"
            changeType="positive"
            icon={CheckCircle}
            iconColor="bg-success/10 text-success"
          />
          <StatCard
            title="Overtime"
            value="2h"
            change="This month"
            icon={AlertCircle}
            iconColor="bg-warning/10 text-warning"
          />
          <StatCard
            title="Projects"
            value={3}
            change="Active this week"
            icon={Clock}
            iconColor="bg-info/10 text-info"
          />
        </div>

        {/* Progress */}
        <div className="bg-card rounded-xl p-6 border border-border/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Weekly Progress</span>
            <span className="text-sm text-muted-foreground">{totalHours}h / {targetHours}h</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Timesheet Table */}
        <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-4 font-semibold text-foreground">Day</th>
                <th className="text-left p-4 font-semibold text-foreground">Project</th>
                <th className="text-left p-4 font-semibold text-foreground">Task</th>
                <th className="text-left p-4 font-semibold text-foreground">Hours</th>
                <th className="text-left p-4 font-semibold text-foreground">Status</th>
                <th className="text-left p-4 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {timesheetData.map((entry, index) => {
                const StatusIcon = statusIcons[entry.status];
                return (
                  <tr key={index} className="border-t border-border hover:bg-muted/30">
                    <td className="p-4">
                      <div>
                        <p className="font-medium text-foreground">{entry.day}</p>
                        <p className="text-sm text-muted-foreground">{entry.date}</p>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{entry.project}</td>
                    <td className="p-4 text-muted-foreground">{entry.task}</td>
                    <td className="p-4">
                      <span className="font-medium text-foreground">{entry.hours}h</span>
                    </td>
                    <td className="p-4">
                      <Badge variant="secondary" className={statusStyles[entry.status]}>
                        <StatusIcon className="h-3 w-3 mr-1" />
                        {entry.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Button variant="ghost" size="sm">Edit</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Add Entry */}
        <Button variant="outline" className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add Time Entry
        </Button>
      </div>
    </MainLayout>
  );
}
