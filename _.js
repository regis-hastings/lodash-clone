let _ = {
  clamp(num, lower, upper){
    let initial = Math.max(num, lower);
    let final = Math.min(initial, upper);
    return final;
  },
  inRange(num, start, end){
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) { 
      [start, end] = [end, start]
    }
    if (num < start || num >= end) {
      return false;
    } else {
      return true
    }
  }
}

// Do not write or modify code below this line.
module.exports = _;