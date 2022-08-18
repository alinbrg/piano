const keyBlocks = document.querySelectorAll(".key");

function playSound(url) {
	new Audio(url).play();
}

keyBlocks.forEach((painoKey, i) => {
	const number = ("" + (i + 1)).padStart(2, "0");

	const audioUrl = `24-piano-keys/key${number}.mp3`;

	painoKey.addEventListener("click", () => playSound(audioUrl));
});
