let create_ = (obj) => {
    let tmp;
    Object.keys(obj).forEach(element => {
        
               tmp =Object.keys(obj).filter(x => true);
    });

    let rs = [];
    tmp.forEach(element => {
        let tmp = [];
        tmp.push(element,obj[element]);
        rs.push(tmp);
    });
    return JSON.stringify(rs);
    
}

console.log(create_({ a: 1, b: '2', c: 3 }));
console.log(create_({ a: 1, b: 2, c: 3 }));

