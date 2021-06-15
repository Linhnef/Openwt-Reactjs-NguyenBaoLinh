let up_ = ([first, ...rest], upperRest = false) =>{
   return first.toLowerCase() + ((upperRest) ? rest.join('').toUpperCase() : rest.join(''));
}

console.log(up_('W3resource'))
console.log(up_('Red', true));