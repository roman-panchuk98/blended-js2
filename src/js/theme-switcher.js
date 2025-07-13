import refs from './refs';

export function changeTheme() {
  refs.body.classList.toggle('theme-dark');
  refs.body.classList.toggle('theme-light');
}
