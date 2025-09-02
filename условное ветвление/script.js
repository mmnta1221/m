let num = prompt("напишите число")
if(num>10){
    console.log("Число больше 10")
}else{
    console.log("Число меньше или равно 10")
}

//zadanie 2
let delete_file = confirm("Вы хотите удалить файл?")
if (delete_file){
    console.log("Файл удален")
}else{
    console.log("Удаление отменено")
}

//zadanie 3
let age = prompt("Сколько вам лет?")
if (age<18){
    console.log("Вы еще подросток")
}else if(age>=18 && age<30){
    console.log( "Вы молодой взрослый" )
}else if(age>=30){
    console.log("Вы взрослый")
}
//zadanie 4
let number = prompt("напишите число")
let even = ((number%2) == 0)? "четное число": "нечетное число"
console.log(even)

//zadanie 5
let day = prompt("напишите день недели")
let message
switch(day){
    case "1":
        message = "Понедельник"
        break
    case "2":
        message = "Вторник"
        break
    case "3":
        message = "Среда"
        break
    case "4":
        message = "Четверг"
        break
    case "5":
        message = "Пятница"
        break
    case "6":
        message = "Суббота"
        break
    case "7":
        message = "Воскресенье"
        break
    default:
        message = "Некоректное значение"
    
}
console.log(message)

//zadanie 6
let num1 = Number(prompt("Первое число"))
let num2 = Number(prompt("Второе число"))
let comparison = (num1==num2)? "они равны": (num2 > num1)? "второе число больше": "первое число большe";
console.log(comparison)

//zadanie 7
let month = prompt("напишите номер месяца")
let message1
switch(month){
    case "1":
    case "2":
    case "12":
        message1 = "Зима"
        break
    case "3":
    case "4":
    case "5":
        message1 = "Весна"
        break
    case "6":
    case "7":
    case "8":
        message1 = "Лето"
        break
    case "9":
    case "10":
    case "11":
        message1 = "Осень"
        break

}

console.log(message1)