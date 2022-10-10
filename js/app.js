/* --------------total expenses calculating-----------------*/

function expenseThing(thing){
    const expenseItem = document.getElementById(thing +'-input').value;
    const expenseValue = parseInt(expenseItem);
    return expenseValue;
}

function totalCalculation(){
    expenseThing('foodcost');
    expenseThing('rentcost');
    expenseThing('clothecost');
    const incomeInput = document.getElementById('income-input').value;
    let totalExpenses = document.getElementById('total-expenses');
    let restBalance = document.getElementById('rest-balance');
    if(incomeInput > 0 && expenseThing('foodcost') > 0 && expenseThing('rentcost') > 0 && expenseThing('clothecost') > 0){
        totalExpenses.innerText = expenseThing('foodcost') + expenseThing('rentcost') + expenseThing('clothecost');
        restBalance.innerText = parseInt(incomeInput) - parseInt(totalExpenses.innerText);
    }
    if(parseInt(totalExpenses.innerText) > parseInt(incomeInput)){
        totalExpenses.innerText = "Wrong calculation";
        restBalance.innerText = "0"
     }

}
document.getElementById('calculation').addEventListener('click', function(){
    totalCalculation();
})

/*-----------------total saving calculating--------------------- */

function savingTotal(savings){
    const saveInput = document.getElementById(savings +'-input').value;
    const totalInput = document.getElementById('income-input').value;
    const totalSave = parseFloat((saveInput / 100 * totalInput).toFixed(2));
    return totalSave;
}


function dueBalance(){
    expenseThing('foodcost');
    expenseThing('rentcost');
    expenseThing('clothecost');
    const incomeInput = document.getElementById('income-input').value;
    let totalExpenses = document.getElementById('total-expenses');
    let restBalance = document.getElementById('rest-balance');
    if(incomeInput > 0 && expenseThing('foodcost') > 0 && expenseThing('rentcost') > 0 && expenseThing('clothecost') > 0){
        totalExpenses.innerText = expenseThing('foodcost') + expenseThing('rentcost') + expenseThing('clothecost');
        restBalance.innerText = parseInt(incomeInput) - parseInt(totalExpenses.innerText);
    }
    savingTotal('savemoney');
    let saveAmount = document.getElementById('save-amount');
    saveAmount.innerText = savingTotal('savemoney');
    let remainingAmount = document.getElementById('remaining-amount');
    remainingAmount.innerText = parseInt(restBalance.innerText) - saveAmount.innerText;

    //saving error handling
    if(parseInt(saveAmount.innerText) > parseInt(restBalance.innerText)){
        saveAmount.innerText = "Insufficient balance for saving";
        remainingAmount.innerText = restBalance.innerText
    }
}
document.getElementById('savemoney-btn').addEventListener('click', function(){
    dueBalance();
})




/*-----------income and expense validation check-------------*/

document.getElementById('income-input').addEventListener('input', ()=>{
        if (isNaN(document.getElementById('income-input').value)) 
        {
            document.getElementById('incometext-error-msg').style.display = 'block';
    
        }
        else {
            document.getElementById('incometext-error-msg').style.display = 'none';   
        }
         if(document.getElementById('income-input').value < 0){
            document.getElementById('incomevalue-error-msg').style.display = 'block';
        }
        else{
            document.getElementById('incomevalue-error-msg').style.display = 'none';
        }

})
document.getElementById('foodcost-input').addEventListener('input', ()=>{
    if (isNaN(document.getElementById('foodcost-input').value)) 
    {
        document.getElementById('foodtext-error-msg').style.display = 'block';

    }
    else {
        document.getElementById('foodtext-error-msg').style.display = 'none';   
    }
     if(document.getElementById('foodcost-input').value < 0){
        document.getElementById('foodvalue-error-msg').style.display = 'block';
    }
    else{
        document.getElementById('foodvalue-error-msg').style.display = 'none';
    }
})
document.getElementById('rentcost-input').addEventListener('input', ()=>{
    if (isNaN(document.getElementById('rentcost-input').value)) 
    {
        document.getElementById('renttext-error-msg').style.display = 'block';

    }
    else {
        document.getElementById('renttext-error-msg').style.display = 'none';   
    }
     if(document.getElementById('rentcost-input').value < 0){
        document.getElementById('rentvalue-error-msg').style.display = 'block';
    }
    else{
        document.getElementById('rentvalue-error-msg').style.display = 'none';
    }
})
document.getElementById('clothecost-input').addEventListener('input', ()=>{
    if (isNaN(document.getElementById('clothecost-input').value)) 
    {
        document.getElementById('clothetext-error-msg').style.display = 'block';

    }
    else {
        document.getElementById('clothetext-error-msg').style.display = 'none';   
    }
     if(document.getElementById('clothecost-input').value < 0){
        document.getElementById('clothevalue-error-msg').style.display = 'block';
    }
    else{
        document.getElementById('clothevalue-error-msg').style.display = 'none';
    }
})


/*------------- saving part error handling--------------*/

document.getElementById('savemoney-input').addEventListener('input', ()=>{
    if (isNaN(document.getElementById('savemoney-input').value)) 
    {
        document.getElementById('savingtext-error-msg').style.display = 'block';

    }
    else {
        document.getElementById('savingtext-error-msg').style.display = 'none';   
    }
     if(document.getElementById('savemoney-input').value < 0){
        document.getElementById('savingvalue-error-msg').style.display = 'block';
    }
    else{
        document.getElementById('savingvalue-error-msg').style.display = 'none';
    }
})


