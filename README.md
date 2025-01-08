# BOJ
백준 문제풀이

1. 입력값이 한 개일 때(한 줄)

```
const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim();
const input = filePath.toString().trim();
```

2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)

```
ex)
110 78 158
```
```
const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split(" ");
```

3. 입력값이 여러 줄일 때
```
ex)
110
78
158
```
```
const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split("\n");
```

4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때

```
ex)
3
110 78 158
```
```
const fs = require('fs');
const [n, input] = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split("\n");
const inputArr = input.trim().split(" ")
```

5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때

```
ex)
3
110
78
158
```

```
const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split("\n");
const n = parseInt(input[0]); // 첫 번째 줄에서 n을 숫자로 변환
const inputArr = input.slice(1, n + 1).map(Number); // n개 줄의 입력값을 숫자로 변환하여 배열 생성
```

[파일 사용 방법]
1. README.md 를 통해 문제의 어떤 입력인지 확인한다.
2. template 폴더 자체를 복사한다.
3. 폴더 이름을 문제 번호 바꾼다.
4. input.txt 문제에 맞게 수정한다.