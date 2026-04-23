with open("src/components/TopBar.jsx", "r") as f:
    content = f.read()

# Add useTasks
content = content.replace("import { Leaf, Sparkles, Search } from 'lucide-react';", "import { Leaf, Sparkles, Search } from 'lucide-react';\nimport { useTasks } from '../context/TaskContext';")

content = content.replace("const TopBar = () => {", "const TopBar = () => {\n  const { activeView, setActiveView } = useTasks();")

# Add navigation tab buttons next to logo
tabs = """
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-[#fef3c7] italic text-h2 drop-shadow-md mr-4">
          Maplewood Tasks
        </span>
        <button
          onClick={() => setActiveView('kanban')}
          className={`px-3 py-1.5 rounded-full font-nunito font-bold text-sm transition-colors ${activeView === 'kanban' ? 'bg-[#331c0a] text-[#f0c87a]' : 'text-[#f0c87a]/70 hover:bg-[#3d1f08]'}`}
        >
          Forest Boards
        </button>
        <button
          onClick={() => setActiveView('logs')}
          className={`px-3 py-1.5 rounded-full font-nunito font-bold text-sm transition-colors ${activeView === 'logs' ? 'bg-[#331c0a] text-[#f0c87a]' : 'text-[#f0c87a]/70 hover:bg-[#3d1f08]'}`}
        >
          Seasonal Logs
        </button>
      </div>"""

content = content.replace("""      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-[#fef3c7] italic text-h2 drop-shadow-md">
          Maplewood Tasks
        </span>
      </div>""", tabs)

with open("src/components/TopBar.jsx", "w") as f:
    f.write(content)
