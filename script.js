let incr = document.getElementById("increase");
let decr = document.getElementById("decrease");
let reset = document.getElementById("reset");
let cnt = document.getElementById("value");

let val = 0;

incr.addEventListener("click", () => {
  val++;
  cnt.innerHTML = val;
});

reset.addEventListener("click", () => {
  val = 0;
  cnt.innerHTML = 0;
});

decr.addEventListener("click", () => {
  val--;
  cnt.innerHTML = val;
});
