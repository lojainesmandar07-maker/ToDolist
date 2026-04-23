with open("src/components/AddTaskModal.jsx", "r") as f:
    content = f.read()

# Replace props and add isModalOpen/closeModal
content = content.replace("const AddTaskModal = ({ isOpen, onClose }) => {", "const AddTaskModal = () => {")
content = content.replace("const { addTask } = useTasks();", "const { addTask, isModalOpen, closeModal } = useTasks();")

# Replace isOpen with isModalOpen
content = content.replace("if (isOpen) window.addEventListener('keydown', handleEscape);", "if (isModalOpen) window.addEventListener('keydown', handleEscape);")
content = content.replace("  if (!isOpen) return null;", "  if (!isModalOpen) return null;")
content = content.replace("}, [isOpen, onClose]);", "}, [isModalOpen, closeModal]);")

# Replace onClose with closeModal
content = content.replace("if (e.key === 'Escape') onClose();", "if (e.key === 'Escape') closeModal();")
content = content.replace("onClose();", "closeModal();")
content = content.replace("onClick={onClose}", "onClick={closeModal}")

with open("src/components/AddTaskModal.jsx", "w") as f:
    f.write(content)
