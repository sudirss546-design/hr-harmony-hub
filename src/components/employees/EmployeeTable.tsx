import { MoreHorizontal, Mail, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const employees = [
  {
    id: "EMP001",
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    phone: "+1 234 567 8901",
    department: "Engineering",
    designation: "Senior Developer",
    status: "Active",
    joinDate: "Jan 15, 2023",
    avatar: "",
    initials: "SJ",
  },
  {
    id: "EMP002",
    name: "Mike Chen",
    email: "mike.chen@company.com",
    phone: "+1 234 567 8902",
    department: "Engineering",
    designation: "Software Engineer",
    status: "Active",
    joinDate: "Dec 1, 2024",
    avatar: "",
    initials: "MC",
  },
  {
    id: "EMP003",
    name: "Emily Davis",
    email: "emily.davis@company.com",
    phone: "+1 234 567 8903",
    department: "Marketing",
    designation: "Marketing Manager",
    status: "On Leave",
    joinDate: "Mar 20, 2022",
    avatar: "",
    initials: "ED",
  },
  {
    id: "EMP004",
    name: "James Wilson",
    email: "james.wilson@company.com",
    phone: "+1 234 567 8904",
    department: "Sales",
    designation: "Sales Lead",
    status: "Active",
    joinDate: "Jun 10, 2023",
    avatar: "",
    initials: "JW",
  },
  {
    id: "EMP005",
    name: "Lisa Anderson",
    email: "lisa.anderson@company.com",
    phone: "+1 234 567 8905",
    department: "HR",
    designation: "HR Specialist",
    status: "Probation",
    joinDate: "Nov 1, 2024",
    avatar: "",
    initials: "LA",
  },
];

const statusStyles: Record<string, string> = {
  Active: "bg-success/10 text-success border-success/20",
  "On Leave": "bg-info/10 text-info border-info/20",
  Probation: "bg-warning/10 text-warning border-warning/20",
  Resigned: "bg-destructive/10 text-destructive border-destructive/20",
};

export function EmployeeTable() {
  return (
    <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            <TableHead className="font-semibold">Employee</TableHead>
            <TableHead className="font-semibold">Department</TableHead>
            <TableHead className="font-semibold">Designation</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold">Join Date</TableHead>
            <TableHead className="font-semibold text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id} className="hover:bg-muted/30">
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={employee.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      {employee.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">{employee.name}</p>
                    <p className="text-sm text-muted-foreground">{employee.id}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">{employee.department}</TableCell>
              <TableCell className="text-muted-foreground">{employee.designation}</TableCell>
              <TableCell>
                <Badge variant="outline" className={statusStyles[employee.status]}>
                  {employee.status}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">{employee.joinDate}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Edit Details</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center gap-2">
                      <Mail className="h-4 w-4" /> Send Email
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2">
                      <Phone className="h-4 w-4" /> Call
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Offboard</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
