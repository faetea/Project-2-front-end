var entry = {
  entryId: null,

  createEntry: function(){
    baseapi.createEntry(session.token, function(err, data){
      if (err) { console.error(err); }
      console.log(data);
    });
  },

  listEntries: function(){
    baseapi.listEntries(session.token, function(err, data){
      if (err) {console.error(err);}
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
