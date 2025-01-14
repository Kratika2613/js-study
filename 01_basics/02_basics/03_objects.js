// singleton
// Object.create

// object literals

const mySum = Symbol("key1")


const JsUser = {
    name : "kratika",
    "full Name" : "Kratika Pachori",
    [mySum]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "kratika@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday" , "Staurday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full Name"])
// console.log(JsUser[mySum])

JsUser.email = "kratika@chat.com"
// Object.freeze(JsUser) // now using freeze func user will
                      // will not be able to make further changes in email i.e JsUser
JsUser.email = "kratika@gpt.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


