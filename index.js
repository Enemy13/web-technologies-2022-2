
//Задание 1
function pickPropArray(arr, param1) {
  return arr.filter(el => el[`${param1}`])
    .map(x => x[`${param1}`])
}

const students = [
  {name: 'Павел', age: 20},
  {name: 'Иван', age: 20},
  {name: 'Эдем', age: 20},
  {name: 'Денис', age: 20},
  {name: 'Виктория', age: 20},
  {age: 40},
]

const result = pickPropArray(students, 'name')

console.log(result)

//[ 'Павел', 'Иван', 'Эдем', 'Денис', 'Виктория' ]


// Zadanie 2
function createCounter() {
  let counter = 0;
  return function () {
    counter++;
    console.log(counter);
  }
}

const counter1 = createCounter()
counter1() // 1
counter1() // 2

const counter2 = createCounter()
counter2() // 1
counter2() // 2

//Zadanie 3

function spinWords(str) {
  let result=[];
  for (const strElement of str.split(' ')) {
    if (strElement.length>=5){
      result.push(strElement.split('').reverse().join(''))
      continue
    }
    result.push(strElement)
  }
  return result.toString().replaceAll(","," ")
}

const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test

//Zadanie 4

 function getIndex(nums,target) {
   let result=[];
   for (const i in nums) {
     for (const j in nums) {
       if (nums[i]+nums[j]===target){
         result.push([i,j])
       }
     }
   }
   return result[0]
 }

const nums = [2,7,11,15]
const target=9;
console.log(getIndex(nums, target));

