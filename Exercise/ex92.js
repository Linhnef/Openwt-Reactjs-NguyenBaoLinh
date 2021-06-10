function max(arr) {
	var max = Math.abs(arr[0]-arr[1]);
    var tmp;
	for (var i = 0; i < arr.length - 1; i++)
      {
		tmp = Math.abs(arr[i] - arr[i + 1]);
		max = Math.max(max, tmp);
	  }
	return max;
}
console.log(max([3,6,8,98,8,2]));