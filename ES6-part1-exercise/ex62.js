//#Source https://bit.ly/2neWfJ2 
const chainAsync = fns => {
    let curr = 0;
    const next = () => { 
        let tm = fns[curr++](next);
        return tm;
    };
    next();
  };
  chainAsync([
    next => {
      console.log('0 seconds');
      setTimeout(next, 1000);
    },
    next => {
      console.log('1 second');
    }
  ]);