//reverseString.test.js
import { reverseString } from "./reverseString.js";

describe("reverseString", () => {
  test("reverses a word", () => {
    expect(reverseString("tree")).toBe("eert");
  });

  test("reverses phrases with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  test("reverses strings with numbers and punctuation", () => {
    expect(reverseString("123!")).toBe("!321");
  });

  test("empty or missing input", () => {
    expect(reverseString("")).toBe("");
    expect(reverseString()).toBe("");
  });
});
