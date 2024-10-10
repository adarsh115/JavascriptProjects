const input = document.getElementById("input");
const result = document.getElementById("result");

input.addEventListener("input", ()=>{
    result.textContent = input.value.split("").length;
})