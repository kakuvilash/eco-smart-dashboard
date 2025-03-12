
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart2, PieChart, Download, BarChart, LineChart, Calendar, Filter } from "lucide-react";
import WasteAnalytics from "@/components/analytics/WasteAnalytics";

const AnalyticsPage = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight">Analytics</h2>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export Data
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="md:col-span-1 eco-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Filter className="h-5 w-5 text-eco-600" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Date Range</h4>
                <Select defaultValue="month">
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Time Period</SelectLabel>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="quarter">This Quarter</SelectItem>
                      <SelectItem value="year">This Year</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Area</h4>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Area</SelectLabel>
                      <SelectItem value="all">All Areas</SelectItem>
                      <SelectItem value="downtown">Downtown</SelectItem>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Waste Type</h4>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select waste type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Waste Type</SelectLabel>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="recyclable">Recyclable</SelectItem>
                      <SelectItem value="organic">Organic</SelectItem>
                      <SelectItem value="hazardous">Hazardous</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Chart Type</h4>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    <BarChart className="h-4 w-4 mr-2 text-eco-600" />
                    Bar
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <LineChart className="h-4 w-4 mr-2 text-eco-600" />
                    Line
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <PieChart className="h-4 w-4 mr-2 text-eco-600" />
                    Pie
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <BarChart2 className="h-4 w-4 mr-2 text-eco-600" />
                    Stacked
                  </Button>
                </div>
              </div>
              
              <Button className="w-full eco-gradient hover:opacity-90">
                Apply Filters
              </Button>
            </CardContent>
          </Card>
          
          <div className="md:col-span-3 space-y-4">
            <WasteAnalytics />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="eco-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-eco-600" />
                    Waste Composition
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    Pie Chart showing waste composition will display here
                  </div>
                </CardContent>
              </Card>
              
              <Card className="eco-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-eco-600" />
                    Trends Over Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    Line Chart showing waste trends will display here
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AnalyticsPage;
