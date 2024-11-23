//Create button hover animation
$(document).ready(function () {
    //Create hover effect
    $('#hoverButton').hover (
        function () {
            $(this).animate({
                "background-color": "transparent",
                "color": "#5371fe"
            }, 300);
        },

        //Create hover out effect
        function () {
            $(this).animate({
                "background-color": "#5371fe",
                "color": "white",
            }, 300);
        }
    );
});


//Create button click larger hover animation
$(document).ready(function () {
    //add click effect
    $('.imgGallery img').click(function () {
        if ($(this).hasClass('Scaled')) {
            $(this).animate({
                width: '-=20px',
                height: '-=20px'
            }, 300).removeClass('Scaled');
        } else {
            $(this).animate({
                width: '+=20px',
                height: '+=20px'
            }, 300).addClass('Scaled');
        }
    }); 
});