var app = angular.module('myApp', [])
.controller('myCtrl', function($scope, $http) {
  $scope.getData = function() {
    $http.get('props.json').then(
      function (res) {
        // TODO: Do stuff here
        $scope.fill_to = res.data.fill_to;
        $scope.fill_from = res.data.fill_from;
        $scope.animation_duration = res.data.animation_duration;
        $scope.patterns = res.data.patterns;
        //$scope.patternIndex = res.data.pattern[0].name;
        //$scope.patternIndex = res.data.pattern[0].name;
        $scope.patternIndex = 0;
        $scope.axiom = $scope.patterns[$scope.patternIndex].axiom;
        $scope.updateConfig();
      },
      function () {
        console.log("Error fetching json");
      });
  }

  $scope.updatePattern = function() {
    //var pattern = $scope.patterns[$scope.patternIndex];
    var pattern = $scope.patternIndex;
    $scope.axiom = pattern.axiom;
    $scope.name = pattern.axiom;
    console.log('pattern', $scope.patternIndex, $scope.patterns[$scope.patternIndex], $scope.axiom);
    $scope.updateConfig();
  }

  $scope.updateConfig = function() {
    var output = {};
    output.name = $scope.name;
    output.iterations = $scope.iterations;
    output.axiom = $scope.axiom;
    console.log(output);
    output.animation_duration = $scope.animation_duration;
    output.fill_to = $scope.fill_to;
    output.fill_from = $scope.fill_from;
    $scope.displayString = JSON.stringify(output, null, 2);
  }

  $scope.init = function() {
    $scope.iterations = 10;
    $scope.patternIndex = 0;
    new Clipboard('.btn');
    $scope.getData();
  }

  $scope.init();
});
