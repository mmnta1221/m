const button = document.getElementById("Jsbutton");
   button.addEventListener("click", function() {
   console.log("Событие обработано через JS");
});

//zadanie 3
const div = document.getElementById("myDiv");
div.addEventListener("click", () => {
   div.style.backgroundColor = "blue";
});

div.addEventListener("mouseenter", () => {
   console.log("Элемент нажат");
});

//zadanie 4
const coordinates = document.getElementById("textInput")
coordinates.addEventListener("input", (event) => {
   console.log(event.target.value)

})

//zadanie 5
let site = document.getElementById("myLink")
site.addEventListener("click", (event) =>{
   event.preventDefault()
   console.log("Переход по ссылке отменен")
})

//zadanie 6
const list = document.getElementById('list')
list.addEventListener("click", (event)=>{
   console.log(event.target.textContent)
})

//zadanie 7
const input2 = document.getElementById("keyboardInput")
input2.addEventListener("keydown", () =>{
   console.log(event,key)
}

)