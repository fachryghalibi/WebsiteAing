// Get references to the elements
const stars = document.getElementById('stars');
const mountains_behind = document.getElementById('mountains_behind');
const text = document.getElementById('text');
const logoku = document.getElementById('logoku');
const mountains_front = document.getElementById('mountains_front');
const header = document.querySelector('header');

// Add scroll event listener
window.addEventListener('scroll', function() {
  // Get the current scroll position
  let value = window.scrollY;
  
  // Update element styles based on scroll position
  stars.style.left = value * 0.25 + 'px';
  mountains_behind.style.top = value * 0.5 + 'px';
  mountains_front.style.top = value * 0 + 'px';
  text.style.marginRight = value * 4 + 'px';
  text.style.marginTop = value * 1.5 + 'px';
  logoku.style.marginTop = value * 1.5 + 'px';
  header.style.top = value * 0.5 + 'px';
});