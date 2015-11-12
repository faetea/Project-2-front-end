$(document).ready(function(){

  // Setup
  $("#regAlert").hide();
  $("#logAlert").hide();
  $("#new-entry-button").hide();
  $("#list-entries-button").hide();
  $("#create-entry-form").hide();
  $("#list-of-entries").hide();


  // Click handlers
  $("#register").click(function(){
    session.register( $("#regEmail").val(), $("#regPassword").val(), $("#confirmPassword").val() );
  }); // end click handler

  $("#login").click(function(){
    session.login( $("#logEmail").val(), $("#logPassword").val(), function(){
      $("#new-entry-button").show();
      $("#list-entries-button").show();
    });
  }); // end click handler


  $("#new-entry-button").click(function(){
    $("#create-entry-form").show();
    $("#list-of-entries").hide();
  }); // end click handler

  $("#list-entries-button").click(function(){
    $("#list-of-entries").show();
    $("#create-entry-form").hide();
  }); // end click handler


  $("#save-entry-button").click(function(){
    var newEntry = {
      "entry":{
        "day_rating":$("#rating-input").val(),
        "pain_rank":$("#pain-select").val(),
        "note_entry":$("#notes-text").val(),
        "symptoms":$("#symptoms-input").val(),
        "medication":$("#med-input").val(),
        "mood":$("#mood-select").val()
      }
    }
    entry.createEntry(newEntry);
    $("#create-entry-form").hide();
  }); // end click handler

  // $("#show-entry").click(function(){
  //   entry.showEntry();
  // }); // end click handler

  // $("#edit-entry").click(function(){
  //   entry.editEntry();
  // }); // end click handler


}); // end document ready function


// $("#rating-input").val()   t.string   "day_rating"
// $("#pain-select").val()    t.integer  "pain_rank"
// $("#notes-text").val()     t.string   "note_entry"
// $("#symptoms-input").val() t.string   "symptoms"
// $("#med-input").val()      t.string   "medication"
// $("#mood-select").val()    t.integer  "mood"
// $("#date-input").val()     t.datetime "created_at"

//     "created_at":$("#date-input").val()
