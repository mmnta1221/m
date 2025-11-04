localStorage.setItem("greeting", "Привет мир!")
console.log(localStorage.getItem("greeting"))


//zadanie 2
const deleteGreet = localStorage.removeItem("greeting")
const deleted = localStorage.getItem(deleteGreet)
//zadanie 3
const user = {
    name: "Masha",
    age: 16,
    city: "Almaty"
}
const userInfo = JSON.stringify(user)
localStorage.setItem('user', userInfo)
const store = localStorage.getItem("userInfo")
const parsed = JSON.parse(store)
console.log(parsed)

//zadanie 4 
let user1 = localStorage.getItem("user")
user1 = JSON.parse(user1)
user1.country = "Kazakhstan"
const UserInfo = JSON.stringify(user1)
localStorage.setItem('user', UserInfo)
console.log(localStorage.getItem("user"))

//zadanie 5
const newUser = localStorage.getItem("userInfo")
if (newUser){
    const user2 = JSON.parse(newUser)
    console.log(user2)
}
else{
    const user2 = {
    name: "anya",
    age: 17,
    city: "Almaty"
}
userrr = JSON.stringify(user2)
localStorage.setItem('userInfo', userrr)
localStorage.getItem("user2")
console.log(userrr)

}

//zadanie 6
const clearUser = localStorage.clear()
console.log(localStorage)

//zadanie 7
const massive = [
    object1 ={
        title: "придти",
        completed:true
    },
    object2 ={
        title: "покушать",
        completed: true
    },
    object3 ={
        title: "поспать",
        completed: false
    }

];

const massiveJs = JSON.stringify(massive)
localStorage.setItem("massive", massiveJs)
console.log(localStorage.getItem("massive"))

//zadanie 8
let getMassive = JSON.parse(localStorage.getItem("massive"))
getMassive[2].completed = true
newMassive = JSON.stringify(getMassive)
localStorage.setItem("massive", newMassive)
console.log(localStorage.getItem("massive"))