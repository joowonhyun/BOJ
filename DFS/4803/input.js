const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let caseNum = 1;
let idx = 0;

while (true) {
  const [n, m] = input[idx++].split(" ").map(Number);
  if (n === 0 && m === 0) break;

  const graph = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < m; i++) {
    const [a, b] = input[idx++].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = Array(n + 1).fill(false);
  let treeCount = 0;

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      let isTree = true;
      // dfs를 각 컴포넌트 시작 시점에 선언 -> isTree에 접근 가능
      function dfs(node, parent) {
        visited[node] = true;
        for (let next of graph[node]) {
          if (!visited[next]) {
            dfs(next, node); // dfs(현재노드, 부모노드)
          } else if (next !== parent) {
            // 부모가 아닌 이미 방문된 정점을 만나면 사이클
            isTree = false;
          }
        }
      }

      dfs(i, -1);
      if (isTree) treeCount++;
    }
  }

  if (treeCount === 0) {
    console.log(`Case ${caseNum}: No trees.`);
  } else if (treeCount === 1) {
    console.log(`Case ${caseNum}: There is one tree.`);
  } else {
    console.log(`Case ${caseNum}: A forest of ${treeCount} trees.`);
  }

  caseNum++;
}
