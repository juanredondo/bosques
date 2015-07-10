angular.module('starter.controllers.path', [])

.controller('PathCtrl', function ($scope, PathsFactory) {
    $scope.paths = PathsFactory.all();
})

 .controller('PathDetailCtrl', function ($scope, $stateParams, PathsFactory, SharePathService) {
     $scope.path = PathsFactory.get($stateParams.pathId);
     $scope.goPath = function (gpx, pois) {
         SharePathService.prepForBroadcast(gpx, pois);
     }
 });
