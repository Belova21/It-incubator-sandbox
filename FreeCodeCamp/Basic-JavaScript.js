// ����� ��������� ����������� ����� �� ����-����� basic js � ����� FreeCodeCamp

// ������������� �������� �������� ������, ���������
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 

// .length - ������� ����� ������
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

// �������� ��������� �������� ������, ����� ������ �������� ���� ��������
// ������: myStr[0] = "H";
let myStr = "Jello World";
myStr = "Hello World";

// .push() - ��������� ������� � ����� ������� 
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

// .pop() - ������� ��������� ������� ������� � ���������� ��� ��������
const myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

// .shift() - ������� ������ ������� ������� � ���������� ��� ��������
const myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();

// .unshift() - ��������� ������� � ������ �������
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

// ���������� � ����� �������
function reusableFunction() {
    console.log("Hi World");
  }
  
  reusableFunction();

// ������� � ����������� ����������� 
function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
  }
  
  functionWithArgs(2, 4)

// ���������� �������� � ����� �������, �������� ������� �������� 
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
  
let testArr = [1, 2, 3, 4, 5];
  
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// ����������� if-else
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return 'Yes, that was true';
  }
  return 'No, that was false'
}


