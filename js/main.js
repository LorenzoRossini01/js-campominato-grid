const gridContainerEl = document.querySelector(".grid-container");
const difficultyInput = document.querySelector("#difficulty-level-input");
const difficultyBombInput = document.querySelector("#difficulty-bomb");
const playButton = document.querySelector("#play-button");

const difficultyLevel = ["easy", "medium", "hard"];
const difficultyValueArray = [100, 81, 49];
const difficultyBomb = [16, 24, 32];

addOptionToSelectInput(difficultyLevel, difficultyValueArray, difficultyInput);
addOptionToSelectInput(difficultyBomb, difficultyBomb, difficultyBombInput);

playButton.addEventListener("click", function () {
  const userDifficultyValue = difficultyInput.value;
  const difficultyBombValue = difficultyBombInput.value;
  generateGrid(gridContainerEl, userDifficultyValue);

  const bomb = generateBombList(userDifficultyValue, difficultyBombValue);
  console.table(bomb);
});
