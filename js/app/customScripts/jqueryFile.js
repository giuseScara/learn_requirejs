define(['jquery','methods','css!mystyle/style'],function($, methods, style) { //use jquery e angular defined in require.config

  $('#clickMe').click(function() {
    methods.changeHTML("I was clicked!");
  });

  //angular.module
});