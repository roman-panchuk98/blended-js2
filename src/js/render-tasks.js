import refs from './refs';
import { createTask } from './tasks';
import { nanoid } from 'nanoid';
import {
  saveTasktoStorage,
  getTasks,
  deleteStorageTask,
} from './local-storage-api';

export function getStorageTask() {
  const arr = getTasks();
  const markup = arr.map(createTask).join('');
  refs.taskList.insertAdjacentHTML('beforeend', markup);
}

export function addTask(ev) {
  ev.preventDefault();
  const titleTask = ev.target.taskName.value.trim();
  const descriptionTask = ev.target.taskDescription.value.trim();
  if (titleTask === '' || descriptionTask === '') {
    alert('Please write task!');
    return refs.form.reset();
  }
  const newTask = {
    titleTask,
    descriptionTask,
    id: nanoid(),
  };
  saveTasktoStorage(newTask);
  const markup = createTask(newTask);
  refs.taskList.insertAdjacentHTML('beforeend', markup);
  refs.form.reset();
}

export function deleteTask(event) {
  if (event.target.classList.contains('task-list-item-btn')) {
    const taskItem = event.target.closest('.task-list-item');
    const idTask = taskItem.dataset.id;
    taskItem.remove();
    deleteStorageTask(idTask);
  }
}
