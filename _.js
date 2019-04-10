let _ = {
  clamp(num, lower, upper){
    if (num < lower) {
      num = lower;
    } else if (num > upper) {
      num = upper;
    } 
    return num;
  }
};

console.log(_.clamp(10, 5, 8))


// Do not write or modify code below this line.
module.exports = _;