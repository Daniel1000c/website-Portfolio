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
    showSlide(currentFlyer)
});
