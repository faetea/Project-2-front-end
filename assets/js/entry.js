var arrayOfEntries = [];

var entry = {
  entryId: null,

  createEntry: function(newEntry){
    baseapi.createEntry(newEntry, session.token, function(err, data){
      if (err) { console.error(err); }
      console.log(data);
    });
  },

  showEntry: function(entryId, cb){
    baseapi.showEntry(entryId, session.token, function(err, data){
      if (err) { console.error(err); }
      entry.entryId = data.entry.id;
      cb();
    });
  },

  editEntry: function(entryId, cb){
    baseapi.editEntry(entryId, session.token, function(err, data){
      if (err) { console.error(err); }
      entry.entryId = data.entry.id;
      cb();
    });
  }

};


// $('#create-entry').on('submit', function(e) {
//   var token = $(this).children('[name="token"]').val();
//   e.preventDefault();
//   baseapi.createEntry(token, callback);
// });

// $('#list-entries').on('submit', function(e) {
//   var token = $(this).children('[name="token"]').val();
//   e.preventDefault();
//   baseapi.listEntries(token, callback);
// });

// $('#show-entry').on('submit', function(e) {
//   var token = $(this).children('[name="token"]').val();
//   var id = $('#show-id').val();
//   e.preventDefault();
//   baseapi.showEntry(id, token, callback);
// });

// $('#edit-entry').on('submit', function(e) {
//   var token = $(this).children('[name="token"]').val();
//   var id = $('#join-id').val();
//   e.preventDefault();
//   baseapi.editEntry(id, token, callback);
// });
