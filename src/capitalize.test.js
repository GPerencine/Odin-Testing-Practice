//capitalize.test.js
import { capitalize } from "./capitalize.js";

describe("capitalize", () => {
  test("lowercase word", () => {
    expect(capitalize("tree")).toBe("Tree");
  });

  test("capitalize the string", () => {
    expect(capitalize("APPLE")).toBe("Apple");
    expect(capitalize("FoReSt")).toBe("Forest");
  });

  test("single character", () => {
    expect(capitalize("a")).toBe("A");
  });

  test("strings starting with numbers or punctuation", () => {
    expect(capitalize("123apple")).toBe("123apple");
    expect(capitalize("!hello")).toBe("!hello");
  });

  test("invalid or empty input", () => {
    expect(capitalize("")).toBe("");
    expect(capitalize()).toBe("");
  });
});
