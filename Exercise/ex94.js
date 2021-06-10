function foo(arr) {
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }
    let index = -1;
    let max = b[0];
    for(i=0;i<b.length;i++){
        if(max<b[i]){
            max = b[i];
            index = i;
        }
    }
    return a[index];
}
console.log(foo([1,3,6,3]));