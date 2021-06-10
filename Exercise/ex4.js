//4.
function S(a,b,c){
    p = (a+b+c)/2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}
console.log('Dien tich tam giac la : ' + S(5,6,7));