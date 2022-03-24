require('./global')

console.log(global.MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'  //o objeto foi congelado
console.log(MinhaApp.nome)