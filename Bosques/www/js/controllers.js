angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ForestCtrl', function ($scope, ForestsFactory) {
  $scope.forests = ForestsFactory.all();
  $scope.remove = function (forest) {
      ForestsFactory.remove(forest);
  }
})

.controller('ForestDetailCtrl', function ($scope, $stateParams, ForestsFactory) {
    $scope.forest = ForestsFactory.get($stateParams.fId);
})

.controller('MapCtrl', function($scope) {
    $scope.map = L.map('map').setView([37.8, -96], 4);            
    L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpeg', {
        attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: '1234'
    }).addTo($scope.map);
});
