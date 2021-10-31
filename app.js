const billAmount_input = document.getElementById('billAmount');
const customerAmount_input = document.getElementById('customerAmount');
const getChangeBtn = document.getElementById('getChangeBtn')
const TwoThousand = document.getElementById('2000Notes');
const FiveHundred = document.getElementById('500Notes');
const OneHundred = document.getElementById('100Notes');
const Twenty = document.getElementById('20Notes');
const Ten = document.getElementById('10Notes');
const Five = document.getElementById('5Notes');
const One = document.getElementById('1Notes');

getChangeBtn.addEventListener('click', () => {
    const billAmount = billAmount_input.value;
    const customerAmount = customerAmount_input.value;

    if(checkInput(billAmount, customerAmount)) {
        const denomination = getDenomination(billAmount, customerAmount);
        renderDenomination(denomination);
    } else {
        alert('Please enter correct values. Bill Amount should be less then Customer Amount');
    }
})

function checkInput(billAmount, customerAmount) {
    if(billAmount > 0 && customerAmount > 0) {
        if(customerAmount > billAmount) {
            return true;
        } 
    }

    return false;
}

function getDenomination(billAmount, customerAmount) {
    const denomination = {
        'twoThousand': 0,
        'fiveHundred': 0,
        'oneHundred': 0,
        'twenty': 0,
        'ten': 0,
        'five': 0,
        'one': 0
    }

    let difference = customerAmount - billAmount;

    while(difference > 0) {
        if((difference - 2000) >= 0) {
            denomination.twoThousand += 1;
            difference -= 2000;
        } else if((difference - 500) >= 0) {
            denomination.fiveHundred += 1;
            difference -= 500;
        } else if((difference - 100) >= 0) {
            denomination.oneHundred += 1;
            difference -= 100;
        } else if((difference - 20) >= 0) {
            denomination.twenty += 1;
            difference -= 20;
        } else if((difference - 10) >= 0) {
            denomination.ten += 1;
            difference -= 10;
        } else if((difference - 5) >= 0) {
            denomination.five += 1; 
            difference -= 5;
        } else if((difference - 1) >= 0) {
            denomination.one += 1;
            difference -= 1;
        }
    }

    return denomination;
}

function renderDenomination(denomination) {
    TwoThousand.textContent = denomination.twoThousand;
    FiveHundred.textContent = denomination.fiveHundred;
    OneHundred.textContent = denomination.oneHundred;
    Twenty.textContent = denomination.twenty;
    Ten.textContent = denomination.ten;
    Five.textContent = denomination.five;
    One.textContent = denomination.one;
}