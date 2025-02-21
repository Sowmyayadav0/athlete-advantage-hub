
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserCircle, MessageSquare, Calendar, BarChart2, LogOut } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "User";
  const userRole = localStorage.getItem("userRole");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-sport-navy">
                Athlete Advantage Hub
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to={userRole === "coach" ? "/coach-dashboard" : "/athlete-dashboard"}>
                <BarChart2 className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/calendar">
                <Calendar className="mr-2 h-4 w-4" />
                Calendar
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/ai-assistant">
                <MessageSquare className="mr-2 h-4 w-4" />
                AI Assistant
              </Link>
            </Button>
            <div className="border-l pl-4 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <UserCircle className="h-5 w-5 text-sport-navy" />
                <span className="text-sm font-medium">{userName}</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
