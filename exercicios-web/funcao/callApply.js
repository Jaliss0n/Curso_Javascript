function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco  // não e necessario digitar novamednte a função pois o javascript e capaz de associar a mesma.
}

global.preco = 20
global.desc = 0.1 

console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 49990,
    desc: 0.20
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
//diferenças entre call e aplly
//call
console.log(getPreco.call(carro, 0.17, '$'))

console.log(getPreco.call(global, 0.17, '$'))

//appy, neste e necessario passar o contextto, que neste caso sera "carro", e depois os parametros em array
console.log(getPreco.apply(carro, [0.17, '$']))
console.log(getPreco.apply(global, [0.17, '$']))