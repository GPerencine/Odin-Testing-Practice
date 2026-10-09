//analyzeArray.js
export function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return "";
  return {
    average: arr.reduce((prev, curr) => prev + curr) / arr.length,
    min: arr.reduce((prev, curr) => (curr < prev ? curr : prev)),
    max: arr.reduce((prev, curr) => (curr > prev ? curr : prev)),
    length: arr.length,
  };
}
