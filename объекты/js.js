let person = {
    age:10,
    name: "John",
    city: "New-York",
    greet(){
        message = "Привет, меня зовут" + " "+ this.name + " "+ "мне" + " " +this.age +"" + "лет!";
        return message
    }

}
console.log(person)

///zadanie 2

console.log(person.name, person.age)
person.city = "Almaty";
console.log(person.city)

//zadanie 3

console.log(person.greet())

//zadanie 4
let obj1 = {
    a: 10, 
    b: 20 
}
let obj2 = {
    a: 10, 
    b: 20 
}
console.log(obj1 == obj2)
console.log(obj1 === obj2) //оба выражениия выводит false т.к == и === проверяют ссылки на объекты, а не их содержимое

//zadanie 5
let book = {
    title: "Война и мир",
    author: "Толстой",
    details: {
        year: 1867,
        pages: 1400 ,
    }
}
let copyBook = Object.assign({}, book)
book.details.year = 1866
console.log(book.details.year)
console.log(copyBook.details.year) //содержимое остается таким же так как details тоже является объектом и копируется лишь ссылка на него, а не значения

//zadanie 6
let calculator = {
    a: 10,
    b: 11,
    sum(){
        return this.a+ this.b
    },
    multiply(){
        return this.a * this.b
    }
}
console.log(calculator.sum())
console.log(calculator.multiply())

//zadanie 7
const car = {
    brand: "djsidji" ,
    model: "d12"

}
car.brand = "hshf"
console.log(car.brand) // объект изменлся, потому что const не предотвращает изменение содержимого объектов