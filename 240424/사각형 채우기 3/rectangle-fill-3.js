const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MOD = 1000000007;

// 변수 선언 및 입력:
const n = Number(input[0]);
const dp = Array(n + 1).fill(0);

// 초기 조건 설정
dp[0] = 1;
dp[1] = 2;

// 점화식에 따라 dp값 채우기
// dp[i] = dp[i - 1] * 2 + dp[i - 2] * 3 +
//         (dp[i - 3] + dp[i - 4] + dp[i - 5] + ... dp[0]) * 2
for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 2] * 3) % MOD;
    for (let j = i - 3; j >= 0; j--)
        dp[i] = (dp[i] + dp[j] * 2) % MOD
}

console.log(dp[n]);