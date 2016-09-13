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
    var output = {};
    output.name = $scope.name;
    output.iterations = $scope.iterations;
    output.axiom = $scope.axiom;
    
    $scope.displayString = JSON.stringify(output, null, 2);
  }

  $scope.init = function() {
    new Clipboard('.btn');
    $scope.getData();
    $scope.updateConfig();
  }

  $scope.init();
});
