let average = (arr,fn) => {
    if(typeof fn == 'function') {
        return (arr.map(fn).reduce((rs,val) =>  rs + val))/(arr.length);
    }else{
        return (arr.map(a => a[fn]).reduce((rs,val) =>  rs + val))/(arr.length);
    }
}


console.log(average([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], o => o.a));
console.log(average([{ a: 4 }, { a: 2 }, { a: 8 }, { a: 6 }], 'a'));