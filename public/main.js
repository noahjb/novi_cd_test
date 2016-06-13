// The name of this module corresponds so the "ng-app" value in line 2 of the HTML
var todo = angular.module('todo', []);

// CREATE AN ANGULAR CONTROLLER CALLED mainController
function mainController($scope, $http){
  $scope.formData = {};

  $http({
    method: 'GET',
    url: '/api/todos'
  }).then(function successCallback(response){
    // Invoked asyncronously when the response is available
    $scope.todos = response;
    console.log("response from server:", response);
  }, function errorCallback(response){
    // Called asyncronously if an error occurs or the server returns
    // a response with an error status
    console.log("error received from server:", error);
  });


}