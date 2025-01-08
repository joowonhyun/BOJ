const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

/*입력값의 첫 행을 배열로 만듦(0, 1, 2 ...) */
input = input[0];

/* 자료형을 정수형태로 변환시키는 코드 */
input = input.split(' ').map((item) => +item);
console.log(input);