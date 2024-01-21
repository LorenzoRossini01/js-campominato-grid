const gridContainerEl = document.querySelector(".grid-container");
const difficultyInput = document.querySelector("#difficulty-level-input");
const difficultyBombInput = document.querySelector("#difficulty-bomb");
const playButton = document.querySelector("#play-button");
const scoreDisplay = document.querySelector("#score-display");
const lifepointsDisplay = document.querySelector("#lifepoints-display");

const difficultyLevel = ["easy", "medium", "hard", "super easy"];
const difficultyValueArray = [100, 81, 49, 4];
const difficultyBomb = [16, 24, 32, 3];

addOptionToSelectInput(difficultyLevel, difficultyValueArray, difficultyInput);
addOptionToSelectInput(difficultyBomb, difficultyBomb, difficultyBombInput);

let lifepoints;
let bomb = [];
let score;
let gameOver;
playButton.addEventListener("click", function () {
  gameOver = false;
  score = 0;
  lifepoints = 3;
  const userDifficultyValue = difficultyInput.value;
  const difficultyBombValue = difficultyBombInput.value;
  generateGrid(gridContainerEl, userDifficultyValue);
  bomb = generateBombList(userDifficultyValue, difficultyBombValue);
  for (let i = 0; i < lifepoints; i++) {
    lifepointsDisplay.innerHTML += `<i class="fa-solid fa-heart fs-1 text-danger mx-1"></i>`;
  }

  console.table(bomb);
});
