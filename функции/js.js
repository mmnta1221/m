function greet(){
    console.log("Hello world!")
}
greet()

//zadanie 2
function sayHello(name){
    console.log("Привет" + " "+ name)

}
sayHello("Asya")
sayHello("Masha")
sayHello("Vitya")

//zadanie 3
function sum(num1, num2){
    console.log(num1 + num2)
}
sum(1, 2)

//zadanie 4
function isEven(num){
    if ((num%2)== 0){
        console.log("even")
    }else{
        console.log("not even")

    }
}
isEven(5)

//zadanie 5
function max(number1, number2){

    let comparison = (number1==number2)? "они равны": (number2 > number1)? "второе число больше": "первое число большe";
    console.log(comparison)


}
max(10, 10)

//zadanie 6
function getInitials(firstName, SecondName ){
    console.log(firstName[0] +"."+ SecondName[0])
}
getInitials("Alina", "Kabanova")

//zadanie 7
function square(number){
    console.log(number**2)
}
square(9)

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