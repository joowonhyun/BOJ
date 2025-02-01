const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const n = parseInt(input[0]); // 첫 번째 줄에서 n을 숫자로 변환
const w = input.slice(1).map((line) => line.split(" ").map(Number));

let MIN_CONST = Number.MAX_VALUE;
const visited = new Array(n).fill(false);

function backtrack(currentCity, count, cost) {
  if (count === n) {
    if (w[currentCity][0] > 0) {
      MIN_CONST = Math.min(MIN_CONST, cost + w[currentCity][0]); // 누적 비용 + 시작지점으로 돌아가는 비용
    }
    return;
  }

  for (let i = 0; i < n; i++) {
    if (w[currentCity][i] > 0 && !visited[i]) {
      visited[i] = true;
      backtrack(i, count + 1, cost + w[currentCity][i]);
      visited[i] = false;
    }
  }
}
visited[0] = true; // 시작 도시 방문
backtrack(0, 1, 0); // 백트래킹 시작
console.log(MIN_CONST); // 최소 비용 반환
