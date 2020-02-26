console.log("hello world");

const form = document.getElementById('msgForm');
const API_URL = "http://localhost:5000/mews";

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const message = formData.get('message');

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
    })
});