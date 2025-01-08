const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

/* 세로 한줄씩 입력받을때 배열 하나로 나타내는 코드 */
let data = input.map((item) => +item);
console.log(data);