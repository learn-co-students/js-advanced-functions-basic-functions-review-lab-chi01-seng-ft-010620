// Your code here
const saturdayFun = (activity="roller-skate") => {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity="go to the office") => {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = (one="*") => {
    return function(two = "special") {
        return `You are ${one}${two}${one}!`
    }

}

const Calculator = {
    add: function(a,b) {
        return a + b
    }, 
    subtract: function(a,b) {
        return a - b
    }, 
    multiply: function(a,b) {
        return a * b
    }, 
    divide: function(a,b) {
        return a / b
    }
}

const actionApplyer = (int, array) => {
    let a = int
    array.forEach(f => a = f(a))
    return a
}

