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
})


document.getElementById('withdraw-money-btn').addEventListener('click',function(e){
    e.preventDefault();
    const pinNumber = 1234;
    const balance =parseInt(document.getElementById('balance').innerText);
    const amountToReduce = parseInt(document.getElementById('amount').value);
    const agentNumber = document.getElementById('agentNumber').value;
    const pinValue = parseInt(document.getElementById('pinNumber2').value);
    if(agentNumber.length !== 11){
        alert('Enter valid account number');
        return;
    }
    console.log(pinValue,pinNumber);
    if(pinValue !== pinNumber){
        alert('Wrong pin number');
        return;
    }
    const newBalance = balance - amountToReduce;
    document.getElementById('balance').innerText = newBalance;
    document.getElementById('amount').value = '';
    document.getElementById('pinNumber2').value = '';
})


document.getElementById('send-money-btn').addEventListener('click',function(e){
    e.preventDefault();
    const pinNumber = 1234;
    const balance =parseInt(document.getElementById('balance').innerText);
    const amountToReduce = parseInt(document.getElementById('amount2').value);
    const agentNumber = document.getElementById('userAccountNumber').value;
    const pinValue = parseInt(document.getElementById('pinNumber3').value);
    if(agentNumber.length !== 11){
        alert('Enter valid account number');
        return;
    }
    console.log(pinValue,pinNumber);
    if(pinValue !== pinNumber){
        alert('Wrong pin number');
        return;
    }
    const newBalance = balance - amountToReduce;
    document.getElementById('balance').innerText = newBalance;
    document.getElementById('amount2').value = '';
    document.getElementById('pinNumber3').value = '';
})







document.querySelector('.cash-Out').addEventListener('click' , function(){
    document.querySelector('.cashOut').classList.remove('hidden');
    document.querySelector('.form').classList.add('hidden');
    document.querySelector('.Transfer').classList.add('hidden');
    document.querySelector('.getBonus').classList.add('hidden');
})
document.querySelector('.add-money').addEventListener('click' , function(){
    document.querySelector('.form').classList.remove('hidden');
    document.querySelector('.cashOut').classList.add('hidden')
    document.querySelector('.Transfer').classList.add('hidden')
    document.querySelector('.getBonus').classList.add('hidden');
})
document.querySelector('.transferMoney').addEventListener('click' , function(){
    document.querySelector('.Transfer').classList.remove('hidden');
    document.querySelector('.cashOut').classList.add('hidden');
    document.querySelector('.form').classList.add('hidden');
    document.querySelector('.getBonus').classList.add('hidden');
})
document.querySelector('.get-bonus').addEventListener('click' , function(){
    document.querySelector('.getBonus').classList.remove('hidden');
    document.querySelector('.form').classList.add('hidden');
    document.querySelector('.cashOut').classList.add('hidden')
    document.querySelector('.Transfer').classList.add('hidden')
})