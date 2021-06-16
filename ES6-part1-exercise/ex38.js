let change = (x,len,char = ' ') => {
    //padstart insert character first char -> (n,char) -> n push string up end push string down same.
    return x.padStart((x.length + len) / 2, char).padEnd(len, char);
}

console.log(change('cat', 8));
console.log(change(String(42), 6, '0'))
console.log(change('for', 8))