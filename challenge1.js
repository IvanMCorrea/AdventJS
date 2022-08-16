// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. 
// Haz una función que devuelva una lista con todas las ovejas que sean de color 
// rojo y que además su nombre contenga tanto las letras n Y a, sin importar 
// el orden, las mayúsculas o espacios.
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]
export default function contarOvejas(ovejas) {
  const filtrarColor = (obj) => {
    if (
      'color' in obj &&
      typeof obj.color === 'string' &&
      obj.color === 'rojo'
    ) {
      return true;
    } else {
      return false;
    }
  };
  const filtrarLetras = (array) => {
    const arrFiltrado = [];
    array.forEach((element) => {
      console.log (element.name)
      if (
        element.name.toLowerCase().includes('a') &&
        element.name.toLowerCase().includes('n')
      ) {
        arrFiltrado.push(element);
      }
    });
    return arrFiltrado;
  };
  const arrFiltradoColor = ovejas.filter(filtrarColor);
  const arrFiltradoLetras = filtrarLetras(arrFiltradoColor);
  ovejas = [...arrFiltradoLetras];
  console.log ("ovejas",ovejas)
  return ovejas;
  
// imprimir resultado  
const ovejasFiltradas = contarOvejas(ovejas)
console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
