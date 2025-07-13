import refs from './refs';

const localeStorageKey = 'list-task';
let obj = {
  taskName: '',
  taskDescription: '',
};

export function setStorage(ev) {
  obj[ev.target.name] = ev.target.value.trim();

  localStorage.setItem(localeStorageKey, JSON.stringify(obj));
}
