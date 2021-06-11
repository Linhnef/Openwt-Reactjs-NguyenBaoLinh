function check(a){arguments
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (i !== j && a[i][j] !== 0) 
              return false;
        }
    }
    return true;

}

console.log(check([[1, 0, 0], [0, 2, 0], [0, 0, 3] ]));
console.log(check([[1, 0, 0], [0, 2, 3], [0, 0, 3] ]));