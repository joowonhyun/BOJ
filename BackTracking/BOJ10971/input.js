const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const n = parseInt(input[0]); // 첫 번째 줄에서 n을 숫자로 변환
const w = input.slice(1).map((line) => line.split(" ").map(Number));

let minCost = Number.MAX_VALUE; // 초기값을 최대값으로 설정
const visited = new Array(n).fill(false); // 방문 여부 배열 초기화

function backtrack(currentCity, count, cost) {
  if (count === n) {
    if (w[currentCity][0] > 0) {
      minCost = Math.min(minCost, cost + w[currentCity][0]);
    }
    return;
  }

  for (let nextCity = 0; nextCity < n; nextCity++) {
    if (w[currentCity][nextCity] > 0 && !visited[nextCity]) {
      visited[nextCity] = true; // 도시 방문 표시
      backtrack(nextCity, count + 1, cost + w[currentCity][nextCity]); // 재귀 호출
      visited[nextCity] = false; // 백트래킹
    }
  }
}

visited[0] = true; // 시작 도시 방문
backtrack(0, 1, 0); // 백트래킹 시작
console.log(minCost); // 최소 비용 반환
