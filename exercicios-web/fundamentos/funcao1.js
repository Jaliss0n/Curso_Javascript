// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 5, 6, 8)
imprimirSoma()

//Funcao com retorno

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 4))
console.log(soma(2)) // retorna 3 pois o parametro b foi tratado na função como padrao 1

console.log(soma())