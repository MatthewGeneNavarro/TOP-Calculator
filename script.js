const obj = { num1: "", num2: "", operator: null};

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiple = document.querySelector('#multiple');
const divide = document.querySelector('#divide');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');


const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const display = document.querySelector('.head');

function add(a,b) {
return a+b;
}

function subtract (a,b) {
return a-b;
}

function multiply (a,b) {
return a*b;
}

function division (a,b) {
return a / b;
}

function op ( num1, num2, operator) {

    display.textContent = operator(Number(num1), Number(num2));
    obj.num1 ="" 
    obj.num2 =""
    obj.operator = null;
    

}



plus.addEventListener('click', ()=>{
    obj.operator = add;


})

minus.addEventListener('click', ()=>{
    obj.operator = subtract;
})

multiple.addEventListener('click', ()=>{
    obj.operator = multiply;
})
divide.addEventListener('click', ()=>{
    obj.operator = division;
})

clear.addEventListener('click', ()=>{
    display.textContent = "";
    obj.num1 ="" 
    obj.num2 =""
    obj.operator = null;

})

equal.addEventListener('click', ()=>{
    op(obj.num1, obj.num2, obj.operator);
})

zero.addEventListener('click', ()=>{
    if(obj.operator === null){
        obj.num1 = `${obj.num1}0`
        display.textContent = obj.num1;
    } else{
        obj.num2 = `${obj.num2}0`;
        display.textContent = obj.num2;
    }

})

one.addEventListener('click', ()=>{
    if(obj.operator === null){
        obj.num1 = `${obj.num1}1`;
        display.textContent = obj.num1;
    } else{
        obj.num2 = `${obj.num2}1`;
        display.textContent = obj.num2;
    }

})

two.addEventListener('click', ()=>{
    if(obj.operator === null){
        obj.num1 = `${obj.num1}2`;
        display.textContent = obj.num1;
    } else{
        obj.num2 = `${obj.num2}2`;
        display.textContent = obj.num2;
    }

})

three.addEventListener('click', ()=>{
    if(obj.operator === null){
        obj.num1 = `${obj.num1}3`;
        display.textContent = obj.num1;
    } else{
        obj.num2 = `${obj.num2}3`;
        display.textContent = obj.num2;
    }

})
four.addEventListener('click', ()=>{
    if(obj.operator === null){
        obj.num1 = `${obj.num1}4`;
        display.textContent = obj.num1;
    } else{
        obj.num2 = `${obj.num2}4`;
        display.textContent = obj.num2;
    }

})
five.addEventListener('click', ()=>{
    if(obj.operator === null){
        obj.num1 = `${obj.num1}5`;
        display.textContent = obj.num1;
    } else{
        obj.num2 = `${obj.num2}5`;
        display.textContent = obj.num2;
    }

})

six.addEventListener('click', ()=>{
    if(obj.operator === null){
        obj.num1 = `${obj.num1}6`;
        display.textContent = obj.num1;
    } else{
        obj.num2 = `${obj.num2}6`;
        display.textContent = obj.num2;
    }

})
seven.addEventListener('click', ()=>{
    if(obj.operator === null){
        obj.num1 = `${obj.num1}7`;
        display.textContent = obj.num1;
    } else{
        obj.num2 = `${obj.num2}7`;
        display.textContent = obj.num2;
    }

})

eight.addEventListener('click', ()=>{
    if(obj.operator === null){
        obj.num1 = `${obj.num1}8`;
        display.textContent = obj.num1;
    } else{
        obj.num2 = `${obj.num2}8`;
        display.textContent = obj.num2;
    }

})

nine.addEventListener('click', ()=>{
    if(obj.operator === null){
        obj.num1 = `${obj.num1}9`;
        display.textContent = obj.num1;
    } else{
        obj.num2 = `${obj.num2}9`;
        display.textContent = obj.num2;
    }

})