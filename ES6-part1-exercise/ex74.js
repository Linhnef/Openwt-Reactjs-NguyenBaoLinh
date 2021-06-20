let filter_ = (a,b,fn) => {
    var x = [];
    let rs = a.reduce((rs,val,i) => {
        console.log(fn(a[i],b[i]));
        if(fn(a[i],b[i]) == true) x.push(val);
    },[]);
    return x;
}

console.log(filter_([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)));
