with open("src/context/TaskContext.jsx", "r") as f:
    content = f.read()

import re

# Replace default tasks
old_tasks = """[
      {
        id: '1',
        title: 'Gather Firewood',
        description: 'Collect 10 dry branches from the Whispering Pines area.',
        priority: 'urgent',
        status: 'todo',
        season: 'autumn',
        createdAt: new Date().toISOString()
      },
      {
        id: '2',
        title: 'Brew Healing Potion',
        description: 'Mix the gathered herbs with spring water.',
        priority: 'normal',
        status: 'todo',
        season: 'spring',
        createdAt: new Date().toISOString()
      },
      {
        id: '3',
        title: 'Map the Northern Caverns',
        description: 'Explore the first two levels and note crystal deposits.',
        priority: 'low',
        status: 'in-progress',
        season: 'winter',
        createdAt: new Date().toISOString()
      },
      {
        id: '4',
        title: 'Repair the Bridge',
        description: 'Fixed the broken planks over the Stream of Whispers.',
        priority: 'normal',
        status: 'done',
        season: 'summer',
        createdAt: new Date().toISOString()
      }
    ]"""

new_tasks = """[
      {
        id: '1',
        title: 'Buy groceries',
        description: 'Get milk, eggs, and bread from the store',
        priority: 'normal',
        status: 'todo',
        season: 'spring',
        createdAt: new Date().toISOString()
      },
      {
        id: '2',
        title: 'Reply to emails',
        description: 'Clear the inbox before end of day',
        priority: 'urgent',
        status: 'todo',
        season: 'summer',
        createdAt: new Date().toISOString()
      },
      {
        id: '3',
        title: 'Read a chapter',
        description: '15 minutes of reading before bed',
        priority: 'low',
        status: 'in-progress',
        season: 'autumn',
        createdAt: new Date().toISOString()
      },
      {
        id: '4',
        title: 'Clean the desk',
        description: 'Done! Finally organized everything.',
        priority: 'normal',
        status: 'done',
        season: 'winter',
        createdAt: new Date().toISOString()
      }
    ]"""

content = content.replace(old_tasks, new_tasks)

with open("src/context/TaskContext.jsx", "w") as f:
    f.write(content)
