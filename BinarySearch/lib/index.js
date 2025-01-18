// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
function lowerBound(arr, target, start, end) {
  // 배열에 삽입할 수 있는 가장 왼쪽 인덱스를 찾기 위해 start가 end보다 작을때에만 수행되는 것이 특징
  // (start가 end와 같아지면 더 이상 탐색할 필요가 없는 상태)
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    arr[mid] >= target ? (end = mid) : (start = mid + 1);
  }
  return end;
}

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
function upperBound(arr, target, start, end) {
  // 배열에 삽입할 수 있는 가장 왼쪽 인덱스를 찾기 위해 start가 end보다 작을때에만 수행되는 것이 특징
  // (start가 end와 같아지면 더 이상 탐색할 필요가 없는 상태)
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    arr[mid] > target ? (end = mid) : (start = mid + 1); //upperBound는 등호가 빠져있음
  }
  return end;
}

function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}
