import { Building2, Users, GitBranch, Download } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OrgNode } from "@/components/organization/OrgNode";
import { StatCard } from "@/components/dashboard/StatCard";

const orgData = {
  name: "John Smith",
  title: "CEO",
  initials: "JS",
  children: [
    {
      name: "Sarah Johnson",
      title: "VP Engineering",
      initials: "SJ",
      children: [
        { name: "Mike Chen", title: "Engineering Manager", initials: "MC" },
        { name: "Emily Davis", title: "Tech Lead", initials: "ED" },
      ],
    },
    {
      name: "James Wilson",
      title: "VP Sales",
      initials: "JW",
      children: [
        { name: "Lisa Anderson", title: "Sales Manager", initials: "LA" },
      ],
    },
    {
      name: "Robert Brown",
      title: "VP HR",
      initials: "RB",
      children: [
        { name: "Anna Martinez", title: "HR Manager", initials: "AM" },
      ],
    },
  ],
};

const departments = [
  { name: "Engineering", headcount: 45, manager: "Sarah Johnson", budget: "$2.5M" },
  { name: "Sales", headcount: 25, manager: "James Wilson", budget: "$1.8M" },
  { name: "Marketing", headcount: 15, manager: "Diana Lee", budget: "$800K" },
  { name: "HR", headcount: 8, manager: "Robert Brown", budget: "$400K" },
  { name: "Finance", headcount: 7, manager: "Thomas Garcia", budget: "$350K" },
];

export default function Organization() {
  return (
    <MainLayout title="Organization" subtitle="Organizational structure and hierarchy">
      <div className="space-y-6 animate-fade-in">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard
            title="Departments"
            value={5}
            icon={Building2}
            iconColor="bg-primary/10 text-primary"
          />
          <StatCard
            title="Teams"
            value={12}
            icon={Users}
            iconColor="bg-info/10 text-info"
          />
          <StatCard
            title="Hierarchy Levels"
            value={4}
            icon={GitBranch}
            iconColor="bg-warning/10 text-warning"
          />
          <StatCard
            title="Avg Team Size"
            value={8}
            icon={Users}
            iconColor="bg-success/10 text-success"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="chart" className="space-y-4">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="chart">Org Chart</TabsTrigger>
              <TabsTrigger value="departments">Departments</TabsTrigger>
            </TabsList>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>

          <TabsContent value="chart" className="mt-6">
            <div className="bg-card rounded-xl p-8 border border-border/50 overflow-x-auto">
              <div className="flex justify-center min-w-max">
                <OrgNode {...orgData} isRoot />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="departments">
            <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-4 font-semibold text-foreground">Department</th>
                    <th className="text-left p-4 font-semibold text-foreground">Manager</th>
                    <th className="text-left p-4 font-semibold text-foreground">Headcount</th>
                    <th className="text-left p-4 font-semibold text-foreground">Budget</th>
                  </tr>
                </thead>
                <tbody>
                  {departments.map((dept) => (
                    <tr key={dept.name} className="border-t border-border hover:bg-muted/30">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Building2 className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-medium text-foreground">{dept.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground">{dept.manager}</td>
                      <td className="p-4 text-muted-foreground">{dept.headcount}</td>
                      <td className="p-4 text-muted-foreground">{dept.budget}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
