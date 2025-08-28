const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const testCaseCount = Number(input[0]); // 첫 줄: 테스트 케이스 개수
let line = 1; // 현재 읽을 줄 번호
let answers = [];

for (let t = 0; t < testCaseCount; t++) {
  // 1. 정점(V), 간선(E) 읽기
  const [V, E] = input[line++].split(" ").map(Number);

  // 2. 그래프 만들기 (인접 리스트)
  const graph = Array.from({ length: V + 1 }, () => []); // 1번부터 V번까지

  for (let i = 0; i < E; i++) {
    const [u, v] = input[line++].split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
  }

  // 3. 각 정점의 색 (0: 아직 없음, 1: A그룹, -1: B그룹)
  const color = Array(V + 1).fill(0);
  let isBipartite = true;

  // 4. 모든 정점을 돌면서 BFS (방문 안 한 곳만)
  for (let start = 1; start <= V; start++) {
    if (color[start] !== 0) continue; // 이미 색칠된 정점은 건너뜀

    // BFS 시작
    const queue = [start];
    color[start] = 1; // 첫 정점은 1번 색으로 시작

    while (queue.length > 0) {
      const node = queue.shift();
      for (const neighbor of graph[node]) {
        if (color[neighbor] === 0) {
          // 아직 색이 없으면 반대 색으로 칠하기
          color[neighbor] = -color[node];
          queue.push(neighbor);
        } else if (color[neighbor] === color[node]) {
          // 이웃이 같은 색이면 이분 그래프가 아님
          isBipartite = false;
          break;
        }
      }
      if (!isBipartite) break; // 더 볼 필요 없으면 종료
    }

    if (!isBipartite) break;
  }

  answers.push(isBipartite ? "YES" : "NO");
}

console.log(answers.join("\n"));
