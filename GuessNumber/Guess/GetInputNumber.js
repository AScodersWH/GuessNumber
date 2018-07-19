'use strict'

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var times = 0;
var results = [];
var inputs = [];
var inputArr = [];
var realNumber = generateRandomNumber();
rl.on('line', function (input) {
    inputArr = input.split(" ");
    inputArr.forEach(function (item, index) {
        inputArr[index] = +item;// 转化为数字
    });
    var userInput = formatInput(inputArr);
    if (userInput) {
        console.log(realNumber);
        var res = compare(userInput, realNumber);
        if (results != null) {
            for (var ii = 0; ii < times; ii++) {
                console.log("here are your history input :  " + inputs[ii] + ",  " + results[ii]);
            }
        }
        results.push(res);
        inputs.push(userInput);
    }
    inputArr = [];// 清空数组
    times++;
    if (times == 6) {
        console.log("your times have benn used off! you lose!");
        rl.close();
    }
});

function formatInput(collection) {

    var flag = true;
    var s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (collection.length != 4) flag = false;
    for (var item of collection) {
        if (s.indexOf(item) == -1) flag = false;
    }
    if (flag) {
        return collection;
    }

    console.log("Wrong Input，Input again");
    return false;

}

function generateRandomNumber() {
    const set = new Set();
    const sequence = [];
    while(sequence.length < 4){
        let randomNumber = Math.floor(Math.random() * 10);
        if (!set.has(randomNumber)) {
            set.add(randomNumber);
            sequence.push(randomNumber);
        }
    }
    return sequence;
}


function compare(userInput, realNumber) {
    var a = 0, b = 0;

    for (var item of userInput) {
        if (realNumber.indexOf(item) >= 0) b++;
    }

    for (var ite = 0; ite < 4; ite++) {
        if (userInput[ite] == realNumber[ite]) a++;
    }
    const result = `${a} A ${(b-a)} B`;
    if (a == 4) {
        console.log("win, all correct!");
        rl.close();
    }
    console.log(result);
    return result;
}

