const fs = require('fs');
const [n, input, m]= fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split("\n");
const inputArr = input.trim().split(" ").map(Number); 

const max = Math.max(...inputArr); // 최대 요청 금액

const getTotalSum = (arr) => {
    return arr.reduce((acc, cur) => acc + cur, 0);
}

const totalSum = getTotalSum(inputArr);

if (totalSum <= m) {
    console.log(max);
} else {
    let start = 0; // 상한액의 시작
    let end = max; // 상한액의 끝
    let result = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2); // 현재의 중간점 (상한액)
        const allocated = inputArr.reduce((acc, cur) => acc + Math.min(cur, mid), 0); // 예산 배정 계산

        if (allocated <= m) {
            result = mid; // 가능한 상한액을 저장
            start = mid + 1; // 더 높은 상한액을 시도
        } else {
            end = mid - 1; // 상한액을 낮추기
        }
    }

    console.log(result); // 최종 상한액 출력
}