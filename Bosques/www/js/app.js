// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'leaflet-directive', 'ngCordova', 'ui.router'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
          url: "/tab",
          abstract: true,
          templateUrl: "templates/tabs.html"
      })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
        url: '/dash',
        views: {
            'tab-dash': {
                templateUrl: 'templates/tab-dash.html',
                controller: 'DashCtrl'
            }
        }
    })

    .state('tab.forest', {
        url: '/forest',
        views: {
            'tab-forest': {
                templateUrl: 'templates/tab-forest.html',
                controller: 'ForestCtrl'
            }
        }
    })
      .state('tab.forest-detail', {
          url: '/forest/:fId',
          views: {
              'tab-forest': {
                  templateUrl: 'templates/forest-detail.html',
                  controller: 'ForestDetailCtrl'
              }
          }
      })

    .state('tab.map', {
        url: '/map',
        views: {
            'tab-map': {
                templateUrl: 'templates/tab-map.html',
                controller: 'MapCtrl'
            }
        }
    })

    .state('tab.paths', {
        url: '/paths/:forestId',
        views: {
            'tab-path': {
                templateUrl: 'templates/tab-path.html',
                controller: 'PathCtrl'
            }
        }
    })

     .state('tab.path-detail', {
         url: '/path/:pathId',
         views: {
             'tab-path': {
                 templateUrl: 'templates/path-detail.html',
                 controller: 'PathDetailCtrl'
             }
         }
     });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

});
