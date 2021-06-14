let change = (x) =>{
    return `${x}`.split('').map(Element=>parseInt(Element));
}

console.log(change(123));
console.log(change(1230));