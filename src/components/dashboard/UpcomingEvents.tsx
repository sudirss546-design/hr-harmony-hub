import { Calendar, Cake, Users, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: 1,
    title: "Team Meeting",
    date: "Today, 2:00 PM",
    icon: Users,
    type: "meeting",
  },
  {
    id: 2,
    title: "Sarah's Birthday",
    date: "Tomorrow",
    icon: Cake,
    type: "birthday",
  },
  {
    id: 3,
    title: "Performance Reviews",
    date: "Jan 15, 2025",
    icon: Calendar,
    type: "review",
  },
  {
    id: 4,
    title: "Timesheet Deadline",
    date: "Jan 5, 2025",
    icon: Clock,
    type: "deadline",
  },
];

const typeStyles: Record<string, string> = {
  meeting: "bg-info/10 text-info",
  birthday: "bg-warning/10 text-warning",
  review: "bg-primary/10 text-primary",
  deadline: "bg-destructive/10 text-destructive",
};

export function UpcomingEvents() {
  return (
    <div className="bg-card rounded-xl p-6 card-elevated border border-border/50">
      <h3 className="text-lg font-semibold text-foreground mb-4">Upcoming Events</h3>
      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          >
            <div className={`p-2 rounded-lg ${typeStyles[event.type]}`}>
              <event.icon className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{event.title}</p>
              <p className="text-xs text-muted-foreground">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
