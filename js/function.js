// FUNCTIONS

/**
 *
 * GENERA OPZIONI SELEZIONABILI IN UN ELEMENTO HTML
 * @param {*} array array di opzioni selezionabili
 * @param {*} input elemento html su cui applicarli
 */
function addOptionToSelectInput(array, valueArray, input) {
  for (let i = 0; i < array.length; i++) {
    input.innerHTML += `<option value="${valueArray[i]}">${array[i]}</option>`;
  }
}

/**
 *
 * @param {*} container elemento html che dovrà contenere le celle
 * @param {*} cellNumber varia in base alla difficoltà scelta dall'utente
 */
function generateGrid(container, cellNumber) {
  container.innerHTML = "";

  for (let i = 0; i < cellNumber; i++) {
    const cellEl = generateCell(i);
    container.append(cellEl);
  }
}

/**
 *
 * @param {*} i indice di numerazione delle celle
 * @returns cella
 */
function generateCell(i) {
  const cell = document.createElement("div");
  cell.classList.add("cell-" + difficultyInput.value);
  cell.innerText = i + 1;
  cell.addEventListener("click", function () {
    this.classList.toggle("clicked");
    console.log(cell.innerText);
  });
  return cell;
}
