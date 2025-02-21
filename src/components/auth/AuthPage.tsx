
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import GoogleLoginButton from "./GoogleLoginButton";

const AuthPage = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSuccess = (token: string) => {
    setIsLoading(true);
    // Here we'll add the logic to handle the token and authenticate the user
    console.log("Login successful", token);
    toast({
      title: "Login Successful",
      description: "Welcome to Athlete Advantage Hub!",
    });
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
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold text-sport-navy">
            Athlete Advantage Hub
          </CardTitle>
          <p className="text-gray-500">
            Sign in to manage your athletic journey
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <GoogleLoginButton
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
