console.log(soma(3, 4))

//function declaration,  funcoes declaradas desta forma são carregadas primeiro pelo interpretador, garantindo que a função sera executando mesmo sem ter sido declarada anteriormente.

function soma(x , y) {
    return x + y
}

//funtion expression
const sub = function(x, y) {
    return x - y
}
console.log(sub(3, 4))


// named function expression
const mult = function mult(x , y) {
    return x * y
}

console.log(mult(3, 4))