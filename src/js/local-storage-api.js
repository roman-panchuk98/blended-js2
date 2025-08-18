export const localKey = 'my-tasks';

export function getTasks() {
  const data = JSON.parse(localStorage.getItem(localKey));
  return data;
}

export function initStorage() {
  const data = getTasks() ?? [];
  localStorage.setItem(localKey, JSON.stringify(data));
}

export function saveTasktoStorage(task) {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem(localKey, JSON.stringify(tasks));
}

export function deleteStorageTask(id) {
  const array = getTasks();
  const filterArray = array.filter(el => el.id !== id);
  console.log(filterArray);

  localStorage.setItem(localKey, JSON.stringify(filterArray));
}
