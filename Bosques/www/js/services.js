angular.module('starter.services', [])

.factory('ForestsFactory', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var forests = [{
    id: 0,
    name: 'Serrania de Cuenca',
    subtitle: 'Nuestra sierra',
    face: 'img/serrania.jpg'
  }, {
    id: 1,
    name: 'Hayedo de Tejera Negra',
    subtitle: 'El hayedo septentrional',
    face: 'img/tejeranegra.jpg'
  }, {
    id: 2,
    name: 'Villuercas',
    subtitle: 'Villuercas tiroriro',
    face: 'img/villuercas.jpg'
  }, {
    id: 3,
    name: 'Castanar Gallego de Hervas',
    subtitle: 'Castanas traigo',
    face: 'img/castanar.jpg' 
  }];

  return {
    all: function() {
        return forests;
    },
    remove: function(forest) {
        forests.splice(forests.indexOf(forest), 1);
    },
    get: function(fId) {
        for (var i = 0; i < forests.length; i++) {
            if (forests[i].id === parseInt(fId)) {
                return forests[i];
        }
      }
      return null;
    }
  };
});
