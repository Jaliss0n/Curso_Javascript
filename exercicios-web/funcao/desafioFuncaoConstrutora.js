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

//Versão correta, sobre função construtora
function Pessoa2(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
} 

const p3 = new Pessoa2('Professor')
p3.falar()

// Minha Versão
function Pessoa1(nome){
   console.log(`Meu nome é ${nome}`)
}

const p2 = Pessoa1("Jalisson")


