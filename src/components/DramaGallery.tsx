
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DramaGallery = () => {
  const dramaPosters = [
    {
      title: "Queen of Snacks",
      subtitle: "She never shares, but we love her anyway",
      emoji: "🍿"
    },
    {
      title: "The Crybaby Chronicles",
      subtitle: "Where tissues are always needed",
      emoji: "😭"
    },
    {
      title: "Emotional Rollercoaster",
      subtitle: "Season 5, Episode 24/7",
      emoji: "🎢"
    },
    {
      title: "Too Cute To Handle",
      subtitle: "Warning: May cause diabetes",
      emoji: "🧸"
    },
    {
      title: "Pajama Princess",
      subtitle: "Fashion icon in comfortable clothing",
      emoji: "👑"
    },
    {
      title: "Drama Queen Diaries",
      subtitle: "Every tear tells a story",
      emoji: "📔"
    }
  ];

  return (
    <Card className="bg-yellow-50 border-yellow-300 shadow-lg">
      <CardHeader className="bg-yellow-200 rounded-t-lg">
        <CardTitle className="text-2xl text-center text-yellow-800">
          Drama Posters Starring You
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dramaPosters.map((poster, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-4 border-2 border-yellow-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl mb-2 text-center">{poster.emoji}</div>
              <h3 className="text-xl font-bold text-center text-yellow-800">
                {poster.title}
              </h3>
              <p className="text-center text-gray-600 italic">{poster.subtitle}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DramaGallery;
