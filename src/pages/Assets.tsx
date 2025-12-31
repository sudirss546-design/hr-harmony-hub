import { Plus, Laptop, Smartphone, CreditCard, Key, Search, Filter } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatCard } from "@/components/dashboard/StatCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const assets = [
  {
    id: "AST001",
    type: "Laptop",
    name: "MacBook Pro 16\"",
    serial: "C02XK1XXXXX",
    assignee: "Sarah Johnson",
    initials: "SJ",
    status: "Assigned",
    condition: "Good",
    purchaseDate: "Jan 2024",
    warranty: "Jan 2027",
    icon: Laptop,
  },
  {
    id: "AST002",
    type: "Mobile",
    name: "iPhone 15 Pro",
    serial: "DNQXR1XXXXX",
    assignee: "Mike Chen",
    initials: "MC",
    status: "Assigned",
    condition: "Excellent",
    purchaseDate: "Dec 2024",
    warranty: "Dec 2025",
    icon: Smartphone,
  },
  {
    id: "AST003",
    type: "Laptop",
    name: "Dell XPS 15",
    serial: "5CG9XXXXXX",
    assignee: null,
    initials: null,
    status: "Available",
    condition: "Good",
    purchaseDate: "Mar 2023",
    warranty: "Mar 2026",
    icon: Laptop,
  },
  {
    id: "AST004",
    type: "Access Card",
    name: "Building Access Card",
    serial: "ACC-2024-001",
    assignee: "Emily Davis",
    initials: "ED",
    status: "Assigned",
    condition: "Good",
    purchaseDate: "Jun 2024",
    warranty: "N/A",
    icon: CreditCard,
  },
  {
    id: "AST005",
    type: "License Key",
    name: "Adobe Creative Suite",
    serial: "ADO-2024-XXX",
    assignee: "James Wilson",
    initials: "JW",
    status: "Assigned",
    condition: "N/A",
    purchaseDate: "Jan 2024",
    warranty: "Jan 2025",
    icon: Key,
  },
];

const statusStyles: Record<string, string> = {
  Assigned: "bg-success/10 text-success border-success/20",
  Available: "bg-info/10 text-info border-info/20",
  "Under Repair": "bg-warning/10 text-warning border-warning/20",
  Retired: "bg-muted text-muted-foreground",
};

export default function Assets() {
  return (
    <MainLayout title="Asset Management" subtitle="Track and manage company assets">
      <div className="space-y-6 animate-fade-in">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard
            title="Total Assets"
            value={156}
            icon={Laptop}
            iconColor="bg-primary/10 text-primary"
          />
          <StatCard
            title="Assigned"
            value={142}
            change="91% utilization"
            changeType="positive"
            icon={Laptop}
            iconColor="bg-success/10 text-success"
          />
          <StatCard
            title="Available"
            value={10}
            icon={Laptop}
            iconColor="bg-info/10 text-info"
          />
          <StatCard
            title="Under Repair"
            value={4}
            icon={Laptop}
            iconColor="bg-warning/10 text-warning"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex flex-1 gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search assets..." className="pl-9" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="laptop">Laptop</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
                <SelectItem value="access">Access Card</SelectItem>
                <SelectItem value="license">License</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="assigned">Assigned</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="repair">Under Repair</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Asset
          </Button>
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className="bg-card rounded-xl p-5 border border-border/50 hover:border-primary/20 transition-all card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <asset.icon className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="outline" className={statusStyles[asset.status]}>
                  {asset.status}
                </Badge>
              </div>
              <h3 className="font-semibold text-foreground mb-1">{asset.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{asset.serial}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type</span>
                  <span className="text-foreground">{asset.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Condition</span>
                  <span className="text-foreground">{asset.condition}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Warranty</span>
                  <span className="text-foreground">{asset.warranty}</span>
                </div>
              </div>

              {asset.assignee && (
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {asset.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-foreground">{asset.assignee}</p>
                    <p className="text-xs text-muted-foreground">Assigned</p>
                  </div>
                </div>
              )}

              {!asset.assignee && (
                <Button variant="outline" className="w-full mt-4">
                  Assign Asset
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
