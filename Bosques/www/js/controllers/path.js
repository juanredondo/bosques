angular.module('starter.controllers.path', [])

.controller('PathCtrl', function ($scope, PathsFactory) {
    $scope.paths = PathsFactory.all();
})

 .controller('PathDetailCtrl', function ($scope, $stateParams, $state, PathsFactory, SharePathService) {
     $scope.path = PathsFactory.get($stateParams.pathId);
     $scope.goPath = function (gpx, pois) {
         //ui-sref="tab.map"
         SharePathService.prepForBroadcast(gpx, pois);
         $state.go("tab.map"); $state.go("tab.path"); $state.go("tab.map");
     }
 });
