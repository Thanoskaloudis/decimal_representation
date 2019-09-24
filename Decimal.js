function solution(input) {
  let number = input
    .replace(/\D/g, "")
    .split("")
  let results = [[number.shift()]];

  if (number.length) {
    while (number.length) {
      const currNumber = number.shift();
      let tmpResults = [];
      results.forEach(result => {
        let i = 0;
        while (i <= result.length) {
          const tmp = [...result];
          tmp.splice(i, 0, currNumber);
          tmpResults.push(tmp);
          i++;
        }
      });
      results = tmpResults;
    }
    return results
      .map(numberArray => numberArray.join(""))
      .sort((a, b) => b - a)
      .join();
  } else {
    return (message = "Does not contain any numbers");
  }
}

// some example inputs
console.log(solution("326")); // expected ouput 632,623,362,326,263,236
console.log(solution("A 3B2 C6D")); // expected ouput 632,623,362,326,263,236
console.log(solution("ABC")); //expected an error
