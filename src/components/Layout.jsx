import React, { useState } from 'react';
import TopBar from './TopBar';
import SideNav from './SideNav';

const Layout = ({ children }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="bg-mw-bg text-[#e9e2d5] min-h-screen flex flex-col font-nunito overflow-x-hidden noise-bg relative">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <SideNav onOpenAddModal={() => setIsAddModalOpen(true)} />
        <main className="flex-1 p-4 md:p-8 overflow-y-auto relative h-[calc(100vh-72px)] custom-scrollbar">
          {/* Passing modal state down using React.cloneElement for simplicity without adding extra context just for modal */}
          {React.Children.map(children, child =>
            React.isValidElement(child)
              ? React.cloneElement(child, { isAddModalOpen, setIsAddModalOpen })
              : child
          )}
        </main>
      </div>

      <footer className="bg-mw-sidebar font-nunito italic text-xs border-t-2 border-[#3d1f08] w-full py-2 px-8 flex justify-between items-center z-50">
        <div className="text-[#f0c87a]">© 1224 Maplewood Kingdom</div>
        <div className="flex gap-4">
          <a className="text-[#d4846a] hover:text-[#fef3c7] transition-colors" href="#">Owl Post</a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;