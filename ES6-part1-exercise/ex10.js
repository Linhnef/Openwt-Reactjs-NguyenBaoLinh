let find_ =(arr,indexs) => {
    arr.map(elemen => {
        let rs = [];
        for(i=0;i<indexs.length;i++){
            if(arr.indexOf(elemen) == indexs[i]) rs.push(elemen);
        }
        let rs_ = [];
        rs.forEach(element => {
            if(element != undefined) rs_.push(element);
        });
        return rs_;
    })

}
let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(find_(arra1, [1, 3]));
let arra2 =  [1, 2, 3, 4, 5, 6, 7];
console.log(find_(arra2, [4]));