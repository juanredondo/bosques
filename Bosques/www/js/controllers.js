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
    $scope.go = function (forestId) {
        $state.go('tab.path', [forestId]);
    };
})


.controller('PathCtrl', function ($scope, PathFactory, ForestId) {
    $scope.paths = PathFactory.all(ForestId);
})

 .controller('PathDetailCtrl', function ($scope, $stateParams, PathFactory) {
     $scope.path = PathFactory.get($stateParams.pathId);
 })

.controller('MapCtrl',
  [ '$scope',
    '$cordovaGeolocation',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    function (
      $scope,
      $cordovaGeolocation,
      $stateParams,
      $ionicModal,
      $ionicPopup
      ) {

        /**
         * Once state loaded, get put map on scope.
         */
        $scope.$on("$stateChangeSuccess", function () {

            $scope.newLocation;

             $scope.map = {
                 defaults: {
                     tileLayer: 'http://jjshaw.atwebpages.com/maverick/raster.php?z={z}&x={x}&y={y}',
                    /*tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',*/
                    maxZoom: 18,
                    zoomControlPosition: 'bottomleft'
                },
                center: {},
                markers: {},
                events: {
                    map: {
                        enable: ['context'],
                        logic: 'emit'
                    }
                }
            };
             $scope.locate();
        });

        var Location = function () {
            if (!(this instanceof Location)) return new Location();
            this.lat = "";
            this.lng = "";
            this.name = "";
        };

          /**
         * Center map on user's current position
         */
        $scope.locate = function () {

            $cordovaGeolocation
              .getCurrentPosition()
              .then(function (position) {
                  if(!$scope.map.center){
                     $scope.map.center = {
                          lat: position.coords.latitude,
                          lng: position.coords.longitude,
                          zoom: 15
                      };

                      $scope.map.markers.now = {
                          lat: position.coords.latitude,
                          lng: position.coords.longitude,
                          message: 'Mi localizacion',
                          focus: true,
                          draggable: false
                      };
                  }
                  else {
                      $scope.map.center.lat = position.coords.latitude;
                      $scope.map.center.lng = position.coords.longitude;
                      $scope.map.center.zoom = 15;

                      $scope.map.markers.now = {
                          lat: position.coords.latitude,
                          lng: position.coords.longitude,
                          message: "Mi localizacion",
                          focus: true,
                          draggable: false
                      };
                  }

              }, function (err) {
                  // error
                  console.log("Location error!");
                  $scope.map.center = {
                      lat: 40,
                      lng: -3,
                      zoom: 15
                  };

                  $scope.map.markers.now = {
                      lat: 40,
                      lng: -3,
                      message: 'Mi localizacion',
                      focus: true,
                      draggable: false
                  };
                  console.log(err);
              });

        };

    }]);