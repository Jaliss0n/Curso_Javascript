const fs = require('fs')
const path = require('path') // para a forma do prof foi necessario.

const caminho = __dirname + '/dados.txt'

const leitura = (caminho) => {
    const conteudo = fs.readFileSync(caminho, 'utf-8')
    return conteudo
}

const retorna = (conteudo) => {
    return new Promise(function(resolve){
        resolve(conteudo)
    })
}

retorna(leitura(caminho))
    .then(console.log)

// Maneira do prof
/*function lerArquivo(caminhoo) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

const caminhoo = path.join(__dirname, 'dados.txt')

lerArquivo(caminhoo)
    .then(conteudoo => conteudoo.split('\n'))*/