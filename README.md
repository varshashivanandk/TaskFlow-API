# ✅ TaskFlow API

TaskFlow API is a simple task management backend project built using **Node.js**, **Express**, and tested using **Postman**. It supports full CRUD operations for tasks.

## 🚀 Features
- Create, Read, Update, Delete tasks
- Middleware: `cors`, `helmet`, `morgan`, `express.json`
- In-memory task storage (no database)
- Unique Task IDs
- Fully tested with Postman

## 📂 Folder Structure
```
TASKFLOW-API/
├── 📁 node_modules/           # Dependencies (auto-generated)
├── 📁 src/                   # Source code
│   ├── 📁 controllers/       # Route controllers
│   │   └── 📄 taskController.js
│   ├── 📁 middleware/        # Custom middleware
│   │   └── 📄 security.js
│   ├── 📁 routes/           # API routes
│   │   └── 📄 taskRoutes.js
│   └── 📁 utils/            # Utility functions
├── 📁 tests/                # Test files
├── 📄 .env                  # Environment variables
├── 📄 package-lock.json     # Dependency lock file
├── 📄 package.json          # Project configuration
├── 📄 README.md            # Project documentation
├── 📄 server.js            # Main server file
└── 📄 TaskFlow API.postman_collection.json  # Postman collection            
```

## 🧪 Postman
Import the collection in `/postman/TaskFlow-API.postman_collection.json` to test endpoints.

## ✅ API Endpoints

| Method | Endpoint             | Description           |
|--------|----------------------|-----------------------|
| GET    | `/api/tasks`         | Get all tasks         |
| GET    | `/api/tasks/:id`     | Get a specific task   |
| POST   | `/api/tasks`         | Create a new task     |
| PUT    | `/api/tasks/:id`     | Update a task         |
| DELETE | `/api/tasks/:id`     | Delete a task         |

---