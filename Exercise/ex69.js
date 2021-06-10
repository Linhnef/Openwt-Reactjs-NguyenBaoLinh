function sum(a){
    let sum = 0;
    a.forEach(element => {
        sum+=element;
    });
    return sum;
}
console.log('sum is : ' + sum([1,2,6]));