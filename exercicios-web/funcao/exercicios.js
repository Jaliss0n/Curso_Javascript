//ex1
function ex_1(n1, n2){
    console.log(n1 + n2)
    console.log(n1 - n2)
    console.log(n1 * n2)
    console.log(n1 / n2)
}

ex_1(10,20)

//ex2
ex_2 = (ld1, ld2, ld3) => {
    if (ld1 == ld2 && ld1 == ld3 && ld2 == ld3) {
        console.log("Este triangulo é equilátero")
    } else if(ld1 == ld2 || ld1 == ld3 || ld2 == ld3 ) {
        console.log('Este triangulo é isoceles')
    } else if (ld1 != ld2 != ld3){
        console.log('Este triangulo é Escaleno')
    }
}

ex_2(2,1,4)

//ex3
ex_3 = (base, expoente) => {
    console.log(base*expoente)

}

ex_3(10,2)

//ex4
ex_4 = (dividendo, divisor) => {
    console.log(`O resultado da divisão é ${dividendo/divisor}, e o resto ${dividendo%divisor}`)
}

ex_4(21,2)

//ex5
ex_5 = (valor = 0.30000000000000004) => {
    console.log(valor.toFixed(2))
}

ex_5()
ex_5(2.312442342543)

//ex8

const alunos = [10,20,35,38,60,70,90,100]

ex_9 = (alunos) => {
}
