let mynewArr = [1, 2, 3, 4];
console.log(mynewArr)

let marvel_heroes = ["thor", "spiderman", "iron man"];
let dc_heroes = ["superman", "flash", "batman"];
//marvel_heroes.push(dc_heroes);
//console.log(marvel_heroes);
 //or
//marvel_heroes.concat(dc_heroes);
 //console.log(marvel_heroes);

 //ab main game ki bhai agar inn dono ko merge karna ho tab kya karna hoga?



//let Allheroes = marvel_heroes.concat(dc_heroes);
//console.log(Allheroes);

//or

const all_new_heroes = [...marvel_heroes , ...dc_heroes]; //spread operator
console.log(all_new_heroes);

let another_array = [1, 2, 3, [4, 5], 8, 90, [99, 54, [65, 85, 98]]]; //flat is used to merge big big arrays
let real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("yuvraj"));
console.log(Array.from("yuvraj")); //this convert into arrays
console.log(Array.from({namee : "yuvraj"})); //important case

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1 , s2, s3));