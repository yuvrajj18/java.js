let Name  = "yuvraj";
const repocount = 50 
//console.log (Name + repocount + "value");

console.log (`hey what up my name is  ${Name} and my repo count is ${repocount}`);

let newGame = new String('yuvraj is good coder')

console.log(newGame.__proto__);
console.log(newGame.toUpperCase())
console.log(newGame.toLowerCase())
console.log(newGame.charAt(8));
console.log(newGame.indexOf("c"));


let newstring = newGame.substring(0,10)
console.log(newstring);

let anotherstring = newGame.slice(4,12)
console.log (anotherstring);


let na_me = "       yuvrajjjjj!!!     "
console.log(na_me);
console.log(na_me.trim());

let url = "www.amazon.com"
console.log(url.replace('com' ,'in'));

let product = " apple,  mango ,  pineapple, orange"
console.log(product.replace("mango" , "guava"));
console.log (product.includes("mango"))
console.log(product.includes("yummy"))
