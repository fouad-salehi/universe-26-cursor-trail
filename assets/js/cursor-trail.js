const SIZE = 18;
const MIN_LIFETIME = 500;
const MAX_LIFETIME = 220;
const DISSOLVE_DURATION = 50;
const MAX_SQUARES = 500;

const SYMBOLS = ["<", ">", "{", "}", "/", ";", "!", "=", "(", ")"];

const COLORS = [
  "#58a6ff",
  "#bc8cff",
  "#3fb950",
  "#f778ba",
  "#ffa657",
  "#79c0ff",
  "#d2a8ff"
];

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const occupiedCells = new Map();
const activeSquares = new Set();

let lastCell = null;

function getCell(x, y) {
  return {
    x: Math.floor(x / SIZE),
    y: Math.floor(y / SIZE)
  };
}

function cellKey(x, y) {
  return `${x},${y}`;
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function createSquare(cellX, cellY) {
  const key = cellKey(cellX, cellY);

  if (occupiedCells.has(key)) return;
  if (activeSquares.size >= MAX_SQUARES) return;

  const square = document.createElement("div");
  square.className = "code-square";

  const symbol = SYMBOLS[
    Math.floor(Math.random() * SYMBOLS.length)
  ];

  const color = COLORS[
    Math.floor(Math.random() * COLORS.length)
  ];

  square.textContent = symbol;
  square.style.left = `${cellX * SIZE}px`;
  square.style.top = `${cellY * SIZE}px`;
  square.style.color = color;
  square.style.backgroundColor = `${color}20`;
  square.style.border = `1px solid ${color}90`;

  occupiedCells.set(key, square);
  activeSquares.add(square);
  document.body.appendChild(square);

  const lifetime = randomBetween(
    MIN_LIFETIME,
    MAX_LIFETIME
  );

  window.setTimeout(() => {
    if (!square.isConnected) return;

    square.classList.add("dissolving");

    window.setTimeout(() => {
      square.remove();
      activeSquares.delete(square);

      if (occupiedCells.get(key) === square) {
        occupiedCells.delete(key);
      }
    }, DISSOLVE_DURATION);
  }, lifetime);
}

function drawGridLine(x0, y0, x1, y1) {
  let dx = Math.abs(x1 - x0);
  let dy = Math.abs(y1 - y0);
  let sx = x0 < x1 ? 1 : -1;
  let sy = y0 < y1 ? 1 : -1;
  let error = dx - dy;

  while (true) {
    createSquare(x0, y0);

    if (x0 === x1 && y0 === y1) break;

    const doubledError = 2 * error;

    if (doubledError > -dy) {
      error -= dy;
      x0 += sx;
    }

    if (doubledError < dx) {
      error += dx;
      y0 += sy;
    }
  }
}

window.addEventListener("pointermove", (event) => {
  if (reducedMotion) return;

  const cell = getCell(event.clientX, event.clientY);

  if (!lastCell) {
    createSquare(cell.x, cell.y);
    lastCell = cell;
    return;
  }

  if (cell.x !== lastCell.x || cell.y !== lastCell.y) {
    drawGridLine(
      lastCell.x,
      lastCell.y,
      cell.x,
      cell.y
    );

    lastCell = cell;
  }
}, { passive: true });

window.addEventListener("pointerleave", () => {
  lastCell = null;
});

window.addEventListener("blur", () => {
  lastCell = null;
});