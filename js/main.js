let prev = document.getElementById("prev");
let next = document.getElementById("next");
let circle = document.querySelectorAll(".circles .circle");
let active = document.getElementById("active");
let currentActive = 1;

next.addEventListener("click", nextItem);
function nextItem() {
  currentActive++;
  if (currentActive > circle.length) {
    currentActive = circle.length;
  }
  update(currentActive);
}
prev.addEventListener("click", prevItem);
function prevItem() {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 0;
  }
  update();
}
function update() {
  circle.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  if (currentActive == 0) {
    prev.disabled = true;
  } else if (currentActive == circle.length) {
    next.disabled = true
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
