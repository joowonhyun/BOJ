const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let index = 0;
const K = Number(input[index++]); // 테스트 케이스 개수

function bfs(start, graph, colors) {
  const queue = [start];
  colors[start] = 1; // 시작 정점을 1번 색으로 칠함

  while (queue.length) {
    const node = queue.shift();
    for (const next of graph[node]) {
      if (colors[next] === 0) {
        colors[next] = -colors[node]; // 반대 색으로 칠하기
        queue.push(next);
      } else if (colors[next] === colors[node]) {
        return false; // 같은 색이라면 이분 그래프가 아님
      }
    }
  }
  return true;
}

let result = [];

for (let t = 0; t < K; t++) {
  const [V, E] = input[index++].split(" ").map(Number);
  const graph = Array.from({ length: V + 1 }, () => []);
  const colors = Array(V + 1).fill(0);

  for (let i = 0; i < E; i++) {
    const [u, v] = input[index++].split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
  }

  let isBipartite = true;

  for (let i = 1; i <= V; i++) {
    if (colors[i] === 0) {
      if (!bfs(i, graph, colors)) {
        isBipartite = false;
        break;
      }
    }
  }

  result.push(isBipartite ? "YES" : "NO");
}

console.log(result.join("\n"));
