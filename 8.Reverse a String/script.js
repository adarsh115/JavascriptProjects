const result = document.getElementById("result");
const inputstring = document.getElementById("inputstring");




inputstring.addEventListener('input', ()=>{
    console.log(inputstring.value);
    result.textContent = inputstring.value.split('').reverse().join('')})

// inputstring.addEventListener('input', ()=>
//     console.log(inputstring.value))