export function sumNumbers(parsed) {
  if (parsed.length === 0) return 0;

  const numbers = parsed.map((token) => Number(token));
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);

  return sum;
}
