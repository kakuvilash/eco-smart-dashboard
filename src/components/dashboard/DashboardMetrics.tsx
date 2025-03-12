
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, BarChart2, CalendarClock, AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const DashboardMetrics = () => {
  const metrics = [
    {
      title: "Waste Collected",
      value: "2,475",
      unit: "kg",
      change: "+15%",
      icon: Trash2,
      color: "text-eco-600",
      progress: 75,
    },
    {
      title: "Active Bins",
      value: "48",
      unit: "bins",
      change: "+3",
      icon: BarChart2,
      color: "text-blue-500",
      progress: 85,
    },
    {
      title: "Next Collection",
      value: "12",
      unit: "hours",
      change: "On schedule",
      icon: CalendarClock,
      color: "text-amber-500",
      progress: 40,
    },
    {
      title: "Bin Alerts",
      value: "3",
      unit: "issues",
      change: "-2",
      icon: AlertTriangle,
      color: "text-red-500",
      progress: 15,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric, index) => (
        <Card key={index} className="eco-card animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium metric-label">{metric.title}</CardTitle>
            <metric.icon className={`h-5 w-5 ${metric.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold metric-value">
              {metric.value}
              <span className="text-sm ml-1 font-normal text-muted-foreground">{metric.unit}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{metric.change} from last week</p>
            <Progress value={metric.progress} className="h-1.5 mt-3" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardMetrics;
