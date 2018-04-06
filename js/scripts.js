
//Business Logic
var finalCost = 0;

function customer(name,email,pizza,cost) {
  this.name = name;
  this.email = email;
  this.pizza = pizza;
  this.cost = cost
}

function pizza(size, toppings, delivery) {
  this.size = size;
  this.toppings = toppings;
  this.delivery = delivery;
}

customer.addCost = function() {
  return this.cost + 1
};

var newCustomer = new customer(inputtedName, inputtedEmail);
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

console.log(finalCost);
console.log(newCustomer);
console.log(inputtedName);
console.log(inputtedEmail);

    $(".purchase-results").show();

  });

  $("#new-pizza-form").submit(function(event) {
    event.preventDefault();

    alert("new pizza coming your way!");

    location.reload();
  });
  });
