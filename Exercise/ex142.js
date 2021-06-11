function rel(str){
    let x = str.split('');
    for(i=0;i<x.length;i++){
        if(x[i] == '.') x[i] = '';
    }
    let tmp = x.join('').split('');
    for(i=0;i<tmp.length-1;i++){
        if(tmp[i]+tmp[i+1] == '//') tmp[i] = '';
    }
    return tmp.join('');
}

console.log(rel("/home/var/./www/../html//sql/"));