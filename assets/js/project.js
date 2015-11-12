$(document).ready(function(){

  // Setup
  $("#regAlert").hide();
  $("#logAlert").hide();
  $("#create-entry").hide();
  $("#list-entries").hide();
  $("#new-entry").hide();

  // Click handlers
  $("#register").click(function(){
    session.register( $("#regEmail").val(), $("#regPassword").val(), $("#confirmPassword").val() );
  }); // end click handler

  // opt 1
  $("#login").click(function(){
    session.login( $("#logEmail").val(), $("#logPassword").val(), $("#create-entry").show(), $("#list-entries").show() );
  }); // end click handler

  // // opt 2
  // $("#login").click(function(){
  //   session.login( $("#logEmail").val(), $("#logPassword").val(), function(){
  //     $("#create-entry").show();
  //     $("#list-entries").show();
  //   });
  // }); // end click handler

  // // opt 3
  // $("#login").click(function(){
  //   session.login( $("#logEmail").val(), $("#logPassword").val() );
  //     $("#create-entry").show();
  //     $("#list-entries").show();
  // }); // end click handler

}); // end document ready function
