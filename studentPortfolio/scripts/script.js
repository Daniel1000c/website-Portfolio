// Create scroll event listener using IntersectionObserver API
document.addEventListener("DOMContentLoaded", function() {
    //Create constant called observer
    const observer = new IntersectionObserver((entries,observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealObject'); //Add revealObject class to target element
                observer.unobserve(entry.target); //Stop observing once element is visible to user
            }
        });
    }, {threshold: 0.1}); // Trigger when about 10% of element is visible to user

    //Create constant called hiddenElement
    const hiddenElement = document.querySelectorAll('.hideObject');
    hiddenElement.forEach(el => observer.observe(el));
});

//Create open menu toggle
let menuLinks = document.getElementById('menuLinks');
menuLinks.style.maxHeight = "0px";


function toggleMenu() {
    if (menuLinks.style.maxHeight == "0px") {
        //Open menu
        menuLinks.style.maxHeight = "500px";
    } else {
        menuLinks.style.maxHeight = "0px";
    }
}