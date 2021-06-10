function sum(arr) {
	var rs = 0;
	for (var i = 0; i < arr.length-1; i++) {
		rs += Math.abs(arr[i] - arr[i + 1]);
	}
	return rs;
}
console.log(sum([1,2,3,4,5]));