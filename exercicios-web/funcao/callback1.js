const fabricantes = ['Mercedes','Audi','BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)  //forEach serve de função callback, serve para chamar a função de voltA, e atribuir ao indice


fabricantes.forEach(fabricante => console.log(fabricante))
/*
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})  Está e uma outra maneira de chamar a mesma função anonima */

//imprimir(fabricantes, 0)