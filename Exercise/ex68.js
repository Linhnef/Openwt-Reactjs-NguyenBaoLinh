function createNewStr(str, n)
  {
    let f = str.substring(0, n);
    let e = str.substring(str.length - n);
    return f + e;
 }
 console.log(createNewStr('chung toi oke',3));