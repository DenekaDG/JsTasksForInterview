'use strict'

function factorial(n) {
   // можно также добавить проверку на тип введенных данных
   // if (typeOf(n) !== "number" || !Number.isInteger(n)) {
   //  return "Ошибка, проверьте введенные данные"
   // }
   
   if (n < 0) return ;
   if (n == 0) return 1;
   return n * factorial(n - 1);

}

console.log(factorial(5))// результат 120