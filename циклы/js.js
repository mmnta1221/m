let n = 1
while (n<=10){
    console.log(n)
    n++
}

// //zadanie 2
let m = 0;
while(m<=10){
    m++
    if (m== 5){
        continue;
    }
    if(m == 8){
        break;
    }
    console.log(m)
}

//zadanie 3
let num = 0;
do{
    console.log(num)
    num++
}while(num<=5) //цикл do-while гарантирует, что его тело будет выполнено хотя бы один раз, даже если условие сразу ложно.


//zadanie 4
while(true){
    let user = prompt("напишите число")
    if(user ==10){
        break
    }
}

//zadanie 5
for(let i = 1; i <= 10; i++){
    console.log(i)
}
//zadanie 7
let numbers = [1,2,3,4,5]
for (let u = 0; u < numbers.length; u++){
    console.log(numbers[u])
}

//zadanie 6
for (;;) {
  console.log(g); 
  g++

  if (g > 100) {
    break; 
  }
}



//zadanie 8
let students = 10;
while (students < 30){
    console.log(students)
    students ++ 
}

let group = ["sasha", "dasha", "anya"];
for (st =0; st < group.length; st++){
    console.log(st)
}

//zadanie 9
for(let o =10; o>0; o-=1){
    console.log(o)

}

//zadanie 10
for(let a=1; a<11; a++){
    if (a%2==1){
        continue;
    }
    console.log(a)
}