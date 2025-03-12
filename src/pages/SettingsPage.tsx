
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Users, Shield, User, Key, MapPin, Mail, Palette, Globe } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const SettingsPage = () => {
  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been saved successfully.",
    });
  };
  
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        </div>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full md:w-auto md:inline-flex grid-cols-4 h-auto p-1">
            <TabsTrigger value="profile" className="py-2 px-3 text-xs md:text-sm">
              <User className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="py-2 px-3 text-xs md:text-sm">
              <Bell className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="py-2 px-3 text-xs md:text-sm">
              <Shield className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger value="appearance" className="py-2 px-3 text-xs md:text-sm">
              <Palette className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Appearance</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>
                  Manage your personal information and preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col items-center md:items-start space-y-4">
                    <div className="h-24 w-24 rounded-full bg-eco-100 flex items-center justify-center text-eco-700">
                      <User className="h-12 w-12" />
                    </div>
                    <Button variant="outline" size="sm">
                      Change Photo
                    </Button>
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" defaultValue="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="email" type="email" placeholder="m@example.com" className="pl-10" defaultValue="johndoe@example.com" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input id="jobTitle" placeholder="Waste Management Supervisor" defaultValue="Waste Management Supervisor" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="location" placeholder="City, Country" className="pl-10" defaultValue="New York, USA" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Preferences</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Languages</SelectLabel>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                          <SelectItem value="zh">Chinese</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="utc-5">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Timezones</SelectLabel>
                          <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                          <SelectItem value="utc-7">Mountain Time (UTC-7)</SelectItem>
                          <SelectItem value="utc-6">Central Time (UTC-6)</SelectItem>
                          <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                          <SelectItem value="utc">UTC</SelectItem>
                          <SelectItem value="utc+1">Central European Time (UTC+1)</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" className="mr-2">Cancel</Button>
                <Button className="eco-gradient hover:opacity-90" onClick={handleSave}>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                  Configure how you receive notifications.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-bin-alerts">Bin Alerts</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive alerts when bins are nearing capacity
                        </p>
                      </div>
                      <Switch id="email-bin-alerts" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-collection">Collection Reminders</Label>
                        <p className="text-sm text-muted-foreground">
                          Get notified about upcoming waste collections
                        </p>
                      </div>
                      <Switch id="email-collection" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-reports">Weekly Reports</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive weekly analytics and performance reports
                        </p>
                      </div>
                      <Switch id="email-reports" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-system">System Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Get notified about system updates and maintenance
                        </p>
                      </div>
                      <Switch id="email-system" defaultChecked />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <h3 className="text-lg font-medium">Push Notifications</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="push-bin-alerts">Bin Alerts</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive alerts when bins are nearing capacity
                        </p>
                      </div>
                      <Switch id="push-bin-alerts" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="push-collection">Collection Reminders</Label>
                        <p className="text-sm text-muted-foreground">
                          Get notified about upcoming waste collections
                        </p>
                      </div>
                      <Switch id="push-collection" defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" className="mr-2">Cancel</Button>
                <Button className="eco-gradient hover:opacity-90" onClick={handleSave}>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Security</CardTitle>
                <CardDescription>
                  Manage your password and account security.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Change Password</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <div className="relative">
                      <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="currentPassword" type="password" className="pl-10" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <div className="relative">
                      <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="newPassword" type="password" className="pl-10" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <div className="relative">
                      <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="confirmPassword" type="password" className="pl-10" />
                    </div>
                  </div>
                  
                  <Button className="eco-gradient hover:opacity-90">Update Password</Button>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="twoFactor">Enable Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch id="twoFactor" />
                  </div>
                  
                  <Button variant="outline">Setup Two-Factor Authentication</Button>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Sessions</h3>
                  
                  <p className="text-sm text-muted-foreground">
                    You're currently signed in on this device. You can sign out of all other sessions.
                  </p>
                  
                  <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600">
                    Sign Out of All Other Sessions
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" className="mr-2">Cancel</Button>
                <Button className="eco-gradient hover:opacity-90" onClick={handleSave}>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>
                  Customize how the application looks and feels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Theme</h3>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border rounded-md p-3 cursor-pointer bg-white">
                      <div className="h-10 rounded bg-white border mb-2"></div>
                      <div className="h-2 rounded bg-gray-200 mb-1"></div>
                      <div className="h-2 rounded bg-gray-200 w-3/4"></div>
                      <p className="text-xs mt-2 text-center">Light</p>
                    </div>
                    
                    <div className="border rounded-md p-3 cursor-pointer bg-gray-950">
                      <div className="h-10 rounded bg-gray-900 border mb-2 border-gray-700"></div>
                      <div className="h-2 rounded bg-gray-700 mb-1"></div>
                      <div className="h-2 rounded bg-gray-700 w-3/4"></div>
                      <p className="text-xs mt-2 text-center text-gray-400">Dark</p>
                    </div>
                    
                    <div className="border rounded-md p-3 cursor-pointer bg-gradient-to-r from-white to-gray-950">
                      <div className="h-10 rounded bg-white border mb-2"></div>
                      <div className="h-2 rounded bg-gray-200 mb-1"></div>
                      <div className="h-2 rounded bg-gray-200 w-3/4"></div>
                      <p className="text-xs mt-2 text-center">System</p>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Color Scheme</h3>
                  
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                    <div className="border rounded-md p-2 cursor-pointer overflow-hidden">
                      <div className="h-10 rounded-t bg-gradient-to-r from-eco-400 to-eco-600"></div>
                      <p className="text-xs mt-2 text-center">Green (Default)</p>
                    </div>
                    
                    <div className="border rounded-md p-2 cursor-pointer overflow-hidden">
                      <div className="h-10 rounded-t bg-gradient-to-r from-blue-400 to-blue-600"></div>
                      <p className="text-xs mt-2 text-center">Blue</p>
                    </div>
                    
                    <div className="border rounded-md p-2 cursor-pointer overflow-hidden">
                      <div className="h-10 rounded-t bg-gradient-to-r from-purple-400 to-purple-600"></div>
                      <p className="text-xs mt-2 text-center">Purple</p>
                    </div>
                    
                    <div className="border rounded-md p-2 cursor-pointer overflow-hidden">
                      <div className="h-10 rounded-t bg-gradient-to-r from-amber-400 to-amber-600"></div>
                      <p className="text-xs mt-2 text-center">Amber</p>
                    </div>
                    
                    <div className="border rounded-md p-2 cursor-pointer overflow-hidden">
                      <div className="h-10 rounded-t bg-gradient-to-r from-red-400 to-red-600"></div>
                      <p className="text-xs mt-2 text-center">Red</p>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Accessibility</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="reduceMotion">Reduce Motion</Label>
                      <p className="text-sm text-muted-foreground">
                        Minimize animations throughout the application
                      </p>
                    </div>
                    <Switch id="reduceMotion" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="highContrast">High Contrast</Label>
                      <p className="text-sm text-muted-foreground">
                        Increase contrast for better visibility
                      </p>
                    </div>
                    <Switch id="highContrast" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fontSize">Font Size</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger id="fontSize">
                        <SelectValue placeholder="Select font size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Font Size</SelectLabel>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium (Default)</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                          <SelectItem value="xlarge">Extra Large</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" className="mr-2">Reset to Default</Button>
                <Button className="eco-gradient hover:opacity-90" onClick={handleSave}>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default SettingsPage;
