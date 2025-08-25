document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault();
    const pinNumber = 1234;
    const balance =parseInt(document.getElementById('balance').innerText);
    const amountToAdd = parseInt(document.getElementById('amountAdd').value);
    const bankAccountNumber = document.getElementById('bankAccountNumber').value;
    const pinValue = parseInt(document.getElementById('pinNumber').value);
    if(bankAccountNumber.length !== 11){
        alert('Enter valid account number');
        return;
    }
    if(pinValue !== pinNumber){
        alert('Wrong pin number');
        return;
    }
    const newBalance = amountToAdd + balance;
    document.getElementById('balance').innerText = newBalance;
    document.getElementById('amountAdd').value = '';
    document.getElementById('pinNumber').value = '';

})
document.getElementById('log-out-btn').addEventListener('click',function(){
    window.location.href = "./index.html"
    console.log('button-clicked');
})