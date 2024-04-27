const origin = document.querySelector("#origin")
const result = document.querySelector("#result")

let numbers = [2,4,6,8,10];

function tail(numbers){
    numbers.shift()
    return numbers
}

origin.innerText = numbers;
result.innerText = tail(numbers);