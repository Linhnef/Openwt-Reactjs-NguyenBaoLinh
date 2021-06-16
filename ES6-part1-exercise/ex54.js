let range = (end, start = 0, step = 1) => {
    let tmp = Math.ceil(((end - start)+1)/step);
    let rs = [];
    for(i=0;i<tmp;i++){
        rs.push(start+ step*i);
    }
    return rs;
}

console.log(range(5)); 
console.log(range(8, 3));  
console.log(range(6, 0, 2));