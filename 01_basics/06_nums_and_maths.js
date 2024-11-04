let gyatscore = 1000
console.log(gyatscore);

let balance = new Number(100)
console.log(balance);
console.log (balance.toString());
console.log (typeof balance)

let bruh_score = 10000
let new_balance = new Number(100000000)
console.log(new_balance.toFixed(2))

let somenumber = 70.992929
console.log(somenumber.toPrecision(2))

let hundreds = 100000
console.log (hundreds.toLocaleString()) //american standards
console.log (hundreds.toLocaleString('en-IN'))

//+++++++maths+++++++

console.log(Math);
console.log(Math.abs(-19));
console.log(Math.round(4.2));
console.log(Math.ceil(7.8));
console.log(Math.floor(5.98));
console.log(Math.sqrt(625));
console.log(Math.tanh(45));
console.log(Math.imul(4 , 5)); //multiplication\
console.log(Math.SQRT1_2); //root of 1/2
console.log(Math.hypot(3 ,3))
console.log(Math.trunc(78.9877788))

console.log(Math.random());
console.log((Math.random())*10 +1);
console.log(Math.floor(Math.random()*10)+1);

//now really important part of this repo
 let min = 1
 let max = 6
 console.log(Math.floor(Math.random()* (max - min +1))+ min)