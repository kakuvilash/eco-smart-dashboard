
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { MapPin, Locate, AlertCircle, Map } from "lucide-react";

// This is a mock component that would use a real map library in production
const WasteMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Mock data for bin locations
  const binLocations = [
    { id: "BIN-001", lat: 100, lng: 120, status: "critical", fillLevel: 82 },
    { id: "BIN-002", lat: 200, lng: 150, status: "warning", fillLevel: 67 },
    { id: "BIN-003", lat: 150, lng: 180, status: "normal", fillLevel: 45 },
    { id: "BIN-004", lat: 180, lng: 220, status: "normal", fillLevel: 30 },
    { id: "BIN-005", lat: 220, lng: 120, status: "warning", fillLevel: 78 },
  ];

  return (
    <Card className="eco-card h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Map className="h-5 w-5 text-eco-600" />
            Waste Bin Map
          </CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
              <span className="flex h-2 w-2 mr-1"><span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span></span>
              Critical
            </Badge>
            <Badge variant="outline" className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
              <span className="flex h-2 w-2 mr-1"><span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span></span>
              Warning
            </Badge>
            <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
              <span className="flex h-2 w-2 mr-1"><span className="relative inline-flex rounded-full h-2 w-2 bg-eco-500"></span></span>
              Normal
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative">
        {isLoading ? (
          <div className="h-[300px] flex items-center justify-center bg-secondary rounded-md">
            <div className="flex flex-col items-center">
              <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-eco-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="mt-2 text-sm text-muted-foreground">Loading map data...</p>
            </div>
          </div>
        ) : (
          <>
            <div ref={mapRef} className="h-[300px] bg-[#e9f5e9] rounded-md relative overflow-hidden">
              <div className="absolute inset-0 bg-secondary/30 p-4">
                {/* This would be replaced with an actual map library integration */}
                <div className="border-4 border-dashed border-eco-200 rounded-md h-full flex items-center justify-center">
                  <div className="text-center px-4">
                    <Map className="h-10 w-10 text-eco-400 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Interactive map would be displayed here with real-time bin locations and statuses.
                    </p>
                  </div>
                </div>
                
                {/* Mock map pins */}
                {binLocations.map((bin, idx) => {
                  const pinColor = bin.status === "critical" ? "text-red-500" : 
                                   bin.status === "warning" ? "text-amber-500" : 
                                   "text-eco-500";
                  
                  const pulseColor = bin.status === "critical" ? "bg-red-500" : 
                                     bin.status === "warning" ? "bg-amber-500" : 
                                     "bg-eco-500";
                                     
                  const position = {
                    top: `${(bin.lat / 3).toFixed(0)}px`,
                    left: `${(bin.lng / 3).toFixed(0)}px`,
                  };
                  
                  return (
                    <div 
                      key={bin.id} 
                      className="absolute" 
                      style={position}
                    >
                      <div className="relative">
                        <MapPin className={`h-6 w-6 ${pinColor}`} />
                        {bin.status === "critical" && (
                          <span className="flex h-2 w-2 absolute -top-1 -right-1">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pulseColor} opacity-75`}></span>
                            <span className={`relative inline-flex rounded-full h-2 w-2 ${pulseColor}`}></span>
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4">
              <Button size="sm" variant="secondary" className="shadow">
                <Locate className="h-4 w-4 mr-1" />
                My Location
              </Button>
            </div>
            
            <Alert className="mt-3 border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-900/20 dark:text-amber-300">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Attention Needed</AlertTitle>
              <AlertDescription>
                2 bins are nearing capacity and require immediate attention.
              </AlertDescription>
            </Alert>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default WasteMap;
