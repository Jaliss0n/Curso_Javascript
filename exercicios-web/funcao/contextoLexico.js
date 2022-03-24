const valor = 'Global'

function minhaFuncao() { // por conta do contexto lexico, a função pegara o valor global, pois esta mais proximo do lugar em que a mesma foi escrita
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()