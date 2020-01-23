// Your code here
function saturdayFun(activity = "roller-skate") {
    console.log (`This Saturday, I want to ${activity}`)
}

function mondayWork(activity = "go to the office") {
    console.log (`This Monday, I will ${activity}`)
}

let wrapAdjective = function wrapAdjective(what= "*") {
    return function(whatever= "special") {
        return `You are ${whatever}`
    }
}
