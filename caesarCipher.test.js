//caesarCipher.test.js
import { caesarCipher } from "./caesarCipher.js";
test("Caesar Cipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(caesarCipher("abc", 29)).toBe("def");
  expect(caesarCipher("def", -3)).toBe("abc");
  expect(caesarCipher("abc123", 1)).toBe("bcd123");
  expect(caesarCipher("xyz", 0)).toBe("xyz");
  expect(caesarCipher("")).toBe("");
  expect(caesarCipher()).toBe("");
});
