import { ReactNode, useState } from "react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Calendar, ChevronRight, HelpCircle, Home, LogOut, MapPin, PieChart, Recycle, Settings, Trash2 } from "lucide-react";

type MainLayoutProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: MainLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard", active: true },
    { icon: MapPin, label: "Bin Locations", href: "/locations" },
    { icon: Calendar, label: "Collection Schedule", href: "/schedule" },
    { icon: PieChart, label: "Analytics", href: "/analytics" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const footerItems = [
    { icon: HelpCircle, label: "Help & Support", href: "/support" },
    { icon: LogOut, label: "Sign Out", href: "/logout" },
  ];

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar className="border-r">
          <SidebarHeader className="flex h-14 items-center border-b px-4">
            <div className="flex items-center space-x-2">
              <Recycle className={`h-6 w-6 text-sidebar-foreground ${isCollapsed ? "" : "mr-2"}`} />
              {!isCollapsed && <span className="font-bold text-sidebar-foreground">EcoWaste</span>}
            </div>
          </SidebarHeader>
          <SidebarContent className="flex flex-col gap-4 py-4">
            <nav className="grid gap-1 px-2">
              {menuItems.map((item, index) => (
                <TooltipProvider key={index} delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant={item.active ? "secondary" : "ghost"}
                        size="sm"
                        className={`w-full justify-start ${item.active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"}`}
                        asChild
                      >
                        <a href={item.href} className="flex items-center">
                          <item.icon className="h-4 w-4" />
                          {!isCollapsed && <span className="ml-2">{item.label}</span>}
                        </a>
                      </Button>
                    </TooltipTrigger>
                    {isCollapsed && (
                      <TooltipContent side="right">
                        {item.label}
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              ))}
            </nav>
          </SidebarContent>
          <SidebarFooter className="border-t p-2">
            <div className={`mb-2 ${isCollapsed ? "px-2" : "px-4"} py-2`}>
              {!isCollapsed && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="ml-2">
                      <p className="text-sm font-medium text-sidebar-foreground">John Doe</p>
                      <p className="text-xs text-sidebar-foreground/70">Admin</p>
                    </div>
                  </div>
                  <Bell className="h-4 w-4 text-sidebar-foreground/70" />
                </div>
              )}
              {isCollapsed && (
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" alt="Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent side="right">John Doe - Admin</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
            <nav className="grid gap-1 px-2">
              {footerItems.map((item, index) => (
                <TooltipProvider key={index} delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        asChild
                      >
                        <a href={item.href} className="flex items-center">
                          <item.icon className="h-4 w-4" />
                          {!isCollapsed && <span className="ml-2">{item.label}</span>}
                        </a>
                      </Button>
                    </TooltipTrigger>
                    {isCollapsed && (
                      <TooltipContent side="right">
                        {item.label}
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              ))}
            </nav>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 overflow-auto">
          <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
            <SidebarTrigger className="text-muted-foreground">
              <ChevronRight />
            </SidebarTrigger>
            <div className="flex-1">
              <h1 className="font-semibold text-lg">Smart Waste Management System</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </header>
          <div className="container mx-auto p-4 md:p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
