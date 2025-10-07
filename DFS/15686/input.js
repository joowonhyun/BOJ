const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const city = input.slice(1).map((line) => line.split(" ").map(Number));

const houses = [];
const chickens = [];

for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (city[r][c] === 1) houses.push([r, c]);
    else if (city[r][c] === 2) chickens.push([r, c]);
  }
}

// -------------------- 전역 변수 --------------------
let minCityDist = Infinity; // 결과값 (도시의 최소 치킨 거리)
const selected = []; // 선택된 치킨집 인덱스 저장

// -------------------- DFS 정의 --------------------
function dfs(start, depth) {
  // ✅ [1] M개의 치킨집을 다 골랐다면
  if (depth === M) {
    let totalDist = 0; // 도시 전체 치킨 거리

    // 각 집마다 가장 가까운 치킨집 찾기
    for (const [hr, hc] of houses) {
      let minDist = Infinity;

      for (const idx of selected) {
        const [cr, cc] = chickens[idx];
        const dist = Math.abs(hr - cr) + Math.abs(hc - cc);
        if (dist < minDist) minDist = dist; // 더 가까운 치킨집 갱신
      }

      totalDist += minDist;
      // 이미 최소값보다 크면 더 계산할 필요 없음 (가지치기)
      if (totalDist >= minCityDist) break;
    }

    // 최소값 갱신
    if (totalDist < minCityDist) {
      minCityDist = totalDist;
    }
    return; // 끝났으면 재귀 종료
  }

  // ✅ [2] 아직 M개를 다 고르지 않았다면 → 다음 치킨집 고르기
  for (let i = start; i < chickens.length; i++) {
    selected.push(i); // 현재 치킨집 선택
    dfs(i + 1, depth + 1); // 다음 단계로 (다음 치킨집 고르기)
    selected.pop(); // 선택 해제 (백트래킹)
  }
}

// -------------------- 실행 --------------------
dfs(0, 0);
console.log(minCityDist);
