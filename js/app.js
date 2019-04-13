var myApp = angular.module('myApp', []);
// angular controller for data transfer to view
myApp.controller('RegistrationController', ['$scope', function($scope) {
	$scope.register = function() {
		$scope.message = 'Thank you for your submission ' + $scope.user.firstname;
	}
}]);
