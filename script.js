console.log('point1');

var app = angular.module('myApp', [])
.controller('myCtrl', function($scope, $http) {
	$scope.getData = function() {
		$http.get('props.json').then(
				function (res) {
						// TODO: Do stuff here
				},
				function () {
					console.log("Error fetching json");
				});
  }

  $scope.updateConfig = function() {
  }

  $scope.init = function() {
    $scope.getData();
    $scope.updateConfig();
  }

  $scope.init();
});
