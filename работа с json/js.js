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
const store = localStorage.getItem(user)
const parsed = JSON.parse(store)
console.log(parsed)

//zadanie 4 
user.country = "Kazakhstan"
const UserInfo = JSON.stringify(user)
localStorage.setItem('user', UserInfo)
console.log(localStorage.getItem("user"))

//zadanie 5
if (user.birthday){
    console.log(user.birthday)
}
else{
    user.birthday = "10.07.2009"
    const UuserInfo = JSON.stringify(user)
    localStorage.setItem('user', UuserInfo)
    console.log(localStorage.getItem("user"))

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
localStorage.getItem("massive")
massive[2].completed = true
newMassive = JSON.stringify(massive)
localStorage.setItem("massive", newMassive)
console.log(localStorage.getItem("massive"))
