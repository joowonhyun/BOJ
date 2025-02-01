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
    answer += selected.join(" ") + "\n"; // 선택된 숫자를 공백으로 구분하여 추가
    return;
  }

  for (let i = 1; i <= n; i++) {
    // selected가 비어있지 않다면, 마지막 숫자보다 큰 숫자만 선택
    if (selected.length > 0 && i <= selected.at(-1)) continue;
    selected.push(i); // 현재 숫자를 선택
    dfs(depth + 1); // 다음 깊이로 재귀 호출
    selected.pop(); // 선택 취소
  }
}

dfs(0);
console.log(answer.trim()); // 마지막 공백 제거 후 출력
