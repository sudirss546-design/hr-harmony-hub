import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Engineering", value: 45, color: "hsl(173, 58%, 39%)" },
  { name: "Sales", value: 25, color: "hsl(199, 89%, 48%)" },
  { name: "Marketing", value: 15, color: "hsl(38, 92%, 50%)" },
  { name: "HR", value: 8, color: "hsl(142, 71%, 45%)" },
  { name: "Finance", value: 7, color: "hsl(280, 65%, 60%)" },
];

export function DepartmentChart() {
  return (
    <div className="bg-card rounded-xl p-6 card-elevated border border-border/50">
      <h3 className="text-lg font-semibold text-foreground mb-4">Employees by Department</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "0.5rem",
                boxShadow: "var(--shadow-md)",
              }}
              formatter={(value: number) => [`${value} employees`, ""]}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value) => (
                <span className="text-sm text-muted-foreground">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
