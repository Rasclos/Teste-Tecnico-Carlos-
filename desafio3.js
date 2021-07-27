/*
3 )
Dada uma matriz de inteiros, construa um algoritmo que calcule a resultante da matriz 
ou retorne um erro caso a matriz não seja calculável. 
(OBS: Realizar no GITHUB).
*/

function calcularResultante(matriz) {
    try {
        let valor1 = matriz[0][0] * matriz[0][0] 
        let valor2 = matriz[0][1] * matriz[1][0]
        let valor3 = matriz[1][0] * matriz[0][1]
        let valor4 = matriz[1][1] * matriz[1][1]
    
        matrizResultante = [[valor1, valor2], [valor3, valor4]]
        return matrizResultante
    } catch(erro) {
        return(erro)
    }
}

let matrizA = [[1, 2], [4, 5]]
let matrizB = [[3, 4], [5, 6]]
let matrizC = [[7, 8], [9, 10]]

console.log(calcularResultante(matrizA))
console.log(calcularResultante(matrizB))
console.log(calcularResultante(matrizC))