function operate(num1, num2, operator){
    if(operator === "+"){
        console.log("here");
        console.log(num1);
        console.log(num2);
        return parseInt(num1) + parseInt(num2);

    }
    if(operator === "-")
        return parseInt(num1) - parseInt(num2);
    if(operator === "/")
        return parseInt(num1) / parseInt(num2);
    if(operator === "*")
        return parseInt(num1) * parseInt(num2);
    return 0;
}

function updateDisplay(val){
    console.log(val);
    if(val === "="){
        if(operandApplied){
            console.log("1");
            num1 = operate(num1, num2, opr);
            num2 = "";
            opr = "";
            numIsResult = true;
            operandApplied = false;
        }
    }
    else if(val === "+" || val === "-" || val === "/" || val === "*"){
        console.log("2");

        if(!operandApplied){
            opr = val
            if(num1 === ""){
                console.log("inhere");
                num1 = "0";
            }
            operandApplied = true;
        }
    }
    else if(!operandApplied){
        console.log("3");
        if(numIsResult || parseInt(num1) === 0){
            num1 = val;
            numIsResult = false;
        }
        else
            num1+=val;
    }
    else{
        if(parseInt(num2) === 0)
            num2 = val;
        else
            num2+=val;
    }
    display.textContent = `${num1} ${opr} ${num2}`;
}
console.log(parseInt(""));
let operandApplied = false;
let numIsResult = false;
let num1 = "";
let num2 = "";
let opr = "";
const display = document.querySelector("div.display");

console.log(display);
const numButtons = document.querySelectorAll("button.number");
numButtons.forEach(element => {

    element.addEventListener("click", (e) => {
        updateDisplay(element.textContent);
    })
});
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", (e) => {
    num1 = "";
    num2 = "";
    opr = "";
    display.textContent = ""
    operandApplied = false;
});