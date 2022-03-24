const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

//usar o ".use", significa, que este metodo será chamado para qualquer requisição, todas que forem feitas, passarão primeiro por está
app.use(bodyParser.urlencoded({extended: true}))//o bodyparser está sendo usado, para transformar todas as requisiçoes sque usarem o padrao de urlencoded, serem transformadas em objetos, e assim serem reconhecidas pelo codigo

app.get('/produtos', (req, res, next) => { // o metodo send, envia os dados já em JSON
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => { // o "params", serve para pegar o parametro que foi passado na url
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //JSON
})

app.listen(porta, ()=> {
    console.log(`Servidor executando na porta ${porta}`)
})