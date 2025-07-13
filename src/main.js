import refs from './js/refs';
import { addTask, deleteTask } from './js/render-tasks';
import { changeTheme } from './js/theme-switcher';
import { setStorage } from './js/local-storage-api';
refs.form.addEventListener('submit', addTask);

refs.taskList.addEventListener('click', deleteTask);

refs.btnTheme.addEventListener('click', changeTheme);

refs.form.addEventListener('input', setStorage);
