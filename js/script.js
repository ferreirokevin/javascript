
let añodenacimiento = prompt("¿En que año has nacido?");
let numeroDecimal = mundialesvividos();
let resultadoRedondeado = Math.floor(numeroDecimal);

function mundialesvividos (){
  return ((2023-añodenacimiento)/4)
}
alert (resultadoRedondeado) ("tu has vivido " + mundialesvividos() + " mundiales" )


/*if (añodenacimiento <= 1930) {
  alert("tu has vivido 22 mundiales");
} else if (añodenacimiento > 1930 && añodenacimiento <= 1934) {
  alert("tu has vivido 21 mundiales");
} else if (añodenacimiento > 1934 && añodenacimiento <= 1938) {26
  alert("tu has vivido 20 mundiales");
} else if (añodenacimiento > 1938 && añodenacimiento <= 1950) {
  alert("tu has vivido 19 mundiales");
} else if (añodenacimiento > 1950 && añodenacimiento <= 1954) {
  alert("tu has vivido 18 mundiales");
} else if (añodenacimiento > 1954 && añodenacimiento <= 1958) {
  alert("tu has vivido 17 mundiales");
} else if (añodenacimiento > 1958 && añodenacimiento <= 1962) {
  alert("tu has vivido 16 mundiales");
} else if (añodenacimiento > 1962 && añodenacimiento <= 1966) {
  alert("tu has vivido 15 mundiales");
} else if (añodenacimiento > 1966 && añodenacimiento <= 1970) {
  alert("tu has vivido 14 mundiales");
} else if (añodenacimiento > 1970 && añodenacimiento <= 1974) {
  alert("tu has vivido 13 mundiales");
} else if (añodenacimiento > 1974 && añodenacimiento <= 1978) {
  alert("tu has vivido 12 mundiales");
} else if (añodenacimiento > 1978 && añodenacimiento <= 1982) {
  alert("tu has vivido 11 mundiales");
} else if (añodenacimiento > 1982 && añodenacimiento <= 1986) {
  alert("tu has vivido 10 mundiales");
} else if (añodenacimiento > 1986 && añodenacimiento <= 1990) {
  alert("tu has vivido 9 mundiales");
} else if (añodenacimiento > 1990 && añodenacimiento <= 1994) {
  alert("tu has vivido 8 mundiales");
} else if (añodenacimiento > 1994 && añodenacimiento <= 1998) {
  alert("tu has vivido 7 mundiales");
} else if (añodenacimiento > 1998 && añodenacimiento <= 2002) {
  alert("tu has vivido 6 mundiales");
} else if (añodenacimiento > 2002 && añodenacimiento <= 2006) {
  alert("tu has vivido 5 mundiales");
} else if (añodenacimiento > 2006 && añodenacimiento <= 2010) {
  alert("tu has vivido 4 mundiales");
} else if (añodenacimiento > 2010 && añodenacimiento <= 2014) {
  alert("tu has vivido 3 mundiales");
} else if (añodenacimiento > 2014 && añodenacimiento <= 2018) {
  alert("tu has vivido 2 mundiales");
} else if (añodenacimiento > 2018 && añodenacimiento <= 2022) {
  alert("tu has vivido 1 mundiales");
} else {
  alert("tu no has vivido ningun mundial");
}
*/
