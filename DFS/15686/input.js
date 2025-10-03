const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const city = input.slice(1).map((line) => line.split(" ").map(Number));

const houses = [];
const chickens = [];

// 집과 치킨집 좌표 수집
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (city[r][c] === 1) houses.push([r, c]);
    else if (city[r][c] === 2) chickens.push([r, c]);
  }
}

let answer = Infinity;
const selected = []; // 선택한 치킨집의 인덱스 목록

// 현재 선택된 치킨집(selected)에 대해 도시 치킨 거리 계산
function calcCityDistance() {
  let sum = 0;
  for (const [hr, hc] of houses) {
    let minDist = Infinity;
    for (const idx of selected) {
      const [cr, cc] = chickens[idx];
      const d = Math.abs(hr - cr) + Math.abs(hc - cc);
      if (d < minDist) minDist = d;
    }
    sum += minDist;
    // 가지치기: 이미 현재 최솟값보다 커지면 더 이상 계산할 필요 없음
    if (sum >= answer) return Infinity;
  }
  return sum;
}

// 조합 생성 DFS: start 위치부터 남은 치킨집을 골라서 depth가 M이 되면 계산
function dfs(start, depth) {
  if (depth === M) {
    const dist = calcCityDistance();
    if (dist < answer) answer = dist;
    return;
  }

  for (let i = start; i < chickens.length; i++) {
    selected.push(i);
    dfs(i + 1, depth + 1);
    selected.pop();
  }
}

dfs(0, 0);
console.log(answer);
