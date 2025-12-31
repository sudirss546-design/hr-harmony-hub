import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    user: "Sarah Johnson",
    initials: "SJ",
    action: "submitted a leave request",
    time: "2 hours ago",
    type: "leave",
  },
  {
    id: 2,
    user: "Mike Chen",
    initials: "MC",
    action: "joined as Software Engineer",
    time: "5 hours ago",
    type: "onboarding",
  },
  {
    id: 3,
    user: "Emily Davis",
    initials: "ED",
    action: "submitted expense claim",
    time: "1 day ago",
    type: "expense",
  },
  {
    id: 4,
    user: "James Wilson",
    initials: "JW",
    action: "completed timesheet",
    time: "1 day ago",
    type: "timesheet",
  },
  {
    id: 5,
    user: "Lisa Anderson",
    initials: "LA",
    action: "returned laptop asset",
    time: "2 days ago",
    type: "asset",
  },
];

const typeColors: Record<string, string> = {
  leave: "bg-info/10 text-info",
  onboarding: "bg-success/10 text-success",
  expense: "bg-warning/10 text-warning",
  timesheet: "bg-primary/10 text-primary",
  asset: "bg-accent text-accent-foreground",
};

export function RecentActivity() {
  return (
    <div className="bg-card rounded-xl p-6 card-elevated border border-border/50">
      <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center gap-4 py-2 animate-fade-in"
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                {activity.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">
                <span className="font-medium">{activity.user}</span>{" "}
                <span className="text-muted-foreground">{activity.action}</span>
              </p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
            <Badge variant="secondary" className={typeColors[activity.type]}>
              {activity.type}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
