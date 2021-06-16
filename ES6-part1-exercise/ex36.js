let find_ = (...x) => {
  let a = [x[0],x[0]];
  x.reduce((rs,val) => {
      if(a[0]>val) a[0] = val;
      if(a[1]<val) a[1] = val;
  });
  return a;
}

console.log(find_(1, 2, 3, 4, 5)); 
console.log(find_(1, 2, 5, 4, 3)); 
console.log(find_(1, 2, 5, -4, 3));
