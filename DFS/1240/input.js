const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let index = 1;
const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
let distance = Array(N + 1).fill(-1);

for (let i = 0; i < N - 1; i++) {
  const [a, b, dist] = input[index++].split(" ").map(Number);
  graph[a].push([b, dist]);
  graph[b].push([a, dist]);
}

function dfs(node, dist) {
  if (distance[node] !== -1) return;
  distance[node] = dist;
  for (const [y, cost] of graph[node]) {
    dfs(y, dist + cost);
  }
}

for (let i = 0; i < M; i++) {
  const [start, end] = input[index++].split(" ").map(Number);
  distance.fill(-1);
  dfs(start, 0);
  console.log(distance[end]);
}
