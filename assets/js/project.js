$(document).ready(function(){

$("#regAlert").hide();
$("#logAlert").hide();

$("#create-entry").hide();
$("#list-entries").hide();
$("#new-entry").hide();

  $("#register").click(function(){
    session.register( $("#regEmail").val(), $("#regPassword").val(), $("#confirmPassword").val() );
    // if an error occurs then display error alert
    // if ( error() = true ) { $("#regAlert").show(); }
  });

  $("#login").click(function(){
    session.login( $("#logEmail").val(), $("#logPassword").val() );
    $("#create-entry").show();
    $("#list-entries").show();

  });

});
