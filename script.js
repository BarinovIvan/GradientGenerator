function getRandomInt(min, max) {
	return Math.ceil(Math.random() * (max - min) + min);
}

let hexcode1;
let hexcode2;
let hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];

function generateHex() {
	hexcode1 = "";
	hexcode2 = "";
	for (let index = 0; index < 6; index++) {
		hexcode1 += hex_numbers[getRandomInt(0, 15)];
		hexcode2 += hex_numbers[getRandomInt(0, 9)];
	}
}

generateHex();

let toggleButton = document.getElementById('button')

toggleButton.onclick = () => {
	document.body.style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;
	document.getElementById('hexcode1').textContent = hexcode1;
	document.querySelector('#hexcode2').textContent = hexcode2;
	generateHex();
}


