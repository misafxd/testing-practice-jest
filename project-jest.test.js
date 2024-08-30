import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analizeArray,
} from "./project-jest";

describe("takes a string and returns it with the first character capitalized", () => {
  test("should return Puppy when take puppy", () => {
    expect(capitalize("puppy")).toBe("Puppy");
  });

  test("should return Master", () => {
    expect(capitalize("master")).toBe("Master");
  });
});

describe("takes a string and returns it reversed", () => {
  test("return yks eht ni senih nus eht when input is The sun shines in the sky", () => {
    expect(reverseString("the sun shines in the sky")).toBe(
      "yks eht ni senihs nus eht"
    );
  });

  test("return duolc when the input is cloud", () => {
    expect(reverseString("cloud")).toBe("duolc");
  });
});

describe("basic operations for calculator object", () => {
  test("1 + 4 equals 5", () => {
    expect(calculator.add(1, 4)).toBe(5);
  });

  test("3 + 5 equals 8", () => {
    expect(calculator.add(3, 5)).toBe(8);
  });

  test("7 - 2 equals 5", () => {
    expect(calculator.subtract(7, 2)).toBe(5);
  });

  test("5 - 8 equals -3", () => {
    expect(calculator.subtract(5, 8)).toBe(-3);
  });

  test("100 / 2 equals 50", () => {
    expect(calculator.divide(100, 2)).toBe(50);
  });

  test("34 / -2 equals -17", () => {
    expect(calculator.divide(34, -2)).toBe(-17);
  });

  test("7 x 8 equals 56", () => {
    expect(calculator.multiply(7, 8)).toBe(56);
  });
  test("-5 x -8 equals 40", () => {
    expect(calculator.multiply(-5, -8)).toBe(40);
  });
});

describe("takes a string and a shift factor and returns it with each character 'shifted'", () => {
  test("xyz and 3 should return abc when shift factor equals 3", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("heLLo should return tqXXa when shift factor equals 12", () => {
    expect(caesarCipher("heLLo!", 12)).toBe("tqXXa!");
  });

  test("World should return Ldgas when shift factor equals 15", () => {
    expect(caesarCipher("World", 15)).toBe("Ldgas");
  });

  test("Only change words, Hello, World! return Khoor, Zruog! when shift factor equals 3", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});

describe("takes an array of numbers and returns an object", () => {
  test("return properties", () => {
    let object = analizeArray([1, 8, 3, 4, 2, 6]);
    let expected = {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    };
    expect(object).toEqual(expected);
  });

  test("return properties", () => {
    let object = analizeArray([9, 78, 28, 10, 89, 2]);
    let expected = {
      average: 36,
      min: 2,
      max: 89,
      length: 6,
    };
    expect(object).toEqual(expected);
  });
});
