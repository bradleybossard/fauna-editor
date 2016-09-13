var app = angular.module('myApp', [])
.controller('myCtrl', function($scope, $http) {
	$scope.getData = function() {
		$http.get('props.json').then(
				function (res) {
						// TODO: Do stuff here
          $scope.fill_to = res.data.fill_to;
          $scope.fill_from = res.data.fill_from;
          $scope.animation_duration = res.data.animation_duration;
			    $scope.updateConfig();
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
    output.animation_duration = $scope.animation_duration;
    output.fill_to = $scope.fill_to;
    output.fill_from = $scope.fill_from;
    
    $scope.displayString = JSON.stringify(output, null, 2);
  }

  $scope.init = function() {
    new Clipboard('.btn');
    $scope.getData();

  }

  $scope.init();
});
