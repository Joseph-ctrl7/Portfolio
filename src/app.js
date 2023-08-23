document.addEventListener('DOMContentLoaded', function(){
    const hamburgerButton = document.getElementById('hamburger');
    const navList = document.getElementById('navList');
    const nav = document.querySelector('nav');
    const header = document.querySelector('.header');

    //function for hamburger menu animation
    function toggleButton() {
        if(hamburgerButton.classList.contains('show')){
            hamburgerButton.classList.remove('show');
            navList.classList.toggle('menu');
        }else{
            hamburgerButton.classList.add('show');
            navList.classList.toggle('menu');
        }
    
    }

    hamburgerButton.addEventListener('click', toggleButton);

    //function to observe pages for transition animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting){
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    window.addEventListener('load', () => {
        nav.style.transform = 'translateX(0)';
    });
});