const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n")
  .map(Number);

const testCase = input[0];

for (let tc = 1; tc <= testCase; tc++) {
  let n = input[tc];
  let arr = [];

  for (let j = 1; j <= n; j++) {
    arr.push(j);
  }

  dfs([], 0, n, arr);
  console.log();
}

function dfs(result, depth, n, arr) {
  if (depth === n - 1) {
    let str = "";
    for (let i = 0; i < n - 1; i++) {
      str += arr[i] + result[i]; // 숫자와 연산자를 결합
    }
    str += arr[n - 1]; // 마지막 숫자 추가

    // eval 대신 직접 계산하는 방법 구현
    let current = calculate(str);
    if (current === 0) {
      console.log(str);
    }
    return;
  }

  for (const x of [" ", "+", "-"]) {
    result.push(x);
    dfs(result, depth + 1, n, arr);
    result.pop();
  }
}

function calculate(expression) {
  // 공백을 제거
  expression = expression.replace(/\s/g, "");

  // 간단한 수식 계산 로직 구현
  return new Function("return " + expression)();
}
