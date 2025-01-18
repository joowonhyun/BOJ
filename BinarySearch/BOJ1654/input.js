const fs = require('fs');
const input = fs
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split("\n")

const [K, N] = input[0].trim().split(" ").map(Number);
const inputArr = input.slice(1).map(Number); 

let start = 1;
let end = Math.max(...inputArr);
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  const totalCuts = inputArr.reduce((acc, cur) => {
    if (cur > mid) {
      return acc + Math.floor(cur / mid);
    }
    return acc;
  }, 0);

  if (totalCuts >= N) {
    result = mid;
    start = mid + 1
  } else {
    end = mid - 1;
  }
}
console.log(result);