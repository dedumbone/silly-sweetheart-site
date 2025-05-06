
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Affirmations = () => {
  const affirmations = [
    "You're stronger than you think, even if you cry at commercials",
    "The world's better with your laugh (and your drama recaps)",
    "Your chaotic energy powers the universe",
    "Your smile could light up an entire K-drama set",
    "Even when you're being dramatic, you're still adorable",
    "You handle life's plot twists better than any drama heroine",
    "Your snack choices are questionable, but your heart is gold",
    "You're the main character energy everyone needs"
  ];

  const [currentAffirmation, setCurrentAffirmation] = useState(0);
  
  const nextAffirmation = () => {
    setCurrentAffirmation((prev) => (prev + 1) % affirmations.length);
  };

  // Auto-rotate affirmations every 7 seconds
  useEffect(() => {
    const interval = setInterval(nextAffirmation, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-green-50 border-green-300 shadow-lg">
      <CardHeader className="bg-green-200 rounded-t-lg">
        <CardTitle className="text-2xl text-center text-green-800">
          Daily Affirmations
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="min-h-[120px] flex flex-col items-center justify-center">
          <p className="text-xl text-center font-medium text-green-800 mb-6">
            {affirmations[currentAffirmation]}
          </p>
          <Button 
            onClick={nextAffirmation}
            className="bg-green-600 hover:bg-green-700"
          >
            Next Affirmation
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Affirmations;
