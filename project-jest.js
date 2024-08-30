function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

function caesarCipher(str, shiftFactor) {
  const shift = (charCode, base, limit) => {
    const shiftedCode = charCode + shiftFactor;
    if (shiftedCode > limit) {
      return String.fromCharCode(base + (shiftedCode - limit - 1));
    }
    if (shiftedCode < base) {
      return String.fromCharCode(limit - (base - shiftedCode - 1));
    }
    return String.fromCharCode(shiftedCode);
  };

  return str
    .split("")
    .map((char) => {
      const charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        return shift(charCode, 65, 90);
      }
      if (charCode >= 97 && charCode <= 122) {
        return shift(charCode, 97, 122);
      }
      return char;
    })
    .join("");
}

function analizeArray(array) {
  let sum = array.reduce((sum, current) => (sum += current), 0);
  let size = array.length;
  return {
    average: sum / size,
    min: Math.min(...array),
    max: Math.max(...array),
    length: size,
  };
}
export { capitalize, reverseString, calculator, caesarCipher, analizeArray };
