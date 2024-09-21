document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
const addMoney = getInputFieldValueById('input-add-money');
const pinNumber= getInputFieldValueById('input-pin-number');
if(pinNumber !== NaN){
const balance = getTextFieldValueById('account-balance');
const newBalance = balance + addMoney;
document.getElementById('account-balance').innerText = newBalance;
alert('Money added successfully')
const p = document.createElement('p');
p.innerText = `Added: ${addMoney} TK. New Balance: ${newBalance}`;
// should be a common function
document.getElementById('transaction').appendChild(p)
}
else {
    alert('Wrong pin or amount');
}
})