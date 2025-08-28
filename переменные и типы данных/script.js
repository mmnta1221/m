let name = "Jake"
console.log(name)

name = "Sofia"
console.log(name) //может быть изменена

const age = 1
console.log(age)

// age = 12 
// console.log(age)  не может быть изменена

//zadanie 2
//var можкт быть изменена, но ее использование считатся устаревшим тк область видимомти ограничевается функцией или скриптом

// zadanie 3

let number = 10
let str = "word"
let r = true;
let smth = null
let not_A_number = NaN
let thing = undefined
console.log(typeof number + " " + number)
console.log(typeof str  + " " + str)
console.log(typeof r  + " " + r)
console.log(typeof smth +" " + smth)
console.log(typeof not_A_number  + " " + (not_A_number))
console.log(typeof thing  + " " + thing)

//zadanie 4 
let str2 = "100"
let str_to_num = Number(str2) //строка стала числом и поменяла цвет
let num_to_str = String(number) //число стало строкой и поменяло цвет
console.log(str_to_num )
console.log(num_to_str)

let undef_to_str = String(undefined) // поменяла цвут и превратилась в строку
let NaN_to_num = Number(not_A_number) //ничего не изменилось
console.log(undef_to_str)
console.log(NaN_to_num)

//zadanie 5
let num2 = 90
console.log(num2)
let numToStr = String(num2)
console.log(numToStr)
// динамическая типизация это свойство, которое позволяет переменной поменять свой тип данных в процессе выполнения программы

//zadanie 6
user_name = prompt("Напишите ваше имя")
console.log(user_name)
user_age = prompt("Напишите ваш возраст")
console.log(user_age)