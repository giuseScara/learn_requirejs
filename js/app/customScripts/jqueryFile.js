define(function(require) { //use jquery e angular defined in require.config

  var $ = require('jquery');
  var methods = require("methods");
  $('#clickMe').click(function() {
    methods.changeHTML("I was clicked!");
  });

  //angular.module
});