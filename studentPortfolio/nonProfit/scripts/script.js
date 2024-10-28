document.addEventListener("DOMContentLoaded", function() {
    //Create variable current flyer
    let currentFlyer = 0;
    const flyers = document.querySelectorAll('.flyer');

    //Create function nextslide
    function showSlide(index) {
        //Hide all flyers
        flyers.forEach((slide) => (slide.style.display = 'none'));

        currentFlyer = (index + flyers.length) % flyers.length;

        //Display current flyer
        flyers[currentFlyer].style.display = 'block';
    }

    //Create next slide function
    function nextSlide () {
        showSlide(currentFlyer + 1);
    }

    //Create prev slide function
    function prevSlide () {
        showSlide(currentFlyer - 1);
    }   
    
    //Add onclick event listeners
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    //Show the first flyer by default
    showSlide(currentFlyer);

    
});
//Create open menu function
function openMenu() {
    const menuNav = document.querySelector("header nav");
    menuNav.classList.toggle("active");

    //Add click event listener that closes menu when click outside of menu
    document.addEventListener("click", function handleClickOutside(event) {
        //Check is user clicks outside of menu
        if (!menuNav.contains(event.target) && !event.target.closest('.bx-menu')) {
            menuNav.classList.remove("active");

            //Remove event listener to avoid multiple triggers
            document.removeEventListener("click", handleClickOutside);
        }
    })
}


