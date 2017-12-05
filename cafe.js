"use strict";

$(document).ready(function() {
    var total = 0;

//    add image swap and click handler to each image in table
    // $.getJSON("https://github.com/parkland-CSC175/parkland-CSC175.github.io/blob/master/content.json", function(data){
    //     console.log(content.json);
    $("ul img").each(function() {
        var oldURL = $(this).attr("src"); // gets the src attribute
        var newURL = $(this).attr("id"); // gets the id attribute
        
        // preload rollover image
        var rolloverImage = new Image();
        rolloverImage.src = newURL;
        
        // set up event handlers
        $(this).hover(
            function() {
                $(this).attr("src", newURL); // sets the src attribute
            },
            function() {
                $(this).attr("src", oldURL); // sets the src attribute
            }
        ); // end hover

        $(this).click(function(evt) {
            // get text from textarea
            var order  = $("#order").html();
            if (order == undefined) {
            	order = "";
            }
            
            // add selection to text and total
            if (oldURL == "images/10lb_ABC_stored_pressure.jpg") {
                total = total + 70.00;
                order = order + '<option value="10lbABC">$70.00 - 10lb. ABC Stored Pressure</option>'; //set the pics to 117-120 pixels
            } else if (oldURL == "images/BC_10lb_red_line_cartridge_operated.png") {
                total = total + 400.00;
                order = order + '<option value="cappuccino">400.00 - 10 lb. Red Line Cartridge Operated</option>';
            } else if (oldURL == "images/class_D.png") {
                total = total + 400.00;
                order = order + '<option value="drip">$400.00 - Class D</option>';
            } else if (oldURL == "images/10lb_CO2.jpg") {
                total = total + 140.00;
                order = order + '<option value="expresso">$140.00 - 10 lb. Co2</option>';
            } else if (oldURL == "images/ABC_30lb_cart_op.jpg") {
                total = total + 160.00;
                order = order + '<option value="scone">$160 - ABC 30 lb. Water Fire Extinguisher</option>';
            } else if (oldURL == "images/K_class.jpg") {
                total = total + 135.00;
                order = order + '<option value="scone">$135.00 - K Class</option>';
            }
            else if (oldURL == "images/Bracket_10lb_HD_Red_Line.jpg") {
                total = total + 104.00;
                order = order + '<option value="scone">$104.00 - 10 lb HD Red Line Bracket</option>';
            }
            else if (oldURL == "images/20lb_cart_op_bracket.jpg") {
                total = total + 92.50;
                order = order + '<option value="scone">$92.50 - 20 lb Cartridge Operated Bracket</option>';
            }
            else if (oldURL == "images/Amerex_Cylinder_Galvanized_Bracket.jpg") {
                total = total + 83.99;
                order = order + '<option value="scone">$83.99 - 20 lb Amerex Cylinder Galvanized Brackett</option>';
            }
            
            // display order and total
            $("#order").html( order );
            $("#total").text( "Total: $" + total.toFixed(2) );
            
            // cancel default event of the clicked link
            evt.preventDefault();
            
        }); // end click
    }); // end each
// }); //end json

    // add click event handler for check out button
    $("#place_order").click(function() {
        var order = $("#order").text().trim();
        if (order == "") {
            alert ("Please add at least one item to your order.");
        } else {
            $("#order_form").submit();
        }
    }); // end click
    
    // add click event handler for clear button
    $("#clear_order").click(function() {
        total = 0;
        $("#order").text( "" );
        $("#total").text( "" );
    }); // end click
    
}); // end ready
