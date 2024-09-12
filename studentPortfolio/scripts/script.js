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