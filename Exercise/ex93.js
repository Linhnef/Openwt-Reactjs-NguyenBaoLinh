function max(arr) {

    let rs = 0;

    for( i=0;i<arr.length;i++)
       {
        for(j=0; j!=i && j<arr.length; j++)
        {
            let tmp = Math.abs(arr[i]-arr[j]);
            rs = Math.max(rs, tmp);
        }
    }
    return rs;
}

console.log(max([54,9,8,7,5]));
