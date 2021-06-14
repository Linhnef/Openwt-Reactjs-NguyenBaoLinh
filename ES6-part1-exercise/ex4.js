const break_ = (x, reg = ',') => {
    
    let tmp = x.split("\n");
    let i = 0;
        tmp.forEach(element => {
            tmp[i] = element.split(reg);
            i++;
        });
        let rs = [];
        for (k = 1; k < tmp.length; k++) {
            let myJson = {};
            let myJson2 = {};
            let objName = tmp[0][0];
            let objValue = tmp[k][0];
            myJson[objName] = objValue;
            rs.push(myJson);
            let objName2 = tmp[0][1];
            let objValue2 = tmp[k][1];
            myJson2[objName2] = objValue2;
            rs.push(myJson2);
        }
    return   JSON.stringify(rs) ;
  };   

  console.log(break_('col1,col2\na,b\nc,d')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
  console.log(break_('col1;col2\na;b\nc;d', ';')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];





