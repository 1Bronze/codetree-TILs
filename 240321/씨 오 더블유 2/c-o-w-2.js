const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const string = input[1];

// 모든 쌍을 다 잡아봅니다.
let cnt = 0;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            if (string[i] === 'C' && string[j] === 'O' && string[k] === 'W') {
                cnt += 1;
            }
        }
    }
}

console.log(cnt);