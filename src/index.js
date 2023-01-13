module.exports = function reverse (n) {
    let nString = n.toString(); //преобразуем  число в строку * convert number to string
    let result = '' //получаемый результат * the result

    // проверяем отрицательное ли число * check if the number is negative
    if(nString[0] === '-') {
        result += '-'
        nString = nString.slice(1); //убираем первый символ если есть минус * remove the first character if there is a minus
    } else if (nString[nString.length - 1] === '0') { // если посделний символ 0, удаляем его , что бы небыло так при перевороте  120 - 021 * if the last character is 0, delete it, so that it doesn't happen when overturning 120 - 021
        nString = nString.slice(0, -1); // убираем последний символ * remove the last character

    }
    // собираем в обратном порядке число * collect the number in reverse order

    for (let i = nString.length - 1; i >= 0; i--) {
        result += nString[i];
    }

  return Math.abs(result); //преобразуем строку в положительное натуральное число * convert the string to a positive natural number
};
