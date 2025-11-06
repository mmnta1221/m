setTimeout(()=>{
    console.log("Привет, мир!")
    

},2000)



//zadanie 2
const intervalId = setInterval(()=>{
    var date = new Date()
    
    console.log(`${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`)
    
}, 1000)

//zadanie 3
 setTimeout(() =>{
   clearInterval(intervalId);
 }, 5000); 

 //zadanie 4
function fetchData(){
  return new Promise((resolve) =>{
    setTimeout(() => {
      resolve("Данные получены!");
    }, 3000);
  });
}

fetchData().then(result =>{
  console.log(result); 
});

//zadanie 5
function fetchDataWithError(){
  return new Promise((_, reject) =>{
    setTimeout(() => {
      reject("Ошибка загрузки!");
    }, 2000);
  });
}

fetchDataWithError().catch(error =>{
    console.log(error);
  });

//zadanie 6
async function fetchDataAsync(){
  const result = await fetchData();
  console.log(result);
}
fetchDataAsync()

//zadanie 7
async function fetchDataWithErrorAsync(){
  try{
    const result = await fetchDataWithError();
    console.log(result);
  } catch (error){
    console.log("ошибка:", error);
  }
}
fetchDataWithErrorAsync();

//zadanie 8
function task1(){
  return new Promise(resolve =>{
    setTimeout(() => resolve("Задача 1 выполнена"), 1000);
  });
}

function task2(){
  return new Promise(resolve =>{
    setTimeout(() => resolve("Задача 2 выполнена"), 2000);
  });
}
async function runTasks(){
  const result1 = await task1();
  console.log(result1);

  const result2 = await task2();
  console.log(result2);
}

runTasks();

//zadanie 9
function taskA(){
  return new Promise(resolve =>{
    setTimeout(() => resolve("Задача A выполнена!!"), 2000);
  });
}

function taskB(){
  return new Promise(resolve =>{
    setTimeout(() => resolve("Задача B выполнена!!"), 3000);
  });
}
async function tasks(){
  const results = await Promise.all([taskA(), taskB()]);
  console.log(results[0]);
  console.log(results[1]);
}

tasks();

//zdanie 10
async function delayedMessage(message, delay){
  return new Promise(resolve =>{
    setTimeout(() =>{
      console.log(message);
      resolve();
    }, delay);
  });
}
delayedMessage("привет!", 1500);