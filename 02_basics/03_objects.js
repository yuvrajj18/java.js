//object literals


let JsUser = {
    name : "yuvraj" ,
    "full name" : "yuvraj singh",
    mySym : "mykey1",
    age: 18,
    location : "patiala",
    email : "yuvrajsingh@gmail.com",
    isLoggedIn : false,
    lastLoginDays : [ "monday" , "saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof JsUser.mySym)

JsUser.greeting = function(){
    console.log("hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`hello JS user , ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());