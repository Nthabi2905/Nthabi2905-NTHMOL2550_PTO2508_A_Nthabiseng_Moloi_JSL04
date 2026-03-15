# Kanban Task Board

A responsive Kanban-style task management board built with **HTML, Tailwind CSS, and JavaScript**.
This project allows users to view tasks, edit them, and move them between different workflow stages.

## Features

- Responsive design (mobile and desktop)
- Three task columns:
  - **Todo**
  - **Doing**
  - **Done**

- Click a task to open a modal with task details
- Edit task title, description, and status
- Tasks automatically move to the correct column when the status changes
- Task counts update dynamically for each column

## Technologies Used

- **HTML5**
- **Tailwind CSS**
- **JavaScript (Vanilla JS)**

## How It Works

Tasks are stored in a JavaScript array.
When the page loads:

1. Tasks are rendered into their corresponding columns.
2. Clicking a task opens a modal where the task can be edited.
3. When changes are saved, the board re-renders and the task counts update.

## Project Structure

```
kanban-board/
│
├── index.html
├── scripts.js
├── README.md
└── assets/
    └── favicon.svg
```

## How to Run the Project

1. Download or clone the repository
2. Open the project folder in **VS Code**
3. Open `index.html` in your browser

No build tools or installations are required.

## Future Improvements

- Drag and drop tasks between columns
- Add new tasks from the UI
- Save tasks using LocalStorage
- Add multiple boards

## Author

Built as a learning project to practice **JavaScript DOM manipulation and responsive layouts**.
