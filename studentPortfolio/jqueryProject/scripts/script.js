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