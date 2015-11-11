$(document).ready(function(){
  $("#reg-form").hide();
  $("#log-form").hide();

  $("#reg-popup").click(function(){
    $("#reg-form").show();
    $("#log-form").hide();
  });

  $("#log-popup").click(function(){
    $("#log-form").show();
    $("#reg-form").hide();
  });

  $("#register").click(function(){
    var credentials = {
      "credentials": {
        "email": $("#inputEmail").val(),
        "password": $("#inputPassword").val(),
        "password_confirmation": $("#inputPassword").val()
      }
    };

    baseapi.register(credentials, null);
  });

  $("#login").click(function(){
    session.login( $("#loginEmail").val(), $("#loginPassword").val() );
  });

});
