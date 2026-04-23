import React from 'react';
import TopBar from './TopBar';
import { useTasks } from '../context/TaskContext';
import SideNav from './SideNav';

const Layout = ({ children }) => {
  const { openModal } = useTasks();
  return (
    <div className="bg-mw-bg text-[#e9e2d5] min-h-screen flex flex-col font-nunito overflow-x-hidden noise-bg relative">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <SideNav />
        <main className="flex-1 p-4 md:p-8 overflow-y-auto relative h-[calc(100vh-72px)] custom-scrollbar">
          {children}
        </main>
      </div>


      <footer className="bg-mw-sidebar font-nunito italic text-xs border-t-2 border-[#3d1f08] w-full py-2 px-8 flex justify-between items-center z-50">
        <div className="text-[#f0c87a]">© 2025 Maplewood Tasks</div>
      </footer>

      <button
        onClick={openModal}
        className="md:hidden fixed bottom-10 left-1/2 -translate-x-1/2 bg-mw-wood text-mw-gold font-bubblegum text-lg px-6 py-3 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.5)] border-2 border-[#f0c87a] z-50"
      >
        Add Task
      </button>
    </div>
  );
};

export default Layout;