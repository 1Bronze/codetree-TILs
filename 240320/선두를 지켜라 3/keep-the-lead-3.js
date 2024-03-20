// 상수 선언
const MAX_T = 1000000;

// 파일 시스템 모듈을 사용
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
let posA = new Array(MAX_T + 1).fill(0);
let posB = new Array(MAX_T + 1).fill(0);

// A가 매 초마다 서있는 위치를 기록
let timeA = 1;
let inputLine = 1;
for (let i = 0; i < n; i++) {
    const [v, t] = input[inputLine++].split(' ').map(Number);
    for (let j = 0; j < t; j++) {
        posA[timeA] = posA[timeA - 1] + v;
        timeA += 1;
    }
}

// B가 매 초마다 서있는 위치를 기록
let timeB = 1;
for (let i = 0; i < m; i++) {
    const [v, t] = input[inputLine++].split(' ').map(Number);
    for (let j = 0; j < t; j++) {
        posB[timeB] = posB[timeB - 1] + v;
        timeB += 1;
    }
}

// A와 B 중 더 앞서 있는 경우를 확인합니다.
// A가 리더면 1, B가 리더면 2, 둘 다 리더면 3으로 관리합니다.
let leader = 0, ans = 0;
for (let i = 1; i < timeA; i++) {
    if (posA[i] > posB[i]) {
        // 조합이 바뀌었다면
        // 답을 갱신합니다.
        if (leader !== 1) {
            ans += 1;
        }
        // 리더를 A로 변경합니다.
        leader = 1;
    } else if (posA[i] < posB[i]) {
        // 조합이 바뀌었다면
        // 답을 갱신합니다.
        if (leader !== 2) {
            ans += 1;
        }
        // 리더를 B로 변경합니다.
        leader = 2;
    } else {
        // 조합이 바뀌었다면
        // 답을 갱신합니다.
        if (leader !== 3) {
            ans += 1;
        }
        // 리더를 둘 다로 변경합니다.
        leader = 3;
    }
}

console.log(ans);