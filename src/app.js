document.addEventListener('DOMContentLoaded', function(){
    const hamburgerButton = document.getElementById('hamburger');
    const navList = document.querySelector('.navList');
    const nav = document.querySelector('nav');
    const header = document.querySelector('.header');
    const card_wrapper = document.querySelector(".card-wrapper");
    const arrowBtns = document.querySelectorAll(".project-container i");
    const hamburgerMenuItems = document.querySelectorAll(".menu-item");


    //function for hamburger menu animation
    function toggleButton() {
        if(hamburgerButton.classList.contains('show')){
            hamburgerButton.classList.remove('show');
            nav.classList.toggle('open');
        }else{
            hamburgerButton.classList.add('show');
            nav.classList.toggle('open');
        }
    
    }
    hamburgerButton.addEventListener('click', toggleButton);

    //toggle after hamburger link is clicked
    function closeMenu(){
        if(hamburgerButton.classList.contains('show')){
            hamburgerButton.classList.remove('show');
            nav.classList.toggle('open');
        }else{
            hamburgerButton.classList.add('show');
            nav.classList.toggle('open');
        }
    }
    hamburgerMenuItems.forEach(item => {
        item.addEventListener('click', closeMenu)
    })

    //function to observe pages for transition animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting){
                entry.target.classList.add('show');
            } /*else {
                entry.target.classList.remove('show');
            }*/
        });
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    window.addEventListener('load', () => {
        nav.style.transform = 'translateX(0)';
    });

    //function for project sliders
    let isDragging = false, startX, startScrollLeft;
    const dragStart = (e) => {
        isDragging = true;
        card_wrapper.classList.add("dragging")

        //records initial cursor and scroll position of the card_wrapper
        startX = e.pageX;
        startScrollLeft = card_wrapper.scrollLeft;
    }

    const dragging = (e) => {
        if(!isDragging) return;

        //update scroll position of card_wrapper based on cursor movement
        card_wrapper.scrollLeft = startScrollLeft - (e.pageX-startX);
    }

    const dragStop = () => {
        isDragging = false;
        card_wrapper.classList.remove("dragging");
    }
    card_wrapper.addEventListener("mousedown", dragStart);
    card_wrapper.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);

    //arrows for the project sliders
    const firstCardWidth = card_wrapper.querySelector(".card").offsetWidth;
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            card_wrapper.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
        })
    })
});