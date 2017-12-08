$(document).ready(function() {

    $("#email_form").validate({
        rules: {
            "email_1": {
                required: true,
                email: true
            },



            "email_2": {
                required: true,
                email: true
            },

            "full_name": {
                required: true

            },
            "address_1": {
                required: true
            },

            "city": {
                required: true

            }



        },
        messages: {
            "email_1": {
                required: "Not a Valid Email Address",
                email: "that's not gonna work..."
                
            },


            "email_2": {
                required: "You forgot the text!",
                email: "that's not gonna work..."
            },

            "full_name": {
                required: "Woah! Whats your name?!",

            },

            "city": {
                required: "Where do you live?",
                email: "that's not gonna work..."
            },

            "address_1": {
                required: "What is your address?"
            },


        }

    });



});
