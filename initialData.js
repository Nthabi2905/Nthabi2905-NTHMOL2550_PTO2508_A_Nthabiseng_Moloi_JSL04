const tasks = [...initialTasks];

const todoColumn = document.getElementById("todo-column");
const doingColumn = document.getElementById("doing-column");
const doneColumn = document.getElementById("done-column");

const modal = document.getElementById("task-modal");
const titleInput = document.getElementById("task-title");
const descInput = document.getElementById("task-desc");
const statusSelect = document.getElementById("task-status");

let currentTaskId = null;

/**
 * Create a task card element
 * @param {Object} task
 * @returns {HTMLElement}
 */
function createTaskCard(task) {
  const card = document.createElement("div");

  card.className =
    "bg-card p-6 rounded-xl shadow cursor-pointer hover:shadow-lg transition-shadow";

  card.innerHTML = `
      <h3 class="font-bold text-lg">${task.title}</h3>
  `;

  card.addEventListener("click", () => openModal(task.id));

  return card;
}

/**
 * Render all tasks in the correct columns
 */
function renderTasks() {
  todoColumn.innerHTML = "";
  doingColumn.innerHTML = "";
  doneColumn.innerHTML = "";

  tasks.forEach((task) => {
    const card = createTaskCard(task);

    if (task.status === "todo") {
      todoColumn.appendChild(card);
    }

    if (task.status === "doing") {
      doingColumn.appendChild(card);
    }

    if (task.status === "done") {
      doneColumn.appendChild(card);
    }
  });
}

/**
 * Open modal with task details
 * @param {number} taskId
 */
function openModal(taskId) {
  const task = tasks.find((t) => t.id === taskId);

  currentTaskId = taskId;

  titleInput.value = task.title;
  descInput.value = task.description;
  statusSelect.value = task.status;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

/**
 * Close modal
 */
function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

/**
 * Save task updates
 */
function saveTask() {
  const task = tasks.find((t) => t.id === currentTaskId);

  task.title = titleInput.value;
  task.description = descInput.value;
  task.status = statusSelect.value;

  renderTasks();
  closeModal();
}

document.getElementById("close-modal").addEventListener("click", closeModal);
document.getElementById("save-task").addEventListener("click", saveTask);

renderTasks();
