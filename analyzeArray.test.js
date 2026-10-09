//analyzeArray.test.js
import { analyzeArray } from "./analyzeArray.js";
test("Analyze Array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
  expect(analyzeArray("")).toBe("");
  expect(analyzeArray([])).toBe("");
  expect(analyzeArray()).toBe("");
});
