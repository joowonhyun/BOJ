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

for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (city[r][c] === 1) houses.push([r, c]);
    else if (city[r][c] === 2) chickens.push([r, c]);
  }
}

let answer = Infinity;
const selected = [];

function dfs(start, depth) {
  if (depth === M) {
    // 여기서 도시 치킨 거리 직접 계산
    let sum = 0;
    for (const [hr, hc] of houses) {
      let minDist = Infinity;
      for (const idx of selected) {
        const [cr, cc] = chickens[idx];
        const d = Math.abs(hr - cr) + Math.abs(hc - cc);
        if (d < minDist) minDist = d;
      }
      sum += minDist;
      if (sum >= answer) break; // 가지치기
    }
    if (sum < answer) answer = sum;
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
