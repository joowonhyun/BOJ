const fs = require("fs");
const [n, input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = n.trim().split(" ").map(Number);
const heights = input.trim().split(" ").map(Number);

let start = 0;
let end = Math.max(...heights);
let result = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  
  // 잘린 나무의 총 길이 계산
  const totalCut = heights.reduce((acc, height) => {
    return acc + Math.max(0, height - mid) // 나무가 mid보다 클 때만 잘린 부분의 길이를 계산
  },0);

  if (totalCut >= M) {
    result = mid; // 가능한 높이 저장
    start = mid + 1; // 더 높은 높이 시도
  } else {
    end = mid - 1; // 높이를 낮추기
  }
}

console.log(result); // 최종 높이 출력