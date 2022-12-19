// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

// Используйте шаблонные строки.

let fruits = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry", "blue"]
  ]);
  
  fruits.forEach(function (value, key){
     console.log(`Ключ — ${key}, значение — ${value}`)
  }); //выходит green, red, blue