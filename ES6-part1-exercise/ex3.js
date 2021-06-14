const break_ = (x,reg = ',') =>{
    let tmp = x.split("\n");
    let i = 0;
        tmp.forEach(element => {
            tmp[i] = element.split(reg);
            i++;
        });
    
    return tmp;
}

console.log(break_('a,b\nc,d')); 
console.log(break_('a;b\nc;d', ';')); 