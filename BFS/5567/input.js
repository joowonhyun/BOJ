const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const m = Number(input[1]);

const adj = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < m; i++) {
  const [a, b] = input[i + 2].split(" ").map(Number); // input.slice(2)[i] 대신 이게 더 효율적
  adj[a].push(b);
  adj[b].push(a);
}

const visited = Array(n + 1).fill(false);
visited[1] = true;

let count = 0;

// 1) 레벨1을 방문표시하고 카운트에 추가
const queue = [];
for (const f of adj[1]) {
  if (!visited[f]) {
    visited[f] = true;
    queue.push(f); // 레벨1들을 큐에 넣어 레벨2 탐색 준비
    count++; // 직접 친구는 초대 대상
  }
}

// 2) 레벨1 각각의 이웃(=레벨2)을 세기
while (queue.length > 0) {
  const cur = queue.shift();
  for (const next of adj[cur]) {
    if (!visited[next]) {
      visited[next] = true;
      count++;
    }
  }
}

console.log(count);
