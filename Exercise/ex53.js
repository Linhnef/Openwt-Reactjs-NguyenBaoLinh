function check(a,b,str){
    str = str.split('');
    let Na = str.indexOf(a);
    let Nb = str.indexOf(b);
    if(Nb - Na == 4) return true;
    return false;
}

console.log(check('s','n','string'));