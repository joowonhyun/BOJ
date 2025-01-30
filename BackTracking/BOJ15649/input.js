const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [n, m] = input; // n은 숫자의 범위(1부터 n까지), m은 선택할 숫자의 개수
let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(i);
}
let visited = new Array(n).fill(false);
let selected = [];
let answer = "";

function dfs(arr, depth) {
  if (depth === m) {
    for (const i of selected) {
      answer += arr[i] + " "; // 선택된 숫자를 바로 answer에 추가
    }
    answer += "\n"; // 줄바꿈 추가
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue; // 이미 선택된 숫자는 건너뜀
    selected.push(i); // 현재 숫자 선택
    visited[i] = true; // 방문 처리
    dfs(arr, depth + 1); // 다음 깊이로 재귀 호출
    selected.pop(); // 선택 취소
    visited[i] = false; // 방문 해제
  }
}
dfs(arr, 0);
console.log(answer);
