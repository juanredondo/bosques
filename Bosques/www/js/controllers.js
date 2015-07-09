angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {
    $scope.news = [
        {
            id: 0,
            img: 'img/serrania.jpg',
            title: 'Ultimas Rutas',
            text:'Ruta por la Serrania de Cuenca'
        },
        {
            id: 1,
            img: 'img/tejeranegra.jpg',
            title: 'Bosque Recomendado',
            text:'En esta época del año es muy recomendable visitar los hayedos para pasear tranquilamente a la sombra'
        }
    ];
})

.controller('ForestCtrl', function ($scope, ForestsFactory) {
  $scope.forests = ForestsFactory.all();
})

.controller('ForestDetailCtrl', function ($scope, $stateParams, ForestsFactory) {
    $scope.forest = ForestsFactory.get($stateParams.fId);
})


.controller('PathCtrl', function ($scope, PathsFactory) {
    $scope.paths = PathsFactory.all();
})

 .controller('PathDetailCtrl', function ($scope, $stateParams, PathsFactory) {
     $scope.path = PathsFactory.get($stateParams.pathId);
     $scope.goPath = function (gpx) {
         localStorage['path'] = gpx;
     }
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
             if (localStorage['path'] != null) {
                 var map = L.mapbox.map('map');
                 omnivore.csv(localStorage['path']);
             }
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
