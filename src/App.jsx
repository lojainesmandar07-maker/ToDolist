import React from 'react';
import { TaskProvider, useTasks } from './context/TaskContext';
import Layout from './components/Layout';
import ForestBoards from './components/ForestBoards';
import SeasonalLogs from './components/SeasonalLogs';
import AddTaskModal from './components/AddTaskModal';

const AppContent = ({ isAddModalOpen, setIsAddModalOpen }) => {
  const { activeView } = useTasks();

  return (
    <>
      {activeView === 'kanban' ? <ForestBoards /> : <SeasonalLogs />}
      <AddTaskModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </>
  );
};

function App() {
  return (
    <TaskProvider>
      <Layout>
        <AppContent />
      </Layout>
    </TaskProvider>
  );
}

export default App;