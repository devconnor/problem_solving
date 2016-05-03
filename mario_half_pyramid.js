function halfPyr(num) {
	var hashes = "##"
	var spaces = Array(num).join("-");
	
	for (var j = 0; j < num; j++) {
		var temp = spaces + hashes
		console.log(temp);
		hashes += "#"
	}	
}
halfPyr(5);
