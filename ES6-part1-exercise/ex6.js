
let get_ = (obj,target)=>{
    if(obj[target]){
        return obj[target];
    }
    return Object.values(obj).reduce((res,val)=>{
        if(res != undefined) return res;
        if(typeof val == 'object') return get_(val,target);
    },undefined);
}



const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};

const dog = {
    "status": "success",
    "message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg"
}

console.log(get_(data, 'level3'));
console.log(get_(data, 'level4'));
console.log(get_(dog, 'message'));