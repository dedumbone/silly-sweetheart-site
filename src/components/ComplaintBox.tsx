
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { OctagonX } from "lucide-react";

const ComplaintBox = () => {
  const [complaint, setComplaint] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (complaint.trim()) {
      setShowDialog(true);
    }
  };

  return (
    <>
      <Card className="bg-blue-50 border-blue-300 shadow-lg">
        <CardHeader className="bg-blue-200 rounded-t-lg">
          <CardTitle className="text-2xl text-center text-blue-800">
            Complaint Box
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit}>
            <Textarea
              placeholder="Type your complaint here (as if we'd listen 😏)"
              className="mb-4 border-blue-300 bg-white"
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
            />
            <div className="flex justify-center">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Submit Complaint
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-pink-50 border-2 border-red-400">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center text-2xl text-red-600">
              <OctagonX className="h-6 w-6 mr-2" />
              Request Denied
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            <p className="text-xl mb-2">Too Cute to Complain About 🛑❤️</p>
            <p className="text-gray-600">Your complaints have been thrown into the void where they belong!</p>
          </div>
          <div className="flex justify-center">
            <Button onClick={() => setShowDialog(false)} className="bg-pink-500 hover:bg-pink-600">
              Fine, I'll Be Nice
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ComplaintBox;
