import refs from './refs';
import { createTask } from './tasks';

export function addTask(ev) {
  ev.preventDefault();
  const titleTask = ev.target.taskName.value.trim();
  const descriptionTask = ev.target.taskDescription.value.trim();
  if (titleTask === '' || descriptionTask === '') {
    alert('Please write task!');
    return refs.form.reset();
  }
  createTask(titleTask, descriptionTask);
  refs.form.reset();
}

export function deleteTask(event) {
  if (event.target.classList.contains('task-list-item-btn')) {
    const taskItem = event.target.closest('.task-list-item');
    taskItem.remove();
  }
}
