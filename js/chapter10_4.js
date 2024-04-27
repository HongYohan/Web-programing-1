const str = prompt("영문 소문자로 된 문자열을 입력하세요")

// let first = str[0].toUpperCase();
// let last = str.slice(1)
// let result = first+last;

let result = [str[0].toUpperCase(),...str.slice(1)].join("")

document.write(result);