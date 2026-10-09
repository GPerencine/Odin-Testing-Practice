//calculator.test.js
import { calculator } from "./calculator.js";
describe("Calculator", () => {
  test("add", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(-1, 5)).toBe(4);
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(calculator.add(1, "2")).toBe("");
    expect(calculator.add(1)).toBe("");
    expect(calculator.add("")).toBe("");
    expect(calculator.add()).toBe("");
  });

  test("subtract", () => {
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.subtract(2, 5)).toBe(-3);
    expect(calculator.subtract(2, -5)).toBe(7);
    expect(calculator.subtract(5, "2")).toBe("");
    expect(calculator.subtract(5)).toBe("");
    expect(calculator.subtract("")).toBe("");
    expect(calculator.subtract()).toBe("");
  });

  test("divide", () => {
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.divide(5, 0)).toBe("");
    expect(calculator.divide(5, "2")).toBe("");
    expect(calculator.divide(5)).toBe("");
    expect(calculator.divide("")).toBe("");
    expect(calculator.divide()).toBe("");
  });

  test("multiply", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(2, -3)).toBe(-6);
    expect(calculator.multiply(2, "3")).toBe("");
    expect(calculator.multiply(5)).toBe("");
    expect(calculator.multiply("")).toBe("");
    expect(calculator.multiply()).toBe("");
  });
});
