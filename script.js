const charToGrid = {
  A: ["  XX  ", " X  X ", " X  X ", " XXXX ", " X  X ", " X  X ", " X  X "],
  B: [" XXX  ", " X  X ", " X  X ", " XXX  ", " X  X ", " X  X ", " XXX  "],
  C: ["  XXX ", " X    ", " X    ", " X    ", " X    ", " X    ", "  XXX "],
  D: [" XXX  ", " X  X ", " X  X ", " X  X ", " X  X ", " X  X ", " XXX  "],
  E: [" XXXX ", " X    ", " X    ", " XXX  ", " X    ", " X    ", " XXXX "],
  F: [" XXXX ", " X    ", " X    ", " XXX  ", " X    ", " X    ", " X    "],
  G: ["  XXX ", " X    ", " X    ", " X  XX", " X   X", " X   X", "  XXX "],
  H: [" X  X ", " X  X ", " X  X ", " XXXX ", " X  X ", " X  X ", " X  X "],
  I: ["  XXX ", "   X  ", "   X  ", "   X  ", "   X  ", "   X  ", "  XXX "],
  J: ["   XXX", "    X ", "    X ", "    X ", "    X ", " X  X ", "  XX  "],
  K: [" X  X ", " X X  ", " XX   ", " X    ", " XX   ", " X X  ", " X  X "],
  L: [" X    ", " X    ", " X    ", " X    ", " X    ", " X    ", " XXXX "],
  M: [" X   X", " XX XX", " X X X", " X   X", " X   X", " X   X", " X   X"],
  N: [" X   X", " XX  X", " XX  X", " X X X", " X  XX", " X  XX", " X   X"],
  O: ["  XXX ", " X   X", " X   X", " X   X", " X   X", " X   X", "  XXX "],
  P: [" XXX  ", " X  X ", " X  X ", " XXX  ", " X    ", " X    ", " X    "],
  Q: ["  XXX ", " X   X", " X   X", " X   X", " X X X", " X  X ", "  XX X"],
  R: [" XXX  ", " X  X ", " X  X ", " XXX  ", " X X  ", " X  X ", " X   X"],
  S: ["  XXX ", " X    ", " X    ", "  XXX ", "    X ", "    X ", "  XXX "],
  T: [" XXXXX", "   X  ", "   X  ", "   X  ", "   X  ", "   X  ", "   X  "],
  U: [" X   X", " X   X", " X   X", " X   X", " X   X", " X   X", "  XXX "],
  V: [" X   X", " X   X", " X   X", " X   X", "  X X ", "  X X ", "   X  "],
  W: [" X   X", " X   X", " X   X", " X   X", " X X X", " XX XX", " X   X"],
  X: [" X   X", " X   X", "  X X ", "   X  ", "  X X ", " X   X", " X   X"],
  Y: [" X   X", " X   X", "  X X ", "   X  ", "   X  ", "   X  ", "   X  "],
  Z: [" XXXXX", "     X", "    X ", "   X  ", "  X   ", " X    ", " XXXXX"],
};

// Function to generate the grid
function generateGrid(inputString) {
  const gridContainer = document.getElementById("grid");
  gridContainer.innerHTML = ""; // Clear previous grid

  // Create 7 rows x 53 weeks (365 boxes)
  for (let i = 0; i < 7 * 53; i++) {
    const box = document.createElement("div");
    box.classList.add("day-box");
    gridContainer.appendChild(box);
  }

  // Fill the grid with input characters
  const gridBoxes = document.querySelectorAll(".day-box");
  let currentColumn = 0;

  inputString.split("").forEach((char) => {
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
      currentColumn += 8; // Add space between letters
    }
  });
}

// Handle button click
function handleGenerate() {
  const inputString = document.getElementById("inputString").value;
  generateGrid(inputString);
}
