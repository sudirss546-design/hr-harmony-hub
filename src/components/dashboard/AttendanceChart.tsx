import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", present: 142, absent: 8, leave: 6 },
  { day: "Tue", present: 145, absent: 5, leave: 6 },
  { day: "Wed", present: 140, absent: 10, leave: 6 },
  { day: "Thu", present: 148, absent: 4, leave: 4 },
  { day: "Fri", present: 138, absent: 8, leave: 10 },
];

export function AttendanceChart() {
  return (
    <div className="bg-card rounded-xl p-6 card-elevated border border-border/50">
      <h3 className="text-lg font-semibold text-foreground mb-4">Weekly Attendance</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={2}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "0.5rem",
                boxShadow: "var(--shadow-md)",
              }}
            />
            <Bar dataKey="present" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="absent" fill="hsl(0, 84%, 60%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="leave" fill="hsl(199, 89%, 48%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-success" />
          <span className="text-sm text-muted-foreground">Present</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <span className="text-sm text-muted-foreground">Absent</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-info" />
          <span className="text-sm text-muted-foreground">On Leave</span>
        </div>
      </div>
    </div>
  );
}
