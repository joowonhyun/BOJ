const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 입력 처리
const [N, L, R] = input[0].split(" ").map(Number);
const grid = [];
for (let i = 0; i < N; i++) {
  grid.push(input[i + 1].split(" ").map(Number));
}

// 방향 배열 (상, 하, 좌, 우)
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

// 인구 이동 일수 계산
let days = 0;

while (true) {
  let moved = false; // 이번 턴에 인구 이동이 발생했는지
  const visited = Array.from({ length: N }, () => Array(N).fill(false));

  // 모든 칸을 순회
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j]) continue;

      // BFS로 연합 형성
      const queue = [[i, j]];
      const union = [[i, j]]; // 연합에 속한 좌표들
      let totalPopulation = grid[i][j]; // 연합의 총 인구수
      visited[i][j] = true;

      let qIndex = 0; // 큐의 현재 인덱스
      while (qIndex < queue.length) {
        const [cy, cx] = queue[qIndex];
        qIndex++;

        // 4방향 탐색
        for (let d = 0; d < 4; d++) {
          const ny = cy + dy[d];
          const nx = cx + dx[d];

          // 유효한 좌표인지 확인
          if (ny >= 0 && ny < N && nx >= 0 && nx < N && !visited[ny][nx]) {
            const diff = Math.abs(grid[cy][cx] - grid[ny][nx]);
            // 인구 차이가 L 이상 R 이하라면 연합에 추가
            if (diff >= L && diff <= R) {
              queue.push([ny, nx]);
              union.push([ny, nx]);
              totalPopulation += grid[ny][nx];
              visited[ny][nx] = true;
            }
          }
        }
      }

      // 연합에 2개 이상의 나라가 포함된 경우 인구 이동
      if (union.length > 1) {
        moved = true;
        const newPopulation = Math.floor(totalPopulation / union.length);
        // 연합 내 모든 나라의 인구수 갱신
        for (const [y, x] of union) {
          grid[y][x] = newPopulation;
        }
      }
    }
  }

  // 인구 이동이 없으면 종료
  if (!moved) break;
  days++; // 하루 증가
}

// 결과 출력
console.log(days);
