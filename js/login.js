// set event handler
document.getElementById('button-id').addEventListener('click',function(event){
    // preventing default behaviour(reloading browser)
event.preventDefault;

// get the phone number
const phoneNumber = document.getElementById('phone-number').value;

// get the pin number
const pinNumber = document.getElementById('pin-number').value;

console.log(phoneNumber, pinNumber)

// validate phone and pin
if(!isNaN(phoneNumber) && !isNaN(pinNumber)){
    window.location.href = './home.html';
    alert('Successfully Logged IN');
}
else{
    alert('Wrong Phone Number or Pin')
}
})