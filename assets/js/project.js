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

}

$(document).ready(function(){
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
    // $("#login").click(function(){
    //   };

    //   baseapi.login(credentials, callback);
    // });
});

