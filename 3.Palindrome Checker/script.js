const inputField = document.getElementById("input");
const checkButton = document.getElementById("inputbutton");
const resultBox = document.getElementById("result");

function isPalindrome(str){
    const reverseStr = str.split('').reverse().join('');

    return str === reverseStr;
}

const checkPalindrome = () => {
    const userInput = inputField.value;

    if(!userInput){
        alert("Please give a valid input");
        return;
    }

    const isPalndrome = isPalindrome(userInput);

    if(isPalndrome){
        resultBox.textContent = `"${userInput}" is a palindrome`
    }
    else{
        resultBox.textContent = `"${userInput}" is not a palindrome`
    }
    resultBox.classList.remove('hidden');
    inputField.value="";


  }

checkButton.addEventListener('click', checkPalindrome);
inputField.addEventListener('keydown', event=>(event.key === 'Enter')?checkPalindrome():"")