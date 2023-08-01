const container = document.querySelector(`#container`);
let squareEdge = 16;
let fillColor = "black";

function renderGrids(edge, color) {
  container.textContent = "";
  for (let i = 0; i < edge; i++) {
    for (let j = 0; j < edge; j++) {
      let gridCell = document.createElement("div");
      gridCell.style.boxShadow = "0px 0px 0px 1px gray";
      gridCell.style.backgroundColor = "white";
      gridCell.style.width = `${container.offsetWidth / edge}px`;
      gridCell.style.height = `${container.offsetHeight / edge}px`;
      container.appendChild(gridCell);
    }
  }
  hoverChange(container, color)
  // container.childNodes.forEach((cell) => {
  //   cell.addEventListener(`mouseover`, () => {
  //     if (color == `rainbow`) {
  //       cell.style.backgroundColor = returnRandomColor();
  //     } else {
  //       cell.style.backgroundColor = color;
  //     }
  //   });
  // });
}

function hoverChange(container, color) {
  container.childNodes.forEach((cell) => {
    cell.addEventListener(`mouseover`, () => {
      if (color == `rainbow`) {
        cell.style.backgroundColor = returnRandomColor();
      } else {
        cell.style.backgroundColor = color;
      }
    });
  });
}

renderGrids(squareEdge, fillColor);

const customGridButton = document.querySelector(`#custom-grid`);
customGridButton.addEventListener(`click`, handleCustomGrid);

function handleCustomGrid() {
  let newGridSize = prompt(`Enter new edge length: (eg. '64' for 64x64 grid)`);
  if (newGridSize > 64) {
    alert("Maximum is 64.");
    newGridSize = 64;
  } else if (newGridSize < 1) {
    alert("Minimum is 1.");
  }
  renderGrids(newGridSize);
}

const rainbowButton = document.querySelector(`#rainbow`);
rainbowButton.addEventListener(`click`, handleRainbowFill);

function handleRainbowFill() {
  hoverChange(container, "rainbow")
}

function returnRandomColor() {
  let h = Math.floor(Math.random() * 360);
  let s = Math.floor(Math.random() * 40 + 30);
  let l = Math.floor(Math.random() * 40 + 30);
  return `hsl(${h}, ${s}%, ${l}%)`;
}

const blackButton = document.querySelector(`#black`);
blackButton.addEventListener(`click`, handleBlackButton)

function handleBlackButton() {
  hoverChange(container, "black")
}
