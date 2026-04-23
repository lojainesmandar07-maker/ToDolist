with open("src/App.jsx", "r") as f:
    content = f.read()

# Remove props from AppContent
content = content.replace("const AppContent = ({ isAddModalOpen, setIsAddModalOpen }) => {", "const AppContent = () => {")

# Remove props from AddTaskModal usage
content = content.replace("<AddTaskModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />", "<AddTaskModal />")

with open("src/App.jsx", "w") as f:
    f.write(content)
