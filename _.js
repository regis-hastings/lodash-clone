let _ = {
  clamp(num, lower, upper){
    let initial = Math.max(num, lower);
    let final = Math.min(initial, upper);
    return final;
  }
};

console.log(_.clamp(3, 5, 8))


// Do not write or modify code below this line.
module.exports = _;