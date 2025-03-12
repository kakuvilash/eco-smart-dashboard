
import { useState } from "react";
import AuthForm from "@/components/auth/AuthForm";
import Dashboard from "@/pages/Dashboard";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  return isAuthenticated ? <Dashboard /> : <AuthForm onSuccess={handleAuthSuccess} />;
};

export default Index;
