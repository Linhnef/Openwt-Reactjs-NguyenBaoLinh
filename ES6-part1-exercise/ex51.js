let break_ = url => {
    let rs = url.split('?')[1] ? url.split('?')[1] : '';
    let x = [];
    if(rs != ''){
        rs.split('&').map(val => {
            x.push(val.split('=').join(':'));
        });
    }
   /*  rs.map((val) => {
        x.push(val.split('=').join(':'));
    }); */
    return x;
}

console.log(break_('http://url.com/page?name=Adam&surname=Smith')); 
console.log(break_('google.com'));
console.log(break_('https://www.w3resource.com'));