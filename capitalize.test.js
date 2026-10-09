//capitalize.test.js
import { capitalize } from "./capitalize.js";

test("Capitalize Strings", () => {
  expect(capitalize("tree")).toBe("Tree");
  expect(capitalize("APPLE")).toBe("Apple");
  expect(capitalize("FoReSt")).toBe("Forest");
  expect(capitalize("a")).toBe("A");
  expect(capitalize("123apple")).toBe("123apple");
  expect(capitalize("!hello")).toBe("!hello");
  expect(capitalize("")).toBe("");
  expect(capitalize()).toBe("");
});
