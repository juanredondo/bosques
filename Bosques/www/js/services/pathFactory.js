angular.module('starter.services.path', [])

.factory('PathsFactory', function() {
    var paths = [
        {
            id: 0,
            forestId: 0,
            map: 'img/serrania-route-map.jpg',
            name: 'Tia Perra y Cerviñuelo',
            subtitle: 'Ruta larga',
            text:'De las posibles rutas para descubrir las singularidades botánicas de este espacio natural proponemos este recorrido que nos permite conocer una fabulosa formación de Arce de Montepellier, posiblemente la única presente en la península en la que esta especie es dominante. Se trata de una ruta fácil, que nos conduce hasta un entorno de gran belleza en el que junto a los ejemplares adehesados de Arce de gran tamaño y espectacularidad, podemos tambien observar ejemplares de quejigo igualmente magníficos en porte y tamaño así como los cortados de calizas tableadas que el paso del naciente río Trabaque han conformado. Planteamos la ruta de 2 formas posibles, bien de manera más corta, dirigiendonos directamente hacia la zona de la Dehesa, o bien de forma circular en un recorrido más extenso, que nos permite observar otras interesantisimas muestras del paisaje y botánica local, como la salto del agua del Trabaque. Para la ruta corta dejamos el coche poco antes del cruce con El Hosquillo. Seguimos por una pista ancha entre zonas de pinar abierto (podemos observar tanto pino laricio como pino silvestre). Tras poco más de 3 Km estaremos en la Muela, donde poder observar los primeros ejemplares. ',
            directions: 'Desde Cuenca por la CM-2110  y CUV-9113 dirección Las Majadas. Una vez en esta población seguimos dirección El Hosquillo.',
            length: 13,
            time: 4.5,
            gradient: 350,
            dificulty: 'Media',
            gpx: 'gpx/larga.gpx',
            pois:
                [
                    {
                        lat: 40.3616658, lng: -2.0016224, img: 'img/trabaque.jpg', title: 'Salto Trabaque', marker: 'img/trabaque-marker.png',
                        text: 'En el puntal del Perdigano un incipiente Trabaque se precipita al vacio, en un impresionante salto de agua sobre las dolomitas tableadas de decenas metros'
                    },
                    {
                        lat: 40.358362, lng: -2.009516, img: 'img/arce.jpg', title: 'Arce de Montpelier', marker: 'img/arce-marker.png',
                        text: 'El arce de Montepelier es un pequeño arbolillo, muy característico por sus hojas trilobuladas (con tres lóbulos) y su color rojo en otoño. Aparece con ejemplares aislados en otras formaciones. En la dehesa del Perdigano encontramos una de las escasas formaciones (si no la única) en la que el arce es la especie principal.'
                    }
                ]
        },
        {
            id: 1,
            forestId: 0,
            map: 'img/serrania-route-map.jpg',
            name: 'Tia Perra y Cerviñuelo',
            subtitle: 'Ruta corta',
            text:'De las posibles rutas para descubrir las singularidades botánicas de este espacio natural proponemos este recorrido que nos permite conocer una fabulosa formación de Arce de Montepellier, posiblemente la única presente en la península en la que esta especie es dominante. Se trata de una ruta fácil, que nos conduce hasta un entorno de gran belleza en el que junto a los ejemplares adehesados de Arce de gran tamaño y espectacularidad, podemos tambien observar ejemplares de quejigo igualmente magníficos en porte y tamaño así como los cortados de calizas tableadas que el paso del naciente río Trabaque han conformado. Planteamos la ruta de 2 formas posibles, bien de manera más corta, dirigiendonos directamente hacia la zona de la Dehesa, o bien de forma circular en un recorrido más extenso, que nos permite observar otras interesantisimas muestras del paisaje y botánica local, como la salto del agua del Trabaque. Para la ruta corta dejamos el coche poco antes del cruce con El Hosquillo. Seguimos por una pista ancha entre zonas de pinar abierto (podemos observar tanto pino laricio como pino silvestre). Tras poco más de 3 Km estaremos en la Muela, donde poder observar los primeros ejemplares. ',
            directions: 'Desde Cuenca por la CM-2110  y CUV-9113 dirección Las Majadas. Una vez en esta población seguimos dirección El Hosquillo.',
            length: 10,
            time: 3,
            gradient: 80,
            dificulty: 'Media-baja',
            gpx: 'gpx/corta.gpx',
            pois:
                [
                    {
                        lat: 40.3616658, lng: -2.0016224, img: 'img/trabaque.jpg', title: 'Salto Trabaque', marker: 'img/trabaque-marker.png',
                        text: 'En el puntal del Perdigano un incipiente Trabaque se precipita al vacio, en un impresionante salto de agua sobre las dolomitas tableadas de decenas metros'
                    },
                    {
                        lat: 40.358362, lng: -2.009516, img: 'img/arce.jpg', title: 'Arce de Montpelier', marker: 'img/arce-marker.png',
                        text: 'El arce de Montepelier es un pequeño arbolillo, muy característico por sus hojas trilobuladas (con tres lóbulos) y su color rojo en otoño. Aparece con ejemplares aislados en otras formaciones. En la dehesa del Perdigano encontramos una de las escasas formaciones (si no la única) en la que el arce es la especie principal.'
                    }
                ]
        },
        {
            id: 2,
            forestId: 1,
            map: 'img/tejeranegra-route-map.jpg',
            name: 'Tejera Negra',
            subtitle: 'Ruta de las Carretas',
            text: 'En el Parque Natural se han definido una serie de rutas siguiendo los cursos de los dos cauces principales del espacio. De las posibles rutas a realizar, la más popular y la que recomendamos es la denominda "Ruta de las Carretas", que en un breve recorrido nos permite adentrarnos en el interior del hayedo.Partimos desde el aparcamiento del Parque (en el que será necesario reservar plaza, especialmente en los meses de otoño). La ruta se inicia siguiendo el curso del río Lillas por una zona de pradería. Una vez atravesamos un pequeño arroyo comenzamos la ascensión por una zona de bosque en la que se localizan pino, melojo y las primeras hayas. Localizamos en este tramo además una antigua carbonera, en la que se muestra la forma de producción artesanal de carbón vegetal. La ascesión continua hasta la pradera de Matarredonda, mientras seguimos observando hayas y aalgún tejo. Desde este punto comenzamos el descenso también por una zona con hayas y melojos, junto con algún ejemplar de tejo, hasta regrasar al punto de origen',
            directions: 'Desde la población de Cantalojas, una pista forestal nos lleva hasta el aparcamiento en el que se inicia la ruta. En las épocas de mayor afluencia del parque (principalmente otoño) es necesario reservar plaza en el aparcamiento.',
            length: 6,
            time: 2.5,
            gradient: 250,
            dificulty: 'Media-baja',
            gpx: 'gpx/tejeranegra.gpx',
            pois:
                [
                    {
                        lat: 40.3616658, lng: -2.0016224, img: 'img/trabaque.jpg', title: 'Salto Trabaque', marker: 'img/trabaque-marker.png',
                        text: 'En el puntal del Perdigano un incipiente Trabaque se precipita al vacio, en un impresionante salto de agua sobre las dolomitas tableadas de decenas metros'
                    },
                    {
                        lat: 40.358362, lng: -2.009516, img: 'img/arce.jpg', title: 'Arce de Montpelier', marker: 'img/arce-marker.png',
                        text: 'El arce de Montepelier es un pequeño arbolillo, muy característico por sus hojas trilobuladas (con tres lóbulos) y su color rojo en otoño. Aparece con ejemplares aislados en otras formaciones. En la dehesa del Perdigano encontramos una de las escasas formaciones (si no la única) en la que el arce es la especie principal.'
                    }
                ]
        },
        {
            id: 3,
            forestId: 2,
            map: 'img/villuecas-route-map.jpg',
            name: 'Lorelas de las Villuecas',
            subtitle: 'Garganta de las truchas',
            text: 'Las loreras se localizan a lo largo de la comarca como formaciones propias o junto a otras formaciones. La mancha de lorera de mayor importancia tanto por densidad, extensión y tamaños de los ejemplares corresponde con la que se ubica en la Garganta de las Truchas. Esta ruta nos permite conocer este espacio y adentrarnos en un bosque de otro tiempo, un bosque subtropical en la región mediterránea. La lorera se ubica entre las sierras de Palomera y Altamira, en el término municipal de Alía. La parte más complicada de la ruta se puede decir que es el acceso. Este se realiza en coche por una pista sin asfaltar, que parte de la EX-102, a mitad de camino entre Alía y Puerto de San Vicente. Por esta pista continuamos unos 14 Km. También se puede acceder desde la población de Navatrasierra. Llegaremos hasta un punto donde no se puede continuar en coche. Se indica el inicio de la ruta con una señalización que nos dirige hacia el Molino de la Trucha. Avanzamos por la pista hasta la garganta. Una vez aquí ya nos introducimos en el interior del bosque, debemos continuar el curso del arroyo siendo cada vez más espesa la formación y más majestuosos los ejemplares. Seguimos la ruta hasta la zona de los charcos, un cañón angosto con varias pozas y saltos de agua, con varias subidas y bajadas. La ruta la podemos continuar hasta el denominado Molino de la Trucha o ascender un poco más. El regreso se realiza por el mismo recorrido.',
            directions: 'Se llega en coche por pista sin asfaltar que se toma desde la EX-102, entre Alía y Puerto de San Vicente',
            length: 8.5,
            time: 2.5,
            gradient: 100,
            dificulty: 'Media-baja',
            gpx: 'gpx/villuecas.gpx',
            pois:
                [
                    {
                        lat: 40.3616658, lng: -2.0016224, img: 'img/trabaque.jpg', title: 'Salto Trabaque', marker: 'img/trabaque-marker.png',
                        text: 'En el puntal del Perdigano un incipiente Trabaque se precipita al vacio, en un impresionante salto de agua sobre las dolomitas tableadas de decenas metros'
                    },
                    {
                        lat: 40.358362, lng: -2.009516, img: 'img/arce.jpg', title: 'Arce de Montpelier', marker: 'img/arce-marker.png',
                        text: 'El arce de Montepelier es un pequeño arbolillo, muy característico por sus hojas trilobuladas (con tres lóbulos) y su color rojo en otoño. Aparece con ejemplares aislados en otras formaciones. En la dehesa del Perdigano encontramos una de las escasas formaciones (si no la única) en la que el arce es la especie principal.'
                    }
                ]
        },
        {
            id: 4,
            forestId: 3,
            map: 'img/castanar-route-map.jpg',
            name: 'Castañar de Hervás',
            subtitle: 'Puerto de Honduras',
            text: 'Proponemos la siguiente ruta para conocer este espacio natural. Se trata de una ruta circular que parte de las inmediaciones de la población de Hervás y asciende por la ladera del puerto de Honduras. Una vez alcanzado el punto más elevado de la ruta atravesamos la carretera que asciende al puerto y descendemos por otra ladera, también por el castañar, hasta llegar al punto de inicio de nuevo. El espacio se encuentra recorrido por un elevado número de pistas, por lo que podemos discurrir por muchas de ellas, si bien hemos seleccionado este recorrido porque discurre por zonas densas y bien conservadas del castañar, además de ser circular. Esta ruta podemos observar tanto el castañar gallego como el cercano castañar del Duque también bien conservado así como formaciones de melojo, en las zonas más elevadas.',
            directions: 'El inicio de la ruta se localiza en las inmediaciones de la población de Hervás, en la zona de la Plaza de Toros y la Ermita. Hasta aqui podemos llegar andando desde la población o por la CCV -102.',
            length: 8,
            time: 2.5,
            gradient: 300,
            dificulty: 'Media',
            gpx: 'gpx/castanar.gpx',
            pois:
                [
                    {
                        lat: 40.3616658, lng: -2.0016224, img: 'img/trabaque.jpg', title: 'Salto Trabaque', marker: 'img/trabaque-marker.png',
                        text: 'En el puntal del Perdigano un incipiente Trabaque se precipita al vacio, en un impresionante salto de agua sobre las dolomitas tableadas de decenas metros'
                    },
                    {
                        lat: 40.358362, lng: -2.009516, img: 'img/arce.jpg', marker: 'img/arce-marker.png',
                        text: 'El arce de Montepelier es un pequeño arbolillo, muy característico por sus hojas trilobuladas (con tres lóbulos) y su color rojo en otoño. Aparece con ejemplares aislados en otras formaciones. En la dehesa del Perdigano encontramos una de las escasas formaciones (si no la única) en la que el arce es la especie principal.'
                    }
                ]
        }
    ];

    return {
        all: function() {
            return paths;
        },
        get: function(pathId) {
            for (var i = 0; i < paths.length; i++) {
                if (paths[i].id === parseInt(pathId)) {
                    return paths[i];
                }
            }
            return null;
        }
    };
});
