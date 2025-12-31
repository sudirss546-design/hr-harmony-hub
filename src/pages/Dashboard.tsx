import { Users, UserCheck, Clock, Calendar } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { DepartmentChart } from "@/components/dashboard/DepartmentChart";
import { AttendanceChart } from "@/components/dashboard/AttendanceChart";

export default function Dashboard() {
  return (
    <MainLayout title="Dashboard" subtitle="Welcome back, John! Here's what's happening.">
      <div className="space-y-6 animate-fade-in">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Employees"
            value={156}
            change="+12 this month"
            changeType="positive"
            icon={Users}
            iconColor="bg-primary/10 text-primary"
          />
          <StatCard
            title="Present Today"
            value={142}
            change="91% attendance"
            changeType="positive"
            icon={UserCheck}
            iconColor="bg-success/10 text-success"
          />
          <StatCard
            title="Pending Leaves"
            value={8}
            change="3 urgent"
            changeType="neutral"
            icon={Calendar}
            iconColor="bg-warning/10 text-warning"
          />
          <StatCard
            title="Open Positions"
            value={5}
            change="12 applications"
            changeType="neutral"
            icon={Clock}
            iconColor="bg-info/10 text-info"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AttendanceChart />
          <DepartmentChart />
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RecentActivity />
          <QuickActions />
          <UpcomingEvents />
        </div>
      </div>
    </MainLayout>
  );
}
