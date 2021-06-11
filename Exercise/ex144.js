function break_(x){
    let tmp = x.split('');
    for(i=0;i<tmp.length-1;i++){
        if(tmp[i]+tmp[i+1] == '//') tmp[i] = '';
    }
    return tmp.join('').split('/');
}

var url_add = "https://www.w3resource.com/javascript-exercises/"
console.log("Original address: "+url_add)
console.log(break_(url_add))
