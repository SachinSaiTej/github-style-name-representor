// const charToGrid = {
//   A: ["  XX  ", " X  X ", " X  X ", " XXXX ", " X  X ", " X  X ", " X  X "],
//   B: [" XXX  ", " X  X ", " X  X ", " XXX  ", " X  X ", " X  X ", " XXX  "],
//   C: ["  XXX ", " X    ", " X    ", " X    ", " X    ", " X    ", "  XXX "],
//   D: [" XXX  ", " X  X ", " X  X ", " X  X ", " X  X ", " X  X ", " XXX  "],
//   E: [" XXXX ", " X    ", " X    ", " XXX  ", " X    ", " X    ", " XXXX "],
//   F: [" XXXX ", " X    ", " X    ", " XXX  ", " X    ", " X    ", " X    "],
//   G: ["  XXX ", " X    ", " X    ", " X  XX", " X   X", " X   X", "  XXX "],
//   H: [" X  X ", " X  X ", " X  X ", " XXXX ", " X  X ", " X  X ", " X  X "],
//   I: ["  XXX ", "   X  ", "   X  ", "   X  ", "   X  ", "   X  ", "  XXX "],
//   J: ["   XXX", "    X ", "    X ", "    X ", "    X ", " X  X ", "  XX  "],
//   K: [" X  X ", " X X  ", " XX   ", " X    ", " XX   ", " X X  ", " X  X "],
//   L: [" X    ", " X    ", " X    ", " X    ", " X    ", " X    ", " XXXX "],
//   M: [" X   X", " XX XX", " X X X", " X   X", " X   X", " X   X", " X   X"],
//   N: [" X   X", " XX  X", " XX  X", " X X X", " X  XX", " X  XX", " X   X"],
//   O: ["  XXX ", " X   X", " X   X", " X   X", " X   X", " X   X", "  XXX "],
//   P: [" XXX  ", " X  X ", " X  X ", " XXX  ", " X    ", " X    ", " X    "],
//   Q: ["  XXX ", " X   X", " X   X", " X   X", " X X X", " X  X ", "  XX X"],
//   R: [" XXX  ", " X  X ", " X  X ", " XXX  ", " X X  ", " X  X ", " X   X"],
//   S: ["  XXX ", " X    ", " X    ", "  XXX ", "    X ", "    X ", "  XXX "],
//   T: [" XXXXX", "   X  ", "   X  ", "   X  ", "   X  ", "   X  ", "   X  "],
//   U: [" X   X", " X   X", " X   X", " X   X", " X   X", " X   X", "  XXX "],
//   V: [" X   X", " X   X", " X   X", " X   X", "  X X ", "  X X ", "   X  "],
//   W: [" X   X", " X   X", " X   X", " X   X", " X X X", " XX XX", " X   X"],
//   X: [" X   X", " X   X", "  X X ", "   X  ", "  X X ", " X   X", " X   X"],
//   Y: [" X   X", " X   X", "  X X ", "   X  ", "   X  ", "   X  ", "   X  "],
//   Z: [" XXXXX", "     X", "    X ", "   X  ", "  X   ", " X    ", " XXXXX"],
// };

const charToGrid = {
  A: [" XXX ", "X   X", "X   X", "XXXXX", "X   X", "X   X", "X   X"],
  B: ["XXXX ", "X   X", "X   X", "XXXX ", "X   X", "X   X", "XXXX "],
  C: [" XXXX", "X    ", "X    ", "X    ", "X    ", "X    ", " XXXX"],
  D: ["XXXX ", "X   X", "X   X", "X   X", "X   X", "X   X", "XXXX "],
  E: ["XXXXX", "X    ", "X    ", "XXXX ", "X    ", "X    ", "XXXXX"],
  F: ["XXXXX", "X    ", "X    ", "XXXX ", "X    ", "X    ", "X    "],
  G: ["XXXXX", "X    ", "X    ", "X  XX", "X   X", "X   X", "XXXXX"],
  H: ["X   X", "X   X", "X   X", "XXXXX", "X   X", "X   X", "X   X"],
  I: ["XXXXX", "  X  ", "  X  ", "  X  ", "  X  ", "  X  ", "XXXXX"],
  J: ["XXXXX", "    X", "    X", "    X", "    X", "X   X", " XXX "],
  K: ["X   X", "X  X ", "X X  ", "XX   ", "X X  ", "X  X ", "X   X"],
  L: ["X    ", "X    ", "X    ", "X    ", "X    ", "X    ", "XXXXX"],
  M: ["X   X", "XX XX", "X X X", "X   X", "X   X", "X   X", "X   X"],
  N: ["X   X", "XX  X", "XX  X", "X X X", "X  XX", "X  XX", "X   X"],
  O: [" XXX ", "X   X", "X   X", "X   X", "X   X", "X   X", " XXX "],
  P: ["XXXX ", "X   X", "X   X", "XXXX ", "X    ", "X    ", "X    "],
  Q: [" XXX ", "X   X", "X   X", "X   X", "X X X", "X  XX", " XXX "],
  R: ["XXXX ", "X   X", "X   X", "XXXX ", "X X  ", "X  X ", "X   X"],
  S: ["XXXXX", "X    ", "X    ", "XXXXX", "    X", "    X", "XXXXX"],
  T: ["XXXXX", "  X  ", "  X  ", "  X  ", "  X  ", "  X  ", "  X  "],
  U: ["X   X", "X   X", "X   X", "X   X", "X   X", "X   X", "XXXXX"],
  V: ["X   X", "X   X", "X   X", "X   X", " X X ", " X X ", "  X  "],
  W: ["X   X", "X   X", "X   X", "X   X", "X X X", "XX XX", "X   X"],
  X: ["X   X", " X X ", "  X  ", "  X  ", "  X  ", " X X ", "X   X"],
  Y: ["X   X", " X X ", "  X  ", "  X  ", "  X  ", "  X  ", "  X  "],
  Z: ["XXXXX", "    X", "   X ", "  X  ", " X   ", "X    ", "XXXXX"],
  // " ": ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
};

// Function to generate the grid
function generateGrid(inputString) {
  const gridContainer = document.getElementById("grid");
  gridContainer.innerHTML = "";

  for (let i = 0; i < 7 * 53; i++) {
    const box = document.createElement("div");
    box.classList.add("day-box");
    gridContainer.appendChild(box);
  }

  const gridBoxes = document.querySelectorAll(".day-box");
  let currentColumn = 0;

  let lengthOfWithOutSpacesString = inputString
    .split(" ")
    .join("")
    .split("").length;
  let spacesCount = inputString.split("").length - lengthOfWithOutSpacesString;

  let totalOccupiedColumns = spacesCount + lengthOfWithOutSpacesString * 6;

  currentColumn = Math.ceil((53 - totalOccupiedColumns) / 2);

  let i = 0;
  inputString.split("").forEach((char) => {
    if (inputString.split("").length > 12) {
      return;
    }
    const charGrid = charToGrid[char.toUpperCase()];
    if (charGrid) {
      charGrid.forEach((row, rowIndex) => {
        row.split("").forEach((cell, colIndex) => {
          if (cell === "X") {
            const index = rowIndex * 53 + currentColumn + colIndex;
            if (gridBoxes[index]) {
              gridBoxes[index].classList.add("active");
            }
          }
        });
      });
      currentColumn += 6;
    }
    i++;
    if (i < 12) {
      if (inputString.split("")[i] === " ") {
        currentColumn += 1;
      }
    }
  });
}

function handleGenerate() {
  const inputString = document.getElementById("inputString").value;
  generateGrid(inputString);
}
