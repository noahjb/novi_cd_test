var autodeskToDo = angular.module('autodeskToDo', []);

// CREATE AN ANGULAR CONTROLLER CALLED mainController
function mainController($scope, $http){
  $scope.formData = {};

  $http({
    method: 'GET',
    url: '/api/todos'
  }).then(function successCallback(response){
    // Invoked asyncronously when the response is available
  }, function errorCallback(response){
    // Called asyncronously if an error occurs or the server returns
    // a response with an error status
  });
}