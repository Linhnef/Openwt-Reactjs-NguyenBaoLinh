function createNewArr(a,b){
    if(a.length<3 || a.length<3) return false;
    let rs = [];
    rs[0] = a[1];
    rs[1] = b[1];
    console.log()
    if(parseInt(rs[0]) == NaN && parseInt(rs[1]) == NaN) return false;
    return rs;
}
console.log(createNewArr([1,2,3],[3,6,4]));