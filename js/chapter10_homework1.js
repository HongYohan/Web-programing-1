const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let nums = new Array(2,4,6,8,10)

showArray(origin, nums);

let sum = 0;
for(let i = 0; i < nums.length; i++) {
    sum += nums[i]; // 각 값을 더한다
}
nums.push(sum); // 마지막에 sum을 결과값을 넣는다
showArray(result, nums);

function showArray(area, arr) {
    let str;
    str = "<table><tr>";
    for (let i = 0; i < arr.length; i++) {
        str +=  "<td>" + arr[i] + "</td>";
    }
    str += "</tr></table>";
    area.innerHTML = str;
}