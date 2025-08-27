function value(id){
   return document.getElementById(id).value;
}
function text(id){
   return document.getElementById(id).innerText;
}
function intText(id){
   return parseInt(document.getElementById(id).innerText);
}
function intValue(id){
   return parseInt(document.getElementById(id).value);
}

const data = [];
console.log(data);

function btnCalculation (id,a,b,c,d) {
    document.getElementById(id).addEventListener('click',function(e){
    e.preventDefault();
    const pinNumber = 1234;
    const balance = intText(a);
    const amountToAdd = intValue(b);
    const bankAccountNumber = value(c); 
    const pinValue = intValue(d);
    let newBalance;
    let transection;
    if(bankAccountNumber.length !== 11){
        alert('Enter valid account number');
        return;
    }
    if(pinValue !== pinNumber){
        alert('Wrong pin number');
        return;
    }

    if(id=='add-money-btn'){
         newBalance = amountToAdd + balance;
        document.getElementById('balance').innerText = newBalance;
        document.getElementById('amountAdd').value ='';
        document.getElementById('pinNumber').value ='';

        transection ={
            type : "Add money",
            date : new Date().toLocaleTimeString()
        }
        data.push(transection);
    }
    
    if(id=='withdraw-money-btn'){
        newBalance = balance - amountToAdd;
        document.getElementById('balance').innerText = newBalance;
        document.getElementById('amount').value ='';
        document.getElementById('pinNumber2').value ='';
        transection ={
            type : "Withdraw money",
            date : new Date().toLocaleTimeString()
        }
        data.push(transection);
    }

    if(id=='send-money-btn'){
        newBalance = balance - amountToAdd;
        document.getElementById('balance').innerText = newBalance;
        document.getElementById('amount2').value = '';
        document.getElementById('pinNumber3').value = '';
        transection ={
            type : "transfer money",
            date : new Date().toLocaleTimeString()
        }
        data.push(transection);
    }
    

})
    }

 document.querySelector('.transaction-btn').addEventListener('click',function(e){
    e.preventDefault(); 
    const transectionContainer = document.querySelector('.transaction-form');
    transectionContainer.innerText="";
    data.forEach(element => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div
          class="bg-white w-[100%] h-[68px] flex justify-between items-center p-4 rounded-xl"
        >
          <div class="left flex">
            <div
              class="imageContainer w-[40px] h-[40px] rounded-full bg-[rgba(8,8,8,0.05)] flex justify-center items-center"
            >
              <img src="assets/wallet1.png" alt="" />
            </div>
            <div>
              <h1 class="outfit font-semibold text-[1rem]">${element.type}</h1>
              <p class="outfi font-normal text-[rgba(8,8,8,0.5)] text-[14px]">
                ${element.date}
              </p>
            </div>
          </div>
          <img
            class="opacity-90"
            src="assets/icons8-menu-vertical-24.png"
            alt=""
          />
        </div>
        `

        transectionContainer.appendChild(div);
    });
 });

btnCalculation('add-money-btn','balance','amountAdd','bankAccountNumber','pinNumber');

document.getElementById('log-out-btn').addEventListener('click',function(){
    window.location.href = "./index.html"
})
btnCalculation('withdraw-money-btn','balance','amount','agentNumber','pinNumber2');
btnCalculation('send-money-btn','balance','amount2','userAccountNumber','pinNumber3');





function toggle(clickedBtnId,id1,id2,id3,id4,id5,id6){
    document.querySelector(clickedBtnId).addEventListener('click' , function(){
    document.querySelector(id1).classList.remove('hidden');
    [id2,id3,id4,id5,id6].forEach(id => {
        document.querySelector(id).classList.add('hidden');
    })
})
}

toggle('.cash-Out','.cashOut','.form','.Transfer','.getBonus','.payBill','.transaction');
toggle('.add-money','.form','.cashOut','.Transfer','.getBonus','.payBill','.transaction');
toggle('.transferMoney','.Transfer','.form','.cashOut','.getBonus','.payBill','.transaction');
toggle('.get-bonus','.getBonus','.Transfer','.form','.cashOut','.payBill','.transaction');
toggle('.pay-bill','.payBill','.getBonus','.Transfer','.form','.cashOut','.transaction');
toggle('.transaction-btn','.transaction','.payBill','.getBonus','.Transfer','.form','.cashOut');


function toggleColor(clickedBtnId, id1, id2, id3, id4,id5,id6) {
    document.querySelector(clickedBtnId).addEventListener('click', function () {
        document.querySelector(id1).classList.add('bg-[rgba(8,116,242,0.05)]', 'border-[rgba(8,116,242,1)]');
        document.querySelector(id1).classList.remove('border-[rgba(8,8,8,0.1)]');
        [id2, id3, id4,id5,id6].forEach(id => {
            
            document.querySelector(id).classList.remove('bg-[rgba(8,116,242,0.05)]', 'border-[rgba(8,116,242,1)]');
            document.querySelector(id).classList.add('border-[rgba(8,8,8,0.1)]');
        });
    });
}

toggleColor('.cash-Out', '.cash-Out', '.add-money', '.transferMoney', '.get-bonus','.pay-bill','.transaction-btn');
toggleColor('.add-money', '.add-money', '.cash-Out', '.transferMoney', '.get-bonus','.pay-bill','.transaction-btn');
toggleColor('.transferMoney', '.transferMoney', '.cash-Out', '.add-money', '.get-bonus','.pay-bill','.transaction-btn');
toggleColor('.get-bonus', '.get-bonus', '.add-money', '.transferMoney', '.cash-Out','.pay-bill','.transaction-btn');
toggleColor('.pay-bill','.pay-bill', '.get-bonus', '.add-money', '.transferMoney', '.cash-Out','.transaction-btn');
toggleColor('.transaction-btn','.transaction-btn','.pay-bill', '.get-bonus', '.add-money', '.transferMoney', '.cash-Out');

