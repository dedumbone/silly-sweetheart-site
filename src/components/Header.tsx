
import React from "react";
import { Crown, Drama, Tv } from "lucide-react";

const Header = () => {
  return (
    <header className="text-center py-6">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Crown className="h-8 w-8 text-yellow-500 animate-bounce" />
        <Tv className="h-8 w-8 text-pink-500 animate-pulse" />
        <Drama className="h-8 w-8 text-purple-600 animate-bounce" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
        Welcome to Aring's Drama Kingdom
      </h1>
      <p className="mt-3 text-xl text-purple-700 animate-bounce">Where emotions are always on the menu 🍜</p>
    </header>
  );
};

export default Header;
