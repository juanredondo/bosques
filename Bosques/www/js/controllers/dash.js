angular.module('starter.controllers.dash', [])

.controller('DashCtrl', function ($scope, $cordovaLocalNotification) {
    
   
      
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

    $scope.add = function() {
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 1);
        $cordovaLocalNotification.add({
            id: "1234",
            date: alarmTime,
            message: "This is a message",
            title: "This is a title",
            autoCancel: true,
            sound: null
        }).then(function () {
            console.log("The notification has been set");
        });
    };
 
    /*$scope.isScheduled = function () {
        $cordovaLocalNotification.isScheduled("1234").then(function (isScheduled) {
            alert("Notification 1234 Scheduled: " + isScheduled);
        });
    };*/

    //$scope.add();
});
