// 1 задание
const age = prompt("Введите ваш возраст:");
if (age < 65) {
    alert("Вам ещё рано на пенсию");
} else {
    alert("Поздравляем с пенсионным возрастом!");
}

// 2 задание
const num1 = prompt("Введите первое число:");
const num2 = prompt("Введите второе число:");

if (num1 > num2) {
    alert("Первое число больше");
} else if (num1 < num2) {
    alert("Второе число больше");
} else {
    alert("Числа равны");
}

// 3 задание
const number = prompt("Введите число:");
if (number % 2 === 0) {
    alert("Это чётное число");
} else {
    alert("Это нечётное число");
}

// 4 задание
if (number > 100) {
    alert("Большое число");
} else if (number < 100) {
    alert("Маленькое число");
} else {
    alert("Точно 100!");
}
// 5 задание
const login = prompt("Введите логин:");
const password = prompt("Введите пароль:");
if (login === "admin" && password === "12345") {
    alert("Добро пожаловать!");
} else {
    alert("Неверный логин или пароль");
}
// 6 задание
const year = prompt("Введите год:");

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert("Это високосный год");
} else {
    alert("Это не високосный год");
}
// 7 задание
const secretNumber = 7;
const userGuess = prompt("Угадайте число от 1 до 10:");

if (userGuess == secretNumber) {
    alert("Вы угадали!");
} else {
    alert("Попробуйте ещё раз!");
}
