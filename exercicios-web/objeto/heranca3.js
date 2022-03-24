const pai = { nome:'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) // criou um OBJETO novo tendo pai como prototipo
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia',
        writable: false,
        enumerable: true
    }
})

console.log(filha2.nome)
filha2.nome = 'Carla'// atributo não ode ser mudado por conta do writable
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? //este atributo sever para verificar ce a propriedade pertence ao proprio objeto, caso sim retorna true
        console.log(key) : console.log(`Por herança ${key}`)
}