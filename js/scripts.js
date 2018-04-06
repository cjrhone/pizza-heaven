$(document).ready(function() {

  $("#pizza-form").submit(function(event) {
    event.preventDefault();

    alert("you clicked a button!");

    $(".purchase-results").show();

  });

  $("#new-pizza-form").submit(function(event) {
    event.preventDefault();

    alert("new pizza coming your way!");

    location.reload();
  });
  });
