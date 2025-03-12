
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";
import { BarChart3, ChevronDown, PieChart as PieChartIcon } from "lucide-react";

const WasteAnalytics = () => {
  const [timeRange, setTimeRange] = useState("weekly");
  
  // Mock data for waste collection by day/category
  const weeklyData = [
    { name: "Mon", amount: 420, },
    { name: "Tue", amount: 380, },
    { name: "Wed", amount: 450, },
    { name: "Thu", amount: 520, },
    { name: "Fri", amount: 580, },
    { name: "Sat", amount: 620, },
    { name: "Sun", amount: 400, },
  ];
  
  const monthlyData = [
    { name: "Week 1", amount: 2850, },
    { name: "Week 2", amount: 3120, },
    { name: "Week 3", amount: 2970, },
    { name: "Week 4", amount: 3400, },
  ];
  
  const wasteTypeData = [
    { name: "Plastics", value: 35, color: "#4CAF50" },
    { name: "Paper", value: 25, color: "#8BC34A" },
    { name: "Organic", value: 20, color: "#CDDC39" },
    { name: "Glass", value: 10, color: "#03A9F4" },
    { name: "Metal", value: 8, color: "#9E9E9E" },
    { name: "Other", value: 2, color: "#607D8B" },
  ];
  
  const chartData = timeRange === "weekly" ? weeklyData : monthlyData;
  
  return (
    <Card className="eco-card h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-eco-600" />
            Waste Analytics
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`text-xs ${timeRange === "weekly" ? "bg-eco-50 text-eco-700" : ""}`}
              onClick={() => setTimeRange("weekly")}
            >
              Weekly
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`text-xs ${timeRange === "monthly" ? "bg-eco-50 text-eco-700" : ""}`}
              onClick={() => setTimeRange("monthly")}
            >
              Monthly
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Total Waste Collection</h4>
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 5, right: 0, left: -20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                <XAxis dataKey="name" fontSize={12} tickMargin={10} />
                <YAxis 
                  fontSize={12} 
                  tickFormatter={(value) => `${value}kg`} 
                  tickMargin={10} 
                />
                <Tooltip 
                  formatter={(value) => [`${value} kg`, "Amount"]}
                  labelStyle={{ color: "#333" }}
                  contentStyle={{ backgroundColor: "white", borderRadius: "8px", border: "1px solid #eee" }}
                />
                <Bar 
                  dataKey="amount" 
                  name="Waste Collected" 
                  fill="#4CAF50" 
                  radius={[4, 4, 0, 0]} 
                  maxBarSize={50}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2 flex items-center">
            <PieChartIcon className="h-4 w-4 mr-1 text-eco-600" />
            Waste Composition
          </h4>
          <div className="h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={wasteTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {wasteTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, "Percentage"]}
                  contentStyle={{ backgroundColor: "white", borderRadius: "8px", border: "1px solid #eee" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="flex justify-end mt-2">
          <Badge className="cursor-pointer bg-eco-100 text-eco-800 hover:bg-eco-200 dark:bg-eco-900/30 dark:text-eco-300 flex items-center">
            Full Report
            <ChevronDown className="h-3 w-3 ml-1" />
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default WasteAnalytics;
