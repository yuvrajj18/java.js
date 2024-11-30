// function sayMyName(){
//     console.log("y");
//     console.log("u");
//     console.log("v");
//     console.log("r");
//     console.log("a");
//     console.log("j");
// }
// sayMyName()

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2)
// }
// let result = addTwoNumbers(100, 700);
// console.log("result:",result);

function addTwoNumbers (number1 , number2){
    // let result = number1 + number2
    // return result
return number1 + number2
        
    }
const result = addTwoNumbers(100 , 10000);
    // console.log("result:", result)

// function blahblahuser (username){
//     if (username === undefined){
//         console.log("please enter the username")
//         return
//     }
//     return `${username}just logged in`
// }
// // console.log(blahblahuser("yuvraj"))
// console.log(blahblahuser())

function blahblahuser (username = "sam" ){
    if (!undefined){
        console.log("please enter the username")
        
    }
    return `${username} just logged in`
}
// console.log(blahblahuser("yuvraj"))
console.log(blahblahuser("yuvraj"))