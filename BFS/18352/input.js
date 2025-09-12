const fs = require("fs");

// 입력 처리: 플랫폼에 따라 stdin 또는 파일 읽기
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, K, X] = input[0].split(" ").map(Number);

// 1. 인접 리스트 생성 (노드 1부터 N까지, 0-based 피함)
const adj = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  adj[A].push(B); // 단방향 그래프: A → B 연결
}

// 2. 최단 거리 배열 초기화 (-1: 미방문, X부터 시작해 0)
const distance = Array(N + 1).fill(-1);
distance[X] = 0;

// 3. BFS 큐 초기화 (배열로 큐 구현, shift/pop 사용)
const queue = [X];

// BFS 실행: X에서 시작해 모든 노드까지 최단 거리 계산
while (queue.length > 0) {
  const current = queue.shift(); // 큐에서 현재 노드 꺼냄
  for (const next of adj[current]) {
    if (distance[next] === -1) {
      // 미방문 노드라면
      distance[next] = distance[current] + 1;
      queue.push(next); // 큐에 추가 (level order 유지)
    }
  }
}

// 4. 거리 K인 노드들 수집 (1부터 N까지 순회)
const result = [];
for (let i = 1; i <= N; i++) {
  if (distance[i] === K) {
    result.push(i);
  }
}

// 5. 결과 출력: 없으면 -1, 있으면 노드 목록 (오름차순 자연스러움)
if (result.length === 0) {
  console.log(-1);
} else {
  console.log(result.join("\n"));
}
