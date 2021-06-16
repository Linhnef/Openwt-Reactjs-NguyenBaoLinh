let break_ = (x,y) => x.reduce((rs,val,i) => (rs[y[i] ? 0 : 1].push(val),rs),[[],[]]);
console.log(break_(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]));