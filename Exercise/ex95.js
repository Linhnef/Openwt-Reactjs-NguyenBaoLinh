function replaceArr(arr,a,b){
    for(i = 0 ; i<arr.length;i++){
        if(arr[i] == a) arr[i] = b;
    }
    return arr;
}
console.log(replaceArr([1,2,3,6,5,1,2],1,8));