// Your code here
function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity = "go to the office") {
    return(`This Monday, I will ${activity}.`);
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return(`You are ${flair}${adjective}${flair}!`)
    }
}

const Calculator = {
    add: function(a,b){
      return a + b;
    },
    subtract: function(a,b){
      return a - b 
    },
    multiply: function(a,b){
      return a * b;
    },
    divide: function(a,b){
      return a / b;
    }
}

function actionApplyer(integer, function_array) {
    let a = integer  
        for (let i = 0; i < function_array.length; i++ ){
        a = function_array[i](a)
    }
    return a 
}