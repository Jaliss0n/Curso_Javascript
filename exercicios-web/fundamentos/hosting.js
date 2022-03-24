console.log('a =', a)
var a = 2            // o hositng serve para jogar declarações de VARIAVEIS para cima, não funciona com let.
console.log('a =',a)

function teste() {

    console.log('a =', a)
    var a = 2
    console.log('a =',a)

}

teste()

console.log('b =', b)
let b = 2
console.log('b =',b)