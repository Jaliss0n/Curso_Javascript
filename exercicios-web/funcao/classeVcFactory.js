class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() { // metodo
        console.log(`Meu nome é ${this.nome}`)// sempre usar this, para acessar o atributo que é publico
    }
}

const p1 = new Pessoa('João')
p1.falar()



const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()