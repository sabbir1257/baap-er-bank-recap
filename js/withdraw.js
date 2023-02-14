document.getElementById('btn-withdraw').addEventListener('click', function(){

    const withdawInput = document.getElementById('withdraw-input');
    const newWithdawAmountString = withdawInput.value;
    const newWithdawAmount = parseFloat(newWithdawAmountString);

    withdawInput.value = '';

    const withdawTotalElement = document.getElementById('withdraw-total');
    const previousWithdawTotalString = withdawTotalElement.innerText;
    const previousWithdawTotal = parseFloat(previousWithdawTotalString);

    const newWithdawTotal = previousWithdawTotal + newWithdawAmount;
    withdawTotalElement.innerText = newWithdawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotalAmount - newWithdawAmount;
    balanceTotalElement.innerText = newBalanceTotal; 
})