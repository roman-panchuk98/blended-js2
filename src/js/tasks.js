import refs from './refs';

export function createTask(title, description) {
  const markup = `<li class="task-list-item">
  <button class="task-list-item-btn">Delete</button>
  <h3>${title}</h3>
  <p>${description}</p>
</li>`;
  refs.taskList.insertAdjacentHTML('beforeend', markup);
}
