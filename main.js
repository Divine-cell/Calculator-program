const display = document.getElementById("display");

function pressToDisplay(input){
       display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value)
    }
    catch {
        display.value = "Error"
    }
    
}

function squareRoot() {
    display.value = Math.sqrt(display.value)
}

