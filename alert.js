
//функция прощания
function goodbye() {
    alert('До новых встреч!');
}

//функция расчета процента
function calculateRate(deposit, term) {
    switch (term) {
        case 2:
            if (deposit < 50000) {
                return 3;
            } else if (deposit < 100000) {
                return 5;
            } else {
                return 10;
            }
        case 6:
            if (deposit < 50000) {
                return 5;
            } else if (deposit < 100000) {
                return 10;
            } else {
                return 15;
            }
        case 12:
            if (deposit < 50000) {
                return 10;
            } else if (deposit < 100000) {
                return 15;
            } else {
                return 20;
            }
        default:
            return 3;
    }
}

//основная функция
function deposit() {

    let deposit = prompt('Введите сумму депозита: от 5000 до 200000');

    if (!isNaN(deposit) && deposit >= 5000 && deposit <= 200000) {
        if(confirm('Вы уверены что хотите вложить сумму в размере ' + deposit + '?')){
            let term = parseInt(prompt('Выберите срок депозита: 2, 6 или 12 мес'));
            if (term === 2 || term === 6 || term === 12) {
                let rate = calculateRate(deposit, term);
                let month_ending = (term == 2) ? 'a' : 'ев';
                alert(`Вы хотите вложить ${deposit} на срок ${term} месяц${month_ending}. \nВаша процентная ставка ${rate}%`);
                goodbye();
            } else if(term == null){
                goodbye();
            } else {                alert('Вы указали неверный срок депозита')
            }
        } else {
            goodbye();
        }
    } else if (deposit == null){
        goodbye();
    } else {
        alert('Введите корректную сумму');
    }
}

function pow_analog() {
    let number = prompt('Введите число', '').trim();
    if (!isNaN(number) && number !== null && number !=='') {
        let exponentiation = prompt('В какую степень возвести?').trim();
        if (!isNaN(exponentiation) && exponentiation !== null && exponentiation !=='') {
            alert('Результат :' + toExponent(number,exponentiation));
        } else
            alert('Вы ввели не число!');
    } else
        alert('Вы ввели не число!');

}

function toExponent(number, exponentiation) {
    let result = number;
    for (i=1; i<exponentiation; i++) {
        result = result * number;
    }
    return result;
}