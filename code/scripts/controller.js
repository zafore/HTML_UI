
var assignLst = angular.module('assignLst', []);
assignLst.controller('AssignLstCtrl', ['$scope','$http', function ($scope, $http) {
  $http.get('http://whatsdueapp.com/users.json').success(function(data) {
    $scope.events = data.eventd;
	console.log(data);	
  });
 
  $scope.orderProp = 'time';
}]);
