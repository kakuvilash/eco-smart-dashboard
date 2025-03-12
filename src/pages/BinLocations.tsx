
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Filter, Plus, ListFilter } from "lucide-react";
import WasteMap from "@/components/maps/WasteMap";

const BinLocations = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight">Bin Locations</h2>
          <Button className="eco-gradient hover:opacity-90">
            <Plus className="mr-2 h-4 w-4" /> Add New Bin
          </Button>
        </div>
        
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <Card className="w-full md:w-1/3 lg:w-1/4">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <ListFilter className="h-5 w-5 text-eco-600" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search bins..." className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Status</h4>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    <span className="h-2 w-2 rounded-full bg-eco-500 mr-2"></span>
                    Normal
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                    Warning
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                    Critical
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <span className="h-2 w-2 rounded-full bg-gray-300 mr-2"></span>
                    Inactive
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Fill Level</h4>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    <span className="h-2 w-2 rounded-full bg-eco-500 mr-2"></span>
                    &lt; 50%
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                    50% - 75%
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                    &gt; 75%
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Area</h4>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MapPin className="h-4 w-4 mr-2 text-eco-600" />
                    Downtown
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MapPin className="h-4 w-4 mr-2 text-eco-600" />
                    Residential North
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MapPin className="h-4 w-4 mr-2 text-eco-600" />
                    Commercial Zone
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MapPin className="h-4 w-4 mr-2 text-eco-600" />
                    City Park
                  </Button>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                <Filter className="h-4 w-4 mr-2" /> Reset Filters
              </Button>
            </CardContent>
          </Card>
          
          <div className="w-full md:w-2/3 lg:w-3/4 h-[600px]">
            <WasteMap />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default BinLocations;
