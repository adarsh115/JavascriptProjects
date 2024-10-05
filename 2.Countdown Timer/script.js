const displayCountdown = document.getElementById("countdown");
const displayCountMilliSec = document.getElementById("millisec");
const startButton = document.getElementById("start");
const submitButton = document.getElementById("formButton");
const resetButton = document.getElementById("reset");
const countdownForm = document.getElementById("timeform");


let totalSeconds = 0;
let isPause = false;

console.log(totalSeconds);

function formatTime(s) {
    let days = Math.floor(s/(24*3600));
    let hours = Math.floor(s/3600);
    let minutes = Math.floor(s / 60);
    let seconds = Math.floor((s % 60));
    //let milliseconds = s % 1000;
    
    return `${days}:${hours < 10 ? '0':''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// function formatMillisec(milli){
//     return `:${milli < 100 ? (milli < 10 ? '00' : '0') : ''}${milli}`
// }


// const millicall = ()=>{
//     let milliseconds = 1000;   
//     millisecTimeInterval = setInterval(()=>{
//         if(milliseconds > 0){
//             displayCountMilliSec.textContent = formatMillisec(milliseconds);
//             milliseconds--;
//         }
//         else{
//             displayCountMilliSec.textContent = `:00${milliseconds}`;
//         }
//     }, 1)
// }

const updateTimer = ()=>{
    if(totalSeconds > 0){
            
        displayCountdown.textContent = formatTime(totalSeconds);

        // millicall();
        totalSeconds--;
        
    }
    else{
        clearInterval(countdown);
        displayCountdown.textContent = formatTime(totalSeconds);
    }
}



//start pause reset functionality
function startTimer(){
        console.log("start clicked")
        if(!isPause){
            countdown = setInterval(updateTimer, 1000)
        }
        
        isPause = true;
}

function pauseTimer(){
        clearInterval(countdown);
        console.log("pause clicked")
        isPause = false;
        startButton.textContent = "start";
}

function resetTimer(){
    clearInterval(countdown);
    isPause = false;
    displayCountdown.textContent = "00:00:00:00";
    totalSeconds = 0;
    countdownForm.classList.add('show');
    countdownForm.reset();
    startButton.classList.add('hidden');
    resetButton.classList.add('hidden');
}



//button click events
submitButton.addEventListener("click", ()=>{
    const days = parseInt(document.getElementById('days').value) || 0;
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;    
    totalSeconds = (days * 24 * 3600) + (hours * 3600) + (minutes * 60) + seconds;

    startTimer();
    startButton.textContent = "pause";
    startButton.classList.add('show');
    startButton.classList.remove('hidden')
    resetButton.classList.add('show');
    
    countdownForm.classList.add('hidden');
    console.log(totalSeconds);
})

startButton.addEventListener("click", ()=>{
    if(isPause){
        pauseTimer();
    }
    else{
        startTimer();
    }
})

resetButton.addEventListener("click", resetTimer)