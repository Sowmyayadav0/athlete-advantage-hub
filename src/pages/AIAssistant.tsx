
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const AIAssistant = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add Gemini API integration here
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <Card>
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold text-sport-navy mb-6">
            AI Training Assistant
          </h1>
          <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea
                placeholder="Ask me anything about training, nutrition, or recovery..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[100px]"
              />
              <Button 
                type="submit" 
                disabled={isLoading || !prompt}
                className="w-full"
              >
                <Send className="mr-2 h-4 w-4" />
                {isLoading ? "Processing..." : "Send"}
              </Button>
            </form>
            {response && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="whitespace-pre-wrap">{response}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AIAssistant;
