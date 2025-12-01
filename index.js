let showPending = false;
let display = showPending ? "block" : "none";

let elements = document.getElementsByClassName("display-none-zone");

for (let i = 0; i < elements.length; i++) {
  elements[i].style.display = display;
//   console.log(elements[i]);
  
}
