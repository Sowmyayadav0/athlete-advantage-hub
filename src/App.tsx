
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from "./components/layout/Navbar";
import AuthPage from "./components/auth/AuthPage";
import AthleteDashboard from "./pages/AthleteDashboard";
import CoachDashboard from "./pages/CoachDashboard";
import AIAssistant from "./pages/AIAssistant";
import Calendar from "./pages/Calendar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem("userToken");
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const App = () => (
  <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-gray-50">
            <Routes>
              <Route path="/login" element={<AuthPage />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Navbar />
                    <Navigate to="/athlete-dashboard" replace />
                  </PrivateRoute>
                }
              />
              <Route
                path="/athlete-dashboard"
                element={
                  <PrivateRoute>
                    <Navbar />
                    <AthleteDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/coach-dashboard"
                element={
                  <PrivateRoute>
                    <Navbar />
                    <CoachDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/calendar"
                element={
                  <PrivateRoute>
                    <Navbar />
                    <Calendar />
                  </PrivateRoute>
                }
              />
              <Route
                path="/ai-assistant"
                element={
                  <PrivateRoute>
                    <Navbar />
                    <AIAssistant />
                  </PrivateRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <PrivateRoute>
                    <Navbar />
                    <About />
                  </PrivateRoute>
                }
              />
              <Route
                path="/contact"
                element={
                  <PrivateRoute>
                    <Navbar />
                    <Contact />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </GoogleOAuthProvider>
);

export default App;
