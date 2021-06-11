function find(a,b,c){
   if(a==b && a!= c) return c;
   if(a=c && a != b) return b;
   if(b=c && b!=a) return a;
   return 'Three numbers are unequal.';
}
console.log(find(1,2,1));