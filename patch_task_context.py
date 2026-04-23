with open("src/context/TaskContext.jsx", "r") as f:
    content = f.read()

import re

# Add isModalOpen state
content = content.replace(
    "const [activeView, setActiveView] = useState('kanban'); // 'kanban' or 'logs'",
    "const [activeView, setActiveView] = useState('kanban'); // 'kanban' or 'logs'\n  const [isModalOpen, setIsModalOpen] = useState(false);\n  const openModal = () => setIsModalOpen(true);\n  const closeModal = () => setIsModalOpen(false);"
)

# Export them
content = content.replace(
    "      activeView,\n      setActiveView,\n      addTask,",
    "      activeView,\n      setActiveView,\n      isModalOpen,\n      openModal,\n      closeModal,\n      addTask,"
)

with open("src/context/TaskContext.jsx", "w") as f:
    f.write(content)
