
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays, CalendarPlus, Calendar, Search, Filter, MapPin, Clock, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CollectionSchedule from "@/components/schedule/CollectionSchedule";

const CollectionSchedulePage = () => {
  // Sample schedule data
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
    {
      id: "SCH-005",
      area: "East Side Plaza",
      date: "June 1, 2023",
      time: "9:00 AM",
      status: "scheduled",
      bins: 15,
    },
    {
      id: "SCH-006",
      area: "Industrial Complex",
      date: "June 3, 2023",
      time: "7:30 AM",
      status: "scheduled",
      bins: 30,
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
            <Calendar className="h-3 w-3 mr-1" />
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
    <AppLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight">Collection Schedule</h2>
          <Button className="eco-gradient hover:opacity-90">
            <CalendarPlus className="mr-2 h-4 w-4" /> Schedule New Collection
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card className="md:col-span-1 eco-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Filter className="h-5 w-5 text-eco-600" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search schedules..." className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Date Range</h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="date" className="pl-10" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="date" className="pl-10" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Status</h4>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Areas</h4>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Areas</SelectLabel>
                      <SelectItem value="all">All Areas</SelectItem>
                      <SelectItem value="downtown">Downtown District</SelectItem>
                      <SelectItem value="residential">Residential Area North</SelectItem>
                      <SelectItem value="commercial">Commercial Zone</SelectItem>
                      <SelectItem value="park">City Park</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              <Button variant="outline" className="w-full">
                <Filter className="h-4 w-4 mr-2" /> Apply Filters
              </Button>
            </CardContent>
          </Card>
          
          <div className="md:col-span-2 lg:col-span-3 space-y-4">
            <Card className="eco-card">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-eco-600" />
                    Collection Schedules
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {schedules.map((schedule) => (
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
                        <div className="flex space-x-2 mt-2">
                          <Button variant="ghost" size="sm" className="h-7 text-xs">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm" className="h-7 text-xs">
                            Modify
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-4">
                  <Button variant="outline" size="sm" className="mx-1">Previous</Button>
                  <Button variant="outline" size="sm" className="mx-1 bg-eco-50">1</Button>
                  <Button variant="outline" size="sm" className="mx-1">2</Button>
                  <Button variant="outline" size="sm" className="mx-1">3</Button>
                  <Button variant="outline" size="sm" className="mx-1">Next</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="eco-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-eco-600" />
                  Upcoming Collections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CollectionSchedule />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default CollectionSchedulePage;
