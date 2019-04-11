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
    isInRange = Boolean(start <= num && num < end);
    return isInRange;
  },
  words(string) {
    return string.split(' ');
  },
  pad(string, length) {
    if (string.length >= length) {
      return string;
    }
    const lengthDifference = length - string.length;
    let spacesToAdd = lengthDifference / 2;
    let pad = "";
    if (lengthDifference % 2 === 0) {
      for (let i = 0; i < spacesToAdd; i++) {
        pad += " ";
      };
      return `${pad}${string}${pad}`;
    } else {
      spacesToAdd = Math.floor(spacesToAdd);
      for (let i = 0; i < spacesToAdd; i++) {
        pad += " ";
      }
      return `${pad}${string}${pad} `;
    }
  }
}

// Do not write or modify code below this line.
module.exports = _;