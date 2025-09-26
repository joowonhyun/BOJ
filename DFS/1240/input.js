const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let index = 1;
const [N, M] = input[0].split(" ").map(Number); // 노드 개수 N, 쌍의 개수 M

const graph = Array.from({ length: N + 1 }, () => []);
let distance = Array(N + 1).fill(-1);

for (let i = 0; i < N - 1; i++) {
  const [x, y, cost] = input[index++].split(" ").map(Number);
  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}

function dfs(x, dist) {
  // 아직 방문하지 않은 경우만 처리
  if (distance[x] !== -1) return;

  distance[x] = dist;

  for (let [y, cost] of graph[x]) {
    if (distance[y] === -1) {
      dfs(y, dist + cost);
    }
  }
}

for (let i = 0; i < M; i++) {
  const [x, y] = input[index++].split(" ").map(Number);

  distance.fill(-1); // 초기화 (방문하지 않음을 -1로 표시)
  dfs(x, 0); // x에서 시작해 거리 계산
  console.log(distance[y]);
}
