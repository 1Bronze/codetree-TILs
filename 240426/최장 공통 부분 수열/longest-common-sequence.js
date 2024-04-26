const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let str1 = input[0];
let str2 = input[1];

const [str1Len, str2Len] = [str1.length, str2.length];

// string의 index가 0부터 시작하기 때문에
// 이를 1부터 시작하기 위해서 앞에 #을 추가해줍니다.
str1 = '#' + str1;
str2 = '#' + str2;

const dp = Array.from(Array(str1Len + 1), () => Array(str2Len + 1).fill(0));

function initialize() {
    // dp[1][1] 값은 첫 번째 문자열의 첫 번째 문자와
    // 두 번째 문자열의 첫 번째 문자가 같은지 여부를 저장합니다.
    dp[1][1] = Number(str1[1] === str2[1]);

    // 두 번째 문자열의 1번 인덱스의 문자까지만 사용했을 때 
    // 가능한 부분 수열의 최대 길이를 채워넣어줍니다.
    for (let i = 2; i <= str1Len; i++) {
        if (str1[i] === str2[1]) {
            dp[i][1] = 1;
        } else {
            dp[i][1] = dp[i - 1][1];
        }
    }

    // 첫 번째 문자열의 1번 인덱스의 문자까지만 사용했을 때 
    // 가능한 부분 수열의 최대 길이를 채워넣어줍니다.
    for (let j = 2; j <= str2Len; j++) {
        if (str1[1] === str2[j]) {
            dp[1][j] = 1;
        } else {
            dp[1][j] = dp[1][j - 1];
        }
    }
}

initialize();

for (let i = 2; i <= str1Len; i++) {
    // 첫 번째 문자열의 i 번째까지 문자열을 고려했고
    // 두 번째 문자열의 j 번째까지 문자열을 고려했을 때
    // 가능한 부분 수열의 최대 길이를 구해줍니다.
    for (let j = 2; j <= str2Len; j++) {
        // Case 1:
        // 첫 번째 문자열의 i번째 문자와,  두 번째 문자열 j번째 문자가 일치하는 경우
        // 첫 번째 문자열에서 i-1번째 문자까지 고려하고, 
        // 두 번째 문자열의 j-1번째 문자까지 고려했을 때 
        // 가능한 공통 부분 수열의 뒤에 문자 하나를 새로 추가할 수 있게 됩니다. 
        // 따라서 dp[i-1][j-1]에 1을 추가해주면 됩니다
        if (str1[i] === str2[j]) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
        }
        // Case 2:
        // 첫 번째 문자열의 i 번째 문자를 공통 부분 수열을 만드는데 고려하지 않는 경우와
        // 두 번째 문자열의 j 번째 문자를 공통 부분 수열을 만드는데 고려하지 않는 경우 중
        // 더 큰 값을 선택하여 줍니다. 
        else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
}

console.log(dp[str1Len][str2Len]);