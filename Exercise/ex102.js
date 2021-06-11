function check(arr) {
    let rs = 0;
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) 
              rs++;
        }
    }
    return rs;
}
console.log(check([0, 3, 2, 5, 9]));