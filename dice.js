let button1 = document.getElementById("roll-button");
let clearButton = document.getElementById("clear-button");
let dice1 = document.getElementById("dice");
let historyList = [];

function rollDice() {
  let rollResult = Math.floor(Math.random() * 6) + 1;
  let diceFace = getDiceFace(rollResult);

  // Decode HTML entity properly
  let temp = document.createElement("div");
  temp.innerHTML = diceFace;
  dice1.innerHTML = temp.innerHTML;

  historyList.push(rollResult);
  updateRollHistory();
}

function updateRollHistory() {
  let historyUl = document.getElementById("roll-history");
  historyUl.innerHTML = ""; // Clear old history

  // Loop through historyList in reverse
  for (let i = historyList.length - 1; i >= 0; i--) {
    let roll = historyList[i];
    let face = getDiceFace(roll);
    let temp = document.createElement("div");
    temp.innerHTML = face;

    let li = document.createElement("li");
    li.innerHTML = `Roll ${i + 1}: <span>${temp.innerHTML}</span>`;
    historyUl.appendChild(li);
  }
}

function clearHistory() {
  historyList = [];
  document.getElementById("roll-history").innerHTML = "";
  dice1.innerHTML = "⚅"; 
}

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1: return "&#9856;";
    case 2: return "&#9857;";
    case 3: return "&#9858;";
    case 4: return "&#9859;";
    case 5: return "&#9860;";
    case 6: return "&#9861;";
    default: return "";
  }
}

button1.addEventListener("click", () => {
  dice1.classList.add("roll-animation");
  setTimeout(() => {
    dice1.classList.remove("roll-animation");
    rollDice();
  }, 800);
});

clearButton.addEventListener("click", clearHistory);
