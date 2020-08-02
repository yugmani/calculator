$(document).ready(function() {

    // Your code here...
    
const numberEl = $(".number");
const operatorEl = $(".operator");
const operatorId = $("#operator");
const equalEl = $(".equal");
const firstEl = $("#first-number");
const secondEl = $("#second-number");
const resultEl = $("#result");

let firstNumber = 0;
let secondNumber = 0;
let isCalculated = false;
let isChosenOperator = false;
let operator = "";
let result ;
let signage = "";
// console.log(numberEl);


numberEl.on("click", function(){
    if(isCalculated === false){
    if(isChosenOperator){
        secondNumber += $(this).val();      
        
        secondEl.text(parseInt(secondNumber));
    }
    else {
        firstNumber += $(this).val();
        firstEl.text(parseInt(firstNumber));
    }
    
}
});


$(operatorEl).on("click", function(){
    isChosenOperator = true; 
    operator = $(this).val();
    displayOperator(operator)
    operatorId.text(signage);
});
        

const plus = (num1, num2)=>{
    result = parseInt(num1) + parseInt(num2);
    
}

const minus = (num1, num2)=>{
    result = parseInt(num1) - parseInt(num2);
    
}

const times = (num1, num2)=>{
    result = parseInt(num1) * parseInt(num2);
}

const divide = (num1, num2)=>{
    result = parseInt(num1) / parseInt(num2);
    
}

const power = (num1, num2)=>{

    result = Math.pow(parseInt(num1), parseInt(num2));
   
}


$("#button-clear").on("click", function(){
    firstNumber = 0;
    secondNumber = 0;
    isCalculated = false;
    isChosenOperator = false;
    operator = "";
    firstEl.empty();
    secondEl.empty();
    operatorId.empty();
    resultEl.empty();
    result = "";
})



    equalEl.on("click", function(){
        
            if(isChosenOperator && !isCalculated){
                
            switch (operator) {
                case "plus":  plus(firstNumber, secondNumber);
                            break;
                case "minus": minus(firstNumber, secondNumber);
                            break;
                case "times": times(firstNumber, secondNumber);
                            break;
                case "divide": divide(firstNumber, secondNumber);
                            break;
                case "power" : power(firstNumber, secondNumber);
                            break;
                
            }
    }

        resultEl.text(result);
        isCalculated = true;
    })
    

  function  displayOperator(operator) {
    if (operator === "plus"){
        signage = "+";
    }

    else if (operator === "minus"){
        signage = "-";
    }
    else if (operator === "times"){
        signage = "x";
    }
    else if (operator === "divide"){
        signage = 	"÷";
    }
    else if (operator === "power"){
        signage = "^";
    }
    

  }





    
    });