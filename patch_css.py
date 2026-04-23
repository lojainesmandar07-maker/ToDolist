with open("src/index.css", "r") as f:
    content = f.read()

# Replace wood-texture
import re
old_wood_texture = r"\.wood-texture\s*\{[^}]+\}"
new_wood_texture = """.wood-texture {
    background-image: repeating-linear-gradient(
      90deg,
      rgba(0,0,0,0) 0px,
      rgba(0,0,0,0.03) 1px,
      rgba(0,0,0,0) 2px,
      rgba(0,0,0,0) 8px
    );
  }
  .sidebar-nav-item { text-transform: none; }"""

content = re.sub(old_wood_texture, new_wood_texture, content, flags=re.MULTILINE)

with open("src/index.css", "w") as f:
    f.write(content)
