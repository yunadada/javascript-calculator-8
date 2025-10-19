import { Console } from "@woowacourse/mission-utils";
import { parseInput } from "./Parser.js";
import { validateInput } from "./Validator.js";
import { sumNumbers } from "./Calculator.js";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해주세요.\n"
      );

      // 입력 검증
      const parsed = parseInput(input);

      // 유효성 검증
      const validated = validateInput(parsed);

      // 합계 계산
      const result = sumNumbers(validated);

      // 결과 출력
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
