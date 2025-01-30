const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let N = Number(input);
let arr = new Array(N).fill(0).map((_, i) => i + 1);
let selected = [];
let visited = new Array(N).fill(false);
let answer = "";

function dfs(depth) {
  /* ====== 출력 ====== */
  if (depth === N) {
    answer += selected.join(" ") + "\n"; // 실제 선택된 숫자를 출력
    return;
  }
  /* ====== 출력 ====== */

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(arr[i]); // 인덱스 대신 실제 값을 추가
    visited[i] = true;
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(answer);
