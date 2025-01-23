document.addEventListener('DOMContentLoaded', () => {
    const contact = document.getElementById('contact');
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    contact.addEventListener('click', () => {
        window.location.href = 'https://github.com/Adityasinghvats/';
    })

    menuBtn.addEventListener('click', ()=>{
        menu.classList.toggle('hidden');
    })
})