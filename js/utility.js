// common shared function
// 
// for input field
function getInputFieldValueById(id){
const inputValue = document.getElementById(id).value;
const inputNumber = parseFloat(inputValue);
return inputNumber;
}
// for text field
function getTextFieldValueById(id){

    const textValue = document.getElementById(id).innerText;
     const textValueNumber = parseFloat(textValue);
     return textValueNumber;
}
// to show form
function showSectionById(id){
    // hide all the existed sections
document.getElementById('add-money-form').classList.add('hidden');
document.getElementById('cashout-form').classList.add('hidden');
document.getElementById('transaction').classList.add('hidden');
// show the section with the provided id as parameter
document.getElementById(id).classList.remove('hidden');

}