export function createTask(params) {
  const markup = `<li class="task-list-item" data-id="${params.id}">
  <button class="task-list-item-btn">Delete</button>
  <h3>${params.titleTask}</h3>
  <p>${params.descriptionTask}</p>
</li>`;
  return markup;
}
