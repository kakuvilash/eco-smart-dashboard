
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export const SignOutButton = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignOut = () => {
    // In a real app, this would call to an auth service
    localStorage.removeItem("isAuthenticated");
    
    toast({
      title: "Signed out successfully",
      description: "You have been signed out of your account.",
    });
    
    navigate("/");
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={handleSignOut}
      className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
    >
      <LogOut className="h-4 w-4 mr-2" />
      <span>Sign Out</span>
    </Button>
  );
};
