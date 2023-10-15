const triggerModalBtn = document.getElementById('modalButton');
const modalBg = document.getElementById('modalBg');
const closeButton = document.querySelector('.closeButton');
const modalText = document.querySelector('.modal-text');

triggerModalBtn.addEventListener('click', showModal)

document.addEventListener('keyup', (event) => {
    if (event.key === "Escape") {
        hideModal();
    }
})

closeButton.addEventListener('click', hideModal)

modalBg.addEventListener('click', (event) => {
    if (event.target === modalBg) {
        hideModal();
    }
})

function showModal() {
    modalBg.classList.add('visible');
}

function hideModal() {
    modalBg.classList.remove('visible');
}

const getData = (url) => 
    new Promise((resolve, reject) => 
    fetch(url)
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(error => reject(error))
    )

getData('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (data) {
        for (const key in data) {
            const element = data[key];
            console.log(element);
            const li = document.createElement('li');
            modalText.append(li);
            li.append(key + ': ' + element);
        }
    })
    .catch(error => console.log(error.message))
