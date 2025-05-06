
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DramaLevelMeter = () => {
  const [dramaLevel, setDramaLevel] = useState(1);
  
  const levels = [
    { value: 0, label: "Surprisingly Calm", emoji: "😌" },
    { value: 1, label: "Slightly Sobbing", emoji: "🥹" },
    { value: 2, label: "Mild Chaos", emoji: "😢" },
    { value: 3, label: "Oscar-Worthy Breakdown", emoji: "😭" },
    { value: 4, label: "Full K-Drama Finale Mode", emoji: "🎭" },
  ];

  return (
    <Card className="bg-purple-50 border-purple-300 shadow-lg">
      <CardHeader className="bg-purple-200 rounded-t-lg">
        <CardTitle className="text-2xl text-center text-purple-800">
          Drama Level Today
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center">
          <div className="text-6xl mb-4">
            {levels[dramaLevel].emoji}
          </div>
          <div className="text-xl font-bold text-purple-700 mb-6">
            {levels[dramaLevel].label}
          </div>
          
          <div className="w-full bg-purple-200 rounded-full h-4 mb-6">
            <div 
              className="bg-purple-600 h-4 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${(dramaLevel / (levels.length - 1)) * 100}%` }}
            ></div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {levels.map((level, index) => (
              <Button 
                key={index}
                variant={dramaLevel === index ? "default" : "outline"} 
                onClick={() => setDramaLevel(index)}
                className={`transition-all ${dramaLevel === index ? 'bg-purple-600 text-white scale-110' : 'text-purple-700'}`}
              >
                {level.label} {level.emoji}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DramaLevelMeter;
