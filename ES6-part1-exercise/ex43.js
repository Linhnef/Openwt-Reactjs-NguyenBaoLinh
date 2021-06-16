let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3))

const arg = [];

arg.push(p1);
arg.push(p2);
arg.push(p3);


Promise.all(arg)
.then(rs => {
    console.log(rs);
});



