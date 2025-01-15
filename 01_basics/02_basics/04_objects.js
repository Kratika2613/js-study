// const instaUser = new Object() //singleton object
const instaUser = {} // non-singleton object

instaUser.id = "123abc"
instaUser.name = "Sammy"
instaUser.isLoggedIn = false


// console.log(instaUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Kratika",
            lastname: "Pachori"
        }
    }
}

// console.log(regularUser.fullname.userFullname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

// const obj3 ={obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({} ,obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "hii@gmail.com"
    },
    {
        id: 2,
        email: "hello@gmail.com"
    },
    {
        id: 3,
        email: "example@gmail.com"
    },
];

users[1].email
console.log(instaUser);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));





