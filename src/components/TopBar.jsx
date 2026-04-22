import React from 'react';
import { Leaf, Sparkles, Search } from 'lucide-react';

const TopBar = () => {
  return (
    <header className="bg-[#4a2810]/90 font-bubblegum tracking-wide border-b-4 border-[#331c0a] shadow-xl flex justify-between items-center w-full px-6 py-3 z-50 sticky top-0">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-[#fef3c7] italic text-h2 drop-shadow-md">
          Maplewood Tasks
        </span>
      </div>
      <div className="flex items-center gap-4 text-[#f0c87a]">
        <Leaf className="w-6 h-6 hover:scale-105 hover:text-white transition-transform cursor-pointer" />
        <Sparkles className="w-6 h-6 hover:scale-105 hover:text-white transition-transform cursor-pointer" />
        <Search className="w-6 h-6 hover:scale-105 hover:text-white transition-transform cursor-pointer" />
      </div>
    </header>
  );
};

export default TopBar;