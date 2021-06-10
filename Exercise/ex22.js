let str =  'w3resource';


function removeItemOnce(arr, index) {
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
function remove(str){
    let tmp = [];
    rs = '';
    for(i = 0; i<str.length;i++){
        tmp[i] = str[i];
    }
    console.log(tmp);
    removeItemOnce(tmp,2);
    for(i = 0; i<tmp.length;i++){
        rs +=tmp[i];
    }
    return rs;
}

console.log(remove(str));


