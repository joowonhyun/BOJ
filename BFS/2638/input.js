const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
let grid = input.slice(1).map((row) => row.split(" ").map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfsAir() {
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  const queue = [[0, 0]];
  visited[0][0] = true;

  // 이전 외부 공기(-1) 제거
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === -1) grid[i][j] = 0;
    }
  }

  grid[0][0] = -1;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (!visited[nx][ny] && grid[nx][ny] === 0) {
        visited[nx][ny] = true;
        grid[nx][ny] = -1;
        queue.push([nx, ny]);
      }
    }
  }
}

function meltCheese() {
  const toMelt = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === 1) {
        let airCount = 0;
        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];
          if (grid[nx][ny] === -1) airCount++;
        }
        if (airCount >= 2) toMelt.push([i, j]);
      }
    }
  }

  for (const [x, y] of toMelt) {
    grid[x][y] = 0; // 치즈 녹임
  }

  return toMelt.length > 0;
}

let time = 0;

while (true) {
  bfsAir(); // 외부 공기 표시
  if (!meltCheese()) break; // 녹일 치즈 없으면 종료
  time++;
}

console.log(time);
