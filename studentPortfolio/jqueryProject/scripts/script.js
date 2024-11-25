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

//Create input form validation
$(document).ready(function () {
    $("#contactForm").on("submit",function (event) {
        //Prevent form submission
        event.preventDefault();

        let isValid = true;
        $(".error").remove();

        //Validate the first name field
        const firstName = $("#firstName").val();
        if (firstName.trim() === "") {
            isValid = false;
            $("#firstName")
                .css("border", "2px solid red")
                .after('<span class="error">First Name is required!!!</span>');
        } else {
            $("#firstName").css("border", "").next(".error").remove();
        }

        //Validate the lastName field
        const lastName = $("#lastName").val();
        if (lastName.trim() === "") {
            isValid = false;
            $("#lastName")
                .css("border", "2px solid red")
                .after('<span class="error">Last Name is required!!!</span>');
        } else {
            $("#lastName").css("border", "").next(".error").remove();
        }

        //Validate user email
        const email = $("#email").val();
        const emailChars = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!emailChars.test(email)) {
            isValid = false;
            $("#email")
                .css("border", "2px solid red")
                .after('<span class="error">Valid email is required!!!</span>')
        } else {
            $("#email").css("border", "").next(".error").remove();
        }

        //Validate phoneNumber
        const phone = $("#phoneNumber").val();
        if (phone.trim() === "") {
            isValid = false;
            $("#phoneNumber")
                .css("border", "2px solid red")
                .after('<span class="error">Phone number is required!!!</span>')
        } else {
            $("#phoneNumber").css("border", "").next(".error").remove();
        }

        //Validate user Address
        const address = $("#address").val();
        if(address.trim() ==="") {
            isValid = false;
            $('#address')
                .css("border", "2px solid red")
                .after('<span class="error">Address is required!!!</span>');
        } else {
            $("#address").css("border", "").next(".error").remove();
        }

        //Validate subject line
        const subject = $("#subject").val();
        if(subject.trim() ==="") {
            isValid = false;
            $("#subject")
            .css("border", "2px solid red")
            .after('<span class="error">Subject is required!!!</span>'); 
        } else {
            $("#subject").css("border", "").next(".error").remove();
        }

        //Validate user message
        const message = $("#message").val();
        if(message.trim().length < 10) {
            isValid = false;
            $("#message")
            .css("border", "2px solid red")
            .after('<span class="error">Message is required!!!</span>');  
        } else {
            $("#message").css("border", "").next(".error").remove();
        }

        //Display message if form submission is valid
        $(".success").remove();
        if (isValid) {
            $("#contactForm").after('<p class="success">Form submitted successfully!!!</p>');
        }
    });
});

//Create nav effect
$(document).ready(function () {
    $("#home").show();
    $("#about, #contact, #apply, #tracker").hide();

    $(".nav-link").click(function (e) {
        e.preventDefault();

        const targetSection = $(this).attr("href");


        $("section").fadeOut(300, function () {
            $(targetSection).fadeIn(300);
        });
    });
});

//Create add task list button
$(document).ready(function () {
    $("#addTaskBtn").on("click", function () {
        const taskText = $("#taskInput").val().trim();
        if(taskText) {
            const taskItem = `
                <li class="task-item">
                <span>${taskText}</span>
                <button class="deleteTask">X</button>
                </li>
            `
            $("#taskList").append(taskItem);
            $("#taskInput").val("");
        } else{
            alert("Please enter a task");
        }
    });

    //Remove task from list when delete button is clicked
    $("#taskList").on("click", ".deleteTask", function () {
        $(this).parent().remove();
    });
});