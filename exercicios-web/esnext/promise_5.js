function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try{
            con.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }

        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.9)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro esp. ${err}`)
    )
    .then(()=> console.log('Quase Fim'))
    .catch(err => console.log(`Erro Geral: ${err}`)) //para tratar erros, costumase usar o mesmo no fim do encadeamento
    .then(()=> console.log('Fim'))