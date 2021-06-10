function max(a,b,c){
    let max = a;
    if(max <= b) max = b;
    if(max <= c) max = c;
    return max;
}

console.log('max of three numbers is : ' + max(1,2,3));