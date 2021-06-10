function check(a,b){
    return (100-a) > (100-b) ? b : a;
}

console.log('nearest 100 is : ' + check(10,50));