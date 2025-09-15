const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);
const [A, B] = input;

function bfs(A, B) {
  const queue = [[A, 1]]; // [값, 연산 횟수(+1)]

  while (queue.length > 0) {
    const [cur, cnt] = queue.shift();
    if (cur === B) return cnt;
    let next1 = cur * 2;
    if (next1 <= B) queue.push([next1, cnt + 1]);
    let next2 = cur * 10 + 1;
    if (next2 <= B) queue.push([next2, cnt + 1]);
  }

  return -1; // 만들 수 없는 경우
}

console.log(bfs(A, B));
