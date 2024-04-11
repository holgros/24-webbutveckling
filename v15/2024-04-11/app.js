let btn = document.getElementById("btn")
btn.onclick = function (event) {
  console.log("Klickade på knappen.")
}
btn.focus = function (event) {
  console.log("Focus på knappen.")
}

let text = document.getElementById("txtInput")

text.onclick = function (event) {
  console.log("Klickade i textfältet.")
}

text.onfocus = function (event) {
  console.log("Focus i textfältet.")
}

text.onkeydown = function (event) {
  console.log(`Du tryckte på ${event.key}`)

  // Om man vill kan man lyssna efter specifika tangenttryck och agera på dem.
  // Här är kod som förhindrar att sidan laddas om (formuläret skickas) om man trycker på Enter-tangenten.
  if (event.key === "Enter") {
    event.preventDefault()
  }
}

document.body.onclick = function (event) {
  console.log("Klickade i body.")
}

/*
  Argumentet event är event-objekt med en massa information om eventet.
  Den informationen kan man använda i sin funktion.
*/
document.onmousemove = function (event) {
  //console.log(`Musen flyttas över ${event.currentTarget}`)
  //console.log(`Musen flyttas på koordinat (${event.pageX}, ${event.pageY})`)
}

let div = document.getElementById("mouseOverDemo")
div.onmousemove = function (event) {
  //console.log(`Musen flyttas över ${event.currentTarget}`)
  console.log(`Musen flyttas på sid-koordinat (${event.pageX}, ${event.pageY})`)
  console.log(
    `Musen flyttas på koordinat (${event.offsetX}, ${event.offsetY}) i div:en`
  )

  console.log(
    `Musen flyttas med hastighet (${event.movementX}, ${event.movementY})`
  )

  // Om du tar bort kommenteringen på raden nedan kommer mousemove-eventet INTE
  // gå vidare till eventehanteraren för mousemove för dokumentet.
  //event.stopImmediatePropagation()
}

let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext("2d")

canvas.onmousemove = function (event) {
  /*
  ctx.beginPath()
  let coordX = event.offsetX
  let coordY = event.offsetY
  console.log(coordX, coordY, event.movementX)
  ctx.lineWidth = 5

  // Sets the end of the lines drawn
  // to a round shape.
  ctx.lineCap = "round"

  ctx.strokeStyle = "green"

  // The cursor to start drawing
  // moves to this coordinate
  ctx.moveTo(coordX, coordY)

  // A line is traced from start
  // coordinate to this coordinate
  ctx.lineTo(coordX, coordY)

  // Draws the line.
  ctx.stroke()
  */
}
