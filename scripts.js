// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Randomize Floating Meme Animation Delay for Each Load
document.querySelectorAll('.floating-meme').forEach(meme => {
    meme.style.animationDelay = `${Math.random() * 5}s`;
});

// Glow effect on hover for roadmap milestones
document.querySelectorAll('.milestone').forEach(milestone => {
    milestone.addEventListener('mouseover', () => {
        milestone.style.boxShadow = '0px 0px 15px 5px rgba(255, 215, 0, 0.6)';
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
