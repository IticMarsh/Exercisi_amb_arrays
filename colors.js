function gestionarColors() {
  // Crear un array de 6 colors
  var colors = ['verd', 'vermell', 'groc', 'blau', 'negre', 'blanc'];

  // Mostrar si tots els colors són menors que 'marró'
  var totsMenorsQueMarro = colors.every(function(color) {
    return color < 'marró';
  });

  mostrarResultat('Tots els colors són menors que \'marró\': ' + totsMenorsQueMarro);

  // Tornar els colors que són menors que 'marró'
  var colorsMenorsQueMarro = colors.filter(function(color) {
    return color < 'marró';
  });

  mostrarResultat('Colors menors que \'marró\': ' + colorsMenorsQueMarro.join(', '));

  // Tornar els darrers 2 colors
  var darrers2Colors = colors.slice(-2);

  mostrarResultat('Darrers 2 colors: ' + darrers2Colors.join(', '));

  // Afegir el color 'turquesa'
  colors.push('turquesa');

  mostrarResultat('Colors amb turquesa afegida: ' + colors.join(', '));

  // Eliminar el color 'verd'
  var indexVerd = colors.indexOf('verd');
  if (indexVerd !== -1) {
    colors.splice(indexVerd, 1);
  }

  mostrarResultat('Colors sense el verd: ' + colors.join(', '));
}

function mostrarResultat(text) {
  // Crea un element de paràgraf
  var paragraf = document.createElement('p');

  // Afegeix el text al paràgraf
  paragraf.textContent = text;

  // Afegeix el paràgraf al cos del document
  document.body.appendChild(paragraf);
}

gestionarColors();



  // Array inicial 
var supercotxes = ['Ferrari', 'Lamborghini', 'Bugatti', 'McLaren'];

// Mètode at() - Retorna un element indexat de l'array
var atResult = supercotxes.at(2);
mostrarResultat('at() - Element a la posició 2:', atResult);

// Mètode concat() - Uneix arrays i retorna un nou array amb els arrays units
var altresSupercotxes = ['Porsche', 'Aston Martin'];
var concatResult = supercotxes.concat(altresSupercotxes);
mostrarResultat('concat() - Arrays units:', concatResult);

// Mètode constructor - Retorna la funció que va crear el prototip de l'objecte Array
var constructorResult = supercotxes.constructor;
mostrarResultat('constructor() - Constructor de l\'objecte Array:', constructorResult);

// Mètode copyWithin() - Copia elements dins de l'array, des i cap a posicions especificades
var copyWithinResult = supercotxes.copyWithin(0, 2, 4);
mostrarResultat('copyWithin() - Array amb elements copiats:', copyWithinResult);

// Mètode entries() - Retorna un objecte d'iteració amb parells clau/valor de l'array
var entriesResult = supercotxes.entries();
mostrarResultat('entries() - Objecte d\'iteració:', entriesResult.next().value);

// Mètode every() - Comprova si cada element de l'array passa una prova
var everyResult = supercotxes.every(function (cotxe) {
  return cotxe.length > 5;
});
mostrarResultat('every() - Tots els cotxes tenen més de 5 lletres:', everyResult);

// Mètode fill() - Omple els elements de l'array amb un valor estàtic
var fillResult = supercotxes.fill('Tesla', 1, 3);
mostrarResultat('fill() - Array amb elements omplerts:', fillResult);

// filter() - Crea un nou array amb els elements que compleixen una condició
var filterResult = supercotxes.filter(function (cotxe) {
  return cotxe.length > 7;
});
mostrarResultat('filter() - Cotxes amb més de 7 lletres:', filterResult);

// find() - Retorna el valor del primer element que compleix una condició
var findResult = supercotxes.find(function (cotxe) {
  return cotxe.startsWith('L');
});
mostrarResultat('find() - Primer cotxe que comença amb "L":', findResult);

// findIndex() - Retorna l'índex del primer element que compleix una condició
var findIndexResult = supercotxes.findIndex(function (cotxe) {
  return cotxe.length < 8;
});
mostrarResultat('findIndex() - Índex del primer cotxe amb menys de 8 lletres:', findIndexResult);

// flat() - Concatena els elements de les sub-arrays
var nestedArray = [['Audi', 'BMW'], ['Mercedes', 'Porsche']];
var flatResult = nestedArray.flat();
mostrarResultat('flat() - Array aplanat:', flatResult);

// forEach() - Crida una funció per a cada element de l'array
mostrarResultat('forEach() - Noms dels cotxes:');
supercotxes.forEach(function (cotxe) {
  mostrarResultat(cotxe);
});

// from() - Crea un array a partir d'un objecte
var objectArray = Array.from({ length: 3 }, (_, index) => 'Car ' + (index + 1));
mostrarResultat('from() - Array creat des d\'un objecte:', objectArray);

// includes() - Comprova si un array conté un element específic
var includesResult = supercotxes.includes('Bugatti');
mostrarResultat('includes() - Conté Bugatti:', includesResult);

// indexOf() - Cerca un element a l'array i retorna la seva posició
var indexOfResult = supercotxes.indexOf('Lamborghini');
mostrarResultat('indexOf() - Posició de Lamborghini:', indexOfResult);

// isArray() - Comprova si un objecte és un array
var isArrayResult = Array.isArray(supercotxes);
mostrarResultat('isArray() - És un array:', isArrayResult);

// join() - Uneix tots els elements de l'array en una cadena
var joinResult = supercotxes.join(' - ');
mostrarResultat('join() - Noms dels cotxes units:', joinResult);

// keys() - Retorna un objecte d'iteració amb les claus de l'array
var keysResult = supercotxes.keys();
mostrarResultat('keys() - Objecte d\'iteració amb claus:', keysResult.next().value);

// lastIndexOf() - Cerca un element a l'array des del final i retorna la seva posició
var lastIndexOfResult = supercotxes.lastIndexOf('McLaren');
mostrarResultat('lastIndexOf() - Posició de McLaren des del final:', lastIndexOfResult);

// map() - Crea un nou array amb el resultat de cridar una funció per a cada element
var mapResult = supercotxes.map(function (cotxe) {
  return cotxe.toUpperCase();
});
mostrarResultat('map() - Noms dels cotxes en majúscules:', mapResult);

// some() - Comprova si algun element de l'array compleix una condició
var someResult = supercotxes.some(function (cotxe) {
  return cotxe.length > 10;
});
mostrarResultat('some() - Algun cotxe té més de 10 lletres:', someResult);

// sort() - Ordena els elements de l'array
var sortResult = supercotxes.sort();
mostrarResultat('sort() - Noms dels cotxes ordenats alfabèticament:', sortResult);

// slice() - Seleciona una part de l'array i retorna un nou array
var sliceResult = supercotxes.slice(1, 3);
mostrarResultat('slice() - Sub-array amb posicions 1 i 2:', sliceResult);

// toString() - Converteix l'array en una cadena de text
var toStringResult = supercotxes.toString();
mostrarResultat('toString() - Array convertit en cadena:', toStringResult);

// unshift() - Afegeix nous elements al principi de l'array i retorna la nova longitud
var unshiftResult = supercotxes.unshift('Acura', 'Lexus');
mostrarResultat('unshift() - Longitud de l\'array després de l\'addició:', unshiftResult);

// valueOf() - Retorna el valor primitiu de l'array
var valueOfResult = supercotxes.valueOf();
mostrarResultat('valueOf() - Valor primitiu de l\'array:', valueOfResult);
