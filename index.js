function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlare="*") {
    return function(input="special") {
        return `You are ${visualFlare}${input}${visualFlare}!`
    }
}

let Calculator = {
    add: function() {
        return 1 + 3
    }, subtract: function() {
        return 1 - 3
    }, multiply: function() {
        return 1 * 3
    }, divide: function() {
        return 10 / 5
    }
}

function actionApplyer(start, array) {
    let total = start
    if (array.length !== 0) {
        array.forEach(func => {
            total = func(total)
        });
    }
    return total
}