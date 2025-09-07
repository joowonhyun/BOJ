const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

const [s, t] = input.map(Number);

function bfs(start, target) {
  if (start === target) return "0";

  const ops = [
    { op: "*", calc: (x) => x * x },
    { op: "+", calc: (x) => x + x },
    { op: "-", calc: () => 0 },
    { op: "/", calc: (x) => (x !== 0 ? 1 : null) },
  ];

  const visited = new Set();
  const queue = [{ value: start, path: "" }];
  visited.add(start);

  while (queue.length) {
    const { value, path } = queue.shift();

    for (const { op, calc } of ops) {
      const next = calc(value);
      if (next === null || visited.has(next)) continue;

      if (next === target) return path + op;

      visited.add(next);
      queue.push({ value: next, path: path + op });
    }
  }

  return "-1";
}

console.log(bfs(s, t));
