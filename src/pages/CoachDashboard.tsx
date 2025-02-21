
import { motion } from "framer-motion";
import { Users, TrendingUp, Award, Clock } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import PerformanceChart from "@/components/dashboard/PerformanceChart";

const CoachDashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-sport-navy">Coach Dashboard</h1>
          <p className="text-gray-500 mt-2">Monitor your athletes' performance and progress</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Athletes"
            value="24"
            description="Active athletes"
            icon={<Users size={20} />}
          />
          <StatCard
            title="Average Performance"
            value="78%"
            description="This month"
            icon={<TrendingUp size={20} />}
          />
          <StatCard
            title="Top Performer"
            value="Sarah J."
            description="Last 30 days"
            icon={<Award size={20} />}
          />
          <StatCard
            title="Training Hours"
            value="156h"
            description="Team total this month"
            icon={<Clock size={20} />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PerformanceChart />
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Team Overview</h2>
            {/* Add team overview content */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CoachDashboard;
