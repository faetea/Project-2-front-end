$(document).ready(function(){

  // Setup
  $("#regAlert").hide();
  $("#logAlert").hide();
  $("#new-entry-button").hide();
  $("#list-entries-button").hide();
  $("#create-entry-form").hide();
  $("#list-of-entries").hide();


  // Click handlers

  // register session
  $("#register").click(function(){
    session.register( $("#regEmail").val(), $("#regPassword").val(), $("#confirmPassword").val() );
  }); // end click handler

  // login session
  $("#login").click(function(){
    session.login( $("#logEmail").val(), $("#logPassword").val(), function(){
      $("#new-entry-button").show();
      $("#list-entries-button").show();
    });
  }); // end click handler


  // click new entry button will show the create entry form
  $("#new-entry-button").click(function(){
    $("#create-entry-form").show();
    $("#list-of-entries").hide();
  }); // end click handler

  // click list entries button will show list of entries
  $("#list-entries-button").click(function(){
    $("#list-of-entries").show();
    $("#create-entry-form").hide();
  }); // end click handler

  // inside of create entry form,
  // click save entry button will save new entry to database
  $("#save-entry-button").click(function(){
    var newEntry = {
      "entry":{
        "day_rating":$("#rating-input").val(),
        "pain_rank":$("#pain-select").val(),
        "note_entry":$("#notes-text").val(),
        "symptoms":$("#symptoms-input").val(),
        "medication":$("#med-input").val(),
        "mood":$("#mood-select").val(),
        "created_at":$("#date-input").val()
      }
    }
    entry.createEntry(newEntry);
    $("#create-entry-form").hide();
  }); // end click handler

  //
  $("#show-entry").click(function(){
    entry.showEntry();
  }); // end click handler

  //
  $("#edit-entry").click(function(){
    entry.editEntry();
  }); // end click handler

}); // end document ready function
