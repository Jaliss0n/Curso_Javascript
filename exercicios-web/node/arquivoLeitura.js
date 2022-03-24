const fs = require('fs') // modulo filesystem

//__dirname, REPRESENTA O DIRETORIO ATUAL NO NODE, e está sempre disponivel no mesmo
const caminho =  __dirname + '/arquivo.json'

//sincrono, forma não muito recomendada, pois le o arquivo na hora
const conteudo = fs.readFileSync(caminho, 'utf-8' )
console.log(conteudo)


//assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})


const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})