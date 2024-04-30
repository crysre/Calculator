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

let opClickcount = 0
let rResult = 0
function executeIt(){
    let result = operate(firstNumber, operator, secondNumber);
    rResult = result
    display.innerText = result;
}

execute.addEventListener("click", executeIt)




opButtons.forEach((buttonOp)=>{
    buttonOp.addEventListener("click", (event)=>{
        opClickcount ++

        if(opClickcount > 1){
            executeIt()
            firstNumber = rResult
            secondNo = []
            secondNumber = 0

            
            let clickedOp = event.target;
            operator = clickedOp.textContent;
            opDisplay.innerText = clickedOp.textContent;
        
            buttons.forEach((button)=>{
            button.removeEventListener("click", clickhandler1)
        })

        buttons.forEach((button)=>{
            button.addEventListener("click", clickhandler2)
        })
        }else{
            let clickedOp = event.target;
            operator = clickedOp.textContent;
            opDisplay.innerText = clickedOp.textContent;
        
            buttons.forEach((button)=>{
            button.removeEventListener("click", clickhandler1)
        })

        buttons.forEach((button)=>{
            button.addEventListener("click", clickhandler2)
        })
        }
        
    })
})

allClear.addEventListener("click", ()=>{

    firstNo = []
    secondNo = []
    firstNumber = 0
    secondNumber = 0
    operator = ""
    opClickcount = 0
    rResult = 0
    display.innerText = 0
    opDisplay.innerText = ""

    buttons.forEach((button)=>{
        button.removeEventListener("click", clickhandler2)
        button.addEventListener("click", clickhandler1)
    })
    
    
})

let backSpace = document.querySelector(".back")

backSpace.addEventListener("click", () => {
    if (secondNo.length > 0) {
        secondNo.pop();
        secondNumber = parseInt(secondNo.join(""));
        display.innerText = secondNumber;
    } else if (operator !== "") {
        operator = "";
        opDisplay.innerText = "";
    } else if (firstNo.length > 0) {
        firstNo.pop();
        firstNumber = parseInt(firstNo.join(""));
        display.innerText = firstNumber;
    }
});



