function soma() {
    let soma = 0
    for (i in arguments) {  // usando o arguments e possivel pegar qualquer parametro que seja passado na função, mesmo a mesma nao tendo sido passada anteriormente
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 2))
console.log(soma(1, 2, 3, 4,5 ,6))
console.log(soma('a','b','c'))

