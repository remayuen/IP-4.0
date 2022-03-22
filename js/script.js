$(document).ready(function() {

  $("table").hide();
  $('#addAnother').hide();
  $("#checkout-btn").hide();
  $(".additional-info").hide();
  $(".btn.yes").hide();
  $(".btn.no").hide();
  $(".additional-info h4").hide();

  $('#order-btn').click(function() {
    var sizeOfPizza = $(".size option:selected").val();
    var toppingsOfPizza = $(".toppings option:selected").val();
    var crustOfPizza = $(".crust option:selected").val();
    var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
    var order = 1;
    var grandTotal = 0;

    $("table").show();
    $("#addAnother").show();
    $("#checkout-btn").show();
    $("#order-btn").hide();

    $("#size").html($(".size option:selected").text() + " -  " + sizeOfPizza);
    $("#crust").html($(".crust option:selected").text() + " -  " + toppingsOfPizza);
    $("#toppings").html($(".toppings option:selected").text() + " -  " + crustOfPizza);
    $("#cost").html("ksh, " + total);

    function Pizza(size, toppings, crust, total, orderNo) {
      this.size = size;
      this.toppings = toppings;
      this.crust = crust;
      this.total = total;
      this.orderNo = orderNo;
    }

    $('#addAnother').click(function() {
      var sizeOfPizza = $(".size option:selected").val();
      var toppingsOfPizza = $(".toppings option:selected").val();
      var crustOfPizza = $(".crust option:selected").val();
      var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
      order = order + 1;
      grandTotal = grandTotal + total;


      var newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);

      var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.toppings + '</td><td id="toppings">' + $(".toppings option:selected").text() + " -  " + newPizza.crust + '</td><td id="total">' + "ksh, " + newPizza.total + '</td></tr>'

      $("#new-pizza").append(newRow);
    });

    $("#checkout-btn").click(function() {
      $("#addAnother").hide();
      $("#checkout-btn").hide();
      $(".additional-info").show();
      $(".btn.yes").show();
      $(".btn.no").show();
      $(".additional-info .location").hide();
      grandTotal = grandTotal + total;

      $(".additional-info h3 span").html(grandTotal);
    });

    $(".btn.yes").click(function() {
      $(".additional-info h5").hide();
      $(".btn.yes").hide();
      $(".btn.no").hide();
      $(".additional-info .location").show();
      $(".additional-info h3 span").html(grandTotal + 300);
    });

    $(".btn.no").click(function() {
      $(".additional-info h5").hide();
      $(".btn.yes").hide();
      $(".btn.no").hide();
      $(".additional-info .location").show();
    });

    $(".btn.complete").click(function() {
      var location = $(".additional-info .location input").val();
      $(".additional-info h4").show();
      $(".additional-info .location").hide();
      $(".additional-info h4 span").html(location);
    });
  });









});
