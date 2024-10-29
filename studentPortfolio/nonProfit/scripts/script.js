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



    //Create form input validation
    const donateForm = document.getElementById('donateForm');
    donateForm.addEventListener('submit', validateDonateForm);

    function validateDonateForm(event) {

        //Prevent form submission until validation is complete
        event.preventDefault();

        let isValid = true;

        //Validate full name
        const donorName = donateForm.donorName.value;

        if (!/^[a-zA-Z\s]+$/.test(donorName.value)) {
            alert('Please enter a valid name');
            isValid = false;
        }

        //Create donor email vaildation
        const donorEmail = donateForm.donorEmail.value;
        if (donorEmail.checkValidity()) {
            alert('Please enter a valid email');
            isValid = false;
        }

        //Phone number validation
        const donorPhone = donateForm.donorPhone;
        if (donorPhone.value && !/^\d{3}-\d{3}-\d{4}$/.test(donorPhone.value)) {
            alert('Please enter a valid phone number');
            isValid = false;
        }

        //Card number validation
        const donorCard = donateForm.donorCard;
        if (!/^\d{13,19}$/.test(donorCard.value)) {
            alert('Please enter a valid card number');
            isValid = false;
        }

        //Card expiration date validation
        const expDate = new Date(donateForm.expDate.value);
        const today = new Date();
        if (expDate < today) {
            alert('Please enter a valid expiration date');
            isValid = false;
        }

        //CVV validation
        const cvv = donateForm.cvv;
        if(!/^\d{3,4}$/.test(cvv.value)) {
            alert('Please enter a valid CVV');
            isValid = false;
        }

        //Validate form if all fields are valid
        if (isValid) {
            donateForm.submit();
        }
    }
    
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


