function celToFah(num) {
	var fah  =  num*1.8 + 32;
	return fah;
}
console.log(celToFah(100))

function fahToCel(num) {
	var cel = (num - 32)/1.8
	return cel;
}

console.log(fahToCel(212));
