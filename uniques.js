function uniques(lst){
	var final  = [];
	for (var i of lst) {
		if (final.indexOf(i) === -1) {
			final.push(i);
		}	
	}	
	return final;
}

console.log(uniques([1,3,44,22,3,3,2,2,22]))
