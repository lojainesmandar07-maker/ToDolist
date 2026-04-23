with open("src/components/SideNav.jsx", "r") as f:
    content = f.read()

# Replace props and add openModal
content = content.replace("const SideNav = ({ onOpenAddModal }) => {", "const SideNav = () => {")
content = content.replace("const { activeView, setActiveView } = useTasks();", "const { activeView, setActiveView, openModal } = useTasks();")

# Replace onOpenAddModal with openModal in button click
content = content.replace("onClick={onOpenAddModal}", "onClick={openModal}")

with open("src/components/SideNav.jsx", "w") as f:
    f.write(content)
