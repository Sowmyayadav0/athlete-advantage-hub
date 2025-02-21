
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import GoogleLoginButton from "./GoogleLoginButton";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [role, setRole] = useState<"athlete" | "coach" | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSuccess = (token: string) => {
    setIsLoading(true);
    // Here we would validate the token and get user info
    localStorage.setItem("userRole", role || "athlete");
    localStorage.setItem("userToken", token);
    toast({
      title: "Login Successful",
      description: `Welcome to Athlete Advantage Hub! Logged in as ${role}`,
    });
    navigate(role === "coach" ? "/coach-dashboard" : "/athlete-dashboard");
    setIsLoading(false);
  };

  const handleLoginError = () => {
    toast({
      title: "Login Failed",
      description: "Please try again later.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card>
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-2xl font-bold text-sport-navy">
              Athlete Advantage Hub
            </CardTitle>
            <p className="text-gray-500">
              Choose your role to continue
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {!role ? (
              <div className="space-y-4">
                <Button 
                  onClick={() => setRole("athlete")}
                  className="w-full bg-sport-navy"
                >
                  Continue as Athlete
                </Button>
                <Button 
                  onClick={() => setRole("coach")}
                  className="w-full bg-sport-orange"
                >
                  Continue as Coach
                </Button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-center mb-4">
                  Logging in as: <span className="font-semibold">{role}</span>
                </p>
                <GoogleLoginButton
                  onSuccess={handleLoginSuccess}
                  onError={handleLoginError}
                />
                <button
                  onClick={() => setRole(null)}
                  className="w-full mt-4 text-sm text-gray-500 hover:text-gray-700"
                >
                  Change Role
                </button>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AuthPage;
