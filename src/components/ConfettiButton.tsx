
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Heart, PartyPopper } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Let's use a fake confetti effect since we don't have a dedicated confetti library
const ConfettiButton = () => {
  const [showDialog, setShowDialog] = useState(false);
  
  const handleClick = () => {
    setShowDialog(true);
    toast({
      title: "You're loved! 💖",
      description: "Even when you're being a drama queen!",
    });
  };

  return (
    <>
      <Button 
        onClick={handleClick}
        className="text-lg py-6 px-8 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
      >
        <Heart className="mr-2 h-5 w-5 animate-beat" />
        Smile Now 😤❤️
      </Button>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-pink-50 border-2 border-pink-400">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center text-pink-600">
              You're Loved!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <div className="text-4xl mb-4">🎉💖✨</div>
            <p className="text-xl mb-4">You adorable gremlin!</p>
            <p className="text-gray-600">No matter how much drama you bring, you're worth every moment.</p>
          </div>
          <div className="flex justify-center">
            <Button onClick={() => setShowDialog(false)} className="bg-pink-500 hover:bg-pink-600">
              <PartyPopper className="mr-2 h-5 w-5" /> I'll Try To Smile
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ConfettiButton;
