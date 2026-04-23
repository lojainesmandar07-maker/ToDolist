import React from 'react';
import { TaskProvider, useTasks } from './context/TaskContext';
import Layout from './components/Layout';
import ForestBoards from './components/ForestBoards';
import SeasonalLogs from './components/SeasonalLogs';
import AddTaskModal from './components/AddTaskModal';

const AppContent = () => {
  const { activeView } = useTasks();

  return (
    <>
      {activeView === 'kanban' ? <ForestBoards /> : <SeasonalLogs />}
      <AddTaskModal />
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