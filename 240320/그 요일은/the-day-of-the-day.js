const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

function numOfDays(m, d) {
    // 계산 편의를 위해 월마다 몇 일이 있는지를 적어줍니다.
    const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDays = 0;

    // 1월부터 (m - 1)월 까지는 전부 꽉 채워져 있습니다.
    for (let i = 1; i < m; i++) {
        totalDays += days[i];
    }

    // m월의 경우에는 정확히 d일만 있습니다.
    totalDays += d;

    return totalDays;
}

function numOfDay(s) {
    // 간단한 비교를 위해 요일을 숫자로 나타내줍니다.
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days.indexOf(s);
}

let ans = 0;   
const startDate = numOfDays(m1, d1);
const endDate = numOfDays(m2, d2);
let curDay = numOfDay("Mon");

for (let date = startDate; date <= endDate; date++) {
    // 오늘의 요일이 A요일과 같다면 정답에 추가합니다.
    if (curDay === numOfDay(A)) {
        ans += 1;
    }

    curDay = (curDay + 1) % 7;
}

// 출력
console.log(ans);