const fs = require("fs");
const [n, numberCard, m, problemCard] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const numberCardArr = numberCard.trim().split(" ").map(Number);
const problemCardArr = problemCard.trim().split(" ").map(Number);
const cardCount = {};

numberCardArr.forEach(card => {
  if (cardCount[card]) {
    cardCount[card] += 1;
  } else {
    cardCount[card] = 1;
  }
});

// 문제 카드 배열을 순회하며 각 카드의 개수를 가져오기
const result = problemCardArr.map(card => {
  return cardCount[card] || 0; // 카드가 없으면 0 반환
});

// 결과를 공백으로 구분하여 출력
process.stdout.write(result.join(" ") + "\n");
