function search(a,k){

    return a.sort()[a.length-k];
}
console.log(search([2,6,8,7,2,1],2));