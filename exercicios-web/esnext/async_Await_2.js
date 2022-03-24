function gerarNumerosEntre(min,max, numerosProibidos) {
    if(min > max) {
        [max, min] = [min,max]
    }

    return new Promise((resolve,reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)) {
            reject('Numero repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtddeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtddeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros

    } catch (e) {
        if(tentativas > 10) {
            throw 'Não deu Certo !'
        } else {
            gerarMegaSena(qtddeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(8)
    .then(console.log)  // para executar uma função assincrona sempre e necessario chamar o then
    .catch(console.log)

gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log)
