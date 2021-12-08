// Ejercicio 1
// Escribir una función que reciba una matriz de numéricos como parámetro, 
//y devuelva otra función que espere como parámetro una función que pueda 
//hacer algo con la suma de la matriz original de enteros. Los números pares > 20 deben ser tratados como un 20.

// La solución y ejemplo de código debe ser algo más o menos así: sum([1,2,3])(result => console.log(result))

let array = [1,21,3, 24]
let callback = (array) =>{
    return array
}
const Ejercicio1 =  (array , callback) => {
    const Retorno = (array, callback) => {
        let arrayButBetter = array.map( (number) => number % 2 === 0 && number > 20 ?  20 : number)
        let acum = arrayButBetter.reduce(function(a, b){
            return a + b
        });
        return callback(acum)
    }
   return Retorno(array ,callback)
}
//esta es la forma que se me ocurrio leyemdo el enunciado 
console.log('soy ejercicio',Ejercicio1(array ,callback))


