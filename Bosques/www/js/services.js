angular.module('starter.services', [])

.factory('ForestsFactory', function() {
  var forests = [{
    id: 0,
    name: 'Serrania de Cuenca',
    subtitle: 'Nuestra sierra',
    face: 'img/serrania.jpg',
    big: 'img/serrania-big.jpg',
    place: 'img/serrania-place.jpg',
    map: 'img/serrania-map.jpg',
    text: 'Ubicada al noreste de la provincia, la Serranía de Cuenca corresponde con una vasta extensión de masa arbolada (al decir de algunos la más extensa de la península, si consideramos la masa continua que forma con los Montes Universales y el Alto Tajo), que se asienta sobre una zona de montañas de perfiles suaves de material calizo, hendidas por el paso de los distintso ríos que conforman los elementos más caracteristicos y espectaculares de la zona, los cañones de paredones calizos y formaciones cársticas variadas. En la vegetación dominan los pinares, principalmente de pino laricio, pero encontramos también otros pinos como el pino silvestre en zonas más elevadas, el pino resinero en las zonas de suelos ácidos, pero también amplias extensiones de Quercus, encinas, quejigos y melojos, y vegetación de ribera junto a los cursos de agua. Y finalmente una serie de singularidades botánicas que convierten a este espacio en un parque natural de importancia nacional: una dehesa de arce de Montpellier, los robledales más meridionales de la península, elementos eurosiberianos en los cañones húmedos (avellanos, tilos) así como un extenso bosque de sabinares albares.',
    placetext: 'La Serranía de Cuenca esta poblada de pequeñas poblaciones de carácter serrano, que sin presentar elementos patrimoniales de relevancia, si que cuentan con algunas edificaciones de caracter tradicional. Poblaciones como Beamud, Valdemeca o Beteta presentan cascos tradicionales bien conservados. En Poyatos localizamos algunos de los elementos de mayor importancia, con una iglesia gótica, el arco del obispo y algunas contrucciones civiles de interés. Cañete al sur, también presenta un interesante patrimonio, donde destaca la muralla, perfectamente conservada y la plaza mayor porticada. Y no debemos olvidar la bellisima población de Cuenca, también cercana al espacio natural. La capital provincial atesora un conservado casco antiguo, que se asienta de forma espectacular sobre las hoces de los río Júcar y Huecar.  ',
    description: 'Uno de los principales valores de este espacio natural es sin duda la extensa superficie de masa forestal arbolada, en la que domina el pino laricio, sustituido en zonas elevadas y húmedas por el pino silvestre y en determinados enclaves de suelos arenosos y ácidos por el pino resinero. Además de pinares, encontramos algunos bosquetes aislados de quercineas, siendo la de mayor importancia los quejigares, pero también encontramos encinas y melojos asociados al pino resinero. Pero se hace imprescindible señalar la presencia de especies típicas de ambientes húmedos como tilos, serbales, avellanos, abedul o chopo temblón, que crecen al abrigo fresco de algunas de las hoces de este territorio. Entre estas hoces sobresale por variedad y majestuosidad de sus ejemplares la Hoz de Beteta. En el estrato arboreo destacar la presencia de espinosas y enredaderas como el rosal, el endrino, el aliguestre o la madreselva. También se localizan boj, enebros, acebos y tejos. Pero además de su amplia extensión, la Serranía de Cuenca destaca por una serie de singularidades botánicas, que le confieren una mayor importancia ambiental entre las que señalamos las siguientes: Aceral de Muela de Perdigano La Muela Perdigano es una típica meseta elevada de material caliza que se localiza al norte de la población de Las Majadas, dentro del Parque Natural. En esta zona llana elevada se localiza una de las escasas formaciones vegetales en la que el arce de Montepellier es la especie dominante. Se trata de un bosquete adehesado, de ejemplares espectaculares tanto de arce de Montepellier como de quejigo. En otoño se convierte en un auténtico espectaculo de colores con los rojos y anaranjados del arce y los amarillos y ocres del quejigo. Sierra de Valdemeca La sierra de Valdemeca es un línea montañosa de unos 1600 m de altura máxima, y de clara orientación ibérica localizada en el interior de la Serranía, entre las poblaciones de Beamud y Valdemeca En las laderas de esta sierra podemos observar dos joyas botánica del entorno, los ejemplares más meridonales de roble albar de la península, así como un magnífico bosquete de abedules. El roble albar es una especie típica de zonas más o menos montañosas del norte penínsular, que desciende hacia el sur por determinadas zonas montañosas, alcanzando aquí su límite meridional. Se trata de un bosque de pinares (albar, resinero y laricio) con ejemplares dispersos de melojo y de roble albar. Se localiza en la ladera este de esta sierra, a la que accederemos desde la población de Valdemeca. Por su parte, el abedul es una especie también más típica del norte de la península que sobrevive en determinados enclaves del sur de forma residual. En este caso se asienta en la ladera oeste, en el curso de un arroyo, al que podemos acceder desde la población de Beamud. Sabinares de Tierra Muerta y de Campillos-Sierra Otro de los valores botánicos son sus sabinares albares. El de Tierra Muerta es el tipico sabinar sobre paramera, en suelo pedregoso y con aspecto muy abierto, con ejemplares dispersos de sabina albar junto con algunas matas tambien dispersas. Su importancia principal reside en su tamaño, pudiendo considerarse junto al de Calatañazor los más extensos de la península (y posiblemente a nivel mundial). Se puede acceder desde Buenache o bien desde Uña o Beamud. No muy alejado de aqui, hacia el sur , junto a la población de Campillo-Sierra se localiza otro magnífico sabinar albar, en este caso de aspecto adehesado y favorecido por el hombre. El acceso por una pista  a la derecha en la carretera que va de Campillo-Sierra hacia Valdemeca.',
    directions: 'Le entrada natural a la Serranía se realiza desde la misma población de Cuenca, pudiendo llegar por distintas vías en función del punto donde nos dirijamos, N-420 dirección Teruel para la zona sur de la Sierra, N-320 dirección Guadalajar para la zona norte y CM-2110 dirección Uña o Las Majadas para la zona central del espacio. '
  }, {
    id: 1,
    name: 'Hayedo de Tejera Negra',
    subtitle: 'El hayedo septentrional',
    face: 'img/tejeranegra.jpg',
    big: 'img/tejeranegra-big.jpg',
    place: 'img/tejeranegra-place.jpg',
    map: 'img/tejeranegra-map.png',
    text: 'El haya, especie de óptimo eurosiberiano, que se corresponde fundamentalmente con los ambientes húmedos, forma bosques bellos, monoespecíficos en muchas ocasiones pero muy populares, especialmente por su coloración otoñal. El hayedo se extiende por gran parte de europa, ocupando gran parte de los bosques del norte de la península y zonas elevadas y húmedas de algunos sistemas montañosos de la mitad norte, alcanzando su extremo meridional en el macizo de Ayllón, entre las provincias de Madrid, Segovia y Guadalajara, donde se localizan 3 manchas de este tipo de formación, el hayedo de Montejo, el hayedo de Pedraza y el Hayedo de Tejera Negra, el de mayor superficie de las tres y que ahora nos ocupa. Ocupando los valles de los arroyos de Lillas y Zarzas, junto a crestas afiladas, se localiza el hayedo. Se accede desde la población de Cantalojas, en la provincia de Guadalajara, por una pista asfaltada, y es un bello hayedo, surgido en gran parte de rebrote tras la talas a rasa sufridas en torno a los años 60.',
    placetext: 'Dentro del entorno del Hayedo de Tejera Negra, encontramos un buen puñado de poblaciones de caracter rural, entre las que destacan los denominados Pueblos Negros. ',
    description: 'El hayedo es unos de los bosques más emblemáticos y populares del norte de la península, que puede descender hasta zonas meridionales en determinados refugios con un microclima de especial humedad, donde el hayedo ha podido sobrevivir. De estos refugios, las formaciones de hayedo del Macizo de Ayllón suponen uno de los extremos meridionales de esta especie en la península, y de ahí la importancia de estos hayedos. El hayedo de Tejera Negra es una hayedo joven surgido de rebrote tras las denominadas "talas a mata rasa" la última de ellas en la decada de los 60, tras la que el hayedo ha regenerado de forma ostensible. El hayedo se ubica junto a los arroyos de los ríos Lillas y de las Zarzas, en el término municipal de Cantalojas. En el hayedo localizmos también pino silvestre (fruto de repoblaciones) melojo, acebos y abedules. Entre los matorrales encontramos jaras y brezos. En las zonas más inaccesible se localizan los ejemplares más antiguos y espectaculares de hayedos, así como varios pies de tejo, que probablemente den nombre al paraje. ',
    directions: 'Para acceder al hayedo de Tejera Negra debemos dirgirnos hasta Cantalojas, (Guadalajara). Al que llegamos o bien desde Guadalajara dirección Cogolludo, o desde el norte por Atienza siguiendo la CM-110.Desde Cantalojas debemos tomar una pista asfaltada que nos lleva al hayedo. Hay que considerar que según que ruta vayamos a realizar es necesario reservar.'
  }, {
    id: 2,
    name: 'Villuercas',
    subtitle: 'Villuercas tiroriro',
    face: 'img/villuercas.jpg',
    big: 'img/villuercas-big.jpg',
    place: 'img/villuercas-place.jpg',
    map: 'img/villuercas-map.jpg',
    text: 'La comarca de las Villuercas esta formada por una sucesión de valles y montañas, hasta un total de 5 líneas montañosas de altitud media que se disponen en paralelo. En esta sierras, por su ubicación y orientación se produce un encuentro de las condiciones climatológicas mediterráneas con elementos de la climatología atlántica. ',
    placetext: 'Guadalupe es un bella población que se ha ido asentando sobre su ondulada orografía, lo que ha configurado un pueblo de pequeñas subidas y bajadas en sus calles estrechas y sinuosas de aroma serrano.',
    description: 'El loro es una especie de árbol que muestra similitudes morfológicas con los laureles de los bosques de laurisilva que localizamos en el territorio canario. De hecho, esta especie, como otras como los helechos, son auténticos supervivientes de los bosques de laurisilva que poblaron Europa durante el Terciario, y que han sobrevivido de forma residual en algunos enclaves favorables (principalmente valles húmedos y sin heladas invernales), clima que se asemeja, salvando las distancias al clima subtropical de Las Canarias. Las loreras las podemos considerar por lo tanto como bosques tropicales en un entorno mediterraneo. Al igual que los bosque de laurisilva cogen agua de las nieblas con sus hojas, en lo que se conoce como lluvia horizontalEn las sierras de las Villuercas se concentran la mayor proporción de esta especie del territorio nacional, en ocasiones como ejemplares dispersos pero también como formaciones propias extensas y densas, o bien en formación conjunta con alisos.La formación más interesante por extensión y desarrollo corresponde a la lorera del Barranco de las Truchas, en las inmediaciones de la población de Alía. Además de las loreras, si se tiene tiempo también se pueden visitar otras formaciones vegetales de interés en la comarca, castañares, melojares, alcornocales, encinares y quejigares, y zonas mixtas en las que también encontramos madroño, durillo y otros arbustos. ',
    directions: 'La comarca de Las Villuercas se encuentra alejada de las principales vías de comunicación. El acceso se realiza generalmente desde la A-5, discurriendo posteriormente por algunas de las carretreas nacionales y secundarias que llegan hasta la zona (N-502, CM-411, CM-4100, EX-118, EX-102), en función del origen.'

  }, {
    id: 3,
    name: 'Castañar Gallego de Hervas',
    subtitle: 'Extenso y bien conservado',
    face: 'img/castanar.jpg',
    big: 'img/castanar-big.jpg',
    place: 'img/castanar-place.jpg',
    map: 'img/castanar-map.png',
    text: 'Ubicado en el valle de Ambroz, al norte de la provincia de Cáceres, el Monte Público de Castañar Gallego contiene una de las formaciones de esta especie más extensas y mejor conservadas del sur penínsular. El nombre del monte hace referencia, según parece, a su antigua propietaria, que provenía de esta región peninsular. Los castañares son uno de los bosques más bellos que se desarrollan en nuestro territorio. Las copas de esta especie se abren en forma de abanico, conformando una gran densidad en zonas elevadas, y creando así un espacio sombreado y húmedo, muy característico de los bosques atlánticos. En este caso destacan además algunos ejemplares de gran longevidad y gran tamaño, con diametros de tronco realmente espectaculares. Este monte público, se localiza junto a la bella población de Hervás, una coqueta localidad en la que se asienta una popular judería que desciende suavemente por la ladera desde la zona más elevada de la población hasta el cauce del río Ambroz.',
    placetext: 'Hervás es un pequeño y recoleto pueblo serrano, que se asienta sobre la ladera sur del Sistema Central. Sus calles descienden desde la zona alta donde se localiza la plaza y la iglesia, hacia el cauce del río Ambroz.Y en este descenso suave y amable, vamos descubriendo lo que fue el barrio judío de la localidad, un bello conjunto de calles estrechas (de hecho se dice que aquí se encuentra la calle más estrecha del país) y construcciones populares en adobe y entramado de madera. Algunas de las calles a visitar sería la del Vao (junto al río) y la de la Amistad, además de las iglesias de Santa María y de San Juan Bautista.Unos pocos kilómteros al norte de Hervás, se localizan las poblaciones de Béjar y Candelario con buenas muestras de arquitectura popular serrana, mientras que al sur localizamos Plasencia con un rico patrimonio monumental.',
    description: 'El castaño es un árbol apreciado tanto por su madera como por su fruto. Bien es sabido que hasta la llegada de la patata y el maiz de América fue una de las principales fuentes energéticas en Europa. Dada esta importancia de recursos, es lógico que sea un árbol que se haya difundido desde antiguo por la mano del hombre. En España existe controversia sobre su grado de naturalidad en el territorio, si bien lo que es cierto es que es un árbol que se extiende por buena parte del territorio, especialmente por el oeste peninsular. El castañar gallego de Hervás es uno de los más extensos y mejor conservados de la mitad sur peninsular. Es además muy accesible y se localiza junto a uno bella población, lo que hace que aumente su interés.   Se trata de un castañar que ocupa unas 300 Ha, en el que encontramos grandes ejemplares, a pesar del aprovechamiento maderero al que ha sido sometido. Junto al castaño localizamos acebo y arec, además de rusco, zarza o helechos. También se localizan algunos ejemplares de melojo y destacar finalmente la presencia de un magnifico ejemplar de haya, el Haya del Cristo de la Salud, la única de gran porte que se localiza en Extremadura. Este espacio esta en trámite de convertirse en Paisaje Protegido.Destacar además el contiguo castañar del Duque y en la cercana población de Segura del Toro, 5 magníficos ejemplares de castaño, de grandes troncos y perfil rudo, que muestran una antigüedad de entre 500-700 años.',
    directions: 'La población de Hervás se encuentra bien comunicada por la A-66, junto a la que se localiza. Para acceder al castañar desde Hervás podemos tomar la carretera que asciende al puerto de Honduras (que comunica con el valle del Jerte) o bien la carretera a Gargantilla. Ambas se introducen en el castañar, si bien podemos tomar ruta a pie desde la propia población de Hervás.'
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
})

.factory('PathsFactory', function() {
    var paths = [
        {
            id: 0,
            forestId: 0,
            map: 'img/serrania-route-map.jpg',
            name: 'Entorno Tia Perra y Cerviñuelo',
            subtitle: 'Ruta larga',
            text:'De las posibles rutas para descubrir las singularidades botánicas de este espacio natural proponemos este recorrido que nos permite conocer una fabulosa formación de Arce de Montepellier, posiblemente la única presente en la península en la que esta especie es dominante. Se trata de una ruta fácil, que nos conduce hasta un entorno de gran belleza en el que junto a los ejemplares adehesados de Arce de gran tamaño y espectacularidad, podemos tambien observar ejemplares de quejigo igualmente magníficos en porte y tamaño así como los cortados de calizas tableadas que el paso del naciente río Trabaque han conformado. Planteamos la ruta de 2 formas posibles, bien de manera más corta, dirigiendonos directamente hacia la zona de la Dehesa, o bien de forma circular en un recorrido más extenso, que nos permite observar otras interesantisimas muestras del paisaje y botánica local, como la salto del agua del Trabaque. Para la ruta corta dejamos el coche poco antes del cruce con El Hosquillo. Seguimos por una pista ancha entre zonas de pinar abierto (podemos observar tanto pino laricio como pino silvestre). Tras poco más de 3 Km estaremos en la Muela, donde poder observar los primeros ejemplares. ',
            directions: 'Desde Cuenca por la CM-2110  y CUV-9113 dirección Las Majadas. Una vez en esta población seguimos dirección El Hosquillo.',
            length: 13,
            time: 4.5,
            gradient: 350,
            dificulty: 'Media',
            gpx: 'gpx/larga.gpx'
        },
        {
            id: 1,
            forestId: 0,
            map: 'img/serrania-route-map.jpg',
            name: 'Entorno Tia Perra y Cerviñuelo',
            subtitle: 'Ruta corta',
            text:'De las posibles rutas para descubrir las singularidades botánicas de este espacio natural proponemos este recorrido que nos permite conocer una fabulosa formación de Arce de Montepellier, posiblemente la única presente en la península en la que esta especie es dominante. Se trata de una ruta fácil, que nos conduce hasta un entorno de gran belleza en el que junto a los ejemplares adehesados de Arce de gran tamaño y espectacularidad, podemos tambien observar ejemplares de quejigo igualmente magníficos en porte y tamaño así como los cortados de calizas tableadas que el paso del naciente río Trabaque han conformado. Planteamos la ruta de 2 formas posibles, bien de manera más corta, dirigiendonos directamente hacia la zona de la Dehesa, o bien de forma circular en un recorrido más extenso, que nos permite observar otras interesantisimas muestras del paisaje y botánica local, como la salto del agua del Trabaque. Para la ruta corta dejamos el coche poco antes del cruce con El Hosquillo. Seguimos por una pista ancha entre zonas de pinar abierto (podemos observar tanto pino laricio como pino silvestre). Tras poco más de 3 Km estaremos en la Muela, donde poder observar los primeros ejemplares. ',
            directions: 'Desde Cuenca por la CM-2110  y CUV-9113 dirección Las Majadas. Una vez en esta población seguimos dirección El Hosquillo.',
            length: 10,
            time: 3,
            gradient: 80,
            dificulty: 'Media-baja',
            gpx: 'gpx/corta.gpx'
        },
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
