let clone = (x) => {
    let rs = [];
    Object.keys(x).map(ele => {
        rs[ele] = x[ele];
    });
    return rs;
}
const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = clone(a); // a !== b, a.obj !== b.obj
console.log(b)
