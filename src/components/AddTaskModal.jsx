import React, { useState, useEffect } from 'react';
import { useTasks } from '../context/TaskContext';

const AddTaskModal = () => {
  const { addTask, isModalOpen, closeModal } = useTasks();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'normal',
    status: 'todo',
    season: 'spring'
  });

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isModalOpen) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    addTask(formData);
    setFormData({ title: '', description: '', priority: 'normal', status: 'todo', season: 'spring' });
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-mw-card-bg text-mw-text-main rounded-xl border-4 border-mw-wood shadow-[0_10px_25px_rgba(0,0,0,0.5)] w-full max-w-md relative animate-in fade-in zoom-in duration-200">

        <div className="p-6 border-b-2 border-mw-wood/20 bg-gradient-to-b from-[#f5ede0] to-mw-card-bg rounded-t-lg">
          <h2 className="font-bubblegum text-3xl text-[#5c3210]">Add Task</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block font-bold text-sm mb-1 text-[#5c3210]">Task Name</label>
            <input
              type="text"
              required
              autoFocus
              className="w-full bg-[#fdfaf5] border-2 border-[#8b5a2b]/30 rounded-md p-2 focus:border-mw-wood focus:ring-0 text-mw-text-main font-nunito"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div>
            <label className="block font-bold text-sm mb-1 text-[#5c3210]">Description</label>
            <textarea
              rows="3"
              className="w-full bg-[#fdfaf5] border-2 border-[#8b5a2b]/30 rounded-md p-2 focus:border-mw-wood focus:ring-0 text-mw-text-main font-nunito resize-none"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-sm mb-1 text-[#5c3210]">Priority</label>
              <select
                className="w-full bg-[#fdfaf5] border-2 border-[#8b5a2b]/30 rounded-md p-2 focus:border-mw-wood focus:ring-0 text-mw-text-main font-nunito"
                value={formData.priority}
                onChange={(e) => setFormData({...formData, priority: e.target.value})}
              >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-sm mb-1 text-[#5c3210]">Column</label>
              <select
                className="w-full bg-[#fdfaf5] border-2 border-[#8b5a2b]/30 rounded-md p-2 focus:border-mw-wood focus:ring-0 text-mw-text-main font-nunito"
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
              >
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>

            <div className="col-span-2">
              <label className="block font-bold text-sm mb-1 text-[#5c3210]">Season</label>
              <select
                className="w-full bg-[#fdfaf5] border-2 border-[#8b5a2b]/30 rounded-md p-2 focus:border-mw-wood focus:ring-0 text-mw-text-main font-nunito"
                value={formData.season}
                onChange={(e) => setFormData({...formData, season: e.target.value})}
              >
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="autumn">Autumn</option>
                <option value="winter">Winter</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3 justify-end pt-4 mt-4 border-t-2 border-mw-wood/20">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 rounded-full font-bold text-[#8b5a2b] hover:bg-[#8b5a2b]/10 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-mw-wood text-mw-gold font-bold hover:bg-[#4a2810] hover:shadow-[0_0_10px_#f0c87a] transition-all"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;