//caesarCipher.js
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

export function caesarCipher(str, num) {
  if (typeof str !== "string" || typeof num !== "number" || Number.isNaN(num)) {
    return "";
  }

  const shift = ((num % 26) + 26) % 26;

  return str
    .split("")
    .map((char) => {
      const isUpper = char >= "A" && char <= "Z";
      const index = alphabet.indexOf(char.toLowerCase());

      if (index === -1) return char;

      const newIndex = (index + shift) % 26;
      const newChar = alphabet[newIndex];

      return isUpper ? newChar.toUpperCase() : newChar;
    })
    .join("");
}
