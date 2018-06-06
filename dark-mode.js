function createSeparator() {
	let div = document.createElement("div");

	div.classList.add("horizontalToolbarSeparator");

	return div;
}

function createButton(id, title, text, tabindex) {
	let button = document.createElement("button");
	button.id = id;

	button.classList.add("secondaryToolbarButton");
	button.classList.add(id);

	button.title = title;

	if(tabindex) {
		button.tabIndex = tabindex;
	}

	let span = document.createElement("span");
	span.innerText = text;

	button.appendChild(span);

	return button;
}

var menu = document.getElementById("secondaryToolbarButtonContainer");
var viewer = document.getElementById("viewer");

var lastMenuEntry = document.querySelector("#secondaryToolbarButtonContainer > button:last-of-type");

menu.appendChild(createSeparator());

var darkModeButton = createButton(
	"pdfDarkMode",
	"toggle dark mode",
	"Dark Mode",
	lastMenuEntry.tabIndex
);

menu.appendChild(darkModeButton);

darkModeButton.addEventListener("click", () => {
	viewer.classList.toggle("dark");
	darkModeButton.classList.toggle("toggled");
});