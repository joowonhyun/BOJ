const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const computer = Number(input[0]);
const N = Number(input[1]);

const graph = Array.from({ length: computer + 1 }, () => []);
const visited = Array(computer + 1).fill(false); // 1차원 visited

for (let i = 0; i < N; i++) {
  const [a, b] = input[i + 2].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let count = 0;

function dfs(node) {
  visited[node] = true;
  for (const next of graph[node]) {
    if (!visited[next]) {
      count++;
      dfs(next);
    }
  }
}

// 1번 컴퓨터에서 시작
dfs(1);

console.log(count);
