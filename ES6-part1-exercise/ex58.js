let break_ = (arr,d) => {
    let rs = [[],[]];
    arr.map(x => {
        rs[d(x) ? 0 : 1].push(x);
    })
    return rs;
}

console.log(break_(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'));