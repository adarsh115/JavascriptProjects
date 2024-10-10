const height = document.getElementById("height");
const weight= document.getElementById("weight");
const button = document.getElementById("calculate");
const result = document.getElementById("bmi");

function calculateBMI(weight, heightCm) {
    console.log(weight,heightCm);
    // Convert height from cm to meters
    const heightM = heightCm / 100;

    // Calculate BMI
    let bmi = weight / (heightM * heightM);

    // Return BMI rounded to 2 decimal places
    let derivation = "";
    bmi = parseFloat(bmi).toFixed(2);

    switch (true) {
        case (bmi < 18.5):
            derivation = "underweight";
            break;
        case (bmi <= 24.9):
            derivation = "normal";
            break;
        case (bmi<= 29.9):
            derivation = "overweight";
            break;
        case (bmi >= 30):
            derivation = "obese";
            break;
        default:
            derivation = "Invalid BMI";
    }
    
    result.textContent = `Your BMI is ${bmi}. You are ${derivation}`;
}


button.addEventListener("click", () => calculateBMI(weight.value, height.value)) // Output: 22.6
