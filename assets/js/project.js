$(document).ready(function(){

  // Setup
  $("#regAlert").hide();
  $("#logAlert").hide();
  $("#new-entry-button").hide();
  $("#list-entries-button").hide();
  $("#create-entry-form").hide();
  $("#list-of-entries").hide();

  // register session
  $("#register").click(function(){
    session.register( $("#regEmail").val(), $("#regPassword").val(), $("#confirmPassword").val() );
  }); // end register click handler

  // login session
  $("#login").click(function(){
    session.login( $("#logEmail").val(), $("#logPassword").val(), function(){
      $("#new-entry-button").show();
      $("#list-entries-button").show();
    });
  }); // end login click handler

}); // end document ready


// want to use HANDLEBARS to display userId in navbar


// clicking new-entry-button will show the create-entry-form
$("#new-entry-button").click(function(){
  $("#create-entry-form").show();
  $("#list-of-entries").hide();
}); // end click handler

// clicking list-entries-button will populate list-view, and show the list-of-entries
$("#list-entries-button").click(function(){
  //this button does several things a once!
  baseapi.listEntries(session.token, function(err, data){
    if (err) {console.error(err);}
    console.log(data);
    // handlebars
    var entryIndexTemplate = Handlebars.compile($('#entry-script').html());
    var newHTML = entryIndexTemplate(data);
    $("#list-view").html(newHTML);
  }); // end baseapi.listEntries
  $("#list-of-entries").show();
  $("#create-entry-form").hide();
}); // end click handler

// after, clicking new-entry-button, when user is inside create-entry-form
// clicking save-entry-button will save-new-entry to database
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


// after, clicking list-entries-button, when user is inside list-of-entries
// clicking specific preview from list will show that entry in viewer
// $("#show-entry").click(function(){
//   entry.showEntry();
// }); // end click handler

//
// $("#edit-entry").click(function(){
//   entry.editEntry();
// }); // end click handler


