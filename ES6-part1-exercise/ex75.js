const elo = ([...ratings], kFactor = 32, selfRating) => {
    const [a, b] = ratings;
    console.log('rating : ' + ratings);
    //self win probility
    const expectedScore = (self, opponent) => 1 / (1 + 10 ** ((opponent - self) / 400));
    console.log(expectedScore)
    const newRating = (rating, i) =>
      (selfRating || rating) + kFactor * (i - expectedScore(i ? a : b, i ? b : a));
    if (ratings.length === 2) {
      return [newRating(a, 1), newRating(b, 0)];
    }
    for (let i = 0, len = ratings.length; i < len; i++) {
      let j = i;
      while (j < len - 1) {
        j++;
        [ratings[i], ratings[j]] = elo([ratings[i], ratings[j]], kFactor);
      }
    }
    return ratings;
  };
  
 /*  console.log(elo([1200, 1200])); 
  console.log(elo([1200, 1200], 64));  */
  console.log(elo([1200, 1200, 1200, 1200]).map(Math.round)); // [1246, 1215, 1185, 1154]
  /*
  For teams, each rating can adjusted based on own team's average rating vs.
  average rating of opposing team, with the score being added to their
  own individual rating by supplying it as the third argument.
  */
  