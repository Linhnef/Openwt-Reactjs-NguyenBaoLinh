function check(a) {
    for (i = 0; i < a.length; i++) 
         {
        for (j = 0; j < a[0].length; j++) 
            {
            if (j > i && a[i][j] !== 0)
              return false;
        }
    }
    return true;
}

console.log(check([[1, 0, 0],[2, 0, 0], [0, 3, 3]]));
console.log(check([[1, 0, 1],[2, 0, 0], [0, 3, 3]]));