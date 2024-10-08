//Select all links that need to be jumped
const jumpLink = document.querySelectorAll('.pageLinkJump');

//Add an click event listener to each link
jumpLink.forEach(link=> {
    link.addEventListener('click',function(event){
        //Prevent default link behavior
        event.preventDefault();

        //get the id from the link
        const linkTargetId = this.getAttribute('href');
        const sectionTarget = document.querySelector(linkTargetId);

        //Smooth scroll section target
        sectionTarget.scrollIntoView({
            behavior: 'smooth' //Give link jump a smooth scroll
        });
    });
});


/*Create appear on scroll animation */
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.fadeIn');

    const options = {
        root: null, // Use the viewport as the root
        threshold: 0.1 // Trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, options);

    items.forEach(item => {
        observer.observe(item);
    });
});


//Create pop up message
const popUp = document.querySelector('.popUpMsg');
const terms = document.querySelector('.termsFormat');


//show popup message
terms.addEventListener('click', function(){
   popUp.classList.add('show'); 
});

//Close popup message
document.getElementById('closePopUp').addEventListener('click', function(){
    popUp.classList.remove('show');
})

//Close popup message when user clicks outside of it
document.addEventListener('click', function(event){
    if(!popUp.contains(event.target) && !terms.contains(event.target)){ 
        popUp.classList.remove('show');
    }
});






