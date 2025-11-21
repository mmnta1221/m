//AJAX — это методика для создания асинхронных веб-приложений, позволяющая обновлять части веб-страницы без перезагрузки всей страницы.
// Google Maps и Gmail, Facebook, Twitter, ВКонтакте

//zadanie 2

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
xhr.onload = function() {
    if (xhr.status === 200) {
        try {
            const posts = JSON.parse(xhr.responseText);            
            posts.forEach(post => {
                console.log(post.title);
            })
        } catch (error) {
            console.error('Ошибка', error);
        }
    } else {
        console.error(xhr.status);
    }
};
xhr.send();

//zadanie 3

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.onload = function () {
    if (xhr.status === 200) {
    const posts = JSON.parse(xhr.responseText);
    const list = document.getElementById("posts");

    posts.forEach(post => {
        const li = document.createElement("li");
        li.textContent = post.title;  
        list.appendChild(li);
    });

    } else {
    console.error("Ошибка:", xhr.status);
    }
};
xhr.send();

//zadanie 4

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.onload = function () {
    if (xhr.status === 200) {
    const posts = JSON.parse(xhr.responseText)
    const list = document.getElementById("posts")

    posts.forEach(post => {
        const li = document.createElement("li")
        li.innerHTML = `
        <strong>заголовок:</strong> ${post.title}<br>
        <strong>текст:</strong> ${post.body}<br>
        <strong>ID :</strong> ${post.userId}
          `

        list.appendChild(li)
    })

    } else {
    console.error("Ошибка:", xhr.status)
    }
};
xhr.send();


//zadanie 5
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.onload = function () {
    if (xhr.status === 200) {
    const posts = JSON.parse(xhr.responseText)
    const list = document.getElementById("posts")

    posts.forEach(post => {
        const li = document.createElement("li")
        li.textContent = post.title;
        list.appendChild(li)
    })

    } else {
    document.getElementById("error").textContent = 
        "Ошибка " + xhr.status
    }
}
xhr.send()

//zadanie 6
const loading = document.getElementById("loading")
const postsContainer = document.getElementById("posts")
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts")

xhr.onload = function () {
    loading.remove()

    if (xhr.status === 200) {
    const posts = JSON.parse(xhr.responseText)

    posts.forEach(post => {
        const li = document.createElement("li")
        li.textContent = post.title
        postsContainer.appendChild(li)
    });

    } else {
    document.getElementById("error").textContent =
        "Ошибка" + xhr.status
    }
};

xhr.send()