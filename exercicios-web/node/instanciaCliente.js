const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() //utilizando estes parenteses, estou invocando a função factory
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor, contadorA.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)

//A função factory serve para que se crie uma nova instancia, pois o node 
//guarda seus dados, em cache, sendo assim usando uma função factory
//ele cria uma nova instancia e não reutiliza os mesmos dados