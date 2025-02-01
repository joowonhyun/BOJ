const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [n, m] = input; // n은 숫자의 범위(1부터 n까지), m은 선택할 숫자의 개수

let selected = [];
let answer = "";

function dfs(depth) {
  if (depth === m) {
    answer += selected.join(" ") + "\n";
    return;
  }

  for (let i = 1; i <= n; i++) {
    selected.push(i); // 현재 숫자를 선택
    dfs(depth + 1); // 다음 깊이로 재귀 호출
    selected.pop(); // 선택 취소
  }
}

dfs(0);
console.log(answer.trim()); // 마지막 공백 제거 후 출력
