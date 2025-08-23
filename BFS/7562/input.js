const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
let index = 1;
const moves = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];

function bfs(l, start, end) {
  const queue = [];
  const visited = Array.from({ length: l }, () => Array(l).fill(false));
  const [x1, y1] = start;
  const [x2, y2] = end;

  queue.push([x1, y1, 0]);
  visited[x1][y1] = true;

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift();
    if (x === x2 && y === y2) {
      return dist;
    }
    for (const [dx, dy] of moves) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && ny >= 0 && nx < l && ny < l && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }
  return 0; // 도달 못 하면 0
}

let output = "";

for (let t = 0; t < T; t++) {
  const l = parseInt(input[index++], 10);
  const start = input[index++].split(" ").map(Number);
  const end = input[index++].split(" ").map(Number);

  if (start[0] === end[0] && start[1] === end[1]) {
    output += "0\n";
    continue;
  }

  output += bfs(l, start, end) + "\n";
}

console.log(output.trim());
