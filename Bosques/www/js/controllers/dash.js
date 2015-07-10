angular.module('starter.controllers.dash', [])

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
   
});
