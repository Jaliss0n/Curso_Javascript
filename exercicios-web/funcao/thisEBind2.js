function Pessoa() {
    this.idade = 0

    const self = this  // criando está constante, podemos garantir que o this, não variara
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)  //bind, neste momento amarrará a idade, com o "this", de Pessoa
}

new Pessoa