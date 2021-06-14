const compare = (obj1,obj2) => {
   return  Object.keys(obj2).every(key => {
        return obj1.hasOwnProperty(key) && obj1[key] === obj2[key];
    })
}

console.log(compare({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(compare({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(compare({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false

