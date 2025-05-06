
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AnnoyingButAdorable = () => {
  const traits = [
    "Cries over dramas but won't cry over onions 🧅",
    "Eats like a raccoon but judges others' plates 🍽️",
    "Can recite drama plots but 'forgets' to reply to texts 📱",
    "Gives fashion advice while wearing pajamas all day 👚",
    "Will fight for fictional characters but avoids real conflict 🥊",
    "Has 7 different emotions in 5 minutes 🎭"
  ];

  return (
    <Card className="bg-pink-50 border-pink-300 shadow-lg">
      <CardHeader className="bg-pink-200 rounded-t-lg">
        <CardTitle className="text-2xl text-center text-pink-800">
          Why You're Annoying But Adorable
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-3">
          {traits.map((trait, index) => (
            <li key={index} className="flex items-start gap-2 text-lg">
              <span className="text-pink-500 font-bold">•</span>
              <span className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                {trait}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default AnnoyingButAdorable;
