function rand({min = 0, max = 1000}) {          // entre os (), está o operador destructuring {}.
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({ max: 50, min:40}))
console.log(rand({min: 955}))
console.log(rand({}))