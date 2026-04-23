with open("src/components/Layout.jsx", "r") as f:
    content = f.read()

# Remove isAddModalOpen state
content = content.replace("  const [isAddModalOpen, setIsAddModalOpen] = useState(false);\n\n", "")

# Remove React.cloneElement
old_children = """          {/* Passing modal state down using React.cloneElement for simplicity without adding extra context just for modal */}
          {React.Children.map(children, child =>
            React.isValidElement(child)
              ? React.cloneElement(child, { isAddModalOpen, setIsAddModalOpen })
              : child
          )}"""
new_children = "          {children}"
content = content.replace(old_children, new_children)

# Also remove passing onOpenAddModal to SideNav
content = content.replace('<SideNav onOpenAddModal={() => setIsAddModalOpen(true)} />', '<SideNav />')

# If React { useState } is imported, maybe we should remove useState, but let's just do a simple replacement
content = content.replace("import React, { useState } from 'react';", "import React from 'react';")

with open("src/components/Layout.jsx", "w") as f:
    f.write(content)
