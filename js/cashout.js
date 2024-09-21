document.getElementById('btn-cashout').addEventListener('click',function(event){
event.preventDefault();
const cashOut = getInputFieldValueById('input-cashout');
const pinNumber = getInputFieldValueById('input-cashout-pin-number');
if(pinNumber !== NaN){
const balance = getTextFieldValueById('account-balance');
const newBalance = balance - cashOut;
document.getElementById('account-balance').innerText = newBalance;
alert('cashed out seccessfully');
// add to transaction history
const div = document.createElement('div');
div.classList.add('bg-red-500')
div.innerHTML =
 `
<h4 class = "text-2xl font-bold text-gray-400">Cash out</h4>
<p class = "text-white">withdraw: ${cashOut} TK. New Balance: ${newBalance}</p>
 `
// should be a common function
document.getElementById('transaction-container').appendChild(div)
}
else {
alert('wrong pin or amount');
}
}
)