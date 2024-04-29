let displayValue = 0

function add(a, b){
    return a+b
};

function substract(a, b){
    return a-b
};

function multiply(a, b){
    return a*b
};

function divide(a, b){
    return a/b
}

let firstNo = [];
let operator = "";
let secondNo =[];

function operate(firstNo, operator, secondNo){
    if(operator === "+"){
        return add(firstNo, secondNo)
    }else if(operator === "-"){
        return substract(firstNo, secondNo)
    }else if(operator === "*"){
        return multiply(firstNo, secondNo)
    }else if(operator === "/"){
        return divide(firstNo, secondNo)
    }
};

let firstNumber = 0;
let secondNumber = 0;

let buttons = document.querySelectorAll(".n");
let opButtons = document.querySelectorAll(".o")
let display = document.querySelector(".display")
let opDisplay = document.querySelector(".opDisplay")
let execute = document.querySelector(".execute")
let allClear = document.querySelector(".aClear")


function clickhandler1 (event){
    let clickedButton = event.target;
    firstNo.push(clickedButton.textContent)
    firstNumber = parseInt(firstNo.join(""))
    display.innerText = firstNumber
}

function clickhandler2 (event){
    let clickedButton = event.target;
    secondNo.push(clickedButton.textContent)
    secondNumber = parseInt(secondNo.join(""))
    display.innerText = secondNumber
}

buttons.forEach((button)=>{
    button.addEventListener("click", clickhandler1)
})

opButtons.forEach((buttonOp)=>{
    buttonOp.addEventListener("click", (event)=>{
        let clickedOp = event.target;
        operator = clickedOp.textContent;
        opDisplay.innerText = clickedOp.textContent;
        
        buttons.forEach((button)=>{
            button.removeEventListener("click", clickhandler1)
        })

        buttons.forEach((button)=>{
            button.addEventListener("click", clickhandler2)
        })
        
    })
})

execute.addEventListener("click", ()=>{
    let result = operate(firstNumber, operator, secondNumber);
    display.innerText = result;
 
})


allClear.addEventListener("click", ()=>{

    firstNo = []
    secondNo = []
    firstNumber = 0
    secondNumber = 0
    operator = null

    display.innerText = 0
    opDisplay.innerText = ""
})