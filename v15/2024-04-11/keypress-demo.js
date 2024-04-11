// Så här namnges konstanter i JavaScript.
const CAR_STEP_SIZE = 10

let span = document.getElementById("result")
let car = document.getElementById("car")

window.onkeydown = function (event) {
  span.innerText = event.key

  if (event.key === "ArrowDown") {
    // Flytta bilen nedåt i sidan. I positiv riktning i Y-led i sidans koordinatsystem.
    moveY(car, CAR_STEP_SIZE)
  }
}

function moveY(element, distance) {
  // top är t.ex. 100px
  let top = getComputedStyle(element).top

  // ta bort "px" från slutet av top, genom att ersätta det med en tom sträng
  top = top.replace("px", "")

  // top är en sträng, för att kunna lägga till distance måste vi konvertera den till ett tal.
  // för att få ett heltal så avrundar vi top.
  let newTop = Math.round(Number(top)) + distance

  //när man ska sätta nytt värde på top ska det vara en sträng med enhet.
  element.style.top = newTop + "px"
}
