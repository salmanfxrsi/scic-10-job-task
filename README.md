The application is built with a clean, minimalistic UI and is fully responsive for both desktop and mobile users.

## Live Demo
[Live Application Link](https://job-task-50dd1.web.app/)

## Features
### 1. Authentication
- Only authenticated users can access the app.
- Firebase Authentication (Google sign-in) is implemented.
- User details (User ID, email, and display name) are stored in the database upon first login.

### 2. Task Management
- Users can **add, edit, delete, and reorder** tasks.
- Tasks are categorized into **To-Do, In Progress, and Done**.
- Users can **drag and drop** tasks between categories.
- Tasks retain their last known order after refresh.
- Each task includes:
  - **Title** (Required, max 50 characters)
  - **Description** (Optional, max 200 characters)
  - **Timestamp** (Auto-generated upon creation)
  - **Category** (To-Do, In Progress, Done)

### 3. Database & Real-time Updates
- MongoDB (via Express.js server) is used for data storage.
- Ensures real-time updates using:
  - MongoDB Change Streams
  - WebSockets
  - Optimistic UI Updates
  - Polling (fallback)
- Deleted tasks are **permanently removed** from the database.

### 4. Frontend UI
- Built with **Vite.js + React**.
- Uses a **drag-and-drop library** (e.g., `react-beautiful-dnd`).
- Modern, clean, and responsive design.
- A maximum of four colors are used for simplicity.

### 5. Responsiveness
- Fully responsive for desktop and mobile users.
- Mobile-friendly **drag-and-drop experience**.

### 6. Backend
- **Express.js API** handles CRUD operations.
- **MongoDB** for data storage.
- API Endpoints:
  - `POST /tasks` – Add a new task
  - `GET /tasks` – Retrieve all tasks for the logged-in user
  - `PUT /tasks/:id` – Update task details
  - `DELETE /tasks/:id` – Delete a task

### 7. Bonus Features
- **Dark mode toggle**.
- **Task due dates** with color indicators for overdue tasks.
- **Activity log** to track task changes (e.g., "Task moved to Done").

---
## Technologies Used
### Frontend:
- Vite.js + React
- Firebase Authentication
- Tailwind CSS (for styling)
- React Beautiful DnD (or any other drag-and-drop library)

### Backend:
- Node.js + Express.js
- MongoDB (with Mongoose for database operations)
- WebSockets / MongoDB Change Streams (for real-time updates)

---
## Installation Steps
### Prerequisites:
- Node.js & npm installed
- MongoDB database setup
- Firebase project configured

### 1. Clone the Repository:
```sh
git clone https://github.com/your-repo/task-management-app.git
cd task-management-app