angular.module('starter.controllers.path', [])

.controller('PathCtrl', function ($scope, $stateParams, PathsFactory) {
    if ($stateParams.fId == '')
        $scope.paths = PathsFactory.all();
    else
        $scope.paths = PathsFactory.allByForest($stateParams.fId);

    $scope.doRefresh = function () {
        $scope.paths = PathsFactory.all();
        $scope.$broadcast('scroll.refreshComplete');
    };
})

 .controller('PathDetailCtrl', function ($scope, $stateParams, $state, PathsFactory, SharePathService) {
     $scope.path = PathsFactory.get($stateParams.pathId);
     $scope.goPath = function (gpx, pois) {
         SharePathService.prepForBroadcast(gpx, pois);
         $state.go("tab.map");
     }
 });
