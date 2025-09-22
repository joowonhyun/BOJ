const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let index = 1;
const [N, M] = input[0].split(" ").map(Number); // 노드 개수 N, 쌍의 개수 M

const graph = Array.from({ length: N + 1 }, () => []);
let visited = Array(N + 1).fill(false); // 1차원 visited
let distance = Array(N + 1).fill(-1);

for (let i = 0; i < N - 1; i++) {
  const [x, y, cost] = input[index++].split(" ").map(Number);
  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}
function dfs(x, dist) {
  if (visited[x]) return;
  visited[x] = true;
  distance[x] = dist;
  for (let [y, cost] of graph[x]) {
    dfs(y, dist + cost);
  }
}

for (let i = 0; i < M; i++) {
  const [x, y] = input[index++].split(" ").map(Number);

  visited.fill(false); // 매 쿼리마다 초기화
  distance.fill(-1);
  dfs(x, 0);
  console.log(distance[y]);
}
