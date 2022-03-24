// Object.preventExtensions com este e possivelalterar aributos existentes e deletar os mesmos, porem não adicionar outros
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal com este não e possivel adicionar ou deletar atributos
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa) 
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freze = selado + valores constantes