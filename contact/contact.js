function validate() {
  var isValid = true;
  var firstname = $("#firstname").val();
  var lastname = $("#lastname").val();
  var email = $("#email").val();
  var tel = $("#tel").val();
  var message = $("#message").val();
  if (firstname == "") {
    $("#firstname").css("border", "#fb0505 1px solid");
    isValid = false;
  }
  if (lastname == "") {
    $("#lastname").css("border", "#fb0505 1px solid");
    isValid = false;
  }
  if (email == "") {
    $("#email").css("border", "#fb0505 1px solid");
    isValid = false;
  }
  if (!email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
    $("#info").html("(Adresse email non valide)");
    $("#email").css("border", "#fb0505 1px solid");
    isValid = false;
  }
  if (tel == "") {
    $("#tel").css("border", "#fb0505 1px solid");
    isValid = false;
  }
  if (message == "") {
    $("#message").css("border", "#fb0505 1px solid");
    isValid = false;
  }
  return isValid;
}
