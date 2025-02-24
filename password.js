let passWordBox = document.querySelector("input");
let geneBtn = document.querySelector(".generator-btn");
let copy = document.querySelector(".inp i");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~}{|][></-=";

const allChars = upperCase+lowerCase+number+symbol;

function createPassword() {
    let password = "";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    
    while(password.length < length) {
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passWordBox.value = password;
    
}

geneBtn.addEventListener("click", () => {
    
    createPassword();
});
// createPassword();
function copyPassword() {
    passWordBox.select();
    document.execCommand("copy");
}
copy.addEventListener("click", () => {
    copyPassword();
});