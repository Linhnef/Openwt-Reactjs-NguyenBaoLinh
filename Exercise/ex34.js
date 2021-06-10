function check(a,b){
    if(a>60 && a<40 || b>60 && b<40){
        return 'a number a of range.'
    }
    return a > b ? a : b;
}
console.log('the larger is : ' + check(55,54));
