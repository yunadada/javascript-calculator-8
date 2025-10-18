export function validateInput(parsed) {
  if (parsed.length === 0) return [];

  // 숫자로 변환 불가능한 값이 있는지 검사
  const invalidTokens = parsed.filter((token) => Number.isNaN(Number(token)));
  if (invalidTokens.length > 0) {
    throw new Error("숫자 외의 값을 입력할 수 없습니다");
  }

  // 음수값이 있는지 검사
  const negatives = parsed.filter((token) => Number(token) < 0);
  if (negatives.length > 0) {
    throw new Error("음수를 입력할 수 없습니다");
  }

  return parsed;
}
