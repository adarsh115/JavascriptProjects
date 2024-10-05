const input = document.getElementById("fizzbuzznumber");
const submitButton = document.getElementById("enter");
const result = document.getElementById("fizzbuzz");


const table = document.createElement('table');

function tableProp(){
    const headrow = document.createElement('tr');
    const col1 = document.createElement('td');
    const col2 = document.createElement('td');
    col1.textContent = "Number";
    col2.textContent = "FizzBuzz??";
    
    headrow.appendChild(col1);
    headrow.appendChild(col2);
    
    table.appendChild(headrow);
}



function checkFizzBuzz (number) {
    if(number % 3 === 0 && number % 5 === 0){
        return "FizzBuzz"
    }
    else if(number % 3 === 0){
        return "Fizz"
    }
    else if(number % 5 === 0){
        return "Buzz"
    }
    else{
        return parseInt(number);
    }
}

const fizzbuzzTable = (event, number) => {
    event.preventDefault(); 
    table.innerHTML = "";
    result.innerHTML = "";
    tableProp();

    const h1 = document.createElement('h1');
    
    h1.textContent = `Your number "${number}" is "${(typeof checkFizzBuzz(number)) == 'number' ? "Not FizzBuzz":checkFizzBuzz(number)}"`
    result.appendChild(h1)


    for(let i=1; i<=number; i++){
        const row = document.createElement('tr');  // Create a table row

        // Create the first column (cell)
        const cell1 = document.createElement('td');
        cell1.textContent = i;  // Content for first column

        // Create the second column (cell)
        const cell2 = document.createElement('td');
        cell2.textContent = `${checkFizzBuzz(i)}`;  // Content for second column

        // Append the cells to the row
        row.appendChild(cell1);
        row.appendChild(cell2);

        // Append the row to the table
        table.appendChild(row);
    }
    table.setAttribute('border', '1');  // Add border to the table
    table.style.width = '100%';         // Set table width

    // Step 5: Append the table to the container div
    result.appendChild(table);
}



submitButton.addEventListener("click", ()=>{
    console.log(input.value)
    if(!input.value || input.value < 1){
        alert("Please give a valid number input greater than 0")
    }
})


submitButton.addEventListener("click", () => fizzbuzzTable(event, input.value));


input.addEventListener('keydown', event=>(event.key === 'Enter')?fizzbuzzTable(event, input.value):"")