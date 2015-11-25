require('./core/vendor')();

var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/');
  $urlRouterProvider.otherwise('index');
  $stateProvider
    .state('index', {
      url: '/',
      template: '<h1>Hello World</h1>',
      controller: null
    })
    .state('about', {
      url: '/about',
      template: '<h1>About</h1>'
    })
}])

function printMessage (status='working') {
  let message = 'ES6';

  console.log(`${message} is ${status}`);
}

printMessage('WORKING sdf');

module.exports = app;