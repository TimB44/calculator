/**
 * Takes in 2 string numbers and an operator and returns the number in the format of a string 
 * 
 * @param {} num1 
 * @param {*} num2 
 * @param {*} operator 
 * @returns 
 */
function operate(num1, num2, operator){
    let ret = "0";
    if(operator === "+")
        ret = parseFloat(num1) + parseFloat(num2) + "";
    if(operator === "-")
        ret =  parseFloat(num1) - parseFloat(num2) + "";
    if(operator === "/")
        ret = num2 === "0" ? "Not a number": parseFloat(num1) / parseFloat(num2) + "";
    if(operator === "x")
        ret =  parseFloat(num1) * parseFloat(num2) + "";
    return ret ==="NaN" ? "Not a number": ret;
}

/**
 * updates the display div text 
 */
function update(){
    if(num1.length + num2.length > 10 && num1 !== "Not a number"){
        if(num2.length > 0)
            num2 = num2.substring(0, num2.length - 1);
        else
            num1 = num1.substring(0, num1.length - 1);
    }
    display.textContent = `${num1} ${opr} ${num2}`;
}

/**
 * Takes the current numbers and evaluates it in
 */
function evaluate(){
    num1 = operate(num1 === "" ||num1 === "Not a number" ? "0": num1,
                   num2 === "" ? "0": num2, 
                   opr === "" ? "+": opr);
    opr = "";
    num2 = "";
    update();
}

/**
 * adds an operator to the current equation, if one is all ready applied it will evaluate the current 
 * equation and make then the first number, then add the operator
 * @param {} val 
 */
function addOperator(val){
    if(num1 === "Not a number"){
        num1 = 0;
    }
    if(opr !== ""){
        ret = operate(num1, num2 === "" ? 0: num2, opr);
        num1 = ret;
        num2 = "";
    }
    opr = val;
    update();
}

/**
 * Adds a number to the numbers, leading zeros are ignored along with multiple periods in one number
 * @param {} val 
 */
function addNum(val){
    if(opr === ""){
        if(num1.includes(".") && val === ".") return;
        num1 = (num1 === "0" && val !== ".") || num1 === "Not a number"? val : num1 + val;
    }
    
    else{
        if(num2.includes(".") && val === ".") return;
        num2 = (num2 === "0" && val !== ".") || num2 === "Not a number"? val : num2 + val;
 
    }
    
    update();
}






let num1 = "0";
let num2 = "";
let opr = "";

//Display div
const display = document.getElementById("display");
display.textContent = `${num1} ${opr} ${num2}`;
display.style.fontSize--;


//Adding listeners
const numButtons = document.querySelectorAll("button.number");
numButtons.forEach(element => {

    element.addEventListener("click", (e) => {
        addNum(element.textContent);
    })
});

const oprButtons = document.querySelectorAll("button.operator");
oprButtons.forEach(element => {
    element.addEventListener("click", (e) => {
        addOperator(element.textContent);
    })
});

const clearButton = document.querySelector("button.clear");
clearButton.addEventListener("click", (e) => {
    num1 = "0";
    num2 = "";
    opr = "";
    update();
});

const equalsButton = document.querySelector("button.equals");
equalsButton.addEventListener("click", (e) => {
    evaluate();
});

document.addEventListener("keydown", (e)=>{
    console.log(e.key);
    //numbers 0 - 9
    if((e.key.charCodeAt(0) > 47 && e.key.charCodeAt(0) < 58) || e.key.charCodeAt(0) === 46){
        let button = document.getElementById("" + e.key);
        button.style.backgroundColor = "#487e71";
        addNum(e.key);
    }
    if(e.key === '/' || e.key.toLowerCase() === "x" || e.key === "-" || e.key === "+"){
        let button = document.getElementById("" + e.key);
        button.style.backgroundColor = "#487e71";
        addOperator(e.key);
    }
    if(e.key === "*"){
        let button = document.getElementById("" + x);
        button.style.backgroundColor = "#487e71";
        addOperator("x");
    }
    if(e.key === "=" || e.key === "Enter"){
        let button = document.getElementById("=");
        console.log("here");
        button.style.backgroundColor = "#487e71";
        evaluate();
    }
    if(e.key.toLowerCase() === "c"){
        let button = document.getElementById("c");
        button.style.backgroundColor = "#487e71";
        num1 = "0";
        num2 = "";
        opr = "";
        update();
    }
});
document.addEventListener("keyup", (e) =>{
    let button = document.getElementById("" + e.key.toLowerCase());1
    if(e.key === "*")
        button = document.getElementById("x");   
    if(e.key === "Enter") 
        button = document.getElementById("=");   

    if(button != null)
        button.style.backgroundColor = "#8CBEB2";
})
