
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", performance: 65 },
  { month: "Feb", performance: 70 },
  { month: "Mar", performance: 68 },
  { month: "Apr", performance: 75 },
  { month: "May", performance: 78 },
  { month: "Jun", performance: 82 },
];

const PerformanceChart = () => {
  return (
    <Card className="w-full h-[400px]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-sport-navy">
          Performance Trends
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="performance"
              stroke="#1a237e"
              strokeWidth={2}
              dot={{ fill: "#1a237e" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
