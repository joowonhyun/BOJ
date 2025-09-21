const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
let index = 1;

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

let output = "";

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[index++].split(" ").map(Number); // M은 가로 / N은 세로
  const field = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  function dfs(y, x) {
    visited[y][x] = true;
    for (let dir = 0; dir < 4; dir++) {
      const ny = y + dy[dir];
      const nx = x + dx[dir];
      if (ny >= 0 && nx >= 0 && ny < N && nx < M) {
        if (!visited[ny][nx] && field[ny][nx] === 1) {
          dfs(ny, nx);
        }
      }
    }
  }

  for (let i = 0; i < K; i++) {
    const [x, y] = input[index++].split(" ").map(Number);
    field[y][x] = 1;
  }
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j] && field[i][j] === 1) {
        dfs(i, j);
        count++;
      }
    }
  }
  output += count + "\n";
}
console.log(output.trim());
