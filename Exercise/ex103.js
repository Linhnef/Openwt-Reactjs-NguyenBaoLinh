function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

function check(a){
    let rs = a + '';
    let max = 0;
    const arr = rs.split('');
    for(i = 0; i< arr.length;i++){
        let vari = arr[i];
        arr[i] = '';
        if(max < arr.join('')) max = arr.join('');
        arr[i] = vari;
        
    }
    return max;
}

console.log(check(12345));
console.log(check(145));

console.log(check(16845));
