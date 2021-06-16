let find_ = (x,...arg) =>{
    return arg.filter(element => element == x).join('');
}

console.log(find_('Waldo',undefined, null, NaN, '', 'Waldo'));
