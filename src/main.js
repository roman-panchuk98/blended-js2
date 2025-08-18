import refs from './js/refs';
import { addTask, deleteTask, getStorageTask } from './js/render-tasks';
import { changeTheme } from './js/theme-switcher';
import { initStorage } from './js/local-storage-api';
initStorage();
getStorageTask();
refs.form.addEventListener('submit', addTask);

refs.taskList.addEventListener('click', deleteTask);

refs.btnTheme.addEventListener('click', changeTheme);
