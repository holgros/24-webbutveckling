let btn = document.getElementById("myButton");
btn.onclick = function (event) {
  console.log("Klickade på knappen.");
  console.log(event);
};

window.addEventListener("keypress", (event) => {
  console.log("Tangent nedtryckt", event.key);
});

// Hämta referens till alla element med en klass.
// getElementsByClassName() returnerar en collection att loopa över.
let buttons = document.getElementsByClassName("buy");
// Loopa igenom alla knappar.
for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  // Lägg till eventlyssnare på knappen.
  button.addEventListener("click", function (event) {
    console.log("En köpknapp klickades.");
  });
}

let position = document.getElementById("position");
window.addEventListener("mousemove", (event) => {
  console.log(
    `Musen är nu på koordinaterna (${event.clientX},${event.clientY})`
  );
  // Skriv ut till DOM.
  position.innerHTML = `Musen är nu på koordinaterna (${event.clientX},${event.clientY})`;
});
