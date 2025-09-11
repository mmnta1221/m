let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);

//zadanie 2
console.log(fruits[0], fruits[2])
fruits.push("pear")
console.log(fruits)

//zadanie 3
fruits.pop()
fruits.shift()
console.log(fruits)

//zadanie 4
fruits.forEach(fruit => console.log(fruit))


//zadanie 5
let length = fruits.map(fruit => fruit.length)
console.log(length)

//zadanie 6
let numbers = [1,2,3,4,5,6,7,8,9,10]
let even_numbers = numbers.filter(num =>(num%2)==0)
console.log(even_numbers)

//zadanie 7
let sum = numbers.reduce((acc, num) => acc+ num, 0)
console.log(sum)

//zadanie 8
console.log(numbers.find(num => num>5))

//zadanie 9
arr1 = [1, 2, 3]
arr2 = [4, 5, 6]
arr3 = arr1.concat(arr2)
console.log(arr3)

//zadanie 10
console.log(fruits.includes("Banana"))

//zadanie 11
console.log(fruits.reverse())