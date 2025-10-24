// app.js
import { TodoList } from './todo.js';

const myTodos = new TodoList();
myTodos.addTask("Learn Node.js");
myTodos.addTask("Build a project");
myTodos.completeTask("Learn Node.js");
myTodos.listTasks();
