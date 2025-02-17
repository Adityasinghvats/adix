document.addEventListener('DOMContentLoaded', () => {
    const contact = document.getElementById('contact');
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const clibtn = document.getElementById('cli')

    contact.addEventListener('click', () => {
        window.location.href = 'https://github.com/Adityasinghvats/';
    })

    menuBtn.addEventListener('click', ()=>{
        menu.classList.toggle('hidden');
    })
    menu.addEventListener('click', ()=>{
        menu.classList.toggle('hidden');
    })

    clibtn.addEventListener('click',async ()=>{
        try {
            await navigator.clipboard.writeText('npx adix');
            const span = clibtn.querySelector('span');
            const originalText = span.textContent;
            span.textContent = 'Copied!';

            setInterval(()=>{
                span.textContent = originalText;
            }, 2000)
        } catch (error) {
            console.error('Failed to copy text: ', err);
        }
    })
})