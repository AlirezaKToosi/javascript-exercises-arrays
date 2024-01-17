const numbers = [2, 6, 12, 7, 22, 35];
//************************************************* */
console.log(`The items of the array is equal to:`);
numbers.forEach(number=> console.log(number));
const firstElemnet = numbers.at(0);
console.log(`The first item of the array is equal to ${firstElemnet}`);
//************************************************* */
const lastElement=numbers.at(numbers.length-1);
console.log(`The last item of the array is equal to ${lastElement}`);
//************************************************* */
const fourthElement=numbers.at(3);
console.log(`The fourth item of the array is equal to ${fourthElement}`);
//************************************************* */
const secondElement=numbers.at(1);
const fifthElement=numbers.at(4);
const subArray=[secondElement,fifthElement];
console.log(`The items of the subArray is equal to:`);
subArray.forEach(item=>console.log(item));
//************************************************* */
const lengthOfArray=numbers.length;
console.log(`Length of the array is equal to ${lengthOfArray}`);
//************************************************* */
const newLength = numbers.push(44);
console.log(`The items of the array is equal to:`);
console.log(numbers);
console.log(`Length of the array is equal to ${newLength}`);
//************************************************* */
const Length2 = numbers.unshift(22);
console.log(`The items of the array is equal to:`);
console.log(numbers);
console.log(`Length of the array is equal to ${Length2}`);
//************************************************* */
const popItem = numbers.pop();
console.log(`Deleted item of the array is equal to ${popItem}`);
console.log(`The items of the array is equal to:`);
console.log(numbers);
//************************************************* */
const shiftItem = numbers.shift();
console.log(`Deleted item of the array is equal to ${shiftItem}`);
console.log(`The items of the array is equal to:`);
console.log(numbers);
//************************************************* */


