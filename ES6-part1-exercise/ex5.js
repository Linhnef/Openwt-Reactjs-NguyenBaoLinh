const JSON_to_CSV = (arr, columns, delimiter = ',') =>{
    let rs = [];
    rs.push(columns.join(delimiter));
    arr.map(obj =>{
        let tmp = [];
        columns.map(variable =>{
            let b = Object.values(obj);
            let a = Object.keys(obj);
            for(i=0;i<a.length;i++){
                if(a[i] == variable){
                    let type = a[i];
                    tmp.push(obj[type]);
                    
            }
            }
           
        })
        rs.push(tmp);
       
    });
    return rs.join('\n');
}


  console.log(JSON_to_CSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y']));
  console.log(JSON_to_CSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y'], ';'));
