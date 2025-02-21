
import { Heart, Trophy, UserCircle, Calendar } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 animate-fadeIn">
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
          <button className="px-4 py-2 bg-sport-orange text-white rounded-lg hover:bg-sport-orange/90 transition-colors">
            Add New Event
          </button>
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
    </div>
  );
};

export default Index;
