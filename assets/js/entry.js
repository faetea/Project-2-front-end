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


}
