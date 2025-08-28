let a = 10
let b = 5
let c = 2
console.log(a+b+c)
console.log((a+c)-b)
console.log(a*b/c)
console.log(a%b)

// zadanie 2
let x = 7
console.log(x++ + ++x)
console.log(x-- - --x)

//zadanie 3
console.log('The result is:' + (4+5))

//zadanie 4
console.log(a>b && a>0 && b>0)
console.log(c<10 && c==2)
console.log((a/c)!= 5)

//zadanie 5
let num = 10
let str = "10"
console.log(num == str) //не учитывает тип данных, только значение
console.log(num === str) // учитывает тип данных

// zadanie 6
let y= 6
console.log((x%2)==0 || (x%3)==0 && (x%6) !==0)
console.log(y > 10 || y<5 )