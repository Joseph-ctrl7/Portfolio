const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('navList');
const header = document.querySelector('.header');


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