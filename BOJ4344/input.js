const fs = require("fs");
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
  const inputArr = input[i].trim().split(" ").map(Number);
  const result = inputArr.reduce((acc, cur, idx) => {
    if (idx === 0) {
      return acc;
    }
    return acc + cur;
  }, 0);
  const avg = result / inputArr[0];
  let count = 0;
  inputArr.slice(1).forEach((el) => {
    el > avg ? count++ : count;
  });
  console.log(((count / inputArr.slice(1).length) * 100).toFixed(3) + "%");
}
