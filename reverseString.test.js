//reverseString.test.js
import { reverseString } from "./reverseString.js";
test("Reverse Strings", () => {
  expect(reverseString("tree")).toBe("eert");
  expect(reverseString("hello world")).toBe("dlrow olleh");
  expect(reverseString("123!")).toBe("!321");
  expect(reverseString("")).toBe("");
  expect(reverseString()).toBe("");
});
