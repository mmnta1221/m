fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())

  .then(data => {
    console.log( data.title)
    console.log( data.body)
  })
  .catch(error => {
    console.error("ошибка:", error)
  })
//zadanie 2
fetch("https://jsonplaceholder.typicode.com/posts", {

    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Новый пост",
        body: "Содержимое поста",
        userId: 1
    })
    })
.then(response => response.json())
.then(data => {
    console.log("Ответ сервера:")
    console.log(data)
})
.catch(error => {
    console.error("Ошибка:", error)
})

//zadanie 3
fetch('https://api.example.com/data')
 .then(response => {
   if (!response.ok) {
     throw new Error('Ошибка сети: ' + response.status);
   }
   return response.json();
 })
 .then(data => console.log(data))
 .catch(error => console.error('Обработанная ошибка:', error));

//zadanie 4
fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        id: 1,
        title: 'новый заголовок',
        body: 'Старое содержимое ',
        userId: 1
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log( data);
      })
      .catch(error => {
        console.error( error);
      });

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          console.log('Пост удалён.');
        } else {
          console.log(response.status);
        }
      })
      .catch(error => {
        console.error('Ошибка', error);
      });

//zadanie 5
async function getPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();

    console.log( data.title);
    console.log( data.body);
  } catch (error) {
    console.error('Ошибка:', error);
  }
  }
getPost();

//zadanie 6
async function getComments() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'MyCustomClient/1.0',
        'Authorization': 'Bearer example-token'
      }
    });

    const data = await response.json()
    console.log(data)
  } catch (error) {
      console.error( error);
  }
}

getComments();
      