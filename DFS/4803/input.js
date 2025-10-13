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
      /**
       * DFS 함수는 dfs(현재노드, 부모노드) 형태로 호출되고,
       * 이 parent 인자는 “바로 나를 호출한 노드(이전 노드)”를 뜻한다.
       * 따라서, next !== parent 조건은 “부모가 아닌데 이미 방문된 노드 → 사이클”을 잡아내기 위한 것.
       */
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
