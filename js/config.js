//config.js

require.config({
  baseUrl: 'js',
  paths: {
    angular: [
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min', //first load this else (whìtout .js)
      'lib/angular.min' //load this
    ],
    jquery: [
      'https://code.jquery.com/jquery-2.2.3.min',
      'lib/jquery-2.2.3.min'
    ],
    d3: [
      'https://d3js.org/d3.v3.min',
      'lib/d3/d3.min'
    ]
  }

});