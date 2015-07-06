angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ForestCtrl', function ($scope, ForestsFactory) {
  $scope.forests = ForestsFactory.all();
  $scope.remove = function (forest) {
      ForestsFactory.remove(forest);
  }
})

.controller('ForestDetailCtrl', function ($scope, $stateParams, Forests) {
    $scope.forest = Forests.get($stateParams.fId);
})

.controller('MapCtrl', function($scope) {
   /* var bounds = leafletBoundsHelpers.createBoundsFromArray([
          [51.508742458803326, -0.087890625],
          [51.508742458803326, -0.087890625]
    ]);*/

    angular.extend($scope, {
        //bounds: bounds,
        center: {},
        markers: {
            myMarker: {
                lat: 51.508,
                lng: -0.087,
                message: "I want to travel here!",
                focus: true,
                draggable: false
            }
        },
        defaults: {
            scrollWheelZoom: false
        }
    });
});
