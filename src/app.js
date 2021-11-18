import 'css-doodle';

const doodles = document.querySelectorAll('.doodle');

doodles.forEach((doodle) => {
  const refreshRate = doodle.dataset.refreshRate || 2500;
  setInterval(() => doodle.update(), refreshRate);
});
