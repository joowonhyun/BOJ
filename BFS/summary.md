# BFS(너비 우선 탐색)에 대한 이해

## 1. BFS란?

그래프나 트리에서 시작점에서 가까운 노드부터 차례대로 탐색하는 방법이에요.
즉, "가까운 것 → 조금 더 먼 것 → 더 먼 것…" 순서대로 방문합니다.
이 때문에 최단 거리(간선 수 기준) 문제에 자주 쓰입니다.

## 2. 기본 구조

BFS는 보통 이렇게 구성됩니다:

- **큐(queue)**를 사용 → "차례대로 방문할 노드"를 저장.
- **visited 배열(혹은 집합)**을 사용 → "이미 방문한 노드"를 체크.

## 3. 자바스크립트 예제 (그래프 탐색)

```javascript
function bfs(graph, start) {
  let queue = [start]; // 시작 노드를 큐에 넣음
  let visited = new Set(); // 방문한 노드 기록
  visited.add(start);

  while (queue.length > 0) {
    let node = queue.shift(); // 큐에서 꺼내기 (FIFO)
    console.log(node); // 방문 처리 (출력)

    for (let next of graph[node]) {
      // 인접 노드 확인
      if (!visited.has(next)) {
        // 아직 방문 안했으면
        queue.push(next); // 큐에 추가
        visited.add(next); // 방문 체크
      }
    }
  }
}

// 그래프 (인접 리스트)
const graph = {
  1: [2, 3],
  2: [4, 5],
  3: [6],
  4: [],
  5: [],
  6: [],
};

bfs(graph, 1);
// 출력:
// 1
// 2
// 3
// 4
// 5
// 6
```

## 4. 실행 흐름 (시뮬레이션)

bfs(graph, 1) 실행 시:

초기: queue = [1], visited = {1}
1 꺼냄 → 2, 3 방문 → queue = [2, 3], visited = {1, 2, 3}
2 꺼냄 → 4, 5 방문 → queue = [3, 4, 5], visited = {1, 2, 3, 4, 5}
3 꺼냄 → 6 방문 → queue = [4, 5, 6], visited = {1, 2, 3, 4, 5, 6}
4 꺼냄 → 인접 노드 없음
5 꺼냄 → 인접 노드 없음
6 꺼냄 → 인접 노드 없음 👉 탐색 종료

## 5. 유형

가. 일반 그래프 (인접리스트 + 1차원 visited)

```javascript
// 예: 정점이 5개인 그래프
const N = 5;
const adj = Array.from({ length: N + 1 }, () => []); // 인접리스트
const visited = Array(N + 1).fill(false); // 1차원 visited
```

1. 정점 번호가 1 ~ N일 때, visited[i]는 i번 노드를 방문했는지 여부만 기록
2. 주로 "노드 간 연결 관계"가 그래프(edge) 형태로 주어지는 문제에서 사용.
   (예시: 친구 관계 그래프, 트리 탐색, 네트워크 연결 문제 등.)

나. 격자 그래프 (2차원 배열 + 2차원 visited)

```javascript
M = 가로 길이 = x축 = 열(column) 개수
N = 세로 길이 = y축 = 행(row) 개수

1) 즉, field[y][x]로 접근할 때:
y (0 ~ N-1) → 행(세로, 위에서 아래)
x (0 ~ M-1) → 열(가로, 왼쪽에서 오른쪽)

2)배열 선언할 때
Array.from({ length: N }, () => Array(M).fill(0));

3) 세로(N) 만큼의 행을 만듦 + 각 행 안에 가로(M) 만큼의 열을 채움

즉, 최종적으로 N행 × M열의 2차원 배열

const visited = Array.from({ length: N }, () => Array(M).fill(false));

1. 격자는 좌표 (x, y)로 노드가 표현됨.
2. visited[x][y]는 해당 좌표를 방문했는지 여부를 기록.
(주로 "지도, 미로, 치즈, 토마토" 같은 격자 탐색 문제에서 사용)

BFS 시 dx, dy로 상하좌우를 탐색해야 하므로 2차원이 필요!!

- 인접리스트 + 1차원 visited → 일반 그래프 문제 (정점/간선 기반).
- 격자 + 2차원 visited → 지도/미로/격자 문제 (좌표 기반).
```
