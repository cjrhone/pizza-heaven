
//Business Logic
var finalCost = 0; // finalCost starts at $0

function customer(name,email,pizza,cost) { //Declaring customer object
  this.name = name;
  this.email = email;
  this.pizza = pizza;
  this.cost = cost
}

function pizza(size, toppings, delivery) { //Declaring pizza object
  this.size = size;
  this.toppings = toppings;
  this.delivery = delivery;
}

// pizza.prototype.pizzaCalculator = function() { // Could not get pizzaCalculator to work
//   if ( this.size === "small") {
//     finalCost += 4;
//   };
//
// };



pizza.prototype.fullPizza = function() {
  return this.size + " " + this.toppings + " for " + this.delivery;
}

var newCustomer = new customer(inputtedName, inputtedEmail); // Customer name and email
var inputtedName = $("input-name").val();
var inputtedEmail = $("input-email").val();






//User Logic
$(document).ready(function() {

  $("#pizza-form").submit(function(event) {
    event.preventDefault();

    $("input:checkbox[name=toppings]:checked").each(function(){
      finalCost++; // increases +1 per topping to final cost
    });

    var inputtedName = $(".input-name").val();
    var inputtedEmail = $(".input-email").val();
    var newCustomer = new customer(inputtedName, inputtedEmail);

     // Pizza size, toppings and delivery
    var inputtedSize = document.querySelector('input[name = "size"]:checked').value;
    $("input:checkbox[name=toppings]:checked").each(function(){
         var inputtedToppings = $(this).val(); //Error with making multiple pizzas
    var inputtedDelivery = document.querySelector('input[name = "delivery"]:checked').value;;
    var newPizza = new pizza(inputtedSize, inputtedToppings, inputtedDelivery);

    if ( newPizza.size == "Small") {
      finalCost = 4;
    };

    if ( newPizza.size == "Medium") {
      finalCost = 5;
    };

    if ( newPizza.size == "Large" || newPizza.size == "Halo" ) {
      finalCost = 7;
    };

    if ( newPizza.delivery == "carry-out") {
      finalCost += 0;
    };
    if ( newPizza.delivery == "delivery") {
      finalCost += 5;
    };
    if ( newPizza.delivery == "heaven-sent") {
      finalCost += 7;
    };

    $(".total-cost").text(finalCost);
    $(".name").text(customer.name);

// pizza.pizzaCalculator(newPizza); //couldnt get prototype function to work

console.log(newPizza);
console.log(finalCost);

    $(".purchase-results").show();

  });

  $("#new-pizza-form").submit(function(event) {
    event.preventDefault();

    alert("Thank you! Come again!");

    location.reload();
  });
  });
});
