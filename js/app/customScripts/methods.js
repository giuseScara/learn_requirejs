
define(['jquery','constants'], Methods); //Metods not Methods()

function Methods($, constants) {

  var methods = {};

  methods.changeHTML = function (arg) {
    $('body').html(arg +" " + constants.size);
  }

  methods.showAlert = function (arg) {
    alert(arg);
  }

  return methods;
}
  

