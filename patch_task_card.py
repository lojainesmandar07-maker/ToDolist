with open("src/components/TaskCard.jsx", "r") as f:
    content = f.read()

# Add priority badge below description
old_desc = """      {task.description && (
        <p className="text-sm opacity-80 mb-3 line-clamp-2">{task.description}</p>
      )}"""

# Need to make sure text colors and background match instructions:
# urgent: red background #fecaca, red text #7f1d1d
# normal: blue background #dbeafe, blue text #1e3a5f
# low: green background #dcfce7, green text #14532d
new_desc = """      {task.description && (
        <p className="text-sm opacity-80 mb-3 line-clamp-2">{task.description}</p>
      )}

      <div className="mb-3">
        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${
          task.priority === 'urgent' ? 'bg-[#fecaca] text-[#7f1d1d]' :
          task.priority === 'normal' ? 'bg-[#dbeafe] text-[#1e3a5f]' :
          'bg-[#dcfce7] text-[#14532d]'
        }`}>
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </span>
      </div>"""

content = content.replace(old_desc, new_desc)

with open("src/components/TaskCard.jsx", "w") as f:
    f.write(content)
