import React from 'react';
import { useTasks } from '../context/TaskContext';
import { Leaf, Sun, Wind, Snowflake } from 'lucide-react';

// eslint-disable-next-line no-unused-vars
const Quadrant = ({ title, season, icon: Icon, colorClass }) => {
  const { tasks } = useTasks();
  const seasonTasks = tasks.filter(t => t.season === season);

  // The decorative bolts/screws in the corners
  const bolt = (position) => (
    <div className={`absolute ${position} w-3 h-3 rounded-full bg-mw-gold border-2 border-mw-wood shadow-sm flex items-center justify-center z-10`}>
      <div className="w-1.5 h-0.5 bg-mw-wood/60 rotate-45"></div>
    </div>
  );

  return (
    <div className="bg-mw-col-bg relative rounded-xl border-4 border-mw-wood shadow-[inset_0_8px_16px_rgba(0,0,0,0.6),0_8px_16px_rgba(0,0,0,0.4)] p-6 wood-texture flex flex-col gap-4 overflow-hidden min-h-[300px]">
      {bolt('top-2 left-2')}
      {bolt('top-2 right-2')}
      {bolt('bottom-2 left-2')}
      {bolt('bottom-2 right-2')}

      <div className="flex items-center gap-2 mb-2 border-b-2 border-mw-wood/30 pb-3 relative z-10">
        <Icon className={`w-8 h-8 ${colorClass} drop-shadow-md`} />
        <h3 className={`font-bubblegum text-3xl ${colorClass} drop-shadow-md`}>{title}</h3>
      </div>

      <div className="flex flex-col gap-3 relative z-10 overflow-y-auto custom-scrollbar pr-2">
        {seasonTasks.length === 0 ? (
          <p className="text-[#a0846b] italic font-nunito opacity-70">No tasks for this season yet...</p>
        ) : (
          seasonTasks.map(task => (
            <div key={task.id} className="flex items-start gap-3 bg-[#fdfaf5] p-3 rounded-md shadow-sm border border-[#8b5a2b]/20">
              <div className={`mt-1 min-w-[16px] h-4 rounded-sm border-2 ${task.status === 'done' ? 'bg-mw-sage border-mw-sage' : 'border-[#8b5a2b]'} flex items-center justify-center`}>
                {task.status === 'done' && <div className="w-2 h-2 bg-white rounded-sm"></div>}
              </div>
              <div>
                <h4 className={`font-bold text-[#3d1f08] ${task.status === 'done' ? 'line-through opacity-60' : ''}`}>{task.title}</h4>
                {task.description && <p className="text-sm text-[#3d1f08]/70 line-clamp-1">{task.description}</p>}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const SeasonalLogs = () => {
  return (
    <div className="animate-in slide-in-from-bottom-8 duration-500 fade-in h-full flex flex-col">
      <header className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="font-bubblegum text-h1 text-[#f0c87a] mb-1 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Seasonal Logs
          </h1>
          <p className="font-nunito text-lg text-[#d5c3b8] max-w-2xl">Sort your tasks by season.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 pb-8 overflow-y-auto custom-scrollbar flex-1 pr-4">
        <Quadrant title="Spring" season="spring" icon={Leaf} colorClass="text-mw-sage" />
        <Quadrant title="Summer" season="summer" icon={Sun} colorClass="text-mw-gold" />
        <Quadrant title="Autumn" season="autumn" icon={Wind} colorClass="text-mw-rose" />
        <Quadrant title="Winter" season="winter" icon={Snowflake} colorClass="text-blue-300" />
      </div>
    </div>
  );
};

export default SeasonalLogs;