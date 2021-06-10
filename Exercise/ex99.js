function check(a,b){
    let as = a.split('').sort();
    let bs = b.split('').sort();
    let rs = true;
    for (i = 0; i < Math.max(as.length, bs.length); i++) {
        if (as[i] !== bs[i]) {
          rs = false;
        }
      }
    return rs;

}

console.log(check('acb','abc'));
console.log(check("xyz", "zyp"));
