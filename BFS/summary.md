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
