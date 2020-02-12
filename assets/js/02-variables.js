// variables

// var edad1 = 9;
// var edad2 = 12;
//
// if(edad1>edad2){
//   // ejecuta si se cumple la afirmación
//   console.log (edad1+' es mayor que '+edad2)
// }else{
//   // si no cumple la afirmación
//   console.log ('no cumple con la afirmación')
// }
//
//
//
// OERADORES RELACIONALES
// mayor >
// menor <
// mayor igual >=
// menor igual <=
// igual ==
// identico ===
// distinto !=


var edad = 18;
var nombre= 'Alejandro Fuentes';

if(edad >= 18){
  console.log(nombre+' tiene '+edad+ ' por lo tanto es mayor de edad ')
// if anidado
  if(edad<= 33){
    console.log(' todavía es millenial ');
  }else if(edad >= 70){
    console.log(' eres anciano ');
  } else {
    console.log(' ya no eres millenial');
  }
} else {
  console.log(nombre+ ' tiene '+ edad + ' eres menor de edad ' )
}
