import React, { createContext, useContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('maplewood_tasks');
    return saved ? JSON.parse(saved) : [
      {
        id: '1',
        title: 'Gather Firewood',
        description: 'Collect 10 dry branches from the Whispering Pines area.',
        priority: 'urgent',
        status: 'todo',
        season: 'autumn',
        createdAt: new Date().toISOString()
      },
      {
        id: '2',
        title: 'Brew Healing Potion',
        description: 'Mix the gathered herbs with spring water.',
        priority: 'normal',
        status: 'todo',
        season: 'spring',
        createdAt: new Date().toISOString()
      },
      {
        id: '3',
        title: 'Map the Northern Caverns',
        description: 'Explore the first two levels and note crystal deposits.',
        priority: 'low',
        status: 'in-progress',
        season: 'winter',
        createdAt: new Date().toISOString()
      },
      {
        id: '4',
        title: 'Repair the Bridge',
        description: 'Fixed the broken planks over the Stream of Whispers.',
        priority: 'normal',
        status: 'done',
        season: 'summer',
        createdAt: new Date().toISOString()
      }
    ];
  });

  const [activeView, setActiveView] = useState('kanban'); // 'kanban' or 'logs'
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    localStorage.setItem('maplewood_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskData) => {
    const newTask = {
      ...taskData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, updates) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, ...updates } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const moveTask = (id, newStatus) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  return (
    <TaskContext.Provider value={{
      tasks,
      activeView,
      setActiveView,
      isModalOpen,
      openModal,
      closeModal,
      addTask,
      updateTask,
      deleteTask,
      moveTask
    }}>
      {children}
    </TaskContext.Provider>
  );
};
