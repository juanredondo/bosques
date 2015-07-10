angular.module('starter.controllers.forest', [])
  

.controller('ForestCtrl', function ($scope, ForestsFactory) {
    $scope.forests = ForestsFactory.all();
})

.controller('ForestDetailCtrl', function ($scope, $stateParams, ForestsFactory) {
    $scope.forest = ForestsFactory.get($stateParams.fId);
});
