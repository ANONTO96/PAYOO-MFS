document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
const addMoney = getInputFieldValueById('input-add-money');
const pinNumber= getInputFieldValueById('input-pin-number');
if(pinNumber !== NaN){
const balance = getTextFieldValueById('account-balance');
const newBalance = balance + addMoney;
document.getElementById('account-balance').innerText = newBalance;
alert('Money added successfully')
// add to transaction history
const div = document.createElement('div');
div.classList.add('bg-blue-500')
div.innerHTML =
 `
<h4 class = "text-2xl font-bold text-gray-400">Cash In</h4>
<p class="text-white">Added: ${addMoney} TK. New Balance: ${newBalance}</p>
 `
// should be a common function
document.getElementById('transaction-container').appendChild(div)
}
else {
    alert('Wrong pin or amount');
}
})