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
    const typewriterElement = document.getElementById('typewriter');
    const phrases = [
        "Nice to meet you.",
        "Full-Stack Developer.",
        "Backend Developer.",
        "Freelancer."
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
            typingSpeed = 1000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing next phrase
        }
        
        setTimeout(typeWriter, typingSpeed);
    }
    
    // Start the typewriter effect
    setTimeout(typeWriter, 1000);
    const sections = document.querySelectorAll('section, div[id]');
    const navDots = document.querySelectorAll('[id^="nav-"]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navDots.forEach(dot => {
            dot.classList.remove('bg-red-500');
            dot.classList.add('bg-gray-500');
            if (dot.getAttribute('id') === `nav-${current}`) {
                dot.classList.remove('bg-gray-500');
                dot.classList.add('bg-red-500');
            }
        });
    });
})