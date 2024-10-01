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
document.addEventListener('DOMContentLoaded',function(){
    const termsLink = document.getElementById('termsLink');
    const popUp = document.getElementById('popUp');
    const closePopUp = document.getElementById('closePopUp');

    //show popup when user clicks on link
    termsLink.addEventListener('click',function(){
        popUp.style.display = 'block';
    });


    //close popup when user clicks on close button
    closePopUp.addEventListener('click',function(){
        popUp.style.display = 'none';
    });

    //Close popup if user click out of box
    window.addEventListener('click',function(event){
        if(event.target == popUp){
            popUp.style.display = 'none';
        }
    });
});


//Format hamburger menu
document.addEventListener('DOMContentLoaded',function(){
    const hamburger = document.getElementById('hamburger');
    const navList = document.querySelector('header nav ul');

    //Toggle the active class
    hamburger.addEventListener('click',function(){
        navList.classList.toggle('active');
    });

    //close menu
    window.addEventListener('click',function(event){
        if(!hamburger.contains(event.target) && !navList.contains(event.target)){
            navList.classList.remove('active');
        }
    })
});


