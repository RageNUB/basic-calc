let num1 = document.getElementById("num1-el");
let num2 = document.getElementById("num2-el");
let sumEl = document.getElementById("sum-el");

function add() {
    let result = JSON.parse( num1.value ) + JSON.parse( num2.value );
    sumEl.textContent = "Result: " + result;
};

function subtract() {
    let result = JSON.parse( num1.value ) - JSON.parse( num2.value );
    sumEl.textContent = "Result: " + result;
};

function divide() {
    let result = JSON.parse( num1.value ) / JSON.parse( num2.value );
    sumEl.textContent = "Result: " + result;
};

function multiply() {
    let result = JSON.parse( num1.value ) * JSON.parse( num2.value );
    sumEl.textContent = "Result: " + result;
};

const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");
const numberValue = document.getElementById("number-value");
const withNumberEl = document.getElementById("with-number");
const withoutNumberEl = document.getElementById("without-number");
const resetEl = document.getElementById("reset");

withNumberEl.addEventListener("click", function() {
    let textItem = inputEl.value;
    let textContent = "";
    for (let i = 1; i <= numberValue.value; i++) {
        textContent += `<ul>
        <li> ${textItem} ${i}
        </li>
        </ul>`
    }
    resultEl.innerHTML = textContent
});

withoutNumberEl.addEventListener("click", function() {
    let textItem = inputEl.value;
    let textContent = "";
    for (let i = 1; i <= numberValue.value; i++) {
        textContent += `<ul>
        <li> ${textItem}
        </li>
        </ul>`
    }
    resultEl.innerHTML = textContent;
})

resetEl.addEventListener("dblclick", function() {
    resultEl.textContent = "";
    inputEl.value = "";
    numberValue.value = "";
})