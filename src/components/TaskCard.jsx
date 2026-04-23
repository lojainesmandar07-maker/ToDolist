import React from 'react';
import { useTasks } from '../context/TaskContext';
import { X, Clock } from 'lucide-react';

const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();

  const handleDragStart = (e) => {
    e.dataTransfer.setData('taskId', task.id);
  };

  const priorityColors = {
    urgent: 'bg-red-600',
    normal: 'bg-blue-600',
    low: 'bg-green-600'
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="bg-mw-card-bg text-mw-text-main p-4 rounded-lg border-2 border-[#8b5a2b]/30 shadow-[2px_4px_8px_rgba(0,0,0,0.4),inset_0_0_10px_rgba(139,69,19,0.1)] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(240,200,122,0.4)] transition-all cursor-grab active:cursor-grabbing relative group z-20 mb-4"
    >
      {/* Pushpin */}
      <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#fef3c7] shadow-sm z-30 ${priorityColors[task.priority]}`}></div>

      <div className="flex justify-between items-start mb-2 mt-1">
        <h3 className="font-bold text-lg leading-tight">{task.title}</h3>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-[#8b5a2b] hover:text-red-700 hover:bg-red-100/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          title="Delete Task"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {task.description && (
        <p className="text-sm opacity-80 mb-3 line-clamp-2">{task.description}</p>
      )}

      <div className="mb-3">
        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${
          task.priority === 'urgent' ? 'bg-[#fecaca] text-[#7f1d1d]' :
          task.priority === 'normal' ? 'bg-[#dbeafe] text-[#1e3a5f]' :
          'bg-[#dcfce7] text-[#14532d]'
        }`}>
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </span>
      </div>

      <div className="flex justify-between items-center pt-2 border-t border-[#8b5a2b]/20 text-xs font-semibold opacity-70">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {task.season.charAt(0).toUpperCase() + task.season.slice(1)}
        </span>
        <span className="capitalize px-2 py-0.5 rounded-full bg-black/5">{task.priority}</span>
      </div>
    </div>
  );
};

export default TaskCard;