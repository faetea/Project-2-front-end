var baseapi = {
  base: 'http://localhost:3000',

  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxhr: jqxhr, status: status, error: error});
    });
  },

  register: function register(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.base + '/register',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  login: function login(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.base + '/login',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  // Authenticated api actions
  // each User's entries are private to that user

  // similar to listGames?
  // user can display a list of all previous entries
  listEntries: function (token, callback) {
    this.ajax({
      method: 'GET',
      url: this.base + '/entries',
      headers: {
        Authorization: 'Token token=' + token
      },
      dataType: 'json'
    }, callback);
  },

  // similar to createGame?
  // user can create a new entry
  createEntry: function (token, callback) {
    this.ajax({
      method: 'POST',
      url: this.base + '/entries',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json;charset=utf-8',
      data: JSON.stringify({}),
      dataType: 'json',
    }, callback);
  },

  // // similar to showGame?
  // // user can display a single previous entry
  // showEntry: function (id, token, callback) {
  //   this.ajax({
  //     method: 'GET',
  //     url: this.base + '/entries' + id,
  //     headers: {
  //       Authorization: 'Token token=' + token
  //     },
  //     dataType: 'json'
  //   }, callback);
  // },

  // // similar to joinGame?
  // // user can edit a single previous entry
  // editEntry: function (id, token, callback) {
  //   this.ajax({
  //     method: 'PATCH',
  //     url: this.base + '/entries' + id,
  //     headers: {
  //       Authorization: 'Token token=' + token
  //     },
  //     contentType: 'application/json; charset=utf-8',
  //     data: JSON.stringify({}),
  //     dataType: 'json'
  //   }, callback);
  // },

};
