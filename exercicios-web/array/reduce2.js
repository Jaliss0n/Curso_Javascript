const alunos = [
    {nome: 'Jalisson', nota: 7.3, bolsista : true },
    {nome: 'Mario', nota: 9.2, bolsista : false },
    {nome: 'Pedro', nota: 9.8, bolsista : true },
    {nome: 'Ana', nota: 8.7, bolsista : false },
]

const bolsitas = bol => bol.bolsista

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(e => e.bolsista).reduce(algumBolsista))
/*
const resultado = bolsitas.reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    if(acumulador == atual) {
        console.log("todos os alunos são bolsitas")
    } else if (acumulador != atual) {
        console.log("Nem todos os alunos são Bolsitas")
    }
})



console.log(resultado)*/