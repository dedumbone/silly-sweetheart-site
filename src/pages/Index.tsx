
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { Crown, Drama, Tv, Heart, PartyPopper } from "lucide-react";
import Header from "@/components/Header";
import AnnoyingButAdorable from "@/components/AnnoyingButAdorable";
import DramaLevelMeter from "@/components/DramaLevelMeter";
import ComplaintBox from "@/components/ComplaintBox";
import DramaGallery from "@/components/DramaGallery";
import Affirmations from "@/components/Affirmations";
import ConfettiButton from "@/components/ConfettiButton";

const Index = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="min-h-screen font-handwritten bg-gradient-to-b from-pink-100 to-purple-100 text-purple-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        
        <div className="space-y-10 mt-8">
          <AnnoyingButAdorable />
          
          <DramaLevelMeter />
          
          <ComplaintBox />
          
          <DramaGallery />
          
          <Affirmations />
          
          <div className="flex justify-center mt-16">
            <ConfettiButton />
          </div>
          
          <footer className="text-center mt-16 pb-8 text-purple-700">
            <p className="text-lg">Made with <Heart className="inline h-5 w-5 text-pink-500 animate-pulse" /> just for you</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
