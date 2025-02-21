import { motion } from "framer-motion";
import { Heart, Trophy, UserCircle, Calendar, FileText, Video } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";

const AthleteDashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-sport-navy">
              Athlete Dashboard
            </h1>
            <p className="text-gray-500 mt-2">
              Welcome back, track your performance and upcoming events
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-sport-navy text-white rounded-lg hover:bg-sport-navy/90 transition-colors flex items-center gap-2">
              <Video size={20} />
              Start Meet
            </button>
            <button className="px-4 py-2 bg-sport-orange text-white rounded-lg hover:bg-sport-orange/90 transition-colors flex items-center gap-2">
              <FileText size={20} />
              View Documents
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Performance Score"
            value="82/100"
            description="Last updated today"
            icon={<Trophy size={20} />}
          />
          <StatCard
            title="Training Hours"
            value="24h"
            description="This month"
            icon={<UserCircle size={20} />}
          />
          <StatCard
            title="Next Event"
            value="2 days"
            description="Training session"
            icon={<Calendar size={20} />}
          />
          <StatCard
            title="Fitness Level"
            value="Excellent"
            description="Based on recent activity"
            icon={<Heart size={20} />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PerformanceChart />
          </div>
          <div>
            <UpcomingEvents />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AthleteDashboard;
