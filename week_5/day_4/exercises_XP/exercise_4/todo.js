// todo.js
export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ task, completed: false });
  }

  completeTask(task) {
    const t = this.tasks.find(t => t.task === task);
    if (t) t.completed = true;
  }

  listTasks() {
    console.log("Todo List:");
    this.tasks.forEach(t => {
      console.log(`${t.task} - ${t.completed ? "✅ Done" : "❌ Pending"}`);
    });
  }
}
