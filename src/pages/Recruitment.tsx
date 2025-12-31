import { Plus, Briefcase, Users, UserCheck, Mail, Calendar, MoreHorizontal } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatCard } from "@/components/dashboard/StatCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    applicants: 24,
    posted: "Dec 15, 2024",
    status: "Active",
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
    applicants: 18,
    posted: "Dec 20, 2024",
    status: "Active",
  },
  {
    id: 3,
    title: "Sales Manager",
    department: "Sales",
    location: "San Francisco, CA",
    type: "Full-time",
    applicants: 12,
    posted: "Dec 22, 2024",
    status: "Active",
  },
];

const candidates = [
  {
    id: 1,
    name: "Alex Thompson",
    initials: "AT",
    email: "alex.t@email.com",
    position: "Senior Software Engineer",
    stage: "Technical Interview",
    rating: 4.5,
    appliedDate: "Dec 18, 2024",
  },
  {
    id: 2,
    name: "Jessica Lee",
    initials: "JL",
    email: "jessica.l@email.com",
    position: "Product Designer",
    stage: "Portfolio Review",
    rating: 4.2,
    appliedDate: "Dec 22, 2024",
  },
  {
    id: 3,
    name: "Ryan Martinez",
    initials: "RM",
    email: "ryan.m@email.com",
    position: "Senior Software Engineer",
    stage: "HR Screen",
    rating: 3.8,
    appliedDate: "Dec 24, 2024",
  },
  {
    id: 4,
    name: "Emma Wilson",
    initials: "EW",
    email: "emma.w@email.com",
    position: "Sales Manager",
    stage: "Offer",
    rating: 4.8,
    appliedDate: "Dec 10, 2024",
  },
];

const pipelineStages = [
  { name: "Applied", count: 54, color: "bg-muted" },
  { name: "Screening", count: 28, color: "bg-info" },
  { name: "Interview", count: 12, color: "bg-warning" },
  { name: "Offer", count: 4, color: "bg-success" },
  { name: "Hired", count: 2, color: "bg-primary" },
];

const stageStyles: Record<string, string> = {
  "HR Screen": "bg-info/10 text-info",
  "Technical Interview": "bg-warning/10 text-warning",
  "Portfolio Review": "bg-primary/10 text-primary",
  "Offer": "bg-success/10 text-success",
  "Hired": "bg-success/10 text-success",
};

export default function Recruitment() {
  return (
    <MainLayout title="Recruitment" subtitle="Manage job postings and candidates">
      <div className="space-y-6 animate-fade-in">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard
            title="Open Positions"
            value={5}
            change="+2 this month"
            changeType="positive"
            icon={Briefcase}
            iconColor="bg-primary/10 text-primary"
          />
          <StatCard
            title="Total Applicants"
            value={54}
            change="12 new this week"
            changeType="positive"
            icon={Users}
            iconColor="bg-info/10 text-info"
          />
          <StatCard
            title="In Interview"
            value={12}
            change="8 scheduled"
            icon={Calendar}
            iconColor="bg-warning/10 text-warning"
          />
          <StatCard
            title="Offers Sent"
            value={4}
            change="2 accepted"
            changeType="positive"
            icon={UserCheck}
            iconColor="bg-success/10 text-success"
          />
        </div>

        {/* Pipeline */}
        <div className="bg-card rounded-xl p-6 border border-border/50">
          <h3 className="font-semibold text-foreground mb-4">Recruitment Pipeline</h3>
          <div className="flex gap-2 mb-3">
            {pipelineStages.map((stage, index) => (
              <div key={stage.name} className="flex-1">
                <div className={`h-2 rounded-full ${stage.color}`} />
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            {pipelineStages.map((stage) => (
              <div key={stage.name} className="flex-1 text-center">
                <p className="text-lg font-bold text-foreground">{stage.count}</p>
                <p className="text-xs text-muted-foreground">{stage.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="jobs" className="space-y-4">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="jobs">Job Postings</TabsTrigger>
              <TabsTrigger value="candidates">Candidates</TabsTrigger>
            </TabsList>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Post New Job
            </Button>
          </div>

          <TabsContent value="jobs" className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-card rounded-xl p-5 border border-border/50 hover:border-primary/20 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                      {job.status}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Job</DropdownMenuItem>
                        <DropdownMenuItem>View Applicants</DropdownMenuItem>
                        <DropdownMenuItem>Close Position</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="flex items-center gap-6 mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-foreground font-medium">{job.applicants} applicants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Posted {job.posted}</span>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="candidates">
            <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-4 font-semibold text-foreground">Candidate</th>
                    <th className="text-left p-4 font-semibold text-foreground">Position</th>
                    <th className="text-left p-4 font-semibold text-foreground">Stage</th>
                    <th className="text-left p-4 font-semibold text-foreground">Rating</th>
                    <th className="text-left p-4 font-semibold text-foreground">Applied</th>
                    <th className="text-left p-4 font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {candidates.map((candidate) => (
                    <tr key={candidate.id} className="border-t border-border hover:bg-muted/30">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {candidate.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-foreground">{candidate.name}</p>
                            <p className="text-sm text-muted-foreground">{candidate.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground">{candidate.position}</td>
                      <td className="p-4">
                        <Badge variant="secondary" className={stageStyles[candidate.stage]}>
                          {candidate.stage}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <span className="font-medium text-foreground">{candidate.rating}</span>
                          <span className="text-warning">★</span>
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground">{candidate.appliedDate}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost">
                            <Mail className="h-4 w-4 mr-1" />
                            Email
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Calendar className="h-4 w-4 mr-1" />
                            Schedule
                          </Button>
                        </div>
                      </td>
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
