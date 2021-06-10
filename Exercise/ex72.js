function check(a){
    if(a.length<3) return false
    let f = a[0];
    let e = a[a.length-1];
    return (f == e) ? true : false;
}
console.log(check([1,2,3]));
console.log(check([1,2,1]));