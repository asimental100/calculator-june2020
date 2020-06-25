// get dom elements
// get add-input-1
const addInput1 = document.getElementById('add-input-1');
// get add-input-2
const addInput2 = document.getElementById('add-input-2');
// get add-button
const addButton = document.getElementById('add-button');
// get the add-result span
const addSpan = document.getElementById('add-result');

// initialize state 

// set the event handler to the button
addButton.addEventListener('click', () => {
    // in the click event handler . . .
    // make sure we have the inputs (console.log)
    // make sure we have the span
    // make sure we have the .values of the inputs
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    // add the two values together
    const sum12 = Number(value1) + Number(value2);

    // update the textContent of the span
    addSpan.textContent = sum12;
});

const minusInput1 = document.getElementById("minus-input-1");
const minusInput2 = document.getElementById("minus-input-2");
const minusButton = document.getElementById("minus-button");
const minusSpan = document.getElementById("minus-result");

minusButton.addEventListener('click', () => {
    const value3 = minusInput1.value;
    const value4 = minusInput2.value;

    const sum34 = Number(value3) - Number(value4);
    minusSpan.textContent = sum34;
})

const multiplyInput1 = document.getElementById("multiply-input-1");
const multiplyInput2 = document.getElementById("multiply-input-2");
const multiplyButton = document.getElementById("multiply-button");
const multiplySpan = document.getElementById("multiply-result");

multiplyButton.addEventListener('click', () => {
    const value5 = multiplyInput1.value;
    const value6 = multiplyInput2.value;

    const sum56 = Number(value5) * Number(value6);
    multiplySpan.textContent = sum56;
})

const divisionInput1 = document.getElementById("division-input-1");
const divisionInput2 = document.getElementById("division-input-2");
const divisionButton = document.getElementById("division-button");
const divisionSpan = document.getElementById("division-result");

divisionButton.addEventListener('click', () => {
    const value7 = divisionInput1.value;
    const value8 = divisionInput2.value;

    const sum78 = Number(value7) - Number(value8);
    divisionSpan.textContent = sum78;
})