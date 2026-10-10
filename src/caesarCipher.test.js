//caesarCipher.test.js
import { caesarCipher } from "./caesarCipher.js";

describe("caesarCipher", () => {
  test("shifts characters by the given factor", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("preserves letter case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("preserves punctuation and spaces", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("handles shifts larger than alphabet length", () => {
    expect(caesarCipher("abc", 29)).toBe("def");
  });

  test("handles negative shift factors", () => {
    expect(caesarCipher("def", -3)).toBe("abc");
  });

  test("keeps numbers untouched", () => {
    expect(caesarCipher("abc123", 1)).toBe("bcd123");
  });

  test("same string when shift is 0", () => {
    expect(caesarCipher("xyz", 0)).toBe("xyz");
  });

  test("missing or invalid inputs", () => {
    expect(caesarCipher("")).toBe("");
    expect(caesarCipher()).toBe("");
  });
});
