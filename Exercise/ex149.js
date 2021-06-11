function check(x){
    if(x == x.toUpperCase()) return true;
    return false;
}
function change(x){
    let tmp = x.split('');
    for(i=0;i<x.length;i++){
        if(check(tmp[i])==true){
            tmp[i] = tmp[i].toLowerCase();
        }else{
            tmp[i] = tmp[i].toUpperCase();
        }
    }
    return tmp.join('');
}

console.log(change("w3resource"));
console.log(change("Germany"));