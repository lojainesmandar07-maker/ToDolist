import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import TaskCard from './TaskCard';
import { Sparkles, Sprout, CheckCircle2 } from 'lucide-react';

const Column = ({ title, status, icon: Icon, colorClass, headerColor }) => {
  const { tasks, moveTask } = useTasks();
  const [isOver, setIsOver] = useState(false);

  const columnTasks = tasks.filter(t => t.status === status);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = () => {
    setIsOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsOver(false);
    const taskId = e.dataTransfer.getData('taskId');
    if (taskId) {
      moveTask(taskId, status);
    }
  };

  // The decorative bolts/screws in the corners
  const bolt = (position) => (
    <div className={`absolute ${position} w-3 h-3 rounded-full bg-mw-gold border-2 border-mw-wood shadow-sm flex items-center justify-center z-10`}>
      <div className="w-1.5 h-0.5 bg-mw-wood/60 rotate-45"></div>
    </div>
  );

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`min-w-[320px] max-w-[350px] flex-1 bg-mw-col-bg rounded-xl border-4 border-mw-wood relative shadow-[8px_8px_0_rgba(0,0,0,0.3)] flex flex-col snap-center wood-texture overflow-hidden h-[calc(100vh-220px)] transition-all ${isOver ? 'shadow-[0_0_20px_#f0c87a] scale-[1.02]' : ''}`}
    >
      {bolt('top-2 left-2')}
      {bolt('top-2 right-2')}
      {bolt('bottom-2 left-2')}
      {bolt('bottom-2 right-2')}

      <div className="p-4 border-b-4 border-mw-wood bg-mw-bg/80 backdrop-blur-sm z-10 flex justify-between items-center sticky top-0">
        <h2 className={`font-bubblegum text-h2 flex items-center gap-2 drop-shadow-md ${headerColor}`}>
          {title} <Icon className="w-6 h-6" />
        </h2>
        <span className={`${colorClass} px-3 py-1 rounded-full font-bold text-xs border-2 border-mw-wood text-white shadow-sm`}>
          {columnTasks.length}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-2 overflow-y-auto z-10 custom-scrollbar h-full pt-6">
        {columnTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

const ForestBoards = () => {
  return (
    <div className="animate-in slide-in-from-bottom-8 duration-500 fade-in h-full flex flex-col">
      <header className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="font-bubblegum text-h1 text-[#f0c87a] mb-1 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] flex items-center gap-3">
            Forest Boards
            <span className="text-4xl">🌲</span>
          </h1>
          <p className="font-nunito text-lg text-[#d5c3b8] max-w-2xl">Organize your daily adventures through the enchanted woods.</p>
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-4 snap-x flex-1">
        <Column
          title="To Do"
          status="todo"
          icon={Sprout}
          headerColor="text-mw-sage"
          colorClass="bg-mw-sage"
        />
        <Column
          title="In Progress"
          status="in-progress"
          icon={Sparkles}
          headerColor="text-mw-rose"
          colorClass="bg-mw-rose"
        />
        <Column
          title="Done"
          status="done"
          icon={CheckCircle2}
          headerColor="text-mw-gold"
          colorClass="bg-[#c2963c]"
        />
      </div>
    </div>
  );
};

export default ForestBoards;