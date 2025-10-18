export function parseInput(input) {
  if (input === "") return [];

  let separator = /,|:/;
  const customSeparatorRegex = /^\/\/(.+)\\n/;
  const hasDefaultSeparator = input.includes(",") || input.includes(":");
  const hasCustomSeparatorFormat = customSeparatorRegex.test(input);

  // 올바른 커스텀 구분자 형식이 있는 경우
  if (hasCustomSeparatorFormat) {
    const match = input.match(customSeparatorRegex);
    separator = new RegExp(match[1]);
    input = input.replace(customSeparatorRegex, "");
  }
  // 올바른 커스텀 구분자 형식도 없고, 기본 구분자도 없는 경우
  else if (!hasDefaultSeparator) {
    throw new Error("커스텀 구분자 형식이 올바르지 않습니다");
  }

  const parsed = input.split(separator);

  return parsed;
}
