const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [n, m] = input; // n은 숫자의 범위(1부터 n까지), m은 선택할 숫자의 개수
let arr = [];

// 1부터 n까지의 숫자를 arr에 추가
for (let i = 1; i <= n; i++) {
  arr.push(i);
}

let visited = new Array(n).fill(false);
let selected = [];
let answer = "";

function dfs(depth) {
  if (depth === m) {
    answer += selected.join(" ") + "\n"; // 선택된 숫자를 공백으로 구분하여 추가
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue; // 이미 선택된 숫자는 건너뜀
    selected.push(arr[i]); // 현재 숫자 선택 (인덱스가 아닌 실제 값)
    visited[i] = true; // 방문 처리
    dfs(depth + 1); // 다음 깊이로 재귀 호출
    selected.pop(); // 선택 취소
    visited[i] = false; // 방문 해제
  }
}

dfs(0);
console.log(answer.trim()); // 마지막 공백 제거 후 출력
