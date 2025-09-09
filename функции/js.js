function greet(){
    world = ("Hello world!")
    return world
}
console.log(greet())

//zadanie 2
function sayHello(name){
    let hello = ("Привет" + " "+ name)
    return hello

}
console.log(sayHello("Asya"))
console.log(sayHello("Masha"))
console.log(sayHello("Vitya"))

//zadanie 3
function sum(num1, num2){
    let summ = (num1 + num2)
    return summ
}
console.log(sum(1, 2))

//zadanie 4
function isEven(num){
    let console
    if ((num%2)== 0){
        console = ("even")
        return console
    }else{
        console = ("not even")
        return console

    }
}
console.log(isEven(5))

//zadanie 5
function max(number1, number2){

    let comparison = (number1==number2)? "они равны": (number2 > number1)? "второе число больше": "первое число большe";
    return comparison


}
console.log(max(10, 10))

//zadanie 6
function getInitials(firstName, SecondName ){
    console2 = (firstName[0] +"."+ SecondName[0])
    return console2
}
console.log(getInitials("Alina", "Kabanova"))

//zadanie 7
function square(number){

    let sq = number**2
    return sq
}
function cube(number){
    let cb =  number * square(number)
    return cb

}

console.log(square(9))
console.log(cube(9))

//zadanie 8
const sum2 = (numm1, numm2) => numm2+ numm1
console.log(sum2(9, 8))

//zadanie 9
function getFactorial(number3){
    if ( number3 === 1){
        return number3;

    }
    return number3 * getFactorial(number3-1)

}
console.log(getFactorial(5))