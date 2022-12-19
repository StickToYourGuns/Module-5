// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let anyArr = [1, 1, 1];

for (let i=0; i<anyArr.length; i++){
  for (let j=0; j<anyArr.length; j++){
     if (anyArr[i] !== anyArr[j]) {
      console.log("false");
     } else {
       console.log('true');
     }
  }
}