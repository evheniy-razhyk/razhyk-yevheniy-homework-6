// 1. Получите текущую дату
// Напишите функцию JavaScript, чтобы получить текущую дату. Передайте разделитель в качестве аргумента.
// Пример ввода:
// curday('-');
// Вывод:
// "07-07-2022"

// function curday(divider) {
//     const day = new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate();
//     const month = new Date().getMonth() < 9 ? `0${new Date().getMonth() + 1}`: new Date().getMonth() + 1;
//     const year = new Date().getFullYear();
//     return `${day}${divider}${month}${divider}${year}`
// }

// console.log(curday("-"));



// 2. Получить название месяца с определенной даты
// Напишите функцию JavaScript, чтобы получить название месяца с определенной даты.
// Пример ввода:
// getMonthName(new Date("10/11/2021"));
// Вывод:
// "October"

// function getMonthName(date) {
//     return date.toLocaleString("en-US", {month: 'long'});
// } 

// console.log(getMonthName(new Date("10/11/2021")));



// 3. Сравнение двух дат
// Напишите функцию JavaScript для сравнения дат (т.е. больше, меньше или равно).
// Пример ввода:
// compareDates(new Date('11/14/2021 00:01'), new Date('11/14/2021 00:00'));
// Вывод:
// "Date1 > Date2"

// function compareDates(date1, date2) {
//     if (+date1 > +date2) {
//         return "Date1 > Date2";
//     } else if (+date1 < +date2) {
//         return "Date1 < Date2";
//     } else {
//         return "Date1 = Date2";
//     }
// }

// console.log(compareDates(new Date('11/14/2021 00:01'), new Date('11/14/2021 00:00')));



// 4. Проверьте, является ли дата выходным днем
// Напишите функцию JavaScript, чтобы проверить, является ли день выходным.
// Пример ввода:
// checkIsWeekend('Nov 16, 2020');
// Вывод:
// "не выходной"

// function checkIsWeekend(date) {
//     const timestampDate = Date.parse(date);
//     const dayOfWeek = new Date(timestampDate).getDay();
//     if (dayOfWeek === 0 || dayOfWeek === 6) return "Вихідний";
//     return "Не вихідний";
// }

// console.log(checkIsWeekend('Nov 16, 2020'));