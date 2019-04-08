var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/home.html',
    controller: 'HomeController'
  })
  .when('/settings', {
    templateUrl: 'templates/settings.html',
    controller: 'SettingsController'
  })
  .otherwise({ redirectTo: '/' });
});

app.controller('HomeController', function($scope) {
});

app.controller('MailListingController', function($scope) {
  $scope.email = [{
    'id': 1,
    'from': 'from_me@example.com',
    'to': 'to_me@example.com',
    'subject': 'Test 1',
    'body': 'Test body 1'
  }];
});

app.controller('ContentController', function($scope) {
});

app.controller('SettingsController', function($scope) {
  $scope.settings = {
    name: 'Ari',
    email: 'me@example.com'
  };

  $scope.updateSettings = function() {
    console.log('updateSettings was called');
  }
});
