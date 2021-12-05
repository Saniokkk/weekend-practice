// const numbers = [1, 14, 42, 69, 87, 96, 8, 9, 12, 13, 7];
// let sum ;
// for (const num of numbers) {
//     if (num % 2 !== 0) {
//         sum += num;
//     }
// }
// console.log('sum', sum);

// console.log(str);
// let str = 299;
// var str = 'console';


//1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"


// const userInput = prompt('Какое официальное название JavaScript ?');
// console.log(userInput);
// if (userInput === "ECMAScript") {
//     alert("Верно!")    
// } else {
//     alert("Не знаете? ECMAScript!")
// }

// userInput === "ECMAScript"
//     ? alert("Верно!")
//     : alert("Не знаете? ECMAScript!");

//В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).

// const min = Number(prompt("Введите число от 0 до 59"));

// if (min > 0 && min < 15) {
//     console.log("Число попадает в первую четверть!");
// } else if (min >= 15 && min < 30) {
//     console.log("Число попадает во вторую четверть!");
// } else if (min >= 30 && min < 45) {
//     console.log("Число попадает в третью четверть!");
// } else if (min >= 45 && min < 60) {
//     console.log("Число попадает в четвертую четверть!");
// } else {
//     console.log("Не попадает во временной отрезок");
// }

// switch (true) {
//     case min > 0 && min < 15:
//         console.log("Число попадает в первую четверть!");
//         break;
//     case min >= 15 && min < 30:
//         console.log("Число попадает во вторую четверть!");
//         break;
//     case min >= 30 && min < 45:
//         console.log("Число попадает в третью четверть!");
//         break;
//     case min >= 45 && min < 60:
//         console.log("Число попадает в четвертую четверть!");
//         break;
//     default:
//      console.log("Не попадает во временной отрезок");
// }


// Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должен спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt

// let userInput = Number(prompt("Введіть число більше 100"));
// let check = false;
// do {
//     if (userInput < 100) {
//         userInput = Number(prompt("Введіть число більше 100"));
//         check = true;
//     }
//     else {
//         console.log('ви відмінили або ввели більше 100');
//         check = false;
//     }
// } while (check);

