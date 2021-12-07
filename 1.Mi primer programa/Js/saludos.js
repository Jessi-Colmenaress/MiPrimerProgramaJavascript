let nombre;
let opcion;

nombre = prompt("hola cual es tu nombre?:");
opcion = prompt("te gustan los gatitos?, escribe 'si' o 'no'"); // si Si SI

console.log(opcion.toLowerCase()=='si');
//condicion booleana se refiere a dos opciones VERDADERA o falso ( true o false)

//no == si es falso (false)
//si == si es verdadero (true)

if( opcion.toLowerCase() == 'si') {
  // si la condicion es verdadera
  alert('hola' + nombre + 'a mi tambien me gustan los gatitos')
}else{
  //si la candicion es falsa 
  alert('hola' + nombre + 'con lo que has escrito, veo que no te gustan los gatitos');
}






// 'c' 'a' 'c' 'mi nombre'
//console.log("hola mundo");
//console.log("enlace correcto!!");
// var, lef y constante