let valor // não inicializada

console.log(valor)

valor = null
console.log(valor) // ausencia de valor
//console.log(valor.toString()) // erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preco/ melhor forma de zerar uma variavel
console.log(!!produto.preco)
console.log(produto)