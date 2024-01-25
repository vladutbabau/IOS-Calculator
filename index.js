//digits
const digit0 = document.querySelector('#digit0');
const digit1 = document.querySelector('#digit1');
const digit2 = document.querySelector('#digit2');
const digit3 = document.querySelector('#digit3');
const digit4 = document.querySelector('#digit4');
const digit5 = document.querySelector('#digit5');
const digit6 = document.querySelector('#digit6');
const digit7 = document.querySelector('#digit7');
const digit8 = document.querySelector('#digit8');
const digit9 = document.querySelector('#digit9');

//operations
const plus = document.querySelector('#add');
const minus = document.querySelector('#subtract');
const division = document.querySelector('#division');
const multiply = document.querySelector('#multiply');
const mod = document.querySelectorAll('#mod');
const dot = document.querySelector('#dot');
const deleteAll = document.querySelector('#delete');
const changeToNegative = document.querySelector('#changeToNegative');
const equal = document.querySelector('#equal');

//declar locul unde se va afisa rezultatul
const result = document.querySelector('#result');

//declaram variabilele globale pentru primul si al doilea numar
let firstNumber = 0;
let secondNumber = 0;
//Initializam un stegulet pentru a sti cand construim al doilea numar
let startBuildSecondNumber = false;
//initializam variabila operation pentru a stoca ce operatiile
let operation = '';
//initializam count pentru functia dotShow
let count = 0;

//cream functia pentru construirea numarului
function buildNumber(numberRecieved){
    if(startBuildSecondNumber === false){
        firstNumber = firstNumber * 10 + numberRecieved;
        result.innerHTML = firstNumber;
    }else{
        secondNumber = secondNumber * 10 + numberRecieved;
        result.innerHTML = secondNumber;
    }
}

function handleAddClick(){
    startBuildSecondNumber = true;
    operation = 'add';
    result.innerHTML = '+';
}

function handleSubtractClick(){
    startBuildSecondNumber = true;
    operation = 'subtract';
    result.innerHTML = '-';
}

function handleMultiplyClick(){
    startBuildSecondNumber = true;
    operation = 'multiply';
    result.innerHTML = '*';
}

function handleDivisionClick(){
    startBuildSecondNumber = true;
    operation = 'division';
    result.innerHTML = '÷';
}

function handleModClick(){
    startBuildSecondNumber = true;
    operation = 'mod';
    result.innerHTML = '%';
}

function dotShow(){
    count++;
    if(startBuildSecondNumber == false && count <= 1){
        // Adăugăm '.' la primul număr doar o singură dată
        firstNumber = firstNumber + '.' + nextNumber;
        result.innerHTML = firstNumber;
    }else if(startBuildSecondNumber == true && count <= 1){
        // Adăugăm '.' la al doilea număr doar o singură dată
        secondNumber = secondNumber + '.';
        result.innerHTML = secondNumber;
        
    }
}

function deleteNumber(){
    if(startBuildSecondNumber){
        secondNumber = 0;
        result.innerHTML = secondNumber;
    }else{
        result.innerHTML = 0;
        firstNumber = 0;
        
    }
}

function handleEqual(){
    if(operation == 'add'){
        let operationResult = firstNumber + secondNumber;
        result.innerHTML = operationResult;
    }else if(operation == 'subtract'){
        let operationResult = firstNumber - secondNumber;
        result.innerHTML = operationResult;
    }else if(operation == 'multiply'){
        let operationResult = firstNumber * secondNumber;
        result.innerHTML = operationResult;
    }else if(operation == 'division'){
        let operationResult = firstNumber / secondNumber;
        result.innerHTML = operationResult;
    }else if(operation == 'mod'){
        let operationResult = firstNumber % secondNumber;
        result.innerHTML = operationResult;
    }
    firstNumber = 0;
    secondNumber = 0;
    startBuildSecondNumber = false;
    operation = '';
}

digit0.addEventListener('click', function(){
    buildNumber(0);
})
digit1.addEventListener('click', function(){
    buildNumber(1);
})
digit2.addEventListener('click', function(){
    buildNumber(2);
})
digit3.addEventListener('click', function(){
    buildNumber(3);
})
digit4.addEventListener('click', function(){
    buildNumber(4);
})
digit5.addEventListener('click', function(){
    buildNumber(5);
})
digit6.addEventListener('click', function(){
    buildNumber(6);
})
digit7.addEventListener('click', function(){
    buildNumber(7);
})
digit8.addEventListener('click', function(){
    buildNumber(8);
})
digit9.addEventListener('click', function(){
    buildNumber(9);
})
plus.addEventListener('click', handleAddClick);
minus.addEventListener('click', handleSubtractClick);
division.addEventListener('click', handleDivisionClick);
multiply.addEventListener('click', handleMultiplyClick);
deleteAll.addEventListener('click', deleteNumber);
// dot.addEventListener('click', dotShow);
// changeToNegative.addEventListener('click', )
equal.addEventListener('click', handleEqual);


