
//Business Logic
var finalCost = 0;

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

pizza.prototype.pizzaCalculator = function(amount) {
  if ( this.size == "small") {
    var finalCost += 4;
  }
  if ( this.size == "Medium") {
    var finalCost += 4;
  }

}

}

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
         var inputtedToppings = $(this).val();
    var inputtedDelivery = document.querySelector('input[name = "delivery"]:checked').value;;
    var newPizza = new pizza(inputtedSize, inputtedToppings, inputtedDelivery);

newPizza.pizzaCalculator(newPizza)


console.log(newPizza);
console.log(inputtedSize);
console.log(inputtedToppings);

    $(".purchase-results").show();

  });

  $("#new-pizza-form").submit(function(event) {
    event.preventDefault();

    alert("new pizza coming your way!");

    location.reload();
  });
  });
});
