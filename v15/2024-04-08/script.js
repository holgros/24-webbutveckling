// identifiera element från DOM
let input1 = document.getElementById("nbr1");
let input2 = document.getElementById("nbr2");
let additionButton = document.getElementById("additionButton");
let subtractionButton = document.getElementById("subtractionButton");

// händelsehanterare: addition
additionButton.onclick = function (event) {
  let nbr1 = Number(input1.value);
  let nbr2 = Number(input2.value);
  let sum = nbr1 + nbr2;
  alert(nbr1 + "+" + nbr2 + "=" + sum);
};

// händelsehanterare: subtraktion
subtractionButton.onclick = function (event) {
  let nbr1 = Number(input1.value);
  let nbr2 = Number(input2.value);
  let diff = nbr1 - nbr2;
  alert(nbr1 + "-" + nbr2 + "=" + diff);
};
