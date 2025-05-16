document.addEventListener('DOMContentLoaded', () => {
    const contact = document.getElementById('contact');
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const clibtn = document.getElementById('cli');
    const downloadResume = document.getElementById('downloadResume');

    contact.addEventListener('click', () => {
        window.location.href = 'https://github.com/Adityasinghvats/';
    })

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        menu.classList.toggle('hidden');
        if (!menu.classList.contains('hidden')) {
            menu.classList.add('flex');
        } else {
            menu.classList.remove('flex');
        }
    });

    // Close menu when clicking anywhere on the menu
    menu.addEventListener('click', () => {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
    });

    // Prevent menu from closing when clicking menu items
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.add('hidden');
            menu.classList.remove('flex');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.classList.contains('hidden') && !menuBtn.contains(e.target)) {
            menu.classList.add('hidden');
            menu.classList.remove('flex');
        }
    });

    downloadResume.addEventListener('click', async()=>{
        try {
            const link = document.createElement('a')
            link.href = "./assets/Resume.pdf";
            link.download = "aditya_resume.pdf"
            document.body.appendChild(link)
            link.click();
            document.body.removeChild(link)
        } catch (error) {
            
        }
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
    const typewriterElement = document.getElementById('typewriter');
    const phrases = [
        "Nice to meet you.",
        "Full-Stack Developer.",
        "Backend Developer.",
        "Open-Source Contributor."
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 1000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing next phrase
        }
        setTimeout(typeWriter, typingSpeed);
    }
    setTimeout(typeWriter, 1000);
})