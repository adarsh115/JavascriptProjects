const result = document.getElementById("result");
const inputstring = document.getElementById("inputstring");


function wordcount(string){
    console.log(string.trim().split(/[\s,!?;:.()]+/).filter(Boolean).join(" "));
    return string.trim().split(/[\s,!?;:.()]+/).filter(Boolean).length;
}

inputstring.addEventListener('input', ()=>{
    console.log(inputstring.value);
    result.textContent = wordcount(inputstring.value)})

// inputstring.addEventListener('input', ()=>
//     console.log(inputstring.value))