function sum(arr,k){
    let sum = 0;
    let dem = 0;
    arr.sort(function(a, b) {
        return a - b;
      });
    console.log(arr);
    arr.reverse().forEach(element => {
        if(dem < k){
            sum = sum + element;
            dem = dem + 1;
        }
    });
    
    return sum;
}

console.log( 'sum is : ' + sum([2,3,6,8,7,12],3));