let group = (arr,fn) => {
    if (typeof fn == 'function'){
        return arr.reduce((rs,val) => {
            rs[val] = fn(val);
            return rs;
        },{})
    }else{
        return null;
    }
}

console.log(group([6.1, 4.2, 6.3], Math.sqrt)); 
console.log(group([6.1, 4.2, 6.3], Math.floor)); 
console.log(group(['one', 'two', 'three'], 'length'));