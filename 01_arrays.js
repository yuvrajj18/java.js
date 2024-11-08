let myArr= [0,1,2,3,4]
 let myArr2 = new Array(1, 2, 3, 4, 5)
 console.log(myArr[0]);
 
 myArr.push(6)
 console.log(myArr)
 
 myArr.push(7)
 console.log(myArr);
 
 myArr.pop() //last value ko remove kar deta hai 


 myArr.unshift(9)
 console.log(myArr); //9 shuruwat mein add ho jaega

 myArr.shift()
 console.log(myArr); //jo 9 tha wo remove ho jaega



  console.log(myArr.includes(9)); //false
  console.log(myArr.indexOf(9)); //-1 cuz hai hi nhi toh obv -1 
  console.log(myArr.indexOf(3)); // 3 cuz 3rd index pr hai (1 , 2, [3], 4)


  let newArr = myArr.join()
  console.log(myArr);//[0, 1, 2, 3, 4]
  console.log(typeof newArr); //string
  console.log(newArr); // 0,1,2,3,4


  //slice ,splice
  

console.log("A" , myArr);
let myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B" , myArr);
let myn2 = myArr.splice(1,3)
console.log(myn2);

 let mynumber2 = myArr.slice(1,3);
 console.log("c", myArr);
 console.log(mynumber2);
