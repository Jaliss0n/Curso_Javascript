//Factory simples
function criarPessoa(){  //Uma Função que retorna um obojeto, a partir da chamada da função
    return{
        nome: 'Ana',
        sobrenome:'Silva'
    }
}

console.log(criarPessoa())

function criarProduto(nome, preco) {
    return{
        nome: nome,
        preco: preco,
        desc: 0.2 * preco
    }
}

console.log(criarProduto("Iphone", 1300))