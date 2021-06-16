let filter_ = (obj,d) => {
    let tmp;
    d.forEach(element => {
        
               tmp =Object.keys(obj).filter(x => (x+'') != element);
    });
    let rs = [];
    
    tmp.forEach(element => {
        let object = {};
        object[element] = obj[element];
        rs.push(object);
    });
    return rs;
    
}

console.log(filter_({ a: 1, b: '2', c: 3 }, ['b']));
console.log(filter_({ a: 1, b: 2, c: 3 }, ['c']));