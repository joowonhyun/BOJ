const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const [S, X, Y] = input[N + 1].split(" ").map(Number);
const lab = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 1. 초기 바이러스 수집 및 정렬
let queue = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (lab[i][j] !== 0) {
      queue.push([lab[i][j], 0, i, j]); // [번호, 시간, x, y]
    }
  }
}
queue.sort((a, b) => a[0] - b[0]); // 번호순 정렬

// 2. BFS
while (queue.length > 0) {
  const [virus, time, x, y] = queue.shift();
  if (time === S) break;

  for (let dir = 0; dir < 4; dir++) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (nx >= 0 && nx < N && ny >= 0 && ny < N && lab[nx][ny] === 0) {
      lab[nx][ny] = virus;
      queue.push([virus, time + 1, nx, ny]);
    }
  }
}

console.log(lab[X - 1][Y - 1]);
