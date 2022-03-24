let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 *a
}

dobro = a => 2 * a  //retorno implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Ola'
ola = _ => 'Ola' //possui um parametro
console.log(ola())