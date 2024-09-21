document.getElementById('btn-cashout').addEventListener('click',function(event){
event.preventDefault();
const cashOut = getInputFieldValueById('input-cashout');
const pinNumber = getInputFieldValueById('input-cashout-pin-number');
if(pinNumber !== NaN){
const balance = getTextFieldValueByI('account-balance');
const newBalance = balance - cashOut;
document.getElementById('account-balance').innerText = newBalance;
alert('cashed out seccessfully');
const p = document.createElement('p');
p.innerText = `Cashout: ${cashOut} TK. New Balance: ${newBalance}`;
// should be a common function
document.getElementById('transaction').appendChild(p)
}
else {
alert('wrong pin or amount');
}
}
)