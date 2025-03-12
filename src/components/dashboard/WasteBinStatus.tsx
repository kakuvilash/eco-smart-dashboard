
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2, AlertCircle, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

type WasteBinStatusProps = {
  compact?: boolean;
};

const WasteBinStatus = ({ compact = false }: WasteBinStatusProps) => {
  const bins = [
    {
      id: "BIN-001",
      location: "Central Park, Area A",
      fillLevel: 82,
      status: "critical",
      lastUpdated: "10 minutes ago",
    },
    {
      id: "BIN-002",
      location: "Downtown Plaza",
      fillLevel: 67,
      status: "warning",
      lastUpdated: "25 minutes ago",
    },
    {
      id: "BIN-003",
      location: "Riverside Walk",
      fillLevel: 45,
      status: "normal",
      lastUpdated: "5 minutes ago",
    },
    {
      id: "BIN-004",
      location: "City Mall Entrance",
      fillLevel: 30,
      status: "normal",
      lastUpdated: "15 minutes ago",
    },
    {
      id: "BIN-005",
      location: "Main Street Corner",
      fillLevel: 78,
      status: "warning",
      lastUpdated: "1 hour ago",
    },
  ];

  const statusColors = {
    critical: "bg-red-500",
    warning: "bg-amber-500",
    normal: "bg-eco-500",
  };

  const statusIcons = {
    critical: <AlertCircle className="h-4 w-4 text-red-500" />,
    warning: <AlertCircle className="h-4 w-4 text-amber-500" />,
    normal: <CheckCircle className="h-4 w-4 text-eco-500" />,
  };

  const getBadgeColor = (status: string) => {
    switch (status) {
      case "critical":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      case "warning":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      case "normal":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      default:
        return "";
    }
  };

  return (
    <Card className="eco-card">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Trash2 className="h-5 w-5 text-eco-600" />
            Waste Bin Status
          </CardTitle>
          {!compact && (
            <Badge className="bg-eco-100 text-eco-800 hover:bg-eco-200 dark:bg-eco-900/30 dark:text-eco-300">
              View All
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bins.slice(0, compact ? 3 : 5).map((bin) => (
            <div key={bin.id} className="flex items-center p-2 rounded-md hover:bg-secondary transition-colors">
              <div className="mr-4">
                <div className="relative">
                  <Trash2 className="h-10 w-10 text-muted-foreground" />
                  <div className="absolute -top-1 -right-1">
                    <span className={`flex h-3 w-3 ${bin.status === "critical" ? "animate-pulse-green" : ""}`}>
                      <span className={`relative inline-flex rounded-full h-3 w-3 ${statusColors[bin.status as keyof typeof statusColors]}`}></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="text-sm font-medium truncate">{bin.id}</h4>
                    <p className="text-xs text-muted-foreground truncate">{bin.location}</p>
                  </div>
                  <Badge variant="outline" className={`text-xs ${getBadgeColor(bin.status)}`}>
                    {bin.status.charAt(0).toUpperCase() + bin.status.slice(1)}
                  </Badge>
                </div>
                <div className="w-full flex items-center gap-2">
                  <Progress 
                    value={bin.fillLevel} 
                    className={`h-2 ${
                      bin.fillLevel > 80 ? "bg-red-100 [&>div]:bg-red-500" : 
                      bin.fillLevel > 60 ? "bg-amber-100 [&>div]:bg-amber-500" : 
                      "bg-eco-100 [&>div]:bg-eco-500"
                    }`} 
                  />
                  <span className="text-xs font-medium">{bin.fillLevel}%</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Updated {bin.lastUpdated}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WasteBinStatus;
