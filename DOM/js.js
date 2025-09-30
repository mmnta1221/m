let message = document.getElementById("message");
message.textContent = "Добро пожаловать в JavaScript!"

//zadanie2
const color = document.getElementsByClassName('box');
for( let i =0; i< color.length ; i++){
    color[i].style.background = 'green';
}

//zadanie 3
let text = document.querySelector('#text')
text.textContent = "wow"

let form = document.querySelectorAll('.box')
form.forEach(a => {
    a.style.width = "100px";
    a.style.height = "100px"
});

//zadanie 4
const highlightedParagraphs = document.querySelectorAll('.highlight');

highlightedParagraphs.forEach(paragraph => {
   paragraph.style.color = 'red';
});

