// Your code here
function saturdayFun(string = "roller-skate") {
  return `This Saturday, I want to ${string}!`
}

function mondayWork(string = "go to the office") {
  return `This Monday, I will ${string}.`
}

// function wrapAdjective(flair = "*"){
//   function innerFunction(param = "special"){
//     return `You are ${flair}a ${param}${flair}`
//   }
//   return innerFunction()
// }

let wrapAdjective = function(flair="*") {
  return function(param="special") {
    return `You are ${flair}${param}${flair}!`
  }
}

let Calculator = {
  add: function(num1, num2){return num1+num2},
  subtract: function(num1, num2){return num1-num2},
  multiply: function(num1, num2){return num1*num2},
  divide: function(num1, num2){return num1/num2}
}

let actionApplyer = function(int, arrayOfFunctions){
  let result = int
  if (arrayOfFunctions.length === 0) {
    return int
  } else {
    arrayOfFunctions.forEach(fn => result = fn(int))
  }
  return result -2
}
