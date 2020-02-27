console.log("hello world");

const form = document.getElementById('msgForm');
const API_URL = "http://localhost:5000/";

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const message = formData.get('message');
    form.reset();
    const messageObject = {
        name,
        message
    };

    console.log(messageObject);

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(messageObject),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(createdMessaged => {
            console.log(createdMessage);
        })        
});

fetch(API_URL)
    .then(response => response.json())
    .then(messages => {
        console.log(messages);
    });    
