const SortedSet = require("collections/sorted-set");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// 1번부터 m번까지 전부 비어져 있으므로
// 빈 위치를 treeset으로 관리합니다.
const seats = new SortedSet();
for (let i = 1; i <= m; i++)
    seats.push(i);

// 답을 구해줍니다.
let ans = 0;

// 순서대로 앉혀봅니다.
// 최선의 자리 선택은
// ai보다 같거나 작은 최대 위치에 자리배치를 하는 것입니다.
for (const elem of arr) {
    // ai보다 큰 최초의 위치를 먼저 찾습니다.
    const idx = seats.findLeastGreaterThan(elem);
    
    // 만약 큰 최초의 위치가 
    // 첫 번째 위치가 아니라면,
    // 바로 전 위치가
    // ai보다 같거나 작은 최대 위치가 구해지므로,
    // 해당 위치에 사람을 앉혀줍니다.
    const pos = seats.findGreatestLessThanOrEqual(elem);
    if (pos) {
        seats.delete(pos.value);
        
        // 답을 갱신해줍니다.
        ans += 1;
    } else {
        break;
    }
}

console.log(ans);