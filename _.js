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
  pad (string, length) {
    if (length <= string.length) {
      return string;
    }
    let startPaddingLength = Math.floor((length - string.length) / 2);
    let endPaddingLength = length - string.length - startPaddingLength;
    let paddedString = `${" ".repeat(startPaddingLength)}${string}${" ".repeat(endPaddingLength)}`;
    return paddedString;
  },
  has (object, key) {
    return Boolean(object[key]);
  },
  invert (object) {
    let newObject = {};    
    for (key in object) {
      newObject[object[key]] = key; 
    }
    return newObject;
  },
  findKey (object, pFunc) {
    for (key in object) {
      let value = object[key];
      if (pFunc(value)) {
        return key;
      }
    }
    return undefined;
  }
}

// Do not write or modify code below this line.
module.exports = _;