let create_ = (arr) => {
    return arr.reduce((rs,val,i)=>{
        rs[val[0]] = val[1];
        return rs;
    },{});
}

console.log(create_([['a', 1], ['b', 2]])); 
console.log(create_([[1, 10], [2, 20], [3, 30]]));