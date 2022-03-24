//Armazendando uma funcao em uma variavel
const imprimirSoma = function (a, b) {   // funcão anonima
    console.log( a + b)
}

imprimirSoma(2 , 3)

//Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implícito
const subtracao = (a, b) => a - b  // quando a função não possui o "{}", significa que ela terá uma unica linha, é a mesma sera retornada automaticamente
console.log(subtracao (2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')

