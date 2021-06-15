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
            let objName = tmp[0][i];
            let objValue = tmp[k][i];
            myJson[objName] = objValue;
            rs.push(myJson);
            let objName2 = tmp[0][i+1];
            let objValue2 = tmp[k][i+1];
            myJson2[objName2] = objValue2;
            rs.push(myJson2);
        }

    return   JSON.stringify(rs) ;
  };   

  console.log(break_('col1,col2\na,b\nc,d')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
  console.log(break_('col1;col2\na;b\nc;d', ';')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];


/*   //#Source https://bit.ly/2neWfJ2
const CSV_to_JSON = (data, delimiter = ',') => {
    const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
    return data
      .slice(data.indexOf('\n') + 1)
      .split('\n')
      .map(v => {
        const values = v.split(delimiter);
        return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
      });
  };
  console.log(CSV_to_JSON('col1,col2\na,b\nc,d')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
  console.log(CSV_to_JSON('col1;col2\na;b\nc;d', ';')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}]; */





