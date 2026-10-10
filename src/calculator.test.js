//calculator.test.js
import { calculator } from "./calculator.js";

describe("calculator", () => {
  describe("add", () => {
    test("adds two positive numbers", () => {
      expect(calculator.add(1, 2)).toBe(3);
    });

    test("adds negative and positive numbers", () => {
      expect(calculator.add(-1, 5)).toBe(4);
    });

    test("handles float numbers", () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test("invalid inputs", () => {
      expect(calculator.add(1, "2")).toBe("");
      expect(calculator.add(1)).toBe("");
      expect(calculator.add("")).toBe("");
      expect(calculator.add()).toBe("");
    });
  });

  describe("subtract", () => {
    test("subtracts positive numbers", () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });

    test("subtracting larger from smaller", () => {
      expect(calculator.subtract(2, 5)).toBe(-3);
    });

    test("subtracts negative numbers", () => {
      expect(calculator.subtract(2, -5)).toBe(7);
    });

    test("invalid inputs", () => {
      expect(calculator.subtract(5, "2")).toBe("");
      expect(calculator.subtract(5)).toBe("");
      expect(calculator.subtract("")).toBe("");
      expect(calculator.subtract()).toBe("");
    });
  });

  describe("divide", () => {
    test("divides two numbers", () => {
      expect(calculator.divide(6, 2)).toBe(3);
    });

    test("dividing by zero", () => {
      expect(calculator.divide(5, 0)).toBe("");
    });

    test("invalid inputs", () => {
      expect(calculator.divide(5, "2")).toBe("");
      expect(calculator.divide(5)).toBe("");
      expect(calculator.divide("")).toBe("");
      expect(calculator.divide()).toBe("");
    });
  });

  describe("multiply", () => {
    test("multiplies positive numbers", () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test("multiplies with negative numbers", () => {
      expect(calculator.multiply(2, -3)).toBe(-6);
    });

    test("invalid inputs", () => {
      expect(calculator.multiply(2, "3")).toBe("");
      expect(calculator.multiply(5)).toBe("");
      expect(calculator.multiply("")).toBe("");
      expect(calculator.multiply()).toBe("");
    });
  });
});
