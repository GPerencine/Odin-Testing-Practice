//analyzeArray.test.js
import { analyzeArray } from "./analyzeArray.js";

describe("analyzeArray", () => {
  test("array of numbers", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("array with a single element", () => {
    expect(analyzeArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  test("empty or invalid inputs", () => {
    expect(analyzeArray("")).toBe("");
    expect(analyzeArray([])).toBe("");
    expect(analyzeArray()).toBe("");
  });
});
