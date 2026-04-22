import React from 'react';
import { useTasks } from '../context/TaskContext';
import { Book, LayoutGrid, Award, Settings, PlusCircle } from 'lucide-react';

const SideNav = ({ onOpenAddModal }) => {
  const { activeView, setActiveView } = useTasks();

  return (
    <nav className="hidden md:flex flex-col h-full p-4 gap-4 bg-mw-sidebar font-nunito uppercase font-bold text-sm w-64 rounded-r-3xl border-r-8 border-[#3d1f08] border-r-4 shadow-[10px_0_15px_-3px_rgba(0,0,0,0.4)] z-40 sticky top-[72px]">
      <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 rounded-full bg-[#f0e6d3] border-4 border-mw-wood shadow-md mb-2 flex items-center justify-center overflow-hidden">
          <span className="text-4xl">🦉</span>
        </div>
        <h2 className="text-xl font-black text-[#fef3c7] font-bubblegum capitalize drop-shadow-sm">Task Grove</h2>
        <p className="text-[#f0c87a]/70 font-caption normal-case">Level 12 Adventurer</p>
      </div>

      <button
        onClick={onOpenAddModal}
        className="w-full py-2 px-4 mb-4 rounded-xl bg-[#5c3210] hover:bg-[#6e3d14] text-[#f0c87a] font-label-bold shadow-[0_4px_0_#331c0a] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-2 border-2 border-[#331c0a] group"
      >
        <PlusCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
        New Task
      </button>

      <ul className="flex flex-col gap-2 flex-1">
        <li
          onClick={() => setActiveView('kanban')}
          className={`p-3 rounded-xl flex items-center gap-3 cursor-pointer transition-colors ${activeView === 'kanban' ? 'bg-[#5c3210]/50 text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]' : 'text-[#f0c87a]/70 hover:bg-[#3d1f08]'}`}
        >
          <Book className="w-5 h-5" />
          <span>Forest Boards</span>
        </li>
        <li
          onClick={() => setActiveView('logs')}
          className={`p-3 rounded-xl flex items-center gap-3 cursor-pointer transition-colors ${activeView === 'logs' ? 'bg-[#5c3210]/50 text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]' : 'text-[#f0c87a]/70 hover:bg-[#3d1f08]'}`}
        >
          <LayoutGrid className="w-5 h-5" />
          <span>Seasonal Logs</span>
        </li>
        <li className="p-3 rounded-xl flex items-center gap-3 cursor-pointer text-[#f0c87a]/70 hover:bg-[#3d1f08] transition-colors mt-auto">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;