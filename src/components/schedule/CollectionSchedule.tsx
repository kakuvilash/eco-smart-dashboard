
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarDays, CalendarPlus, Check, Clock, MapPin, Truck } from "lucide-react";

type CollectionScheduleProps = {
  compact?: boolean;
};

const CollectionSchedule = ({ compact = false }: CollectionScheduleProps) => {
  const schedules = [
    {
      id: "SCH-001",
      area: "Downtown District",
      date: "Today",
      time: "2:00 PM",
      status: "upcoming",
      bins: 12,
    },
    {
      id: "SCH-002",
      area: "Residential Area North",
      date: "Tomorrow",
      time: "10:30 AM",
      status: "scheduled",
      bins: 18,
    },
    {
      id: "SCH-003",
      area: "Commercial Zone",
      date: "May 28, 2023",
      time: "8:00 AM",
      status: "scheduled",
      bins: 24,
    },
    {
      id: "SCH-004",
      area: "City Park",
      date: "May 30, 2023",
      time: "1:30 PM",
      status: "scheduled",
      bins: 8,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300">
            <Clock className="h-3 w-3 mr-1" />
            Upcoming
          </Badge>
        );
      case "completed":
        return (
          <Badge className="bg-eco-100 text-eco-800 hover:bg-eco-200 dark:bg-eco-900/30 dark:text-eco-300">
            <Check className="h-3 w-3 mr-1" />
            Completed
          </Badge>
        );
      default:
        return (
          <Badge variant="outline">
            <Calendar className="h-3 w-3 mr-1" />
            Scheduled
          </Badge>
        );
    }
  };

  return (
    <Card className="eco-card h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-eco-600" />
            Collection Schedule
          </CardTitle>
          {!compact && (
            <Button variant="outline" size="sm" className="text-xs h-8">
              <CalendarPlus className="h-3.5 w-3.5 mr-1" />
              Schedule New
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {schedules.slice(0, compact ? 2 : 4).map((schedule) => (
            <div key={schedule.id} className="flex items-start p-3 rounded-md hover:bg-secondary transition-colors">
              <div className="mr-4">
                <div className="h-10 w-10 rounded-full bg-eco-100 flex items-center justify-center text-eco-700">
                  <Truck className="h-5 w-5" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="text-sm font-medium">{schedule.area}</h4>
                    <p className="text-xs text-muted-foreground flex items-center mt-0.5">
                      <MapPin className="h-3 w-3 mr-1" /> {schedule.bins} bins
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    {getStatusBadge(schedule.status)}
                    <p className="text-xs text-muted-foreground mt-1">
                      {schedule.date}, {schedule.time}
                    </p>
                  </div>
                </div>
                {!compact && (
                  <div className="flex space-x-2 mt-2">
                    <Button variant="ghost" size="sm" className="h-7 text-xs">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="h-7 text-xs">
                      Modify
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {!compact && (
          <Button variant="ghost" className="w-full mt-4 text-eco-600 hover:text-eco-700 hover:bg-eco-50">
            View All Schedules
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CollectionSchedule;
