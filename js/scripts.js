
//Business Logic
var finalCost = 0; // finalCost starts at $0

function customer(name,email,pizza,cost) { //Declaring customer object
  this.name = name;
  this.email = email;

}

function pizza(size, toppings, delivery) { //Declaring pizza object
  this.size = size;
  this.toppings = toppings;
  this.delivery = delivery;
}

// pizza.prototype.pizzaCalculator = function() { // Could not get pizzaCalculator function to work
//   if ( this.size === "small") {
//     finalCost += 4;
//   };
//
// };



// pizza.prototype.fullPizza = function() { // Could not get fullPizza function to work
//   return this.size + " " + this.toppings + " for " + this.delivery;
// }




//User Logic
$(document).ready(function() {

  $("#pizza-form").submit(function(event) {
    event.preventDefault();

    // $("input:checkbox[name=toppings]:checked").each(function(){
    //   finalCost++; // increases +1 per topping to final cost
    // });

    var inputtedName = $(".input-name").val();
    var inputtedEmail = $(".input-email").val();
    var newCustomer = new customer(inputtedName, inputtedEmail);

     // Pizza size, toppings and delivery
    var inputtedSize = document.querySelector('input[name = "size"]:checked').value;

    var inputtedToppings = document.querySelector('input[name = "toppings"]:checked').value;

    //Was able to select ONE from checkbox, could not figure out how to select multiple checkboxes in value

    $("input:checkbox[name=toppings]:checked").each(function(){
      finalCost++;
    });


    var inputtedDelivery = document.querySelector('input[name = "delivery"]:checked').value;;
    var newPizza = new pizza(inputtedSize, inputtedToppings, inputtedDelivery);

    if ( newPizza.size == "Small") {
      finalCost = 14;
    };

    if ( newPizza.size == "Medium") {
      finalCost = 15;
    };

    if ( newPizza.size == "Large" || newPizza.size == "Halo" ) {
      finalCost = 17;
    };

    if ( newPizza.delivery == "carry-out") {
      finalCost += 2;
    };
    if ( newPizza.delivery == "delivery") {
      finalCost += 7;
    };
    if ( newPizza.delivery == "heaven-sent") {
      finalCost += 10;
    };

    $(".total-cost").text(finalCost);
    $(".name").text(newCustomer.name);
    $(".size-results").text(newPizza.size);
    $(".topping-results").text(newPizza.toppings); //Could not get toppings to display correctly
    $(".delivery-results").text(newPizza.delivery);



// pizza.pizzaCalculator(newPizza); //couldnt get prototype function to work

console.log(newPizza);
console.log(newPizza.toppings);
console.log(finalCost);

    $(".purchase-results").show();

  });

  $("#new-pizza-form").submit(function(event) {
    event.preventDefault();

    alert("Thank you! Come again!");

    location.reload();
  });
  });
