let clock_ = num => {
    return num == 0 || num == 24 ? 12 +'am' : num == 12 ? 12 + 'pm' : num < 12 ? num +'pm' : num%12+'am';
}
console.log(clock_(0));
console.log(clock_(11));
console.log(clock_(13));
console.log(clock_(25));

