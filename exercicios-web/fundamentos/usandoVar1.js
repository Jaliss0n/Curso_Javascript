{ 
    { 
        { 
            { 
                var sera = 'Será???'   //mesmo estando dentro de blocos de codigo, a variavel se mantem GLOBAL, e pode ser vista em todo o programa
                console.log(sera)      //como acontece na linha 13

            } 
        } 
    } 
}

console.log(sera)

function teste() {
    var local = 123   //está variavel so pode ser vista dentro desta função pois e uma variavel local.
    console.log(local)
}

teste()
