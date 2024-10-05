const totalBill = document.getElementById("totalbill");
const tipPercent = document.getElementById("tip");
const decrementTip = document.getElementById("decrementtip");
const incrementTip = document.getElementById("incrementtip");
const roundup = document.getElementById("roundup");
const clear = document.getElementById("clear");
const calculate = document.getElementById("calculate");
const summaryBill = document.getElementById("summarybill");

const clearall = () => {
    totalBill.value = 0;
    tipPercent.value = 10;
    summaryBill.innerHTML = '';
    summaryBill.classList.add('hidden');
}

function calculateSummary(totalBill, tip){
    console.log("working")
    const linebreak = document.createElement('hr');
    const linebreak1 = document.createElement('hr');
    const head = document.createElement('h1');
    head.textContent = "Summary of Calculation";
    const sBill =  document.createElement('h3');
    sBill.innerHTML = `Total Bill: $ ${totalBill}`;
    const sTip = document.createElement('h3');
    sTip.textContent = `+ Tip: $ ${tip}`;
    const summary = document.createElement('h1');
    summary.textContent = `Total Amount: $ ${Number(totalBill) + Number(tip)}`;

    summaryBill.appendChild(head);
    summaryBill.appendChild(linebreak);
  
    summaryBill.appendChild(sBill);
    summaryBill.appendChild(sTip);
    summaryBill.appendChild(linebreak1);
   
    summaryBill.appendChild(summary);
    summaryBill.classList.remove('hidden')

    console.log(summaryBill);
}

function calculateBill(){
    summaryBill.innerHTML = '';
    summaryBill.classList.add('hidden')
    let tip = (tipPercent.value/100)*totalBill.value
    if(roundup.checked){
        tip = Math.ceil(tip);
    }

    calculateSummary(totalBill.value, tip);
}


calculate.addEventListener("click", calculateBill);
clear.addEventListener("click", clearall);
decrementTip.addEventListener("click", ()=>tipPercent.value= Number(tipPercent.value)-1);
incrementTip.addEventListener("click", ()=>tipPercent.value= Number(tipPercent.value)+1);