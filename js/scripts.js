$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var zipcodeInput= $("input#zipcode").val();
    var stateInput = $("input#state").val();


    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".zipcode").text(zipcodeInput);
    $(".state").text(stateInput);

    $("#receipt").show();

    event.preventDefault();
  });
});
