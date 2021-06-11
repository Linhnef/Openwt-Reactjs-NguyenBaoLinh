function check_dis(a,x){
    let near = 0;
    for(i = 0;i<a.length;i++){
        for(j = i+1;j<a.length;j++){
            let t = Math.abs(a[i]-a[j]);
            if(t<=x){
                if(t>near) near = t;
            }
        }  
    }
    return near;
}

console.log(check_dis([12, 10, 33, 34], 10));