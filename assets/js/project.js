$(document).ready(function(){

  // Setup
  $("#regAlert").hide();
  $("#logAlert").hide();
  $("#new-entry-button").hide();
  $("#list-entries-button").hide();
  $("#create-entry-form").hide();
  $("#list-of-entries").hide();
  $("#shown-entry").hide();

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


// dateTimeFormat
var dtf = new Intl.DateTimeFormat(["en-us"], { weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });

var entryIndexTemplate;
var newHTML;

// clicking list-entries-button will populate list-view, and show the list-of-entries
$("#list-entries-button").click(function(){
  //this button does several things a once!
  baseapi.listEntries(session.token, function(err, data){
    if (err) {console.error(err);}
    console.log(data);
    // reverse list, most recent entries at top
    data.entries.reverse();
    for (var i = 0; i < data.entries.length; i++) {
      console.log(data.entries[i].created_at);
      data.entries[i].created_at = dtf.format(new Date(data.entries[i].created_at));
    }
    // handlebars
    entryIndexTemplate = Handlebars.compile($('#entry-script').html());
    newHTML = entryIndexTemplate(data);
    $("#list-view").html(newHTML);
    for (var i = 0; i < data.entries.length; i++) {
      var shownEntry = data.entries[i];
      $("#entry-number-" + data.entries[i].id).click(function() {
        // display the shown-entry-well-container
        $("#shown-entry").show();
        // handlebars
        var showIndexTemplate = Handlebars.compile($('#show-script').html());
        var showHTML = showIndexTemplate(shownEntry);
        $("#show-view").html(showHTML);
      });
    }
  }); // end baseapi.listEntries
  $("#list-of-entries").show();
  $("#create-entry-form").hide();
}); // end click handler


var newEntry;
// after, clicking new-entry-button, when user is inside create-entry-form
// clicking save-entry-button will save-new-entry to database
$("#save-entry-button").click(function(){
  newEntry = {
    "entry":{
      "day_rating":$("#rating-input").val(),
      "pain_rank":$("#pain-select").val(),
      "note_entry":$("#notes-text").val(),
      "symptoms":$("#symptoms-input").val(),
      "medication":$("#med-input").val(),
      "mood":$("#mood-select").val()
    }
  }
  baseapi.createEntry(newEntry, session.token, function(err, data){
    if (err) { console.error(err); }
    console.log(data);
  });
  $("#create-entry-form").hide();
}); // end click handler


//showEntry
// baseapi.showEntry(entryId, session.token, function(err, data){
//   if (err) { console.error(err); }
//   entry.entryId = data.entry.id;
//   cb();
// });


// $("#edit-entry").click(function(){
//editEntry
// baseapi.editEntry(entryId, session.token, function(err, data){
//   if (err) { console.error(err); }
//   entry.entryId = data.entry.id;
//   cb();
// });
// }); // end click handler
