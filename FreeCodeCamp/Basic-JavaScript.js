// Здесь находятся выполненные уроки по мини-курсу basic js с сайта FreeCodeCamp

// Использование символов перехода строки, табуляции
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 

// .length - считает длину строки
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

// Изменить строковые значения нельзя, можно только передать иное значение
// Нельзя: myStr[0] = "H";
let myStr = "Jello World";
myStr = "Hello World";

// .push() - вставляет элемент в конец массива 
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

// .pop() - удаляет последний элемент массива и возвращает его значение
const myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

// .shift() - удаляет первый элемент массива и возвращает его значение
const myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();

// .unshift() - добавляет элемент в начало массива
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

// Объявление и вызов функции
function reusableFunction() {
    console.log("Hi World");
  }
  
  reusableFunction();

// Функция с несколькими аргументами 
  function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
  }
  
  functionWithArgs(2, 4)

  
