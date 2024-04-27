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

let firstNo = 0;
let operator = "";
let secondNo =0;

function operate(firstNo, operator, secondNo){
    if(operator === "+"){
        add(firstNo, secondNo)
    }else if(operator === "-"){
        substract(firstNo, secondNo)
    }else if(operator === "*"){
        multiply(firstNo, secondNo)
    }else if(operator === "/"){
        divide(firstNo, secondNo)
    }
};

