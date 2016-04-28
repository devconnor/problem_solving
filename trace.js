function trace(arr) {
	var sum = 0;
	for (var i = 0; i <  arr.length; i++){
		sum = sum + arr[i][i] 
	}
	return sum;
}
console.log(trace([[1,2,3],[4,5,6],[7,8,9]]));
