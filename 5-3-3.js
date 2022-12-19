// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let str 
str = "лепс спел";

let strReverse = Array.from(str).reverse().join("");
console.log(strReverse);