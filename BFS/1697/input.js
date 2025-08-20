const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

const [N, K] = input.map(Number); // 숫자로 변환
const MAX = 100000;

function bfs(start, target) {
  const queue = [];
  const visited = Array(MAX + 1).fill(false);
  queue.push([start, 0]);
  visited[start] = true;

  while (queue.length > 0) {
    const [pos, time] = queue.shift(); //[5, 0]
    if (pos === target) {
      return time;
    }
    for (const next of [pos + 1, pos - 1, pos * 2]) {
      if (next >= 0 && next <= MAX && !visited[next]) {
        visited[next] = true;
        queue.push([next, time + 1]);
      }
    }
  }
}

console.log(bfs(N, K));
