function isFirstLetterUpperCase(str) {
    let regexp = /^[A-Z]/;
    
    if (regexp.test(str)) {
        console.log(`${str}: String's first character is uppercase`);
    } else {
        console.log(`${str}: String's first character is not uppercase`);
    }
}

let str1 = "Abcd";
let str2 = "abcd";

isFirstLetterUpperCase(str1);
isFirstLetterUpperCase(str2);