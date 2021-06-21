let runPromise = x => x.reduce((p,next) => p.then(next),Promise.resolve());



const delay = d => new Promise(r => setTimeout(r, d));
runPromise([() => delay(1000), () => delay(2000)])
    .then(x => {
        console.log("Finished !!!");
    })