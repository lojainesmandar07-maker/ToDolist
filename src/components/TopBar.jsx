import React from 'react';
import { Leaf, Sparkles, Search } from 'lucide-react';
import { useTasks } from '../context/TaskContext';

const TopBar = () => {
  const { activeView, setActiveView } = useTasks();
  return (
    <header className="bg-[#4a2810]/90 font-bubblegum tracking-wide border-b-4 border-[#331c0a] shadow-xl flex justify-between items-center w-full px-6 py-3 z-50 sticky top-0">

      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-[#fef3c7] italic drop-shadow-md mr-4">
          Maplewood Tasks
        </span>
        <button
          onClick={() => setActiveView('kanban')}
          className={`px-3 py-1.5 rounded-full font-nunito font-bold text-sm transition-colors ${activeView === 'kanban' ? 'bg-[#331c0a] text-[#f0c87a]' : 'text-[#f0c87a]/70 hover:bg-[#3d1f08]'}`}
        >
          Forest Boards
        </button>
        <button
          onClick={() => setActiveView('logs')}
          className={`px-3 py-1.5 rounded-full font-nunito font-bold text-sm transition-colors ${activeView === 'logs' ? 'bg-[#331c0a] text-[#f0c87a]' : 'text-[#f0c87a]/70 hover:bg-[#3d1f08]'}`}
        >
          Seasonal Logs
        </button>
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