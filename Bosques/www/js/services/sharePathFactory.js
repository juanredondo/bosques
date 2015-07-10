angular.module('starter.services.share', [])

.factory('SharePathService', function($rootScope) {
    var sharedService = {};

    sharedService.path = '';
    sharedService.pois = '';

    sharedService.prepForBroadcast = function(gpx, pois) {
        this.path = gpx;
        this.pois = pois;
        this.broadcastItem();
    };

    sharedService.broadcastItem = function() {
        $rootScope.$broadcast('pathChange');
    };

    return sharedService;
});
