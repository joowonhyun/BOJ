const fs = require("fs");
const [n, input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const soldiers = input.trim().split(" ").map(Number).reverse();

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    arr[mid] >= target ? (end = mid) : (start = mid + 1);
  }
  return end;
}

let d = [0];

for (const x of soldiers) {
  if (d.at(-1) < x) {
    d.push(x);
  }
   else {
    let index = lowerBound(d, x, 0, d.length);
    d[index] = x;
   }
}
console.log(n - (d.length - 1))