import 'css-doodle';

const doodle = document.querySelector('.doodle');

const doodleRefreshInterval = setInterval(
  () => doodle.update(),
  2000
);
