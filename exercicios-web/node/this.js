console.log(this === global)
console.log(this === module)

console.log(this === module.exports) // this dentro aponta para module.exports dentro de um modulo
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma funcão...')
    console.log(this === exports)
    console.log(this === exports.exports)
    console.log(this === global) //this dentro de uma função aponta para global

    
}