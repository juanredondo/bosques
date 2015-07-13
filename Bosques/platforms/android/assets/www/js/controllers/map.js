angular.module('starter.controllers.map', [])

.controller('MapCtrl',
  [ '$scope',
    '$cordovaGeolocation',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    'SharePathService',
    function (
      $scope,
      $cordovaGeolocation,
      $stateParams,
      $ionicModal,
      $ionicPopup, 
      SharePathService
      ) {
      
        var map, greenIcon, nowIcon;
        var firstRun = true;
  
        $scope.$on('$ionicView.enter', function () {
            // Code you want executed every time view is opened
            console.log('Opened!');
            if (firstRun) {
                $scope.init();
                firstRun = false;
            }
        })

        $scope.$on("pathChange", function (event) {
            $scope.pathChange();
        });

        /**
       * Once state loaded, get put map on scope.
       */
        $scope.$on("$stateChangeSuccess", function () {
             $scope.locate();
        });

       

               

        /*function onClickMarker(title, img, text){
            $ionicPopup.show({
                templateUrl: 'templates/popup-template.html',
                title: title, 
                scope: $scope,
                buttons: [
                  { text: 'Aceptar', onTap: function (e) { return true; } }
                ]
            }).then(function () {
                $scope.text = text;
                $scope.img = img;
            });
        };*/

         /**
         * Center map on user's current position and load GPX
         */

        $scope.locate = function () {
           $cordovaGeolocation
              .getCurrentPosition()
              .then(function (position) {
                  L.marker([position.coords.latitude, position.coords.longitude], { icon: nowIcon }).addTo(map);
              
                  if (SharePathService.path == '')
                      map.setView(new L.LatLng(position.coords.latitude, position.coords.longitude), 14);

              }, function (err) {
                  // error
                  console.log("Location error!");
                  L.marker([40.5, -2.3], { icon: nowIcon }).addTo(map);
              
                  if (SharePathService.path  == '')
                      map.setView(new L.LatLng(40.5, -2), 8);

                  console.log(err);
              });

        };

        $scope.init = function () {
            nowIcon = L.icon({
                iconUrl: 'img/map-marker.png',
                iconSize: [64, 64], // size of the icon
                //            shadowSize: [50, 64], // size of the shadow
                iconAnchor: [32, 64], // point of the icon which will correspond to marker's location
                //            shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor: [-3, -64] // point from which the popup should open relative to the iconAnchor*/
            });

            greenIcon = L.icon({
                iconUrl: 'img/leaf-green.png',
                shadowUrl: 'img/leaf-shadow.png',

                iconSize: [20, 45], // size of the icon
                shadowSize: [20, 30], // size of the shadow
                iconAnchor: [10, 45], // point of the icon which will correspond to marker's location
                shadowAnchor: [4, 30],  // the same for the shadow
                popupAnchor: [-3, -45] // point from which the popup should open relative to the iconAnchor
            });

            map = L.map('map', {
                center: [40.5, -2], //[position.coords.latitude, position.coords.longitude],
                zoom: 15
            }
                    );

            L.tileLayer('http://jjshaw.atwebpages.com/maverick/raster.php?z={z}&x={x}&y={y}', {
                maxZoom: 18
            }).addTo(map);

            $scope.locate();
            $scope.pathChange();
        };

        $scope.pathChange = function () {
            if (SharePathService.path != '') {
                new L.GPX(SharePathService.path, {
                    async: true,
                    marker_options: {
                        startIconUrl: 'img/pin-icon-start.png',
                        endIconUrl: 'img/pin-icon-end.png',
                        shadowUrl: 'img/pin-shadow.png'
                    }
                })
                                             .on('loaded', function (e) {
                                                 map.fitBounds(e.target.getBounds());
                                             })
                           .addTo(map);

                SharePathService.pois.forEach(function (poi) {
                    L.marker([poi.lat, poi.lng], { icon: greenIcon, title: poi.title })
                        .addTo(map);
                    //.on('click', onClickMarker(poi.title, poi.img, poi.text));
                });
            }
        };

    }]);
