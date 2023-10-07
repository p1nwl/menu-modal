const triggerModalBtn = document.getElementById('modalButton');
const modalBg = document.getElementById('modalBg');
const closeButton = document.querySelector('.closeButton');

triggerModalBtn.addEventListener('click', showModal)
// closeButton.addEventListener('click', hideModal)
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

