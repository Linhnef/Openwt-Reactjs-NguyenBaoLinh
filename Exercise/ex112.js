function find_n(x){
    let n=1;
	for(i=1;i<=x;i++)
	{
		n*=i;
	}
	return n;
}

function find(n){
    let x = find_n(n);
    let dem = 0;
    let tmp = 0;
    while(tmp==0){
        dem += 1;
        tmp=x%10;
        x = x/10;
        
    }
    return dem-1;
}

console.log(find(8));
console.log(find(10));