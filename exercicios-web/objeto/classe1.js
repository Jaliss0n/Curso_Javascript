class Lancamento {
    constructor(nome = 'Generico', valor = 0) {   // parametros da funcao construtora
        this.nome = nome
        this.valor = valor
      
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) { //metodo
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
           valorConsolidado += l.valor 
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('salario', 45000)
const constaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, constaDeLuz)
console.log(contas.sumario())  