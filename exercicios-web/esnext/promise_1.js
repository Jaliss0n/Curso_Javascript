let a = 1
console.log(a)

function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

let p = new Promise(function (resolve) {
    resolve(['Ana','Bia','Carlos','Rita'])  // para pegar mais de um valor usando promisse, e necessario passar os argumentos como array ou objeto
})

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letra => letra.toLowerCase())
    .then(console.log)
