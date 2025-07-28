let tasks = [];
let currentId = 1;

const findTaskIndex = id => tasks.findIndex(task => task.id === id);

export const getTasks = (req, res) => {
  res.status(200).json(tasks);
};

export const createTask = (req, res) => {
  const { title, description, dueDate, priority, tags } = req.body;

  if (!title || !priority) {
    return res.status(400).json({ error: 'Title and priority are required' });
  }

  const newTask = {
     id: currentId++, 
     title: title.trim(),
    description: description?.trim() || '',
    dueDate: dueDate || '',
    priority: priority || '',
    tags: tags?.trim() || '',
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = findTaskIndex(id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const { title, description, dueDate, priority, tags, completed } = req.body;

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title: title || tasks[taskIndex].title,
    description: description || tasks[taskIndex].description,
    dueDate: dueDate || tasks[taskIndex].dueDate,
    priority: priority || tasks[taskIndex].priority,
    tags: tags || tasks[taskIndex].tags,
    completed: completed !== undefined ? completed : tasks[taskIndex].completed
  };

  res.status(200).json(tasks[taskIndex]);
};

export const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = tasks.length;

  tasks = tasks.filter(task => task.id !== id);

  if (tasks.length === initialLength) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.status(204).end();
};
export const getTaskById = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(task => task.id === id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.status(200).json(task);
};
