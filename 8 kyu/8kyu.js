//Even or odd

//Using simple if statements
function even_or_odd(number) {
    if (number%2===0) {
        return 'Even';
    }
    else {
        return 'Odd';
    }
}
//Using ? operator
function evenOrOddQuestion(number)  {
    return number%2 ? 'Even':'Odd'
}

//String to Number
var stringToNumber = function(str) {
    //Transform string into number where any input is a string of numbers
    let num=Number(str)
    return parseInt(str)

    return num;
}

//Using the Unary operator
var stringToNumUnary = function(str) {
    return +str;
}
//Return time since midnight in milliseconds
//h - 0<=h<=23
//m - 0<=h<=59
//s - 0<=h<=59

//Example: h=0,m=1,s=2
function past(h,m,s){
    //Find number of hours since midnight and convert to seconds
    let secondsH=h*60*60*1000;
    let secondsM=m*60*1000;
    let secondsS=s*1000;
    let total=secondsH+secondsM+secondsS;
    return total;
}
//Less LOC to return same
function pastLOC(h,m,s) {
    return (h*3600+m*60+s)*1000;
}

//Do math from string on two numbers
function basicOp(operation,value1,value2) {
    // return eval(`${value1} ${operation} ${value2}`)
    return eval(value1+operation+value2)
}

//Do simple math
function litres(time){
    return Math.floor(time*.5)
}
let litres2 = time => Math.floor(time*.5)

function countSheeps(arrayOfSheep) {
    let present = 0;
    arrayOfSheep.forEach(element => {
        if (element) {present++}
    });
    return present;
}
function countSheepFilter(arrayofSheeps) {
    return arrayofSheeps.filter(Boolean).length;
}

