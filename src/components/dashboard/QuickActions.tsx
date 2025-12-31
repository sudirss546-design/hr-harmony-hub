import { UserPlus, Calendar, Receipt, Clock, FileText, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  { label: "Add Employee", icon: UserPlus, color: "bg-primary/10 text-primary hover:bg-primary/20" },
  { label: "Request Leave", icon: Calendar, color: "bg-info/10 text-info hover:bg-info/20" },
  { label: "Submit Expense", icon: Receipt, color: "bg-warning/10 text-warning hover:bg-warning/20" },
  { label: "Log Time", icon: Clock, color: "bg-success/10 text-success hover:bg-success/20" },
  { label: "Post Job", icon: FileText, color: "bg-accent text-accent-foreground hover:bg-accent/80" },
  { label: "Send Offer", icon: Send, color: "bg-primary/10 text-primary hover:bg-primary/20" },
];

export function QuickActions() {
  return (
    <div className="bg-card rounded-xl p-6 card-elevated border border-border/50">
      <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant="ghost"
            className={`h-auto flex-col gap-2 py-4 ${action.color} transition-all duration-200`}
          >
            <action.icon className="h-5 w-5" />
            <span className="text-xs font-medium">{action.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
