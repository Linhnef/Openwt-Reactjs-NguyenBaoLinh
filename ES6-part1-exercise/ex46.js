let curry = (fn,arity = fn.length, ...arg) => {
       return arity <= arg.length ? fn(...arg) : curry.bind(null,fn,arity,...arg);
}

console.log(curry(Math.pow)(2)(8));
console.log(curry(Math.min, 3)(10)(50)(2));