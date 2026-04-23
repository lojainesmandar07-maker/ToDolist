with open("src/components/Layout.jsx", "r") as f:
    content = f.read()

# Add floating "Add Task" button visible on small screens
content = content.replace("import TopBar from './TopBar';", "import TopBar from './TopBar';\nimport { useTasks } from '../context/TaskContext';")
content = content.replace("const Layout = ({ children }) => {", "const Layout = ({ children }) => {\n  const { openModal } = useTasks();")

button = """
      <footer className="bg-mw-sidebar font-nunito italic text-xs border-t-2 border-[#3d1f08] w-full py-2 px-8 flex justify-between items-center z-50">
        <div className="text-[#f0c87a]">© 2025 Maplewood Tasks</div>
      </footer>

      <button
        onClick={openModal}
        className="md:hidden fixed bottom-10 left-1/2 -translate-x-1/2 bg-mw-wood text-mw-gold font-bubblegum text-lg px-6 py-3 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.5)] border-2 border-[#f0c87a] z-50"
      >
        Add Task
      </button>"""

content = content.replace("""      <footer className="bg-mw-sidebar font-nunito italic text-xs border-t-2 border-[#3d1f08] w-full py-2 px-8 flex justify-between items-center z-50">
        <div className="text-[#f0c87a]">© 1224 Maplewood Kingdom</div>
        <div className="flex gap-4">
          <a className="text-[#d4846a] hover:text-[#fef3c7] transition-colors" href="#">Owl Post</a>
        </div>
      </footer>""", button)

with open("src/components/Layout.jsx", "w") as f:
    f.write(content)
