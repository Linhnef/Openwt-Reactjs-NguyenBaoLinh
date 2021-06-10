function maxele(a){
    let max = a[0].length;
    let rs = '';
    a.forEach(element => {
        if(element.length > max) rs = element;
    });
    return rs;
}
console.log(maxele(['a','aaa','asesedsef']));