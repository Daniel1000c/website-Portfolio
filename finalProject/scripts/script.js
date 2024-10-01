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


