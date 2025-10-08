const PALETTE_COLORS = [
	"#ef4444", "#f97316", "#f59e0b",
	"#facc15", "#84cc16", "#86efac",
	"#15803d", "#34d399", "#06b6d4",
	"#93c5fd", "#3b82f6", "#1d4ed8",
	"#0a0e73", "#5b21b6", "#7e22ce",
	"#e879f9", "#f9a8d4", "#d1d5db",
	"#6b7280", "#000000", "#ffffff"
];

const gridEl = document.getElementById("grid");
const paletteEl = document.getElementById("palette");
const clearBtn = document.getElementById("clear");

let selectedColor = PALETTE_COLORS[0];
let isDrawing = false;

function createPalette() {
	PALETTE_COLORS.forEach((color, idx) => {
		const swatch = document.createElement("button");
		swatch.className = "color-swatch";
		swatch.style.background = color;
		swatch.setAttribute("aria-label", `Color ${color}`);
		swatch.dataset.selected = String(idx === 0);
		swatch.addEventListener("click", () => {
			selectedColor = color;
			[...paletteEl.children].forEach(el => el.dataset.selected = "false");
			swatch.dataset.selected = "true";
		});
		paletteEl.appendChild(swatch);
	});
}

function createGrid(cols = 67, rows = 37) {
	gridEl.style.setProperty("--cols", String(cols));
	gridEl.style.setProperty("--rows", String(rows));
	const fragment = document.createDocumentFragment();
	for (let r = 0; r < rows; r += 1) {
		for (let c = 0; c < cols; c += 1) {
			const cell = document.createElement("div");
			cell.className = "cell";
			cell.role = "gridcell";
			fragment.appendChild(cell);
		}
	}
	gridEl.appendChild(fragment);
}

function paint(target) {
	if (!target || !target.classList.contains("cell")) return;
	target.style.background = selectedColor;
}

function attachMouseEvents() {
	gridEl.addEventListener("mousedown", (e) => {
		if (e.button !== 0) return; // left only
		isDrawing = true;
		paint(e.target);
	});
	window.addEventListener("mouseup", () => { isDrawing = false; });
	gridEl.addEventListener("mouseover", (e) => { if (isDrawing) paint(e.target); });
}

function attachTouchEvents() {
	gridEl.addEventListener("touchstart", (e) => {
		isDrawing = true;
		const touch = e.touches[0];
		const target = document.elementFromPoint(touch.clientX, touch.clientY);
		paint(target);
		e.preventDefault();
	}, { passive: false });

	gridEl.addEventListener("touchmove", (e) => {
		if (!isDrawing) return;
		const touch = e.touches[0];
		const target = document.elementFromPoint(touch.clientX, touch.clientY);
		paint(target);
		e.preventDefault();
	}, { passive: false });

	window.addEventListener("touchend", () => { isDrawing = false; });
}

function clearGrid() {
	gridEl.querySelectorAll(".cell").forEach(cell => {
		cell.style.background = "#ffffff";
	});
}

function init() {
	createPalette();
	createGrid();
	attachMouseEvents();
	attachTouchEvents();
	clearBtn.addEventListener("click", clearGrid);
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", init);
} else {
	init();
}
