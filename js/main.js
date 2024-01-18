const gridContainerEl = document.querySelector(".grid-container");
const difficultyInput = document.querySelector("#difficulty-level-input");
const playButton = document.querySelector("#play-button");

gridContainerEl.innerHTML = "";

const difficultyLevel = ["easy", "medium", "hard"];
const difficultyValueArray = [100, 81, 49];

addOptionToSelectInput(difficultyLevel, difficultyValueArray, difficultyInput);

playButton.addEventListener("click", function () {
  const userDifficultyValue = difficultyInput.value;
  generateGrid(gridContainerEl, userDifficultyValue);
  console.log("cell-" + userDifficultyValue);
});
