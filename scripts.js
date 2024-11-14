// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
// Glow effect on hover for roadmap milestones
document.querySelectorAll('.milestone').forEach(milestone => {
    milestone.addEventListener('mouseover', () => {
        milestone.style.boxShadow = '0px 0px 15px 5px rgba(78, 253, 257, 0.6)';
    });
    
    milestone.addEventListener('mouseleave', () => {
        milestone.style.boxShadow = 'none';
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// rocket
const rocket = document.querySelector('.rocket');
window.addEventListener('scroll', () => {
    if (window.scrollY > 800){
        const scrollY = window.scrollY - 800;
        const movement = scrollY * 0.7;
        rocket.style.transform = `translateY(-${movement}px)`;
    }
});