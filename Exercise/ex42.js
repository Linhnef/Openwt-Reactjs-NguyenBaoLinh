    function check(a,b,c){
        let array = [a,b,c];
        let flag = true;
        for(i = 0; i <array.length - 1 ; i++){
            if(array[i+1] <= array[i]) flag = false;
        }
        return flag;
    }
    var ex = new Array(2);
    ex[true] = "Strick mode";
    ex[false] = "Soft mode";


    console.log(ex[check(10, 15, 31)]);
    console.log(ex[check(22, 22, 31)]);