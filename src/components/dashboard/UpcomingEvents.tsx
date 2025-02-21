
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const events = [
  {
    title: "Training Session",
    date: "Today, 2:00 PM",
    type: "training",
  },
  {
    title: "Team Meeting",
    date: "Tomorrow, 10:00 AM",
    type: "meeting",
  },
  {
    title: "Performance Review",
    date: "23 Apr, 3:00 PM",
    type: "review",
  },
];

const UpcomingEvents = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-sport-navy">
          Upcoming Events
        </CardTitle>
        <Calendar className="text-sport-navy" size={20} />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div>
                <h4 className="font-medium text-sport-navy">{event.title}</h4>
                <p className="text-sm text-gray-500">{event.date}</p>
              </div>
              <div
                className={cn(
                  "px-2 py-1 rounded text-xs",
                  event.type === "training" && "bg-sport-success/20 text-sport-success",
                  event.type === "meeting" && "bg-sport-warning/20 text-sport-warning",
                  event.type === "review" && "bg-sport-orange/20 text-sport-orange"
                )}
              >
                {event.type}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingEvents;
