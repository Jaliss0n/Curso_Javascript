let numero = 1
{
    let numero = 2    // let ALEM DE POSSUIR ESCOPO DE GLOBAL e FUNCAO, também possui escopo de bloco difernte de var
    console.log('dentro=', numero)
}

console.log('fora =', numero)